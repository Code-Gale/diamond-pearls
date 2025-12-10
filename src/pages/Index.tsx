import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import TimelineSection from "@/components/home/TimelineSection";
import ProductsSection from "@/components/home/ProductsSection";
import FacilitySection from "@/components/home/FacilitySection";
import GallerySlider from "@/components/home/GallerySlider";
import ContactCTA from "@/components/home/ContactCTA";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Diamond Pearls Agro Allied Ltd | Premium Edible Oils Producer in Nigeria</title>
        <meta
          name="description"
          content="Diamond Pearls Agro Allied Ltd is Nigeria's leading integrated producer of premium edible oils including RBDPKO, RBDPO, and Refined Soya Oil. Established 1998. From plantation to packaging, quality at every stage."
        />
        <meta name="keywords" content="edible oils, palm oil, Nigeria agribusiness, RBDPKO, RBDPO, vegetable oil, Samcas, palm kernel oil, refined soya oil, Nigeria food production, agribusiness Nigeria" />
        <meta property="og:title" content="Diamond Pearls Agro Allied Ltd | Premium Edible Oils Producer in Nigeria" />
        <meta
          property="og:description"
          content="Nigeria's leading integrated producer of premium edible oils including RBDPKO, RBDPO, and Refined Soya Oil. Established 1998. From plantation to packaging, quality at every stage."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://diamondpearlsltd.com" />
        <meta property="og:image" content="https://diamondpearlsltd.com/images/logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Diamond Pearls Agro Allied Ltd | Premium Edible Oils Producer" />
        <meta name="twitter:description" content="Nigeria's leading integrated producer of premium edible oils including RBDPKO, RBDPO, and Refined Soya Oil." />
        <link rel="canonical" href="https://diamondpearlsltd.com" />
      </Helmet>

      <Header />
      
      <main>
        <HeroSection />
        <TimelineSection />
        <ProductsSection />
        <FacilitySection />
        <GallerySlider />
        <ContactCTA />
      </main>

      <Footer />
    </>
  );
};

export default Index;
