import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Users, ArrowRight, Mail } from "lucide-react";
import Gallery from "@/components/ui/Gallery";
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: Briefcase,
    title: "Career Growth",
    description: "Opportunities for professional development and advancement within our growing organization.",
  },
  {
    icon: GraduationCap,
    title: "Learning & Development",
    description: "Training programs and skill development initiatives to enhance your capabilities.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work alongside passionate professionals in a supportive and inclusive environment.",
  },
];

const teamMembers = [
  {
    name: "Engr Rasheed Adelabu",
    role: "Chief Operating Officer",
    image: "/images/rasheed.jpeg",
  },
  {
    name: "Mrs Olayemi Ayebamiru",
    role: "Chief Financial Officer",
    image: "/images/olayemi.jpeg",
  },
  {
    name: "Mr Tajudeen Ajao",
    role: "Head of Procurement",
    image: "/images/tajudeen.jpeg",
  },
  {
    name: "Mr Taiye Oyinloye",
    role: "Head of Sales",
    image: "/images/taiye.jpeg",
  },
  {
    name: "Barrister Pete Offushi",
    role: "Head of Human Resources",
    image: "/images/pete.jpeg",
  },
  {
    name: "Mr Rafiu Musa",
    role: "Head of Maintenance",
    image: "/images/rafiu.jpeg",
  },
  {
    name: "Mr Kolawole Akintayo",
    role: "Health Safety and Environmental Manager",
    image: "/images/kolawole.jpeg",
  },
];

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers | Diamond Pearls Agro Allied Ltd</title>
        <meta
          name="description"
          content="Join Diamond Pearls Agro Allied Ltd and build your career in Nigeria's leading agribusiness company. Explore opportunities and internships."
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
                Careers
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
                Building Tomorrow's <span className="text-accent">Agribusiness Leaders</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Join our team of dedicated professionals working to transform Nigeria's 
                agricultural sector and contribute to food security.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
                Why Join Us
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Grow With <span className="text-primary">Diamond Pearls</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover-lift text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <benefit.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-24 bg-cream-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
                Opportunities
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
                Current <span className="text-primary">Openings</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We occasionally have openings for qualified professionals. We also offer 
                internship and SIWES opportunities for students looking to gain practical 
                experience in the agribusiness sector.
              </p>

              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 mb-8">
                <Mail size={32} className="mx-auto mb-4 text-accent" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                  Send Your Application
                </h3>
                <p className="text-muted-foreground mb-4">
                  Interested in joining our team? Send your CV and cover letter to:
                </p>
                <a
                  href="mailto:hr@diamondpearlsltd.com"
                  className="text-lg font-medium text-primary hover:text-accent transition-colors"
                >
                  hr@diamondpearlsltd.com
                </a>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <a href="mailto:hr@diamondpearlsltd.com">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-24 bg-cream-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
                Our Team
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Meet Our <span className="text-primary">Leadership Team</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals dedicated to driving excellence and innovation in agribusiness.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 shadow-card border border-border/50 hover-lift transition-all duration-300 hover:shadow-xl"
                >
                  <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <Users size={24} className="text-primary" />
                    )}
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-accent/20 rounded-full text-xs font-medium text-accent mb-3">
                      {member.role}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Careers Gallery */}
        <Gallery
          images={[
            { src: "/images/workspace.jpeg", alt: "Workspace" },
            { src: "/images/Picture20.jpg", alt: "Careers Image 1" },
            { src: "/images/Picture21.jpg", alt: "Careers Image 2" },
            { src: "/images/Picture22.jpg", alt: "Careers Image 3" },
            { src: "/images/13.jpeg", alt: "Careers Image 4" },
          ]}
          tag="Workplace Gallery"
          title={
            <>
              Life at <span className="text-primary">Diamond Pearls</span>
            </>
          }
          subtitle="Get a glimpse of our workplace culture, team, and facilities."
          className="bg-background"
        />
      </main>

      <Footer />
    </>
  );
};

export default Careers;
