import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Qual a diferença entre piscinas de PVC e infláveis?",
    answer:
      "As piscinas de PVC possuem estrutura com armação metálica, sendo mais resistentes e duráveis, ideais para uso frequente. Já as piscinas infláveis são mais leves e fáceis de armazenar, perfeitas para uso ocasional e espaços menores.",
  },
  {
    question: "Posso instalar uma piscina no meu apartamento?",
    answer:
      "Sim! Temos modelos específicos para apartamentos que são leves, compactos e não precisam de instalações complexas. Recomendamos verificar a capacidade de carga da sua varanda e as regras do condomínio.",
  },
  {
    question: "Qual o prazo de entrega?",
    answer:
      "O prazo de entrega varia de 3 a 15 dias úteis, dependendo da sua região. Para capitais e grandes cidades, a entrega costuma ser mais rápida. Oferecemos frete grátis para todo o Brasil!",
  },
  {
    question: "As piscinas vêm com bomba e filtro?",
    answer:
      "Dependendo do modelo, sim! Muitos de nossos kits já incluem bomba filtrante, capa de proteção e kit de limpeza. Verifique a descrição de cada produto para saber o que está incluso.",
  },
  {
    question: "Qual a garantia dos produtos?",
    answer:
      "Todos os nossos produtos têm garantia mínima de 2 anos contra defeitos de fabricação. Algumas linhas premium possuem garantia estendida de até 5 anos.",
  },
  {
    question: "Como funciona o processo de troca ou devolução?",
    answer:
      "Você tem até 7 dias após o recebimento para solicitar troca ou devolução sem custos. Basta entrar em contato com nosso atendimento que cuidaremos de todo o processo.",
  },
  {
    question: "As banheiras de meditação precisam de instalação elétrica?",
    answer:
      "Alguns modelos com aquecimento e jatos precisam de ponto elétrico próximo. Modelos básicos de imersão funcionam sem eletricidade. Verifique as especificações do produto escolhido.",
  },
  {
    question: "Vocês fazem orçamentos personalizados?",
    answer:
      "Sim! Para projetos especiais, grandes quantidades ou necessidades específicas, nossa equipe está pronta para criar um orçamento personalizado. Entre em contato pelo formulário ou WhatsApp.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-gradient-surface" aria-labelledby="faq-titulo">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <HelpCircle className="w-4 h-4 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-primary">
                Tire suas dúvidas
              </span>
            </div>
            <h2 id="faq-titulo" className="font-display text-3xl md:text-4xl font-bold mb-4">
              Perguntas <span className="text-gradient">frequentes</span>
            </h2>
            <p className="text-muted-foreground">
              Encontre respostas para as dúvidas mais comuns sobre nossos
              produtos e serviços.
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl px-6 shadow-soft border-none data-[state=open]:shadow-card transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Link to full FAQ page */}
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="min-h-[44px]" asChild>
              <Link to="/faq" className="group">
                Ver todas as perguntas
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
