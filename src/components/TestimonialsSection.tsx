import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 bg-background overflow-hidden" aria-labelledby="depoimentos-titulo">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider" aria-hidden="true">
            Avaliações
          </span>
          <h2 id="depoimentos-titulo" className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Avaliações <span className="text-gradient">em breve</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estamos coletando as primeiras avaliações dos nossos clientes. Seja um dos primeiros a viver a experiência VittaPool Group!
          </p>
        </div>

        {/* Single centered card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-card p-8 rounded-2xl shadow-card text-center">
            <div className="flex items-center justify-center gap-1 mb-4" role="img" aria-label="5 estrelas">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" aria-hidden="true" />
              ))}
            </div>
            <p className="text-base text-muted-foreground mb-6">
              Seja um dos nossos primeiros clientes e compartilhe sua experiência com a gente.
            </p>
            <Button variant="hero" size="lg" className="min-h-[44px]" asChild>
              <a href="#produtos">Ver Produtos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
