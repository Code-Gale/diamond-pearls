import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowRight, Building2 } from "lucide-react";
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

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
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

              <div className="flex items-center gap-4 p-4 bg-muted rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                  <Phone className="text-primary-foreground" size={20} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">
                    Call Us
                  </span>
                  <div className="space-y-1">
                    <a
                      href="tel:+2348036571791"
                      className="block text-foreground font-medium hover:text-accent transition-colors"
                    >
                      +234 803 657 1791
                    </a>
                    <a
                      href="tel:+2348055854911"
                      className="block text-foreground font-medium hover:text-accent transition-colors"
                    >
                      +234 805 585 4911
                    </a>
                  </div>
                </div>
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

            {/* Interactive Map */}
            <div className="bg-muted rounded-2xl h-48 overflow-hidden border border-border/50">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d3.3!3d6.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdcb28cc0bcb63eca!2sPlot%20357%20Abisogun%20Leigh%2C%20Off%20Wempco%20Road%2C%20Ogba%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Diamond Pearls Headquarters Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
