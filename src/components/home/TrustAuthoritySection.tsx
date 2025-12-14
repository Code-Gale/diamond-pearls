import { useEffect, useRef, useState } from "react";
import { Award, Shield, TrendingUp, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const trustPoints = [
  {
    icon: Award,
    title: "27+ Years Experience",
    description: "Established in 1998, we bring over two decades of expertise in agribusiness and edible oil production.",
  },
  {
    icon: Shield,
    title: "Vertically Integrated Structure",
    description: "Full value-chain control from plantation to packaging ensures quality, traceability, and reliability at every stage.",
  },
  {
    icon: TrendingUp,
    title: "Reliability & Traceability",
    description: "Our integrated operations provide complete traceability from source to finished product, ensuring consistent quality.",
  },
  {
    icon: CheckCircle2,
    title: "Ethical Agribusiness Practices",
    description: "Committed to sustainable practices, ethical sourcing, and responsible agribusiness operations across Nigeria.",
  },
];

const TrustAuthoritySection = () => {
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
    <section ref={sectionRef} className="py-24 bg-cream-dark relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
            Trust & Authority
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Why Diamond Pearls Agro Allied Limited
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence, integrated operations, and ethical practices makes us Nigeria's trusted partner in edible oil production.
          </p>
        </div>

        {/* Trust points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className={cn(
                "bg-card rounded-2xl p-8 shadow-card hover-lift border border-border/50 transition-all duration-500",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <point.icon size={28} className="text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustAuthoritySection;

