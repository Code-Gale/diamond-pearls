import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Custom hook for counter animation
const useCounter = (target: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, start]);

  return count;
};

// Stat Counter Component
const StatCounter = ({
  target,
  suffix,
  label,
  start,
  delay = 0,
}: {
  target: number;
  suffix: string;
  label: string;
  start: boolean;
  delay?: number;
}) => {
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    if (start) {
      const timer = setTimeout(() => {
        setShouldStart(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [start, delay]);

  const count = useCounter(target, 2000, shouldStart);

  return (
    <div className="text-center">
      <span className="block text-3xl md:text-4xl font-serif font-semibold text-accent mb-1">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-sm text-primary-foreground/60">{label}</span>
    </div>
  );
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [startCounter, setStartCounter] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStartCounter(true);
            observer.disconnect(); // Stop observing once animation starts
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-hero-pattern opacity-30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-primary-foreground/90 font-medium">
              Established 1998 • Nigeria's Premium Agribusiness
            </span>
          </div>

          {/* Headline */}
          <h1
            className={cn(
              "font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground leading-tight mb-6 transition-all duration-700 delay-100",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            Diamond Pearls Agro Allied Limited – Nigeria's Leading Integrated Edible Oil Producer
          </h1>

          {/* Above-the-fold Brand Description (CRITICAL - First 120 Words) */}
          <div
            className={cn(
              "text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto mb-6 leading-relaxed transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <p className="mb-4">
              Diamond Pearls Agro Allied Limited is a privately owned Nigerian agribusiness company established in 1998. Formerly known as Diamond Pearls, the company operates as a fully integrated agro-allied enterprise specializing in the production of premium edible oils, including Refined Bleached Deodorised Palm Kernel Oil (RBDPKO), Refined Palm Oil (RBDPO), and Refined Soya Oil (RSO). With plantation, crushing, refining, and bottling facilities located in Kwara State and corporate headquarters in Lagos, Diamond Pearls Agro Allied Limited serves food manufacturers, industrial processors, and bulk buyers across Nigeria and West Africa.
            </p>
            <p className="text-base md:text-lg">
              <strong>Brand Name Variants:</strong> Diamond Pearls Agro Allied Limited, Diamond Pearls Agro Allied Ltd, and Diamond Pearls Nigeria all refer to the same company entity.
            </p>
          </div>

          {/* CTAs */}
          <div
            className={cn(
              "flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold font-medium px-8 h-14 text-base"
            >
              <Link to="/products">
                Explore Our Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 bg-background/90 backdrop-blur-sm text-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground h-14 px-8 text-base font-medium"
            >
              <Link to="/about">
                <Play className="mr-2 h-5 w-5" />
                Our Story
              </Link>
            </Button>
          </div>

          {/* Stats preview */}
          <div
            ref={statsRef}
            className={cn(
              "grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-primary-foreground/10 transition-all duration-700 delay-500",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <StatCounter
              target={1000}
              suffix="+"
              label="Hectares of Plantation"
              start={startCounter}
              delay={0}
            />
            <StatCounter
              target={200}
              suffix=""
              label="Tons/Day Crushing Capacity"
              start={startCounter}
              delay={200}
            />
            <StatCounter
              target={180}
              suffix=""
              label="Tons/Day Refining Capacity"
              start={startCounter}
              delay={400}
            />
            <StatCounter
              target={27}
              suffix=""
              label="Years of Excellence"
              start={startCounter}
              delay={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
