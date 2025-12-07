import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { Target, Eye, Users } from "lucide-react";
import Gallery from "@/components/ui/Gallery";

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
      <span className="block text-4xl md:text-5xl font-serif font-semibold text-accent mb-2">
        {count.toLocaleString()}{suffix}
      </span>
      <span className="text-sm text-primary-foreground/70">{label}</span>
    </div>
  );
};

const stats = [
  { target: 1000, suffix: "+", label: "Hectares of Plantation" },
  { target: 200, suffix: "", label: "Tons/Day Crushing Capacity" },
  { target: 180, suffix: "", label: "Tons/Day Refining Capacity" },
  { target: 25, suffix: "", label: "Years of Excellence" },
];

const directors = [
  {
    name: "Mr Samson Adewale Adeyemo",
    role: "MD/CEO",
    bio: "Visionary leader with over 25 years of experience in Nigeria's agribusiness sector, driving Diamond Pearls' transformation from trading to integrated production.",
    image: "/images/samson-adewale.png",
  },
  {
    name: "Mr R.A Lawal-Rabana (SAN)",
    role: "Chairman",
    bio: "Distinguished legal luminary and Senior Advocate of Nigeria, providing strategic governance and legal expertise to the board.",
    image: "/images/rabana.png",
  },
  {
    name: "Mrs O. O. Adeyemo",
    role: "Director",
    bio: "Key contributor to the company's operational excellence and sustainable growth initiatives since the company's founding.",
    image: "/images/oyenike-olushola.png",
  },
  {
    name: "Dr Bode Oloruntoba",
    role: "Independent Director",
    bio: "Brings extensive expertise in corporate governance and agricultural economics to guide strategic decision-making.",
    image: "/images/dr_oloruntoba.png",
  },
  {
    name: "Mr Babatunde Joseph Oyeyemi",
    role: "Independent Director",
    bio: "Seasoned business professional contributing independent oversight and strategic insights to the board.",
    image: "/images/oyeyemi.png",
  },
];

const About = () => {
  const [visibleStats, setVisibleStats] = useState(false);
  const [startCounter, setStartCounter] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleStats(true);
          setStartCounter(true);
          observer.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | Diamond Pearls Agro Allied Ltd</title>
        <meta
          name="description"
          content="Learn about Diamond Pearls Agro Allied Ltd's mission, vision, and leadership team. Nigeria's premier integrated edible oils producer since 1998."
        />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
                About Us
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
                Building Nigeria's <span className="text-accent">Agribusiness</span> Future
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                From commodity trading to fully integrated production, our journey reflects 
                our commitment to quality, innovation, and sustainable agriculture.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border/50 hover-lift">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target size={28} className="text-primary" />
                </div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide high-quality edible oils through innovative, ethical and 
                  responsible agricultural practices, contributing to Nigeria's food 
                  security and economic development.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border/50 hover-lift">
                <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                  <Eye size={28} className="text-accent" />
                </div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To become Africa's leading sustainable producer of premium edible oils, 
                  contributing to food security, economic growth, and environmental 
                  stewardship across the continent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section ref={statsRef} className="py-20 bg-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={cn(
                    "transition-all duration-700",
                    visibleStats
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <StatCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    label={stat.label}
                    start={startCounter}
                    delay={index * 100}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-24 bg-cream-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
                Leadership
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Board of <span className="text-primary">Directors</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Guided by experienced leaders committed to excellence, integrity, and sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {directors.map((director, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover-lift"
                >
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto overflow-hidden">
                    {director.image ? (
                      <img
                        src={director.image}
                        alt={director.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <Users size={24} className="text-primary" />
                    )}
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-accent/20 rounded-full text-xs font-medium text-accent mb-3">
                      {director.role}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                      {director.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {director.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Farm Gallery */}
        <Gallery
          images={[
            { src: "/images/Picture10.jpg", alt: "Farm Image 1" },
            { src: "/images/Picture11.jpg", alt: "Farm Image 2" },
            { src: "/images/Picture12.jpg", alt: "Farm Image 3" },
            { src: "/images/Picture13.jpg", alt: "Farm Image 4" },
            { src: "/images/Picture14.jpg", alt: "Farm Image 5" },
          ]}
          tag="Pictures of The Farm"
          title={
            <>
              Our <span className="text-primary">Farm</span> & Plantation
            </>
          }
          subtitle="Take a visual journey through our sustainable palm plantation and farming operations."
          className="bg-cream-dark"
        />
      </main>

      <Footer />
    </>
  );
};

export default About;
