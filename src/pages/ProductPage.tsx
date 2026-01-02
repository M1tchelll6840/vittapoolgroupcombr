import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { fetchProductByHandle } from "@/lib/shopify";
import { useCartStore } from "@/stores/cartStore";
import { ShoppingCart, ArrowLeft, Package, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export default function ProductPage() {
  const { handle } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariant, setSelectedVariant] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
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

            <Button variant="hero" size="xl" className="w-full mb-8" onClick={handleAddToCart}>
              <ShoppingCart className="w-5 h-5 mr-2" /> Adicionar ao Carrinho
            </Button>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-secondary/50 rounded-xl">
                <Truck className="w-5 h-5 mx-auto mb-2 text-primary" />
                <span className="text-xs">Frete Grátis</span>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-xl">
                <Shield className="w-5 h-5 mx-auto mb-2 text-primary" />
                <span className="text-xs">Garantia 2 Anos</span>
              </div>
              <div className="text-center p-4 bg-secondary/50 rounded-xl">
                <RotateCcw className="w-5 h-5 mx-auto mb-2 text-primary" />
                <span className="text-xs">Troca Fácil</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
