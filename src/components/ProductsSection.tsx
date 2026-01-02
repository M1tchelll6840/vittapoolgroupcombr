import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShopifyProduct, fetchProducts } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingCart, Package, ArrowRight } from "lucide-react";
import { toast } from "sonner";

export function ProductsSection() {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);
  const setCartOpen = useCartStore((state) => state.setOpen);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const data = await fetchProducts(12);
      setProducts(data);
      setLoading(false);
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

  return (
    <section id="produtos" className="py-20 bg-gradient-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Nossos Produtos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Produtos em <span className="text-gradient">destaque</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Qualidade premium com preços acessíveis. Escolha o modelo ideal para você.
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-card rounded-2xl overflow-hidden shadow-card animate-pulse"
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

        {/* Empty State */}
        {!loading && products.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-muted flex items-center justify-center">
              <Package className="w-10 h-10 text-muted-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">
              Nenhum produto disponível
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Estamos preparando nosso catálogo. Em breve você encontrará as melhores piscinas e banheiras aqui!
            </p>
            <Button variant="hero" asChild>
              <a href="#contato">Solicitar Catálogo</a>
            </Button>
          </div>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => {
              const firstImage = product.node.images.edges[0]?.node;
              const price = product.node.priceRange.minVariantPrice;

              return (
                <div
                  key={product.node.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Image */}
                  <Link to={`/produto/${product.node.handle}`}>
                    <div className="aspect-square bg-muted relative overflow-hidden">
                      {firstImage ? (
                        <img
                          src={firstImage.url}
                          alt={firstImage.altText || product.node.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Package className="w-12 h-12 text-muted-foreground" />
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

                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-gradient">
                        R$ {parseFloat(price.amount).toFixed(2)}
                      </span>
                    </div>

                    <Button
                      variant="water"
                      size="sm"
                      className="w-full mt-3"
                      onClick={() => handleAddToCart(product)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Adicionar
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
