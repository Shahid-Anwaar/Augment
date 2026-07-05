import FAQSection from "@/components/home/FaqSection";
import ClientsSection from "@/components/home/clients";
import { pricingFaqs } from "@/data/data";
import ProductTools from "@/components/products/ProductTools";
import PricingSection from "@/components/pricing/PricingSection";
import TrustAndSecuritySection from "@/components/pricing/TrustAndSecurity";
import { pricingMetadata } from "@/lib/seo";
import WhatToInclude from "@/components/products/WhatInclude";

export const metadata = pricingMetadata;

export default function PricingPage() {
  return (
    <main className="bg-white text-black relative">
      <PricingSection />
      <TrustAndSecuritySection />
      <WhatToInclude />
      <ProductTools />
      <ClientsSection title="Supreme Coach success stories write themselves" isShowCompanies={false} />
      <FAQSection faqs={pricingFaqs} />
    </main>
  );
}
