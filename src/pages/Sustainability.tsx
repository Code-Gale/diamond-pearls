import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Recycle, Leaf, Users, Heart, TreePine, Droplets } from "lucide-react";

const commitments = [
  {
    icon: Recycle,
    title: "Waste Reduction",
    description: "Implementing comprehensive waste management systems to minimize environmental impact across all operations.",
  },
  {
    icon: TreePine,
    title: "Sustainable Forestry",
    description: "Responsible plantation management with replanting programs to maintain ecological balance.",
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Advanced water treatment and recycling systems to reduce consumption and protect local water sources.",
  },
  {
    icon: Leaf,
    title: "Biomass Energy",
    description: "Converting agricultural by-products into renewable energy, reducing reliance on fossil fuels.",
  },
  {
    icon: Users,
    title: "Community Integration",
    description: "Partnering with local communities for employment, development, and shared prosperity.",
  },
  {
    icon: Heart,
    title: "Responsible Agriculture",
    description: "Adhering to best practices in sustainable farming and ethical production standards.",
  },
];

const csrInitiatives = [
  "Food programs supporting local schools and communities",
  "Educational scholarships for students in our operational areas",
  "Infrastructure development projects in host communities",
  "Health and wellness initiatives for employees and families",
  "Environmental awareness campaigns and tree planting",
];

const Sustainability = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://diamondpearlsltd.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Sustainability",
        "item": "https://diamondpearlsltd.com/sustainability"
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <title>Sustainability | Environmental Commitment & CSR | Diamond Pearls Agro Allied Limited</title>
        <meta
          name="description"
          content="Discover Diamond Pearls Agro Allied Limited's commitment to sustainable agriculture, environmental stewardship, and community development. Learn about Diamond Pearls Agro Allied Limited's waste reduction, sustainable forestry, water conservation, and CSR initiatives."
        />
        <meta name="keywords" content="Diamond Pearls Agro Allied Limited sustainability, sustainable agriculture Nigeria, environmental stewardship, CSR initiatives, sustainable palm oil, eco-friendly agribusiness, community development" />
        <meta property="og:title" content="Sustainability | Environmental Commitment & CSR | Diamond Pearls Agro Allied Limited" />
        <meta property="og:description" content="Discover Diamond Pearls Agro Allied Limited's commitment to sustainable agriculture, environmental stewardship, and community development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diamondpearlsltd.com/sustainability" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sustainability | Diamond Pearls Agro Allied Limited" />
        <meta name="twitter:description" content="Discover Diamond Pearls Agro Allied Limited's commitment to sustainable agriculture, environmental stewardship, and community development." />
        <link rel="canonical" href="https://diamondpearlsltd.com/sustainability" />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
                Sustainability
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
                Growing <span className="text-accent">Responsibly</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Our commitment to sustainable practices ensures that we create value 
                for our stakeholders while protecting the environment for future generations.
              </p>
            </div>
          </div>
        </section>

        {/* Environmental Commitments */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
                Our Approach
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
                Environmental <span className="text-primary">Commitment</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We integrate sustainability into every aspect of our operations, 
                from plantation management to finished product delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitments.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover-lift"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <item.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CSR Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
                  Community Impact
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">
                  Corporate Social <span className="text-accent">Responsibility</span>
                </h2>
                <p className="text-primary-foreground/80 mb-8 leading-relaxed">
                  We believe in giving back to the communities that support our operations. 
                  Our CSR initiatives focus on education, health, and sustainable development.
                </p>

                <ul className="space-y-4">
                  {csrInitiatives.map((initiative, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span className="text-primary-foreground/90">{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { src: "/images/cr1.jpeg", alt: "CSR Image 1" },
                  { src: "/images/cr2.jpeg", alt: "CSR Image 2" },
                  { src: "/images/cr3.jpeg", alt: "CSR Image 3" },
                  { src: "/images/cr4.jpeg", alt: "CSR Image 4" },
                ].map((image, i) => (
                  <div
                    key={i}
                    className="aspect-square bg-primary-foreground/10 rounded-xl overflow-hidden"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Sustainability;
