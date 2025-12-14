import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, TreePine, Factory, Beaker, Package } from "lucide-react";
import { cn } from "@/lib/utils";

const facilities = [
  {
    icon: TreePine,
    title: "Palm Plantation",
    location: "Kwara State",
    description: "Over 1000 hectares of sustainably managed palm plantation providing fresh fruit bunches for our operations.",
    stat: "1000+ Hectares",
  },
  {
    icon: Factory,
    title: "Crushing Plant",
    location: "Kwara State",
    description: "Modern crushing facility processing palm kernels with a capacity of 200 tons per day.",
    stat: "200 Tons/Day",
  },
  {
    icon: Beaker,
    title: "Refineries",
    location: "Kwara State",
    description: "State-of-the-art vegetable oil refineries producing premium RBDPKO, RBDPO, and refined soya oil.",
    stat: "180 Tons/Day",
  },
  {
    icon: Package,
    title: "Bottling Facility",
    location: "Kwara State",
    description: "On-site bottling plant producing Samcas Vegetable Oil in various sizes for retail distribution.",
    stat: "Multiple SKUs",
  },
  {
    icon: Beaker,
    title: "Fractionation Plant",
    location: "Kwara State",
    description: "Advanced fractionation facility for separating palm oil into different fractions for specialized applications.",
    stat: "Specialized Processing",
  },
  {
    icon: Beaker,
    title: "Degumming Plant",
    location: "Kwara State",
    description: "Modern degumming facility for removing gums and impurities from crude oils to ensure premium quality.",
    stat: "Quality Processing",
  },
];

const FacilitySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % facilities.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + facilities.length) % facilities.length);
  };

  return (
    <section ref={sectionRef} className="py-24 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-hero-pattern opacity-10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
            Our Facilities
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">
            Operations & Facilities
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            From plantation to packaging, our vertically integrated operations ensure 
            quality control at every stage of production.
          </p>
        </div>

        {/* Facility showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Active facility details */}
          <div
            className={cn(
              "transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 lg:p-10 border border-primary-foreground/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center">
                    {(() => {
                      const IconComponent = facilities[activeIndex].icon;
                      return <IconComponent size={28} className="text-accent-foreground" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-primary-foreground/60 block">
                      {facilities[activeIndex].location}
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-primary-foreground">
                      {facilities[activeIndex].title}
                    </h3>
                  </div>
                </div>

                <p className="text-primary-foreground/80 leading-relaxed mb-8">
                  {facilities[activeIndex].description}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-serif font-semibold text-accent">
                      {facilities[activeIndex].stat}
                    </span>
                    <span className="block text-sm text-primary-foreground/60">Capacity</span>
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-2">
                    <button
                      onClick={prevSlide}
                      className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                      aria-label="Previous facility"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-12 h-12 rounded-full border border-primary-foreground/30 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
                      aria-label="Next facility"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Pagination dots */}
              <div className="flex justify-center gap-2 mt-6">
                {facilities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-2 h-2 rounded-full transition-all duration-300",
                      index === activeIndex
                        ? "bg-accent w-8"
                        : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                    )}
                    aria-label={`Go to facility ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Facility grid */}
          <div
            className={cn(
              "grid grid-cols-2 gap-4 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            {facilities.map((facility, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "p-6 rounded-xl text-left transition-all duration-300",
                  index === activeIndex
                    ? "bg-accent text-accent-foreground shadow-gold"
                    : "bg-primary-foreground/5 text-primary-foreground hover:bg-primary-foreground/10 border border-primary-foreground/10"
                )}
              >
                <facility.icon
                  size={24}
                  className={cn(
                    "mb-3",
                    index === activeIndex ? "text-accent-foreground" : "text-accent"
                  )}
                />
                <h4 className="font-serif font-semibold mb-1">{facility.title}</h4>
                <p
                  className={cn(
                    "text-xs",
                    index === activeIndex ? "text-accent-foreground/80" : "text-primary-foreground/60"
                  )}
                >
                  {facility.stat}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitySection;
