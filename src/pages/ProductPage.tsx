import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { fetchProductByHandle, createBuyNowCheckout, openCheckoutUrl, isValidShopifyCheckoutUrl } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { COMPANY_INFO } from "@/lib/constants";
import { ShoppingCart, ArrowLeft, Package, Minus, Plus, Truck, Shield, RotateCcw, ExternalLink, Loader2, AlertTriangle, CheckCircle, Copy, Zap, MessageCircle, CreditCard, Lock } from "lucide-react";
import { AmazonIcon } from "@/components/icons/AmazonIcon";
import { toast } from "sonner";

export default function ProductPage() {
  const { handle } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isBuying, setIsBuying] = useState(false);
  const [showDebugModal, setShowDebugModal] = useState(false);
  const [debugUrl, setDebugUrl] = useState<string | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    async function loadProduct() {
      if (!handle) return;
      setLoading(true);
      const data = await fetchProductByHandle(handle);
      setProduct(data);
      if (data?.variants?.edges?.[0]) {
        setSelectedVariant(data.variants.edges[0].node);
      }
      setLoading(false);
    }
    loadProduct();
  }, [handle]);

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;
    addItem({
      product: { node: product },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity,
      selectedOptions: selectedVariant.selectedOptions || [],
    });
    toast.success("Produto adicionado ao carrinho!", { position: "top-center" });
  };

  const handleCopyUrl = () => {
    if (debugUrl) {
      navigator.clipboard.writeText(debugUrl);
      toast.success("URL copiada!", { position: "top-center" });
    }
  };

  const handleOpenUrlManually = () => {
    if (debugUrl) {
      window.location.href = debugUrl;
    }
  };

  const handleBuyNow = async () => {
    if (!selectedVariant) return;
    setIsBuying(true);
    setDebugUrl(null);
    setCheckoutError(null);
    
    try {
      const checkoutUrl = await createBuyNowCheckout(selectedVariant.id, quantity);
      
      console.log('[ProductPage] Checkout URL gerada:', checkoutUrl);
      setDebugUrl(checkoutUrl);
      
      // Valida URL antes de abrir
      if (!isValidShopifyCheckoutUrl(checkoutUrl)) {
        setCheckoutError(`URL inválida: ${checkoutUrl}`);
        setShowDebugModal(true);
        return;
      }
      
      // Abre com fallback para popup bloqueado
      const result = openCheckoutUrl(checkoutUrl);
      
      if (result.success) {
        setShowDebugModal(true);
      } else {
        setCheckoutError(result.error || "Erro desconhecido");
        setShowDebugModal(true);
      }
    } catch (error) {
      console.error('[ProductPage] Erro ao criar checkout:', error);
      const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
      setCheckoutError(errorMessage);
      setShowDebugModal(true);
    } finally {
      setIsBuying(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 pt-32 pb-20">
          <div className="animate-pulse grid lg:grid-cols-2 gap-12">
            <div className="aspect-square bg-muted rounded-2xl" />
            <div className="space-y-4">
              <div className="h-8 bg-muted rounded w-3/4" />
              <div className="h-4 bg-muted rounded w-1/2" />
              <div className="h-24 bg-muted rounded mt-8" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
          <h1 className="font-display text-2xl font-bold mb-2">Produto não encontrado</h1>
          <Button variant="hero" asChild>
            <Link to="/">Voltar à loja</Link>
          </Button>
        </div>
      </div>
    );
  }

  const images = product.images?.edges || [];
  const price = selectedVariant?.price || product.priceRange.minVariantPrice;
  const amazonLink = product.amazonLink?.value;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="w-4 h-4" /> Voltar
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden mb-4">
              {images[selectedImage]?.node ? (
                <img src={images[selectedImage].node.url} alt={product.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center"><Package className="w-16 h-16 text-muted-foreground" /></div>
              )}
            </div>
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((img: any, i: number) => (
                  <button key={i} onClick={() => setSelectedImage(i)} className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${i === selectedImage ? "border-primary" : "border-transparent"}`}>
                    <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="font-display text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-3xl font-bold text-gradient mb-6">R$ {parseFloat(price.amount).toFixed(2)}</p>
            <p className="text-muted-foreground mb-8">{product.description}</p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium">Quantidade:</span>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="w-4 h-4" /></Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}><Plus className="w-4 h-4" /></Button>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="space-y-3 mb-8">
              {/* Botão Principal: WhatsApp (para produtos de alto valor) */}
              <Button 
                variant="default" 
                size="xl" 
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white min-h-[56px] text-base font-semibold shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a 
                  href={`${COMPANY_INFO.whatsappLink}?text=Olá! Tenho interesse no produto: ${encodeURIComponent(product.title)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com Especialista
                </a>
              </Button>

              {/* Linha 2: Adicionar + Compre Agora */}
              <div className="flex gap-3">
                <Button variant="outline" size="xl" className="flex-1 min-h-[52px]" onClick={handleAddToCart}>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Adicionar
                </Button>
                {amazonLink ? (
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="flex-1 min-h-[52px] relative overflow-hidden group/btn"
                    asChild
                  >
                    <a
                      href={amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Zap className="w-5 h-5 mr-2 group-hover/btn:animate-pulse" />
                      Compre Agora
                    </a>
                  </Button>
                ) : (
                  <Button 
                    variant="hero" 
                    size="xl" 
                    className="flex-1 min-h-[52px] relative overflow-hidden group/btn"
                    onClick={handleBuyNow} 
                    disabled={isBuying}
                  >
                    {isBuying ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Processando...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 mr-2 group-hover/btn:animate-pulse" />
                        Compre Agora
                      </>
                    )}
                  </Button>
                )}
              </div>

              {/* Linha 3: Ver Na Amazon (apenas se tiver link) */}
              {amazonLink && (
                <Button variant="amazon" size="xl" className="w-full min-h-[52px]" asChild>
                  <a href={amazonLink} target="_blank" rel="noopener noreferrer">
                    <AmazonIcon className="w-5 h-5 mr-2" />
                    Ver Na Amazon
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              )}

              {/* Badge de Pagamento Seguro */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Lock className="w-3.5 h-3.5 text-green-600" />
                  <span>Compra 100% Segura</span>
                </div>
                <div className="h-4 w-px bg-border" />
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Pix • Cartão • PayPal</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-secondary/50 rounded-xl">
                <Truck className="w-5 h-5 mx-auto mb-2 text-primary" />
                <span className="text-xs font-medium">Frete Grátis</span>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-xl">
                <Shield className="w-5 h-5 mx-auto mb-2 text-primary" />
                <span className="text-xs font-medium">Garantia 2 Anos</span>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-xl">
                <RotateCcw className="w-5 h-5 mx-auto mb-2 text-primary" />
                <span className="text-xs font-medium">Troca Fácil</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Modal de Debug */}
      <Dialog open={showDebugModal} onOpenChange={setShowDebugModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {checkoutError ? (
                <>
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  Erro no Checkout
                </>
              ) : (
                <>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Checkout Criado
                </>
              )}
            </DialogTitle>
            <DialogDescription>
              {checkoutError 
                ? "Ocorreu um erro ao processar o checkout."
                : "O checkout foi criado. Se não abriu automaticamente, clique abaixo."
              }
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {checkoutError && (
              <div className="p-3 bg-destructive/10 rounded-lg text-sm text-destructive">
                {checkoutError}
              </div>
            )}

            {debugUrl && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">URL gerada:</span>
                  <Button variant="ghost" size="sm" className="h-7 px-2" onClick={handleCopyUrl}>
                    <Copy className="w-3 h-3 mr-1" />
                    Copiar
                  </Button>
                </div>
                <div className="p-2 bg-muted rounded text-xs break-all max-h-24 overflow-y-auto">
                  {debugUrl}
                </div>
              </div>
            )}

            <div className="flex flex-col gap-2">
              {debugUrl && (
                <Button onClick={handleOpenUrlManually} variant="hero" className="w-full">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Abrir Checkout Manualmente
                </Button>
              )}
              <Button 
                onClick={() => setShowDebugModal(false)} 
                variant="outline" 
                className="w-full"
              >
                Fechar
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
