import dynamic from "next/dynamic";

import FirmHeroSection from "@/components/for-firms/FirmHero";
import CustomLoader from "@/components/custom/CustomLoader";

import {
  Firm_HOW_IT_WORKS_CARDS,
  Firm_SALES_HUB_FEATURES,
  firm_steps,
  firmCompanyLogos,
  Firms_FEATURES,
  Firms_FEATURES2,
  solutionItems,
  teamFaqs,
} from "@/data/data";

import { forFirmsMetadata } from "@/lib/seo";

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

const StickySolutionsSection = dynamic(
  () => import("@/components/home/StickyControl"),
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

const ProductFeaturesSection = dynamic(
  () => import("@/components/products/ProductFeatures"),
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

const FAQSection = dynamic(
  () => import("@/components/home/FaqSection"),
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

export const metadata = forFirmsMetadata;

export default function FirmsPage() {
  return (
    <main className="relative bg-white text-black">
      <FirmHeroSection />
      <CompanyLogoCarousel
        companyLogos={[...firmCompanyLogos, ...firmCompanyLogos]}
      />
      <div className="py-7" />
      <BrainFeatureSection isDark={false} />
      <StickySolutionsSection items={solutionItems.slice(0, 3)} />
      <FeaturesSection />
      <ProductFeaturesSection
        title="Built for firms that deliver at scale and prove it with data."
        description="Your firm needs more than a coaching platform; it needs an operating system that coordinates your team, manages corporate clients, and generates reports that renew contracts automatically."
        imgShown="left"
        imgSrc="/external-images/img-15da9c81.webp"
        imgAlt="Supreme Coach course onboarding and quiz preview"
        features={Firms_FEATURES}
        wrapperClassName="bg-white pb-0!"
      />
      <ProductFeaturesSection
        title="Powerful enough for enterprise. Clean enough for one person to run."
        description="When you're managing multiple coaches, corporate clients, and complex delivery you need infrastructure that handles the complexity without creating more of it."
        imgShown="right"
        imgSrc="/external-images/img-2aeeec10.webp"
        features={Firms_FEATURES2}
        wrapperClassName="bg-white"
      />
      <ProductFeaturesSection
        title="Built for firms that deliver at scale and prove it with data."
        description="Your firm needs more than a coaching platform; it needs an operating system that coordinates your team, manages corporate clients, and generates reports that renew contracts automatically."
        imgShown="left"
        imgSrc="/external-images/img-15da9c81.webp"
        imgAlt="Supreme Coach course onboarding and quiz preview"
        features={Firms_FEATURES}
        wrapperClassName="bg-white pt-0!"
      />
      <ProductSalesHubSection
        title="Your firm's financial command centre built for scale."
        subtitle="Every payment, every invoice, and every financial metric across your entire firm, individual clients, corporate accounts, and team operations all in one place, updated in real time."
        features={Firm_SALES_HUB_FEATURES}
        classes="grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-7"
      />
      <StickyStepSection />
      {/* <HowItWorksCard
        steps={firm_steps}
        cards={Firm_HOW_IT_WORKS_CARDS}
      /> */}
      <IntegrationsSection
        title="It's your business, your way"
        description="Imagine all the tools you know and love in one place. Connect with third-party integrations—including MailChimp, Zapier, Kit, Google Analytics, and dozens more."
      />
      <ClientsSection
        title="Supreme Coach success stories write themselves"
        isShowCompanies={false}
      />
      <FAQSection faqs={teamFaqs} />
    </main>
  );
}