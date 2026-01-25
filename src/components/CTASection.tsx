import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-water relative overflow-hidden" aria-labelledby="cta-titulo">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-primary-foreground/10 animate-float" />
        <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-primary-foreground/5 animate-float delay-200" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary-foreground/10 animate-float delay-300" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary-foreground" aria-hidden="true" />
            <span className="text-sm font-medium text-primary-foreground">
              Comece sua transformação
            </span>
          </div>

          {/* Title */}
          <h2 id="cta-titulo" className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-fade-in delay-100">
            Pronto para transformar seu espaço?
          </h2>

          {/* Description */}
          <p className="text-lg text-primary-foreground/90 mb-8 animate-fade-in delay-200">
            Explore nossa seleção de piscinas, banheiras e soluções de bem-estar. Encontre o produto perfeito para criar seu refúgio de lazer e relaxamento.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in delay-300">
            <Button 
              size="xl" 
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 min-h-[44px]"
              asChild
            >
              <a href="#produtos">
                Ver Produtos
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 min-h-[44px]"
              asChild
            >
              <a href="/contato">Fale Conosco</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
