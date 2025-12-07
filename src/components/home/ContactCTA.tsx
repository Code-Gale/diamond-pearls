import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, ArrowRight, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const locations = [
  {
    type: "Operations",
    address: "Km 5, Ajase-Ipo / Offa Road, Amberri Village, Kwara State",
    icon: Building2,
  },
  {
    type: "Headquarters",
    address: "Plot 357 Abisogun Leigh, Off Wempco Road, By AY Hotels, Ogba, Ikeja, Lagos",
    icon: MapPin,
  },
];

const ContactCTA = () => {
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
    <section ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div
            className={cn(
              "transition-all duration-700",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
              Get in Touch
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Partner With <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're looking for premium edible oils, exploring partnership opportunities, 
              or simply want to learn more about our operations, we'd love to hear from you.
            </p>

            {/* Email CTA */}
            <div className="flex items-center gap-4 p-4 bg-muted rounded-xl mb-8">
              <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                <Mail className="text-accent-foreground" size={20} />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground block">
                  Email Us
                </span>
                <a
                  href="mailto:info@diamondpearlsltd.com"
                  className="text-foreground font-medium hover:text-accent transition-colors"
                >
                  info@diamondpearlsltd.com
                </a>
              </div>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
            >
              <Link to="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Right - Location cards */}
          <div
            className={cn(
              "space-y-6 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <location.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-accent font-medium block mb-1">
                      {location.type}
                    </span>
                    <p className="text-foreground leading-relaxed">
                      {location.address}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div className="bg-muted rounded-2xl h-48 flex items-center justify-center border border-border/50">
              <div className="text-center">
                <MapPin className="mx-auto mb-2 text-muted-foreground" size={32} />
                <p className="text-sm text-muted-foreground">Interactive Map</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
