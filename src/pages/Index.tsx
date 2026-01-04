import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { ProductsSection } from "@/components/ProductsSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { AudienceSection } from "@/components/AudienceSection";
import { ApartmentSection } from "@/components/ApartmentSection";
import { MeditationSection } from "@/components/MeditationSection";
import { TrustSection } from "@/components/TrustSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <WhyChooseSection />
        <ProductsSection />
        <AudienceSection />
        <ApartmentSection />
        <MeditationSection />
        <TrustSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
