import { Link } from "react-router-dom";
import categoryInflatable from "@/assets/category-inflatable.jpg";
import categoryPvc from "@/assets/category-pvc.jpg";
import categoryTowableFloat from "@/assets/category-towable-float.jpg";
import categoryTanningLounger from "@/assets/category-tanning-lounger.jpg";

const categories = [
  {
    id: "pvc",
    title: "Piscinas de PVC",
    description: "Estruturas resistentes com armação metálica para sua família",
    image: categoryPvc,
    color: "from-primary/80 to-primary-deep/80",
  },
  {
    id: "inflatable",
    title: "Piscinas Infláveis",
    description: "Praticidade e diversão para todas as idades",
    image: categoryInflatable,
    color: "from-accent/80 to-accent-glow/80",
  },
  {
    id: "towable",
    title: "Boias Infláveis Rebocáveis",
    description: "Diversão aquática para toda a família",
    image: categoryTowableFloat,
    color: "from-primary-deep/80 to-primary/80",
  },
  {
    id: "lounger",
    title: "Espreguiçadeira de Bronzeamento",
    description: "Relaxe e bronze sob o sol com conforto",
    image: categoryTanningLounger,
    color: "from-accent-glow/80 to-accent/80",
  },
];

export function CategoriesSection() {
  return (
    <section id="categorias" className="py-20 bg-background" aria-labelledby="categorias-titulo">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary uppercase tracking-wider" aria-hidden="true">
            O Que Oferecemos
          </span>
          <h2 id="categorias-titulo" className="font-display text-3xl md:text-4xl font-bold mt-2 mb-4">
            Soluções para <span className="text-gradient">lazer e bem-estar</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Piscinas de PVC, piscinas infláveis e não infláveis, banheiras e baldes de meditação. Tudo para transformar seu espaço em um ambiente de relaxamento.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="group relative h-72 rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 animate-fade-in min-h-[44px]"
              style={{ animationDelay: `${index * 100}ms` }}
              aria-label={`Ver categoria ${category.title}`}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={`${category.title} - ${category.description}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={400}
                height={288}
              />

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                  {category.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {category.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border-2 border-primary-foreground/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
