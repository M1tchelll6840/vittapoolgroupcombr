import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Menu, X, Droplets } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { CartDrawer } from "./CartDrawer";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Nós" },
  { href: "/#categorias", label: "Categorias" },
  { href: "/#produtos", label: "Produtos" },
  { href: "/faq", label: "FAQ" },
  { href: "/contato", label: "Contato" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItems = useCartStore((state) => state.getTotalItems());

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
            aria-label="VittaPool Group - Ir para página inicial"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-water flex items-center justify-center shadow-soft group-hover:shadow-glow transition-shadow duration-300">
              <Droplets className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg font-semibold text-foreground">
                Vitta
              </span>
              <span className="font-display text-lg font-semibold text-gradient">
                Pool Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 min-h-[44px] flex items-center px-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="hero" size="sm" className="hidden md:flex min-h-[44px]" asChild>
              <a href="#contato">Solicitar Orçamento</a>
            </Button>

            <CartDrawer />

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="min-w-[44px] min-h-[44px]"
                  aria-label="Abrir menu de navegação"
                >
                  <Menu className="w-5 h-5" aria-hidden="true" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-background">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-water flex items-center justify-center">
                      <Droplets className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
                    </div>
                    <span className="font-display text-lg font-semibold">
                      VittaPool Group
                    </span>
                  </div>

                  <nav className="flex flex-col gap-4" aria-label="Navegação mobile">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-3 min-h-[44px] flex items-center"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>

                  <Button variant="hero" size="lg" className="mt-4 min-h-[44px]" asChild>
                    <a href="#contato">Solicitar Orçamento</a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
