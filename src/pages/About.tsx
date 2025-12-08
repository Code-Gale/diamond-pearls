import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { Target, Eye, Users, X } from "lucide-react";
import Gallery from "@/components/ui/Gallery";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

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
  { target: 27, suffix: "", label: "Years of Excellence" },
];

const directors = [
  {
    name: "Mr Samson Adewale Adeyemo",
    role: "MD/CEO",
    bio: "Visionary leader with over 25 years of experience in Nigeria's agribusiness sector, driving Diamond Pearls' transformation from trading to integrated production.",
    image: "/images/md.jpeg",
    fullBio: `Samson Wale Adeyemo attended Offa Grammar School for his secondary education and finished in 1982. He graduated in Land Surveying in 1987 and equally holds a Master of Public Administration Degree from the Ogun State University in 1997. Adeyemo is a Lagos Business School ALUMNI.

Wale Adeyemo did his NYSC with Messrs. Yahaya and Associates in Kano in 1987 and commenced his working career with the Federal Civil Service in 1988 and worked with the Federal Ministry of Works and Housing. In 1989 he left the Civil Service to join Messrs. Seismograph Services Ltd, an Oil Servicing Company. In the same year he got an appointment with Schlumberger Nigeria Limited, an oil servicing company, where he worked for four (4) years. Mr. Adeyemo, an oil field Seismic Surveyor, has quality experience in marine and maritime operations by virtue of his experience at Seismograph Oil Servicing Company and Schlumberger Limited. He worked on a lot of offshore, on shore and shallow marine oil fields.

He left Schlumberger in 1993 to start his own private business, supplying grains like sorghum etc to many breweries, including Guinness Nigeria Plc., Consolidated Breweries, Nigeria Breweries Plc., etc. He was also dealing in supply of Palm Kernel, Palm kernel oil and Palm oil to vegetable oil refining companies like Real Oil Mill and OM Oil Mill all in Lagos.

He formerly incorporated Diamond Pearls Agro allied limited in 1998, commenced operations the same year and remains as the founder and Chief Executive Officer till date.`,
  },
  {
    name: "Mr R.A Lawal-Rabana (SAN)",
    role: "Chairman",
    bio: "Distinguished legal luminary and Senior Advocate of Nigeria, providing strategic governance and legal expertise to the board.",
    image: "/images/rabana.png",
    fullBio: `Rafiu Adeyanju Lawal-Rabana, SAN, is a distinguished legal practitioner with over four decades of experience and a Senior Advocate of Nigeria since 2008. He has served in several national legal leadership roles, including on the Council of Legal Education, the Federal Judicial Service Commission, and as General Secretary of the Nigerian Bar Association. A Life Bencher, he has chaired key committees of the Body of Benchers, including Ethics & Compliance and Projects & Infrastructure. As Chief Counsel of RA Lawal-Rabana & Co., he has represented major government institutions and corporate organisations across Nigeria.`,
  },
  {
    name: "Mrs O. O. Adeyemo",
    role: "Director",
    bio: "Key contributor to the company's operational excellence and sustainable growth initiatives since the company's founding.",
    image: "/images/oyenike-olushola.png",
    fullBio: `Mrs. Oyenike Olushola Adeyemo is an accomplished educationist and business professional. She holds an HND in Banking and Finance from Kwara State Polytechnic, a Postgraduate Diploma and Master's in Education from the University of Calabar, and an MBA (General Management) from the Federal University of Technology, Akure.

She began her career as a teacher at Shadel International School, Lagos (2002–2006), before joining Diamond Pearls Agro Allied Ltd. In 2008, she founded Nikwales Schools, which she continues to run full-time.

Her broad academic background, professional experience, and leadership in education make her a valuable contributor to the project.`,
  },
  {
    name: "Dr Bode Oloruntoba",
    role: "Independent Director",
    bio: "Brings extensive expertise in corporate governance and agricultural economics to guide strategic decision-making.",
    image: "/images/dr_oloruntoba.png",
    fullBio: `Dr. Olabode Oloruntoba is an accomplished finance and business leader with a PhD in International Business and multiple professional fellowships across banking, accounting, and taxation. His career spans over two decades in financial strategy, investment banking, and business advisory, beginning at Unilever's International Audit Department and later at Nigerian Intercontinental Merchant Bank. A prize-winning accounting graduate and alumnus of globally renowned institutions including Stellenbosch, Lagos Business School, and INSEAD, he is the founder of Financeme Marketplace Capital Limited and serves on the faculty of Trinity University, Lagos.`,
  },
  {
    name: "Mr Babatunde Joseph Oyeyemi",
    role: "Independent Director",
    bio: "Seasoned business professional contributing independent oversight and strategic insights to the board.",
    image: "/images/oyeyemi.png",
    fullBio: `Babatunde Joseph Oyeyemi is a veteran development finance professional with over 30 years of service at the Bank of Industry, where he rose to General Manager and Executive Management member. His experience spans project appraisal, credit risk management, SME development, and large enterprise financing, and he played key roles in major institutional transformations and initiatives, including BOI's renewable energy and creative industry programmes.

He has served on the boards of several leading Nigerian companies and currently sits on the boards of BOI Investment & Trust Company Limited, Polyfilm Packaging Company Limited, and Mecure Industries Plc. He is the Managing Partner of Peculiar Consult & Investments Limited, providing advisory support to businesses nationwide.`,
  },
];

