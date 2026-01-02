import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function ContactSection() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Contato
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
              Fale <span className="text-gradient">conosco</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Tem dúvidas ou quer um orçamento personalizado? Nossa equipe está 
              pronta para ajudar você a encontrar a piscina perfeita.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <p className="font-medium">(11) 99999-9999</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">contato@piscinasinteligentes.com.br</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="font-medium">São Paulo, SP - Brasil</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <Button variant="accent" size="lg" className="mt-8" asChild>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale pelo WhatsApp
              </a>
            </Button>
          </div>

          {/* Form */}
          <div className="bg-card p-8 rounded-2xl shadow-card">
            <h3 className="font-display text-xl font-semibold mb-6">
              Solicitar Orçamento
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Nome</label>
                  <Input
                    placeholder="Seu nome"
                    required
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Telefone
                  </label>
                  <Input
                    placeholder="(00) 00000-0000"
                    required
                    className="rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="rounded-xl"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Interesse
                </label>
                <select className="w-full h-10 px-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                  <option value="">Selecione uma opção</option>
                  <option value="pvc">Piscina de PVC</option>
                  <option value="inflavel">Piscina Inflável</option>
                  <option value="banheira">Banheira Spa</option>
                  <option value="imersao">Balcão de Imersão</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Mensagem
                </label>
                <Textarea
                  placeholder="Conte-nos sobre seu projeto ou dúvida..."
                  rows={4}
                  className="rounded-xl resize-none"
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
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
