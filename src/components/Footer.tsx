import { Link } from "react-router-dom";
import { Droplets, Facebook, Instagram, Youtube, Mail } from "lucide-react";

const footerLinks = {
  produtos: [
    { label: "Piscinas de PVC", href: "/#categorias" },
    { label: "Piscinas Infláveis", href: "/#categorias" },
    { label: "Boias Rebocáveis", href: "/#categorias" },
    { label: "Espreguiçadeira Inflável", href: "/#categorias" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "/sobre" },
    { label: "Contato", href: "/contato" },
  ],
  suporte: [
    { label: "Perguntas Frequentes", href: "/faq" },
    { label: "Envio e Entrega", href: "/envio-entrega" },
    { label: "Trocas e Devoluções", href: "/trocas-devolucoes" },
    { label: "Pagamentos", href: "/pagamentos" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16" role="contentinfo">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link 
              to="/" 
              className="flex items-center gap-2 mb-4"
              aria-label="VittaPool Group - Ir para página inicial"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-water flex items-center justify-center">
                <Droplets className="w-5 h-5 text-primary-foreground" aria-hidden="true" />
              </div>
              <div>
                <span className="font-display text-lg font-semibold">
                  Vitta
                </span>
                <span className="font-display text-lg font-semibold text-primary">
                  Pool Group
                </span>
              </div>
            </Link>
            <p className="text-background/70 text-sm mb-6">
              Soluções inteligentes para lazer, bem-estar e relaxamento desde 2015.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-11 h-11 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors min-w-[44px] min-h-[44px]"
                aria-label="Siga-nos no Facebook"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors min-w-[44px] min-h-[44px]"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors min-w-[44px] min-h-[44px]"
                aria-label="Inscreva-se no YouTube"
              >
                <Youtube className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Products */}
          <nav aria-label="Links de Produtos">
            <h3 className="font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors min-h-[44px] py-2 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Links da Empresa">
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors min-h-[44px] py-2 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Support */}
          <nav aria-label="Links de Suporte">
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors min-h-[44px] py-2 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-background/70 mb-4">
              Receba ofertas exclusivas e novidades.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="newsletter-email" className="sr-only">
                Seu email para newsletter
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="seu@email.com"
                className="flex-1 h-11 px-4 rounded-lg bg-background/10 border border-background/20 text-sm placeholder:text-background/50 focus:outline-none focus:border-primary min-h-[44px]"
                aria-describedby="newsletter-description"
              />
              <button 
                type="submit"
                className="h-11 w-11 min-w-[44px] min-h-[44px] rounded-lg bg-primary text-primary-foreground hover:bg-primary-glow transition-colors flex items-center justify-center"
                aria-label="Enviar inscrição para newsletter"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </button>
            </form>
            <p id="newsletter-description" className="sr-only">
              Digite seu email para receber ofertas exclusivas e novidades da VittaPool Group
            </p>
          </div>
        </div>

        {/* Affiliate disclosure */}
        <div className="pt-8 border-t border-background/10">
          <p className="text-xs text-background/50 text-center mb-4">
            Como Associado Amazon, recebemos comissões em compras qualificadas.
          </p>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/60">
            © 2026 VittaPool Group. Todos os direitos reservados.
          </p>
          <nav className="flex gap-6 text-sm text-background/60" aria-label="Links legais">
            <a href="/termos" className="hover:text-primary transition-colors min-h-[44px] py-2 inline-flex items-center">
              Termos de Uso
            </a>
            <a href="/privacidade" className="hover:text-primary transition-colors min-h-[44px] py-2 inline-flex items-center">
              Privacidade
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
