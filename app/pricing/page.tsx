import dynamic from "next/dynamic";

import PricingSection from "@/components/pricing/PricingSection";
import CustomLoader from "@/components/custom/CustomLoader";

import { pricingFaqs } from "@/data/data";
import { pricingMetadata } from "@/lib/seo";

const TrustAndSecuritySection = dynamic(
  () => import("@/components/pricing/TrustAndSecurity"),
  {
    loading: () => <CustomLoader />,
  }
);

const WhatToInclude = dynamic(
  () => import("@/components/products/WhatInclude"),
  {
    loading: () => <CustomLoader />,
  }
);

const ProductTools = dynamic(
  () => import("@/components/products/ProductTools"),
  {
    loading: () => <CustomLoader />,
  }
);

const ClientsSection = dynamic(
  () => import("@/components/home/clients"),
  {
    loading: () => <CustomLoader />,
  }
);

const FAQSection = dynamic(
  () => import("@/components/home/FaqSection"),
  {
    loading: () => <CustomLoader />,
  }
);

export const metadata = pricingMetadata;

export default function PricingPage() {
  return (
    <main className="relative bg-white text-black">
      <PricingSection />
      <TrustAndSecuritySection />
      <WhatToInclude />
      <ProductTools />
      <ClientsSection
        title="Supreme Coach success stories write themselves"
        isShowCompanies={false}
      />
      <FAQSection faqs={pricingFaqs} />
    </main>
  );
}