const About = () => {
  const [visibleStats, setVisibleStats] = useState(false);
  const [startCounter, setStartCounter] = useState(false);
  const [selectedDirector, setSelectedDirector] = useState<number | null>(null);
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
                  onClick={() => setSelectedDirector(index)}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover-lift cursor-pointer transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto overflow-hidden">
                    {director.image ? (
                      <img
                        src={director.image}
                        alt={director.name}
                        className="w-full h-full object-contain"
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
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3 text-justify">
                      {director.bio}
                    </p>
                    <span className="text-xs text-accent font-medium hover:underline">
                      View Full Profile →
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Director Detail Dialog */}
            <Dialog open={selectedDirector !== null} onOpenChange={(open) => !open && setSelectedDirector(null)}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto [&>button]:hidden">
                {selectedDirector !== null && (
                  <div className="relative">
                    {/* Close button */}
                    <button
                      onClick={() => setSelectedDirector(null)}
                      className="absolute top-0 right-0 z-50 bg-background/90 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
                      aria-label="Close"
                    >
                      <X className="h-5 w-5 text-foreground" />
                    </button>

                    {/* Director Card */}
                    <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                      <div className="flex flex-col md:flex-row gap-6 mb-6">
                        <div className="flex-shrink-0">
                          <div className="w-40 h-40 rounded-full bg-primary/10 flex items-center justify-center mx-auto md:mx-0 overflow-hidden">
                            {directors[selectedDirector].image ? (
                              <img
                                src={directors[selectedDirector].image}
                                alt={directors[selectedDirector].name}
                                className="w-full h-full object-contain"
                              />
                            ) : (
                              <Users size={40} className="text-primary" />
                            )}
                          </div>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <span className="inline-block px-4 py-2 bg-accent/20 rounded-full text-sm font-medium text-accent mb-3">
                            {directors[selectedDirector].role}
                          </span>
                          <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
                            {directors[selectedDirector].name}
                          </h2>
                        </div>
                      </div>

                      {/* Full Bio */}
                      <div className="prose prose-sm max-w-none">
                        <div className="text-muted-foreground leading-relaxed whitespace-pre-line text-justify">
                          {directors[selectedDirector].fullBio}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Farm Gallery */}
        <Gallery
          images={[
            { src: "/images/Picture1.jpg", alt: "Farm Image 1" },
            { src: "/images/Picture10.jpg", alt: "Farm Image 2" },
            { src: "/images/Picture11.jpg", alt: "Farm Image 3" },
            { src: "/images/Picture12.jpg", alt: "Farm Image 4" },
            { src: "/images/Picture13.jpg", alt: "Farm Image 5" },
            { src: "/images/Picture14.jpg", alt: "Farm Image 6" },
            { src: "/images/12.jpeg", alt: "Farm Image 7" },
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
