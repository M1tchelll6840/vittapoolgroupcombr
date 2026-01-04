import { Users, Home, Sparkles, Building2 } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Famílias",
    description: "Momentos de lazer e diversão para toda a família, criando memórias especiais em casa.",
    color: "from-primary to-primary-deep",
  },
  {
    icon: Home,
    title: "Lazer em Casa",
    description: "Para quem deseja transformar seu espaço em um ambiente de relaxamento e conforto.",
    color: "from-accent to-accent-glow",
  },
  {
    icon: Sparkles,
    title: "Relaxamento & Meditação",
    description: "Soluções para quem busca equilíbrio, bem-estar mental e práticas de mindfulness.",
    color: "from-primary-deep to-primary",
  },
  {
    icon: Building2,
    title: "Espaços Comerciais",
    description: "Condomínios, clínicas, hotéis e spas que desejam oferecer experiências premium.",
    color: "from-accent-glow to-accent",
  },
];

export function AudienceSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Para Todos os Perfis
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Para quem é a <span className="text-gradient">VittaPool Group</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nossas soluções atendem diferentes perfis e necessidades, sempre com foco em qualidade de vida e bem-estar.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="group relative overflow-hidden rounded-2xl p-8 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${audience.color} opacity-10 group-hover:opacity-15 transition-opacity duration-300`} />
              
              {/* Border */}
              <div className="absolute inset-0 border border-border group-hover:border-primary/30 rounded-2xl transition-colors duration-300" />
              
              {/* Content */}
              <div className="relative z-10 flex gap-5">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${audience.color} flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-glow transition-shadow duration-300`}>
                  <audience.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {audience.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {audience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
