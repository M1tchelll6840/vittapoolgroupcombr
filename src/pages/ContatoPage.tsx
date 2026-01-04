import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  MessageCircle, 
  Send,
  Clock,
  CheckCircle,
  HelpCircle,
  Phone
} from "lucide-react";

export default function ContatoPage() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve. Obrigado!",
    });

    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                Atendimento
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
                Fale com a <span className="text-gradient">VittaPool Group</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Estamos aqui para ajudar você a transformar seu espaço em um ambiente de lazer, bem-estar e relaxamento. Se tiver dúvidas, precisar de suporte ou quiser saber mais sobre nossos produtos, fale com a gente.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Email */}
              <div className="p-6 rounded-2xl bg-muted/30 border border-border text-center hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">E-mail</h3>
                <a 
                  href="mailto:contato@vittapoolgroup.com.br" 
                  className="text-primary hover:underline text-sm"
                >
                  contato@vittapoolgroup.com.br
                </a>
              </div>

              {/* WhatsApp */}
              <div className="p-6 rounded-2xl bg-muted/30 border border-border text-center hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline text-sm"
                >
                  Iniciar Conversa
                </a>
              </div>

              {/* Horário */}
              <div className="p-6 rounded-2xl bg-muted/30 border border-border text-center hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Atendimento</h3>
                <p className="text-muted-foreground text-sm">
                  Seg - Sex: 9h às 18h
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
                  Envie sua mensagem
                </h2>
                <p className="text-muted-foreground">
                  Preencha o formulário abaixo e nossa equipe responderá com atenção, transparência e rapidez.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 shadow-card border border-border">
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome completo"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-mail *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(11) 99999-9999"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Assunto *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Sobre o que deseja falar?"
                      required
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Escreva sua mensagem aqui..."
                      rows={5}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Dúvidas sobre pedidos */}
                <div className="p-6 rounded-2xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Dúvidas sobre Pedidos</h3>
                      <p className="text-muted-foreground text-sm">
                        Informações sobre status de pedidos, prazos de entrega, trocas e devoluções podem ser enviadas pelo formulário ou diretamente para nosso e-mail.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Suporte Pós-Venda */}
                <div className="p-6 rounded-2xl border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Suporte Pós-Venda</h3>
                      <p className="text-muted-foreground text-sm">
                        Nossa equipe está disponível para ajudar com qualquer questão após sua compra. Garantimos atendimento ágil e humanizado.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Message */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Nosso compromisso:</strong> Todas as mensagens são respondidas com atenção, transparência e rapidez pela equipe VittaPool Group. Valorizamos cada contato e trabalhamos para oferecer a melhor experiência.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
