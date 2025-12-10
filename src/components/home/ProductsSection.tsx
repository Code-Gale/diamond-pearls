import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Droplets, Leaf, FlaskConical, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const products = [
  {
    icon: Droplets,
    title: "Refined Bleached Deodorised Palm Kernel Oil",
    shortName: "RBDPKO",
    description: "High-quality refined palm kernel oil, perfect for food processing and cosmetic applications.",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: FlaskConical,
    title: "Refined Bleached Deodorised Palm Oil",
    shortName: "RBDPO",
    description: "Premium refined palm oil suitable for cooking, frying, and industrial food production.",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Leaf,
    title: "Refined Soya Oil",
    shortName: "RSO",
    description: "Light and healthy soya oil, ideal for everyday cooking and food manufacturing.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

const ProductsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
              Our Products
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground">
              Premium <span className="text-primary">Edible Oils</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right">
            Discover our range of high-quality vegetable oils, produced with state-of-the-art 
            technology and rigorous quality control.
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {products.map((product, index) => (
            <div
              key={index}
              className={cn(
                "group bg-card rounded-2xl p-8 shadow-card hover-lift border border-border/50 transition-all duration-500",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div
                className={cn(
                  "w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110",
                  product.color
                )}
              >
                <product.icon size={28} />
              </div>

              {/* Badge */}
              <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground mb-3">
                {product.shortName}
              </span>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Link */}
              <Link
                to="/products"
                className="inline-flex items-center text-sm font-medium text-accent hover:text-primary transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={cn(
            "text-center transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
          >
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
