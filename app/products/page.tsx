import dynamic from "next/dynamic";

import ProductsHeroSection from "@/components/products/ProductsHero";
import CustomLoader from "@/components/custom/CustomLoader";

import {
  companyLogos,
  Firms_FEATURES,
  Firms_FEATURES2,
  productFaqs,
  solutionItems,
} from "@/data/data";

import { productsMetadata } from "@/lib/seo";

const CompanyLogoCarousel = dynamic(
  () => import("@/components/home/CompaniesSlider"),
  {
    loading: () => <CustomLoader minHeightClass="min-h-[80px]" />,
  }
);

const BrainFeatureSection = dynamic(
  () => import("@/components/home/BrainFeature"),
  {
    loading: () => <CustomLoader />,
  }
);

const ProductFeaturesSection = dynamic(
  () => import("@/components/products/ProductFeatures"),
  {
    loading: () => <CustomLoader />,
  }
);

const FeaturesSection = dynamic(
  () => import("@/components/home/FacultySection"),
  {
    loading: () => <CustomLoader />,
  }
);

const ProductSalesHubSection = dynamic(
  () => import("@/components/products/ProductSalesHub"),
  {
    loading: () => <CustomLoader />,
  }
);

const HowItWorksCard = dynamic(
  () => import("@/components/home/HowItWorks"),
  {
    loading: () => <CustomLoader />,
  }
);

const IntegrationsSection = dynamic(
  () => import("@/components/home/Integrations"),
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

const StickySolutionsSection = dynamic(
  () => import("@/components/home/StickyControl"),
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

const WhatToInclude = dynamic(
  () => import("@/components/products/WhatInclude"),
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

const BookCallSection = dynamic(
  () => import("@/components/home/BookCall"),
  {
    loading: () => <CustomLoader />,
  }
);

const StickyStepSection = dynamic(
  () => import("@/components/home/StickyStepSection"),
  { 
    loading: () => <CustomLoader minHeightClass="min-h-[80px]" /> 
  }
)

export const metadata = productsMetadata;

export default function ProductsPage() {
  return (
    <main className="relative bg-white text-black">
      <ProductsHeroSection />
      <div className="w-full bg-white pb-7">
        <div className="mx-auto max-w-full bg-white py-0">
          <div className="mx-auto bg-white px-0">
            <CompanyLogoCarousel
              companyLogos={[...companyLogos, ...companyLogos]}
              wrapperClassName="min-h-0 bg-white"
            />
          </div>
        </div>
      </div>
      <BrainFeatureSection isDark={false} />
      <ProductFeaturesSection
        title="Course creation tools for higher student engagement"
        description="So we give you the tools to give them the best learning experience possible. Keep them coming back—and referring their friends, too."
        imgShown="left"
        imgSrc="/external-images/img-15da9c81.webp"
        imgAlt="Supreme Coach course onboarding and quiz preview"
        features={Firms_FEATURES}
        wrapperClassName="bg-white pb-0!"
      />
      <ProductFeaturesSection
        title="Simple to build—and keep growing"
        description="When you’re big on ambition and light on time, you need a platform that’s reliable and doesn't limit your creativity."
        imgShown="right"
        imgSrc="/external-images/img-2aeeec10.webp"
        features={Firms_FEATURES2}
        wrapperClassName="bg-white"
      />
      <ProductFeaturesSection
        title="Course creation tools for higher student engagement"
        description="So we give you the tools to give them the best learning experience possible. Keep them coming back—and referring their friends, too."
        imgShown="left"
        imgSrc="/external-images/img-15da9c81.webp"
        imgAlt="Supreme Coach course onboarding and quiz preview"
        features={Firms_FEATURES}
        wrapperClassName="bg-white pt-0!"
      />
      <FeaturesSection isShowBtn={false} />
      <ProductSalesHubSection />
      {/* <HowItWorksCard /> */}
      <StickyStepSection />
      <IntegrationsSection
        title="It's your business, your way"
        description="Imagine all the tools you know and love in one place. Connect with third-party integrations—including MailChimp, Zapier, Kit, Google Analytics, and dozens more."
      />
      <ClientsSection title="Supreme Coach success stories write themselves" isShowCompanies={false} />
      <StickySolutionsSection items={solutionItems} />
      <ProductTools />
      <WhatToInclude />
      <FAQSection faqs={productFaqs} />
      <BookCallSection
        title="Book a Demo with a Program Advisor"
        icon="solar:phone-linear"
        subTitle="Discuss your business goals and find out if Supreme Coach is a fit for you."
        topClasses="bg-[#f3f4f6]"
        bottomClasses="bg-black"
      />
    </main>
  );
}