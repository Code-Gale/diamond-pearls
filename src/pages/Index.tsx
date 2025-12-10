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
          content="Diamond Pearls Agro Allied Ltd is Nigeria's leading integrated producer of premium edible oils including RBDPKO, RBDPO, and Refined Soya Oil. Established 1998."
        />
        <meta property="og:title" content="Diamond Pearls Agro Allied Ltd | Premium Edible Oils Producer" />
        <meta
          property="og:description"
          content="Nigeria's leading integrated producer of premium edible oils. From plantation to packaging, quality at every stage."
        />
        <meta property="og:type" content="website" />
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
