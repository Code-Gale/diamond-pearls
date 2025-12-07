import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-serif font-bold text-xl">DP</span>
              </div>
              <div>
                <span className="font-serif font-semibold text-lg">Diamond Pearls</span>
                <span className="block text-xs tracking-widest uppercase text-primary-foreground/70">
                  Agro Allied Ltd
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              A privately owned Nigerian agribusiness, evolving from commodity trading 
              into a fully integrated producer of premium edible oils since 1998.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "Our Products", "Sustainability", "Careers", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase().replace(" ", "-").replace("us", "").replace("our-", "")}`}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Operations */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Operations</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-primary-foreground/60 block mb-1">
                    Operations
                  </span>
                  <p className="text-sm text-primary-foreground/80">
                    Km 5, Ajase-Ipo / Offa Road, Amberri Village, Kwara State
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin size={18} className="text-accent flex-shrink-0 mt-1" />
                <div>
                  <span className="text-xs uppercase tracking-wider text-primary-foreground/60 block mb-1">
                    Headquarters
                  </span>
                  <p className="text-sm text-primary-foreground/80">
                    Plot 357 Abisogun Leigh, Off Wempco Road, By AY Hotels, Ogba, Ikeja, Lagos
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="mailto:info@diamondpearlsltd.com"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                <Mail size={18} className="text-accent" />
                info@diamondpearlsltd.com
              </a>
              <a
                href="tel:+234"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
              >
                <Phone size={18} className="text-accent" />
                +234 XXX XXX XXXX
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Diamond Pearls Agro Allied Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-primary-foreground/60">
              <Link to="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-accent transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
