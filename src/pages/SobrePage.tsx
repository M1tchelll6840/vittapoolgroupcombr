import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Heart, 
  Lightbulb, 
  Shield, 
  Award, 
  Leaf,
  CheckCircle,
  Sparkles,
  ArrowRight
} from "lucide-react";

const valores = [
  {
    icon: Heart,
    title: "Bem-estar em primeiro lugar",
    description: "Priorizamos a qualidade de vida e o conforto dos nossos clientes em cada produto.",
  },
  {
    icon: Lightbulb,
    title: "Inovação acessível",
    description: "Trazemos soluções modernas e inteligentes a preços justos para todos.",
  },
  {
    icon: Shield,
    title: "Transparência e confiança",
    description: "Relacionamentos baseados em honestidade, clareza e respeito mútuo.",
  },
  {
    icon: Award,
    title: "Qualidade e durabilidade",
    description: "Produtos selecionados com rigor para garantir longevidade e satisfação.",
  },
  {
    icon: Leaf,
    title: "Respeito ao meio ambiente",
    description: "Compromisso com práticas sustentáveis e responsabilidade ambiental.",
  },
];

const diferenciais = [
  "Curadoria de produtos voltados para bem-estar e lazer",
  "Produtos acessíveis para diferentes níveis e orçamentos",
  "Atendimento humanizado e suporte pós-venda",
  "Compra segura e experiência digital simplificada",
  "Foco em relaxamento, meditação e qualidade de vida",
];

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Conheça Nossa História
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                Sobre a <span className="text-gradient">VittaPool Group</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Nascemos da necessidade real das pessoas por mais qualidade de vida, lazer e momentos de descanso em casa.
              </p>
            </div>
          </div>
        </section>

        {/* Nossa História */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-8 text-center">
                Nossa História
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  A <strong className="text-foreground">VittaPool Group</strong> surgiu da percepção de que muitas pessoas sonham com momentos de lazer e relaxamento em casa, mas encontram dificuldades para acessar produtos de qualidade, com bom custo-benefício e experiência de compra confiável.
                </p>
                
                <p>
                  Com foco em <strong className="text-foreground">piscinas de PVC, piscinas infláveis e não infláveis, banheiras e baldes de meditação</strong>, desenvolvemos soluções práticas, modernas e seguras para transformar qualquer espaço em um ambiente de descanso e equilíbrio.
                </p>

                <p>
                  Atuamos no comércio eletrônico com vendas online integradas via Shopify, logística eficiente e parcerias estratégicas com marketplaces. Nosso compromisso é garantir entrega rápida, suporte dedicado e uma experiência de compra que inspira confiança.
                </p>

                <p>
                  Acreditamos que o bem-estar não deve ser um luxo, mas sim uma possibilidade real para todos. É por isso que trabalhamos incansavelmente para democratizar o acesso a produtos de lazer e relaxamento com qualidade premium e atendimento humanizado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Missão e Visão */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Missão */}
              <div className="bg-background rounded-2xl p-8 shadow-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-gradient-water flex items-center justify-center mb-6 shadow-soft">
                  <Target className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">Nossa Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Levar lazer, bem-estar e relaxamento inteligente para pessoas e famílias por meio de piscinas modernas, soluções acessíveis e produtos que transformam qualquer espaço em um ambiente de descanso, equilíbrio e qualidade de vida.
                </p>
              </div>

              {/* Visão */}
              <div className="bg-background rounded-2xl p-8 shadow-card border border-border">
                <div className="w-14 h-14 rounded-xl bg-gradient-water flex items-center justify-center mb-6 shadow-soft">
                  <Eye className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">Nossa Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência nacional em soluções de lazer e bem-estar residencial, reconhecida pela inovação, confiabilidade e excelência no atendimento ao cliente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Nossos Valores
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Princípios que guiam cada decisão e ação da VittaPool Group.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {valores.map((valor, index) => (
                <div
                  key={valor.title}
                  className="group p-6 rounded-2xl bg-muted/30 border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <valor.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{valor.title}</h3>
                  <p className="text-muted-foreground text-sm">{valor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  Nossos Diferenciais
                </h2>
                <p className="text-muted-foreground">
                  O que nos torna únicos no mercado de lazer e bem-estar.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {diferenciais.map((diferencial, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{diferencial}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-gradient-water">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 mb-6">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
                <span className="text-sm font-medium text-primary-foreground">
                  Faça Parte
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Transforme seu espaço em um refúgio de lazer e bem-estar
              </h2>

              <p className="text-lg text-primary-foreground/80 mb-8">
                Explore nossos produtos e descubra como a VittaPool Group pode ajudar você a criar momentos especiais em casa.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="xl" 
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  asChild
                >
                  <a href="/#produtos">
                    Ver Produtos
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="xl"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="/contato">Fale Conosco</a>
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
