import CertificateSection from "@/components/home/CertificateSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import CTASection from "@/components/home/CtaSection";
import FAQSection from "@/components/home/FaqSection";
import Footer from "@/components/home/Footer";
import GuaranteeSection from "@/components/home/GuarenteeSection";
// import Hero from "@/components/home/Hero";
// import LogoStrip from "@/components/home/LogoStrip";
import Navbar from "@/components/home/navbar";
import TestimonialsSection from "@/components/home/TestmonialSection";
import WhySection from "@/components/home/WhySection";

export default function Home() {
  return (
    <main className="bg-white text-black">
       <Navbar />
      {/* <Hero /> */}
      {/* <LogoStrip /> */}
      {/*<WhySection />
      <TestimonialsSection />
      <CertificateSection />
      <ComparisonSection />
      <GuaranteeSection />
      <FAQSection />
      <CTASection /> */}
      <FAQSection />
      <Footer />
    </main>
  );
}
