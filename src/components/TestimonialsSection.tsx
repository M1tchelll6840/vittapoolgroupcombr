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
    <section id="depoimentos" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            O que nossos <span className="text-gradient">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Milhares de famílias já transformaram seus espaços com nossas
            piscinas e banheiras.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />

              <p className="text-sm text-muted-foreground mb-6 line-clamp-4">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-water flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="bg-card p-6 rounded-2xl shadow-card">
            <Quote className="w-8 h-8 text-primary/20 mb-4" />

            <p className="text-sm text-muted-foreground mb-6">
              "{testimonials[currentIndex].text}"
            </p>

            <div className="flex items-center gap-1 mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-water flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {testimonials[currentIndex].avatar}
                </div>
                <div>
                  <p className="font-medium text-sm">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevTestimonial}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextTestimonial}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-primary"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
