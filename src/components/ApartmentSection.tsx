import { Button } from "@/components/ui/button";
import { Building2, Sun, Ruler, Wind } from "lucide-react";
import categoryInflatable from "@/assets/category-inflatable.jpg";

const features = [
  {
    icon: Ruler,
    title: "Tamanhos compactos",
    description: "Modelos que cabem em varandas e áreas de serviço",
  },
  {
    icon: Wind,
    title: "Fácil montagem",
    description: "Instale em minutos sem necessidade de obras",
  },
  {
    icon: Sun,
    title: "Material UV",
    description: "Resistente ao sol e às intempéries",
  },
  {
    icon: Building2,
    title: "Ideal para condomínios",
    description: "Silenciosas e não danificam estruturas",
  },
];

export function ApartmentSection() {
  return (
    <section id="apartamentos" className="py-20 bg-background overflow-hidden" aria-labelledby="apartamentos-titulo">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={categoryInflatable}
                alt="Piscina inflável compacta instalada em varanda de apartamento"
                className="w-full h-80 lg:h-[450px] object-cover"
                loading="lazy"
                width={600}
                height={450}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/40 to-transparent" aria-hidden="true" />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-card max-w-[200px] animate-float" aria-hidden="true">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <span className="font-semibold text-2xl">+500</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Apartamentos atendidos no Brasil
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-medium text-primary uppercase tracking-wider" aria-hidden="true">
              Para Apartamentos
            </span>
            <h2 id="apartamentos-titulo" className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
              Seu oásis na <span className="text-gradient">varanda</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Desenvolvemos soluções específicas para quem mora em apartamento. 
              Nossas piscinas compactas são leves, fáceis de montar e não precisam 
              de instalações complexas.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="min-h-[44px]" asChild>
              <a href="#produtos">Ver Produtos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
