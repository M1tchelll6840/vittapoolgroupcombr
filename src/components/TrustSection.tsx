import { ShieldCheck, CreditCard, Truck, Headphones } from "lucide-react";

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "Compra Segura",
    description: "Site protegido com criptografia SSL",
  },
  {
    icon: CreditCard,
    title: "Pagamento Protegido",
    description: "Transações seguras e verificadas",
  },
  {
    icon: Truck,
    title: "Logística Eficiente",
    description: "Entrega rápida com rastreamento",
  },
  {
    icon: Headphones,
    title: "Suporte Pós-Venda",
    description: "Atendimento dedicado após a compra",
  },
];

export function TrustSection() {
  return (
    <section className="py-16 bg-muted/50" aria-label="Vantagens e garantias">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" role="list">
          {trustBadges.map((badge, index) => (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center p-4 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              role="listitem"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <badge.icon className="w-7 h-7 text-primary" aria-hidden="true" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
