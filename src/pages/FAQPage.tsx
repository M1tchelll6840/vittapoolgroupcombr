import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  Package,
  Truck,
  CreditCard,
  RefreshCw,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";

const faqCategories = {
  produtos: {
    icon: Package,
    title: "Produtos",
    description: "Dúvidas sobre nossos produtos e especificações",
    faqs: [
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
        question: "As banheiras de meditação precisam de instalação elétrica?",
        answer:
          "Alguns modelos com aquecimento e jatos precisam de ponto elétrico próximo. Modelos básicos de imersão funcionam sem eletricidade. Verifique as especificações do produto escolhido.",
      },
      {
        question: "Qual a capacidade das piscinas?",
        answer:
          "Nossas piscinas variam de 1.000 a 25.000 litros. Piscinas infantis comportam de 1.000 a 3.000 litros, enquanto modelos familiares chegam a 25.000 litros. Cada produto tem a capacidade especificada na descrição.",
      },
      {
        question: "Como fazer a manutenção da piscina?",
        answer:
          "Recomendamos usar cloro ou tratamento adequado, manter a bomba filtrante funcionando regularmente e cobrir a piscina quando não estiver em uso. Oferecemos kits de manutenção completos em nossa loja.",
      },
      {
        question: "Vocês fazem orçamentos personalizados?",
        answer:
          "Sim! Para projetos especiais, grandes quantidades ou necessidades específicas, nossa equipe está pronta para criar um orçamento personalizado. Entre em contato pelo formulário ou WhatsApp.",
      },
    ],
  },
  envio: {
    icon: Truck,
    title: "Envio",
    description: "Informações sobre entrega e logística",
    faqs: [
      {
        question: "Qual o prazo de entrega?",
        answer:
          "O prazo de entrega varia de 3 a 15 dias úteis, dependendo da sua região. Para capitais e grandes cidades, a entrega costuma ser mais rápida. Acompanhe seu pedido pelo código de rastreio enviado por e-mail.",
      },
      {
        question: "O frete é grátis?",
        answer:
          "Oferecemos frete grátis para compras acima de um valor mínimo, que varia conforme a região. Consulte as condições durante o checkout para verificar se sua compra se qualifica.",
      },
      {
        question: "Como rastrear meu pedido?",
        answer:
          "Após a postagem, você receberá um e-mail com o código de rastreamento. Basta acessar o site da transportadora ou dos Correios para acompanhar a entrega em tempo real.",
      },
      {
        question: "Entregam em todo o Brasil?",
        answer:
          "Sim! Realizamos entregas em todas as regiões do Brasil, incluindo áreas rurais e de difícil acesso. O prazo pode variar conforme a localidade.",
      },
      {
        question: "O que fazer se o produto chegar danificado?",
        answer:
          "Caso o produto chegue com avarias, entre em contato imediatamente com nosso suporte, enviando fotos da embalagem e do produto. Providenciaremos a substituição sem custos adicionais.",
      },
    ],
  },
  pagamentos: {
    icon: CreditCard,
    title: "Pagamentos",
    description: "Formas de pagamento e segurança",
    faqs: [
      {
        question: "Quais formas de pagamento são aceitas?",
        answer:
          "Aceitamos cartões de crédito (Visa, Mastercard, Elo, American Express), Pix, boleto bancário e carteiras digitais. O parcelamento está disponível no cartão de crédito.",
      },
      {
        question: "Posso parcelar minha compra?",
        answer:
          "Sim! Oferecemos parcelamento em até 12x no cartão de crédito. Dependendo do valor da compra, algumas parcelas podem ser sem juros. As condições são exibidas no checkout.",
      },
      {
        question: "A compra é segura?",
        answer:
          "Absolutamente! Nosso site utiliza certificado SSL e criptografia de ponta para proteger seus dados. Trabalhamos com gateways de pagamento certificados e seguros.",
      },
      {
        question: "Como funciona o pagamento via Pix?",
        answer:
          "Ao escolher Pix, você receberá um QR Code para pagamento instantâneo. Após a confirmação (geralmente em segundos), seu pedido é processado imediatamente. É a forma mais rápida de pagar!",
      },
      {
        question: "Emitem nota fiscal?",
        answer:
          "Sim, emitimos nota fiscal eletrônica para todas as compras. Ela é enviada automaticamente para o e-mail cadastrado após a confirmação do pagamento.",
      },
    ],
  },
  trocas: {
    icon: RefreshCw,
    title: "Trocas e Devoluções",
    description: "Políticas de troca e reembolso",
    faqs: [
      {
        question: "Como funciona o processo de troca ou devolução?",
        answer:
          "Você tem até 7 dias após o recebimento para solicitar troca ou devolução sem custos, conforme o Código de Defesa do Consumidor. Basta entrar em contato com nosso atendimento que cuidaremos de todo o processo.",
      },
      {
        question: "Qual o prazo para solicitar troca?",
        answer:
          "O prazo para solicitar troca por arrependimento é de 7 dias corridos após o recebimento. Para defeitos de fabricação, a garantia se estende por todo o período coberto pelo produto.",
      },
      {
        question: "Quem paga o frete da devolução?",
        answer:
          "Em caso de arrependimento, o frete de devolução é por conta do cliente. Para produtos com defeito ou erro no envio, a VittaPool Group cobre todos os custos de logística reversa.",
      },
      {
        question: "Em quanto tempo recebo o reembolso?",
        answer:
          "Após recebermos e analisarmos o produto devolvido, o reembolso é processado em até 10 dias úteis. O prazo para aparecer na sua conta depende da forma de pagamento utilizada.",
      },
      {
        question: "Posso trocar por outro produto?",
        answer:
          "Sim! Você pode solicitar a troca por outro produto de igual ou maior valor (pagando a diferença). Se for de menor valor, a diferença é reembolsada conforme nossa política.",
      },
    ],
  },
};

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("produtos");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao início
              </Link>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Central de Ajuda
                </span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Perguntas <span className="text-gradient">Frequentes</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Encontre respostas para todas as suas dúvidas sobre produtos,
                envio, pagamentos e trocas. Estamos aqui para ajudar!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Tabs
                value={activeCategory}
                onValueChange={setActiveCategory}
                className="w-full"
              >
                {/* Category Tabs */}
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto gap-2 bg-transparent p-0 mb-10">
                  {Object.entries(faqCategories).map(([key, category]) => {
                    const Icon = category.icon;
                    return (
                      <TabsTrigger
                        key={key}
                        value={key}
                        className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card border border-border shadow-soft data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary data-[state=active]:shadow-glow transition-all duration-300"
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium text-sm">
                          {category.title}
                        </span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {/* FAQ Accordions */}
                {Object.entries(faqCategories).map(([key, category]) => (
                  <TabsContent key={key} value={key} className="mt-0">
                    <div className="mb-8">
                      <h2 className="font-display text-2xl font-bold mb-2">
                        {category.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {category.description}
                      </p>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                      {category.faqs.map((faq, index) => (
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
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-20 bg-gradient-surface">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>

              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Não encontrou o que procurava?
              </h2>

              <p className="text-muted-foreground mb-8">
                Nossa equipe está pronta para ajudar. Entre em contato e
                responderemos sua dúvida com atenção e rapidez.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contato">Fale Conosco</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="mailto:contato@vittapoolgroup.com.br">
                    Enviar E-mail
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
