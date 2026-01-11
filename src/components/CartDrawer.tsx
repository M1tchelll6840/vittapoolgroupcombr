import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart, Minus, Plus, Trash2, ExternalLink, Loader2, Copy, CheckCircle } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { openCheckoutUrl, isValidShopifyCheckoutUrl, createStorefrontCheckout } from "@/lib/shopify";
import { toast } from "sonner";
import { useState } from "react";

export function CartDrawer() {
  const {
    items,
    isLoading,
    isOpen,
    setOpen,
    updateQuantity,
    removeItem,
    setLoading,
    getTotalItems,
    getTotalPrice,
  } = useCartStore();
  
  const [debugUrl, setDebugUrl] = useState<string | null>(null);

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  const handleCopyUrl = () => {
    if (debugUrl) {
      navigator.clipboard.writeText(debugUrl);
      toast.success("URL copiada!", { position: "top-center" });
    }
  };

  const handleCheckout = async () => {
    if (items.length === 0) return;
    
    setLoading(true);
    setDebugUrl(null);
    
    try {
      // Gera URL diretamente (não usa estado antigo)
      const checkoutUrl = await createStorefrontCheckout(items);
      
      console.log('[CartDrawer] Checkout URL gerada:', checkoutUrl);
      setDebugUrl(checkoutUrl);
      
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
      
      if (result.success) {
        setOpen(false);
      } else {
        toast.error("Erro ao abrir checkout", {
          description: result.error,
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("[CartDrawer] Checkout failed:", error);
      toast.error("Erro ao criar checkout", {
        description: error instanceof Error ? error.message : "Erro desconhecido",
        position: "top-center",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="icon" 
          className="relative min-w-[44px] min-h-[44px]"
          aria-label={`Carrinho de compras${totalItems > 0 ? `, ${totalItems} ${totalItems === 1 ? 'item' : 'itens'}` : ''}`}
        >
          <ShoppingCart className="h-5 w-5" aria-hidden="true" />
          {totalItems > 0 && (
            <Badge 
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-accent text-accent-foreground"
              aria-hidden="true"
            >
              {totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="font-display text-xl">Carrinho</SheetTitle>
          <SheetDescription>
            {totalItems === 0
              ? "Seu carrinho está vazio"
              : `${totalItems} ${totalItems !== 1 ? "itens" : "item"} no carrinho`}
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" aria-hidden="true" />
                <p className="text-muted-foreground">Seu carrinho está vazio</p>
              </div>
            </div>
          ) : (
            <>
              {/* Scrollable items area */}
              <div className="flex-1 overflow-y-auto pr-2 min-h-0">
                <ul className="space-y-4" role="list" aria-label="Itens no carrinho">
                  {items.map((item) => (
                    <li
                      key={item.variantId}
                      className="flex gap-4 p-3 bg-secondary/30 rounded-xl"
                    >
                      <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden flex-shrink-0">
                        {item.product.node.images?.edges?.[0]?.node && (
                          <img
                            src={item.product.node.images.edges[0].node.url}
                            alt={item.product.node.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            width={64}
                            height={64}
                          />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-sm truncate">
                          {item.product.node.title}
                        </h4>
                        {item.selectedOptions.length > 0 && (
                          <p className="text-xs text-muted-foreground">
                            {item.selectedOptions.map((opt) => opt.value).join(" • ")}
                          </p>
                        )}
                        <p className="font-semibold text-primary mt-1">
                          R$ {parseFloat(item.price.amount).toFixed(2)}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 min-w-[44px] min-h-[44px] text-destructive"
                          onClick={() => removeItem(item.variantId)}
                          aria-label={`Remover ${item.product.node.title} do carrinho`}
                        >
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </Button>

                        <div className="flex items-center gap-1" role="group" aria-label={`Quantidade de ${item.product.node.title}`}>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 min-w-[44px] min-h-[44px]"
                            onClick={() =>
                              updateQuantity(item.variantId, item.quantity - 1)
                            }
                            aria-label={`Diminuir quantidade de ${item.product.node.title}`}
                          >
                            <Minus className="h-3 w-3" aria-hidden="true" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium" aria-label={`Quantidade: ${item.quantity}`}>
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 min-w-[44px] min-h-[44px]"
                            onClick={() =>
                              updateQuantity(item.variantId, item.quantity + 1)
                            }
                            aria-label={`Aumentar quantidade de ${item.product.node.title}`}
                          >
                            <Plus className="h-3 w-3" aria-hidden="true" />
                          </Button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Fixed checkout section */}
              <div className="flex-shrink-0 space-y-4 pt-4 border-t border-border bg-background">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-xl font-bold text-gradient">
                    R$ {totalPrice.toFixed(2)}
                  </span>
                </div>

                <Button
                  onClick={handleCheckout}
                  variant="hero"
                  className="w-full min-h-[44px]"
                  size="lg"
                  disabled={items.length === 0 || isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                      Processando...
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4 mr-2" aria-hidden="true" />
                      Finalizar Compra
                    </>
                  )}
                </Button>
                
                {/* Debug: Mostra URL gerada */}
                {debugUrl && (
                  <div className="p-3 bg-muted rounded-lg text-xs">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        Checkout URL gerada:
                      </span>
                      <Button variant="ghost" size="sm" className="h-6 px-2" onClick={handleCopyUrl}>
                        <Copy className="w-3 h-3 mr-1" />
                        Copiar
                      </Button>
                    </div>
                    <p className="break-all text-muted-foreground">{debugUrl}</p>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
