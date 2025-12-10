import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const timelineEvents = [
  {
    year: "1998",
    title: "Company Founded",
    description: "Established as a trading & distribution company supplying sorghum to breweries and palm oil to refineries.",
  },
  {
    year: "2000",
    title: "Expansion Phase",
    description: "Built palm kernel crushing plant in Akute, Lagos, marking our entry into processing.",
  },
  {
    year: "2002",
    title: "Backward Integration",
    description: "Developed our own palm plantation in Kwara State for sustainable raw material supply.",
  },
  {
    year: "2008",
    title: "Strategic Relocation",
    description: "Relocated crushing operations to Kwara State, closer to our plantation for operational efficiency.",
  },
  {
    year: "2014",
    title: "Refinery Launch",
    description: "Commissioned state-of-the-art vegetable oil refinery and launched RBDPKO production.",
  },
  {
    year: "Present",
    title: "Fully Integrated Producer",
    description: "Operating as a fully integrated producer with refinery, plantation, and bottling facilities under the Samcas brand.",
  },
];

const TimelineSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 bg-cream-dark relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
            Our Journey
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            A Legacy of <span className="text-primary">Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From humble beginnings to becoming one of Nigeria's premier agribusiness companies, 
            our journey is marked by innovation, resilience, and commitment to excellence.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-1/2" />

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={cn(
                "relative pl-12 md:pl-0 mb-12 last:mb-0 transition-all duration-700",
                index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]",
                visibleItems.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Year badge */}
              <div
                className={cn(
                  "absolute left-0 md:left-1/2 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center md:-translate-x-1/2 shadow-elegant z-10"
                )}
              >
                <div className="w-3 h-3 rounded-full bg-accent" />
              </div>

              {/* Content card */}
              <div className="bg-card rounded-xl p-6 shadow-card hover-lift">
                <span className="inline-block text-accent font-serif text-xl font-semibold mb-2">
                  {event.year}
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  {event.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
