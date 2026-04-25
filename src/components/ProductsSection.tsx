import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { ShopifyProduct, fetchProducts, createBuyNowCheckout, openCheckoutUrl, isValidShopifyCheckoutUrl } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingCart, Package, ExternalLink, Loader2, Zap, MessageCircle, AlertCircle } from "lucide-react";
import { AmazonIcon } from "@/components/icons/AmazonIcon";
import { COMPANY_INFO } from "@/lib/constants";
import { toast } from "sonner";

export function ProductsSection() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [buyingProductId, setBuyingProductId] = useState<string | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProducts(12);
        setProducts(data);
        if (data.length === 0) {
          console.warn('[ProductsSection] Nenhum produto retornado pela API.');
        }
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Erro desconhecido';
        console.error('[ProductsSection] Falha ao carregar produtos:', err);
        setError(message);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });

    toast.success("Produto adicionado ao carrinho!", {
      position: "top-center",
    });
  };

  const handleBuyNow = async (product: ShopifyProduct) => {
    const variant = product.node.variants.edges[0]?.node;
    if (!variant) return;

    setBuyingProductId(product.node.id);
    try {
      const checkoutUrl = await createBuyNowCheckout(variant.id, 1);
      
      console.log('[ProductsSection] Checkout URL gerada:', checkoutUrl);
      
      // Valida URL antes de abrir
      if (!isValidShopifyCheckoutUrl(checkoutUrl)) {
        toast.error("URL de checkout inválida", {
          description: `URL recebida: ${checkoutUrl}`,
          position: "top-center",
          duration: 10000,
        });
        return;
      }
      
      // Abre com fallback para popup bloqueado
      const result = openCheckoutUrl(checkoutUrl);
      
      if (!result.success) {
        toast.error("Erro ao abrir checkout", {
          description: result.error,
          position: "top-center",
        });
      }
    } catch (error) {
      console.error('[ProductsSection] Erro ao criar checkout:', error);
      toast.error("Erro ao criar checkout", {
        description: error instanceof Error ? error.message : "Erro desconhecido",
        position: "top-center",
      });
    } finally {
      setBuyingProductId(null);
    }
  };

  return (
    <section id="produtos" className="py-20 bg-gradient-surface" aria-labelledby="produtos-titulo">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider" aria-hidden="true">
            Nossos Produtos
          </span>
          <h2 id="produtos-titulo" className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Produtos em <span className="text-gradient">destaque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Qualidade premium com preços acessíveis. Escolha o modelo ideal para você.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" aria-busy="true" aria-label="Carregando produtos">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl overflow-hidden shadow-card animate-pulse"
                aria-hidden="true"
              >
                <div className="aspect-square bg-muted" />
                <div className="p-4 space-y-3">
                  <div className="h-4 bg-muted rounded w-3/4" />
                  <div className="h-3 bg-muted rounded w-1/2" />
                  <div className="h-8 bg-muted rounded mt-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="max-w-2xl mx-auto">
            <Alert variant="destructive">
              <AlertCircle className="h-5 w-5" />
              <AlertTitle>Erro ao carregar produtos da Shopify</AlertTitle>
              <AlertDescription className="mt-2 space-y-2">
                <p className="font-mono text-xs break-words">{error}</p>
                <p className="text-sm">
                  Abra o console do navegador (F12) para ver os logs detalhados começando com <code className="font-mono">[Shopify API]</code>.
                </p>
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && products.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-muted flex items-center justify-center">
              <Package className="w-10 h-10 text-muted-foreground" aria-hidden="true" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              Nenhum produto disponível
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Estamos preparando nosso catálogo. Em breve você encontrará as melhores piscinas e banheiras aqui!
            </p>
            <Button variant="hero" className="min-h-[44px]" asChild>
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp - abre em nova aba"
              >
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" role="list" aria-label="Lista de produtos">
            {products.map((product, index) => {
              const firstImage = product.node.images.edges[0]?.node;
              const price = product.node.priceRange.minVariantPrice;
              const amazonLink = product.node.amazonLink?.value;
              const isBuying = buyingProductId === product.node.id;

              return (
                <article
                  key={product.node.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  role="listitem"
                >
                  {/* Image */}
                  <Link to={`/produto/${product.node.handle}`}>
                    <div className="aspect-square bg-muted relative overflow-hidden">
                      {firstImage ? (
                        <img
                          src={firstImage.url}
                          alt={firstImage.altText || product.node.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                          width={400}
                          height={400}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Package className="w-12 h-12 text-muted-foreground" aria-hidden="true" />
                        </div>
                      )}
                    </div>
                  </Link>

                  {/* Content */}
                  <div className="p-4">
                    <Link to={`/produto/${product.node.handle}`}>
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {product.node.title}
                      </h3>
                    </Link>

                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {product.node.description}
                    </p>

                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-gradient">
                        R$ {parseFloat(price.amount).toFixed(2)}
                      </span>
                    </div>

                    {/* Botões de Ação */}
                    <div className="space-y-2">
                      {/* Linha 1: Adicionar + Compre Agora */}
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 min-h-[44px]"
                          onClick={() => handleAddToCart(product)}
                          aria-label={`Adicionar ${product.node.title} ao carrinho`}
                        >
                          <ShoppingCart className="w-4 h-4 mr-1" aria-hidden="true" />
                          Adicionar
                        </Button>
                        {amazonLink ? (
                          <Button
                            variant="hero"
                            size="sm"
                            className="flex-1 min-h-[44px] group/btn"
                            asChild
                          >
                            <a
                              href={amazonLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Comprar ${product.node.title} na Amazon - abre em nova aba`}
                            >
                              <Zap className="w-4 h-4 mr-1 group-hover/btn:animate-pulse" aria-hidden="true" />
                              Comprar
                            </a>
                          </Button>
                        ) : (
                          <Button
                            variant="hero"
                            size="sm"
                            className="flex-1 min-h-[44px] group/btn"
                            onClick={() => handleBuyNow(product)}
                            disabled={isBuying}
                            aria-label={`Comprar ${product.node.title} agora`}
                          >
                            {isBuying ? (
                              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
                            ) : (
                              <>
                                <Zap className="w-4 h-4 mr-1 group-hover/btn:animate-pulse" aria-hidden="true" />
                                Comprar
                              </>
                            )}
                          </Button>
                        )}
                      </div>

                      {/* Linha 2: Ver Na Amazon (apenas se tiver link) */}
                      {amazonLink && (
                        <Button
                          variant="amazon"
                          size="sm"
                          className="w-full min-h-[44px]"
                          asChild
                        >
                          <a
                            href={amazonLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ver ${product.node.title} na Amazon - abre em nova aba`}
                          >
                            <AmazonIcon className="w-4 h-4 mr-2" />
                            Ver Na Amazon
                            <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
