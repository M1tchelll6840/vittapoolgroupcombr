import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Brain, Leaf } from "lucide-react";
import categoryBathtub from "@/assets/category-bathtub.jpg";
import categoryImmersion from "@/assets/category-immersion.jpg";

const benefits = [
  {
    icon: Brain,
    title: "Redução do estresse",
    description: "A imersão em água ajuda a acalmar a mente",
  },
  {
    icon: Heart,
    title: "Melhora circulatória",
    description: "Estimula a circulação sanguínea",
  },
  {
    icon: Leaf,
    title: "Conexão natural",
    description: "Reconecte-se com seu corpo e natureza",
  },
];

export function MeditationSection() {
  return (
    <section id="meditacao" className="py-20 bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">
              Bem-estar & Mindfulness
            </span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Relaxamento e <span className="text-gradient">meditação</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossas banheiras e balcões de imersão são projetados para proporcionar 
            momentos de relaxamento profundo e práticas de mindfulness.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Image 1 */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
            <img
              src={categoryBathtub}
              alt="Banheira de meditação"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                Banheiras Spa
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Relaxe em águas aquecidas após um dia intenso
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="flex flex-col justify-center gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="flex items-start gap-4 p-5 rounded-xl bg-card shadow-soft hover:shadow-card transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-water flex items-center justify-center flex-shrink-0 shadow-soft">
                  <benefit.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}

            <Button variant="accent" size="lg" className="mt-4" asChild>
              <a href="#produtos">Explorar Coleção Wellness</a>
            </Button>
          </div>

          {/* Image 2 */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
            <img
              src={categoryImmersion}
              alt="Balcão de imersão"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                Imersão Terapêutica
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Cold plunge e técnicas de biohacking
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
