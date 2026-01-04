import { Heart, Wallet, ShoppingCart, Users, Truck } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Produtos selecionados com foco em bem-estar",
    description: "Curadoria exclusiva de itens que promovem lazer, relaxamento e qualidade de vida.",
  },
  {
    icon: Wallet,
    title: "Opções para todos os orçamentos",
    description: "Desde soluções acessíveis até produtos premium, você encontra o ideal para sua casa.",
  },
  {
    icon: ShoppingCart,
    title: "Compra 100% online, segura e prática",
    description: "Processo de compra simplificado com pagamento protegido e transparente.",
  },
  {
    icon: Users,
    title: "Atendimento humanizado",
    description: "Equipe dedicada a entender suas necessidades e oferecer o melhor suporte.",
  },
  {
    icon: Truck,
    title: "Entrega confiável em todo o Brasil",
    description: "Logística eficiente com rastreamento e prazos que você pode confiar.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Nossos Diferenciais
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Por que escolher a <span className="text-gradient">VittaPool Group</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos muito mais que produtos – entregamos experiências de lazer e bem-estar com qualidade, confiança e atendimento excepcional.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-6 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-water flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
                <reason.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
