import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Droplets, Leaf, FlaskConical, Shell, Cookie, Fuel } from "lucide-react";
import Gallery from "@/components/ui/Gallery";

const products = [
  {
    icon: FlaskConical,
    title: "Refined Bleached Deodorised Palm Oil",
    shortName: "RBDPO",
    description: "Premium refined palm oil suitable for cooking, frying, and industrial food production. Our RBDPO meets international quality standards.",
    applications: ["Food manufacturing", "Cooking oils", "Industrial uses"],
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Droplets,
    title: "REFINED\nBLEACHED\nDEODORISED\nPALM\nKERNEL\nOIL\nRBDPKO",
    shortName: "RBDPKO",
    description: "High-quality refined palm kernel oil, perfect for food processing, confectionery, and cosmetic applications.",
    applications: ["Confectionery", "Cosmetics", "Food processing"],
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    icon: Shell,
    title: "Palm Kernel Shell",
    shortName: "PKS",
    description: "Biomass fuel source derived from palm kernel processing. An eco-friendly alternative for energy generation.",
    applications: ["Biomass fuel", "Industrial heating", "Energy generation"],
    color: "bg-stone-500/10 text-stone-600",
  },
  {
    icon: Cookie,
    title: "Palm Kernel Cake",
    shortName: "PKC",
    description: "Nutrient-rich by-product used as animal feed, providing essential proteins and fats for livestock.",
    applications: ["Animal feed", "Livestock nutrition", "Poultry feed"],
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    icon: Leaf,
    title: "Refined Soya Oil",
    shortName: "RSO",
    description: "Light and healthy soya oil, ideal for everyday cooking and food manufacturing. Rich in essential fatty acids.",
    applications: ["Cooking", "Food manufacturing", "Healthy diets"],
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Fuel,
    title: "Acid Oil",
    shortName: "AO",
    description: "Industrial-grade oil derived from refining processes, used in soap manufacturing and industrial applications.",
    applications: ["Soap manufacturing", "Industrial uses", "Oleochemicals"],
    color: "bg-slate-500/10 text-slate-600",
  },
];

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Our Products | Premium Edible Oils & By-Products | Diamond Pearls Agro Allied Ltd</title>
        <meta
          name="description"
          content="Explore our range of premium edible oils including RBDPKO, RBDPO, Refined Soya Oil, and our retail brand Samcas Vegetable Oil. High-quality products for food manufacturing, cooking, and industrial applications."
        />
        <meta name="keywords" content="edible oils, RBDPKO, RBDPO, refined soya oil, palm kernel oil, palm kernel cake, palm kernel shell, Samcas vegetable oil, Nigeria edible oils, food manufacturing, cooking oils" />
        <meta property="og:title" content="Our Products | Premium Edible Oils & By-Products | Diamond Pearls Agro Allied Ltd" />
        <meta property="og:description" content="Explore our range of premium edible oils including RBDPKO, RBDPO, Refined Soya Oil, and our retail brand Samcas Vegetable Oil." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diamondpearlsltd.com/products" />
        <meta property="og:image" content="https://diamondpearlsltd.com/images/logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Products | Diamond Pearls Agro Allied Ltd" />
        <meta name="twitter:description" content="Explore our range of premium edible oils including RBDPKO, RBDPO, Refined Soya Oil, and our retail brand Samcas Vegetable Oil." />
        <link rel="canonical" href="https://diamondpearlsltd.com/products" />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-hero-gradient relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-20" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
                Our Products
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground mb-6">
                Premium <span className="text-accent">Edible Oils</span> & By-Products
              </h1>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                From refined vegetable oils to sustainable by-products, discover our 
                comprehensive range of quality agricultural products.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-8 shadow-card border border-border/50 hover-lift"
                >
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${product.color}`}
                  >
                    <product.icon size={28} />
                  </div>

                  <span className="inline-block px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground mb-3">
                    {product.shortName}
                  </span>

                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors whitespace-pre-line">
                    {product.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                      Applications
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-primary/5 rounded text-xs text-primary"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Samcas Brand Section */}
        <section className="py-24 bg-cream-dark">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block text-accent font-medium text-sm uppercase tracking-widest mb-4">
                  Our Bulk & Retail Brands
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                  Samcas <span className="text-primary">Vegetable Oil</span>
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our flagship brands serve both households and large-scale clients. Through our retail line and our industrial bulk supply, we bring the quality of our production directly to Nigerian homes and certified bottling operations.
                </p>

                <div className="mb-8">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Retail Features</h3>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Golden color with excellent clarity",
                      "High purity and quality standards",
                      "Bottled on-site for freshness",
                      "Available in 25L, 5L, 2L, and sachet sizes",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Bulk Supply Features</h3>
                  <ul className="space-y-3">
                    {[
                      "Available in 30–40 MT per truck",
                      "Produced for bottling and repackaging",
                      "Delivered only to facilities certified by NAFDAC/SON",
                      "Consistent, industrial-grade quality",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <div className="aspect-square bg-muted rounded-xl overflow-hidden">
                  <img
                    src="/images/truck.jpeg"
                    alt="Bulk Supply Truck"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Gallery */}
        <Gallery
          images={[
            { src: "/images/truck.jpeg", alt: "Bulk Supply Truck" },
            { src: "/images/Picture15.jpg", alt: "Product Image 1" },
            { src: "/images/Picture16.jpg", alt: "Product Image 2" },
            { src: "/images/Picture17.jpg", alt: "Product Image 3" },
            { src: "/images/Picture18.jpg", alt: "Product Image 4" },
            { src: "/images/Picture19.jpg", alt: "Product Image 5" },
          ]}
          tag="Product Gallery"
          title={
            <>
              Our <span className="text-primary">Products</span> in Action
            </>
          }
          subtitle="Explore our premium edible oils and products through our visual gallery."
          className="bg-background"
        />
      </main>

      <Footer />
    </>
  );
};

export default Products;
