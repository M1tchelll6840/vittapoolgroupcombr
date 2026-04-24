import { Button } from "@/components/ui/button";
import { ArrowRight, Waves, Shield, Truck, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-pool.jpg";
import { COMPANY_INFO } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image - LCP optimization */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Piscina de luxo com água cristalina em ambiente residencial"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      {/* Floating bubbles decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-10 w-3 h-3 rounded-full bg-primary/20 animate-float" />
        <div className="absolute top-1/3 left-1/4 w-4 h-4 rounded-full bg-accent/20 animate-float delay-200" />
        <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-primary/30 animate-float delay-400" />
        <div className="absolute bottom-1/4 right-10 w-5 h-5 rounded-full bg-accent/15 animate-float delay-300" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Waves className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-sm font-medium text-primary">
              Lazer & Bem-Estar
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in delay-100">
            Transforme seu espaço em um
            <span className="text-gradient"> refúgio de lazer, bem-estar e relaxamento</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in delay-200 max-w-xl">
            Piscinas modernas, banheiras de meditação e soluções inteligentes para quem busca mais qualidade de vida em casa.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in delay-300">
            <Button variant="hero" size="xl" className="min-h-[44px]" asChild>
              <a href="#produtos">
                Ver Produtos
                <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
              </a>
            </Button>
            <Button variant="outline" size="xl" className="min-h-[44px]" asChild>
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com Especialista no WhatsApp - abre em nova aba"
              >
                <MessageCircle className="w-5 h-5 mr-2" aria-hidden="true" />
                Falar com Especialista
              </a>
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap gap-6 animate-fade-in delay-400">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Shield className="w-4 h-4 text-accent" aria-hidden="true" />
              </div>
              <span>Garantia de 2 anos</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Truck className="w-4 h-4 text-accent" aria-hidden="true" />
              </div>
              <span>Frete grátis Brasil</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <Waves className="w-4 h-4 text-accent" aria-hidden="true" />
              </div>
              <span>Instalação fácil</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-20 z-10" aria-hidden="true">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          <path
            d="M0,60 C300,100 600,20 900,60 C1050,80 1200,40 1200,60 L1200,120 L0,120 Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
}
