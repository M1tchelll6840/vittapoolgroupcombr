import { Button } from "@/components/ui/button";
import { Sparkles, Sun, Users, Waves } from "lucide-react";
import categoryTowableFloat from "@/assets/category-towable-float.jpg";
import categoryTanningLounger from "@/assets/category-tanning-lounger.jpg";

const benefits = [
  {
    icon: Waves,
    title: "Diversão garantida",
    description: "Momentos inesquecíveis na água",
  },
  {
    icon: Sun,
    title: "Bronzeado perfeito",
    description: "Relaxe enquanto pega aquele sol",
  },
  {
    icon: Users,
    title: "Para toda família",
    description: "Crianças e adultos se divertem juntos",
  },
];

export function MeditationSection() {
  return (
    <section id="diversao" className="py-20 bg-gradient-hero overflow-hidden" aria-labelledby="diversao-titulo">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
            <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
            <span className="text-sm font-medium text-accent">
              Lazer & Diversão
            </span>
          </div>
          <h2 id="diversao-titulo" className="font-display text-3xl md:text-4xl font-bold mb-4">
            Diversão e <span className="text-gradient">relaxamento</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossas boias rebocáveis e espreguiçadeiras infláveis são projetadas para proporcionar
            momentos de diversão e relaxamento sob o sol.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Image 1 */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
            <img
              src={categoryTowableFloat}
              alt="Boia inflável rebocável para diversão aquática em família"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={400}
              height={320}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                Boias Rebocáveis
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Adrenalina e diversão em alto mar ou lagos
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
                  <benefit.icon className="w-6 h-6 text-primary-foreground" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}

            <Button variant="accent" size="lg" className="mt-4 min-h-[44px]" asChild>
              <a href="#produtos">Explorar Coleção Wellness</a>
            </Button>
          </div>

          {/* Image 2 */}
          <div className="relative rounded-2xl overflow-hidden shadow-elevated group">
            <img
              src={categoryTanningLounger}
              alt="Espreguiçadeira inflável de bronzeamento para relaxar na piscina"
              className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={400}
              height={320}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                Espreguiçadeira Inflável
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                Relaxe na piscina enquanto pega um bronze
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
