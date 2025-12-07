import { Helmet } from "react-helmet-async";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Send, Building2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll respond within 24-48 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Diamond Pearls Agro Allied Ltd</title>
        <meta
          name="description"
          content="Get in touch with Diamond Pearls Agro Allied Ltd. Contact our offices in Lagos and Kwara State for business inquiries."
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
                Contact Us
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
                Get in <span className="text-accent">Touch</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Have questions or interested in partnering with us? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
                  Our Locations
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Building2 size={20} className="text-primary" />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-widest text-accent font-medium block mb-1">
                          Operations
                        </span>
                        <p className="text-foreground">
                          Km 5, Ajase-Ipo / Offa Road, Amberri Village, Kwara State
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-primary" />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-widest text-accent font-medium block mb-1">
                          Headquarters
                        </span>
                        <p className="text-foreground">
                          Plot 357 Abisogun Leigh, Off Wempco Road, By AY Hotels, Ogba, Ikeja, Lagos
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="text-accent" />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-1">
                          Email
                        </span>
                        <a
                          href="mailto:info@diamondpearlsltd.com"
                          className="text-foreground hover:text-accent transition-colors"
                        >
                          info@diamondpearlsltd.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone size={20} className="text-primary" />
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-widest text-accent font-medium block mb-1">
                          Phone
                        </span>
                        <div className="space-y-1">
                          <a
                            href="tel:+2348036571791"
                            className="block text-foreground hover:text-accent transition-colors"
                          >
                            +234 803 657 1791
                          </a>
                          <a
                            href="tel:+2348055854911"
                            className="block text-foreground hover:text-accent transition-colors"
                          >
                            +234 805 585 4911
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Map */}
                <div className="bg-muted rounded-2xl h-64 overflow-hidden border border-border/50">
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

              {/* Contact Form */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input
                        required
                        placeholder="John"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input
                        required
                        placeholder="Doe"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      placeholder="+234 XXX XXX XXXX"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      required
                      placeholder="How can we help you?"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;
