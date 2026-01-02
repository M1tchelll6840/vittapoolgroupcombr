import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  produtos: [
    { label: "Piscinas de PVC", href: "#pvc" },
    { label: "Piscinas Infláveis", href: "#inflatable" },
    { label: "Banheiras Spa", href: "#bathtub" },
    { label: "Imersão", href: "#immersion" },
  ],
  empresa: [
    { label: "Sobre Nós", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Trabalhe Conosco", href: "#" },
    { label: "Contato", href: "#contato" },
  ],
  suporte: [
    { label: "FAQ", href: "#faq" },
    { label: "Entrega", href: "#" },
    { label: "Trocas e Devoluções", href: "#" },
    { label: "Garantia", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="mb-4 inline-block">
              <img 
                src={logo} 
                alt="Piscinas Inteligentes" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-background/70 text-sm mb-6">
              Transformando espaços em oásis de relaxamento desde 2015.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Produtos</h4>
            <ul className="space-y-2">
              {footerLinks.produtos.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Suporte</h4>
            <ul className="space-y-2">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm text-background/70 mb-4">
              Receba ofertas exclusivas e novidades.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="seu@email.com"
                className="flex-1 h-10 px-4 rounded-lg bg-background/10 border border-background/20 text-sm placeholder:text-background/50 focus:outline-none focus:border-primary"
              />
              <button className="h-10 px-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary-glow transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © 2025 Piscinas Inteligentes. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-background/50">
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
