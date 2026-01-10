import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Mariana Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "Comprei a piscina de PVC para minha casa e foi a melhor decisão! A montagem foi super fácil e a qualidade é incrível. Meus filhos amaram!",
    avatar: "MS",
  },
  {
    id: 2,
    name: "Carlos Eduardo",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Moro em apartamento e achei que nunca poderia ter uma piscina. A piscina inflável premium cabe perfeitamente na minha varanda!",
    avatar: "CE",
  },
  {
    id: 3,
    name: "Ana Beatriz",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "A banheira de meditação transformou minha rotina. Agora tenho momentos de relaxamento profundo todos os dias. Recomendo demais!",
    avatar: "AB",
  },
  {
    id: 4,
    name: "Roberto Lima",
    location: "Curitiba, PR",
    rating: 5,
    text: "Excelente atendimento e produto de primeira qualidade. A entrega foi rápida e a equipe me ajudou em todas as dúvidas.",
    avatar: "RL",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="depoimentos" className="py-20 bg-background overflow-hidden" aria-labelledby="depoimentos-titulo">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 id="depoimentos-titulo" className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milhares de famílias já transformaram seus espaços com nossas
            piscinas e banheiras.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="Depoimentos de clientes">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              role="listitem"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" aria-hidden="true" />

              <blockquote className="text-sm text-muted-foreground mb-6 line-clamp-4">
                "{testimonial.text}"
              </blockquote>

              <div className="flex items-center gap-1 mb-4" role="img" aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-water flex items-center justify-center text-primary-foreground font-semibold text-sm" aria-hidden="true">
                  {testimonial.avatar}
                </div>
                <div>
                  <cite className="font-medium text-sm not-italic">{testimonial.name}</cite>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </footer>
            </article>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden" role="region" aria-label="Carrossel de depoimentos" aria-roledescription="carousel">
          <article className="bg-card p-6 rounded-2xl shadow-card">
            <Quote className="w-8 h-8 text-primary/20 mb-4" aria-hidden="true" />

            <blockquote className="text-sm text-muted-foreground mb-6">
              "{testimonials[currentIndex].text}"
            </blockquote>

            <div className="flex items-center gap-1 mb-4" role="img" aria-label={`Avaliação: ${testimonials[currentIndex].rating} de 5 estrelas`}>
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" aria-hidden="true" />
              ))}
            </div>

            <div className="flex items-center justify-between">
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-water flex items-center justify-center text-primary-foreground font-semibold text-sm" aria-hidden="true">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <cite className="font-medium text-sm not-italic">
                    {testimonials[currentIndex].name}
                  </cite>
                  <p className="text-xs text-muted-foreground">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </footer>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                  className="min-w-[44px] min-h-[44px]"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                  className="min-w-[44px] min-h-[44px]"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </article>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Indicadores de depoimentos">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`min-w-[44px] min-h-[44px] flex items-center justify-center transition-all ${
                  index === currentIndex
                    ? ""
                    : ""
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Ver depoimento ${index + 1} de ${testimonials.length}`}
              >
                <span className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "bg-muted-foreground/30"
                }`} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
