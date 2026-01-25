import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { useState, useId } from "react";
import { toast } from "sonner";
import { validateContactForm } from "@/lib/validation";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const formId = useId();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      interest: formData.get("interest") as string,
      message: formData.get("message") as string,
    };

    // Validate form data
    const validation = validateContactForm(data);
    
    if (!validation.success) {
      setErrors(validation.errors || {});
      toast.error("Por favor, corrija os erros no formulário.");
      return;
    }

    setLoading(true);
    
    // Note: In production, this should send to a backend API
    // Currently simulating submission - backend integration needed
    setTimeout(() => {
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      setLoading(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 bg-background" aria-labelledby="contato-titulo">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider" aria-hidden="true">
              Contato
            </span>
            <h2 id="contato-titulo" className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
              Fale <span className="text-gradient">conosco</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Tem dúvidas ou quer um orçamento personalizado? Nossa equipe está 
              pronta para ajudar você a encontrar a solução ideal para seu bem-estar.
            </p>

            {/* Contact Info */}
            <address className="space-y-6 not-italic">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Telefone</p>
                  <a href="tel:+5571991067761" className="font-medium hover:text-primary transition-colors">
                    (71) 99106-7761
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:contato@vittapoolgroup.com.br" className="font-medium hover:text-primary transition-colors">
                    contato@vittapoolgroup.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Localização</p>
                  <p className="font-medium">Salvador Shopping – Salvador, BA</p>
                </div>
              </div>
            </address>

            {/* WhatsApp Button */}
            <Button variant="accent" size="lg" className="mt-8 min-h-[44px]" asChild>
              <a
                href="https://wa.me/5571991067761"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Fale conosco pelo WhatsApp - abre em nova aba"
              >
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
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
                  <label htmlFor={`${formId}-nome`} className="text-sm font-medium mb-2 block">
                    Nome
                  </label>
                  <Input
                    id={`${formId}-nome`}
                    name="name"
                    placeholder="Seu nome"
                    required
                    className={`rounded-xl min-h-[44px] ${errors.name ? "border-destructive" : ""}`}
                    autoComplete="name"
                    maxLength={100}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor={`${formId}-telefone`} className="text-sm font-medium mb-2 block">
                    Telefone
                  </label>
                  <Input
                    id={`${formId}-telefone`}
                    name="phone"
                    placeholder="(00) 00000-0000"
                    className={`rounded-xl min-h-[44px] ${errors.phone ? "border-destructive" : ""}`}
                    autoComplete="tel"
                    type="tel"
                    maxLength={20}
                  />
                  {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor={`${formId}-email`} className="text-sm font-medium mb-2 block">
                  Email
                </label>
                <Input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className={`rounded-xl min-h-[44px] ${errors.email ? "border-destructive" : ""}`}
                  autoComplete="email"
                  maxLength={255}
                />
                {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor={`${formId}-interesse`} className="text-sm font-medium mb-2 block">
                  Interesse
                </label>
                <select 
                  id={`${formId}-interesse`}
                  name="interest"
                  className="w-full h-11 min-h-[44px] px-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-describedby={`${formId}-interesse-desc`}
                >
                  <option value="">Selecione uma opção</option>
                  <option value="pvc">Piscina de PVC</option>
                  <option value="inflavel">Piscina Inflável</option>
                  <option value="banheira">Banheira Spa</option>
                  <option value="balde">Balde Terapêutico</option>
                  <option value="outro">Outro</option>
                </select>
                <span id={`${formId}-interesse-desc`} className="sr-only">
                  Selecione qual tipo de produto você tem interesse
                </span>
              </div>

              <div>
                <label htmlFor={`${formId}-mensagem`} className="text-sm font-medium mb-2 block">
                  Mensagem
                </label>
                <Textarea
                  id={`${formId}-mensagem`}
                  name="message"
                  placeholder="Conte-nos sobre seu projeto ou dúvida..."
                  rows={4}
                  className={`rounded-xl resize-none ${errors.message ? "border-destructive" : ""}`}
                  maxLength={2000}
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full min-h-[44px]"
                disabled={loading}
              >
                {loading ? (
                  "Enviando..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" aria-hidden="true" />
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
