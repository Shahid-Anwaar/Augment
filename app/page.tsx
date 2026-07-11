import dynamic from "next/dynamic";

import AugmentHeroSection from "@/components/home/HeroSection";
import CustomLoader from "@/components/custom/CustomLoader";
import { companyLogos, homeFaqs, solutionItems } from "@/data/data";
import { homeMetadata } from "@/lib/seo";

const StickyStepSection = dynamic(
  () => import("@/components/home/StickyStepSection"),
  { 
    loading: () => <CustomLoader minHeightClass="min-h-[80px]" /> 
  }
)

const CompanyLogoCarousel = dynamic(
  () => import("@/components/home/CompaniesSlider"),
  {
    loading: () => <CustomLoader minHeightClass="min-h-[80px]" />,
  }
);

const TeamSolutionsSection = dynamic(
  () => import("@/components/home/TeamSolution"),
  {
    loading: () => <CustomLoader />,
  }
);

const BrainFeatureSection = dynamic(
  () => import("@/components/home/BrainFeature"),
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

const EmblaCarousel = dynamic(
  () => import("@/components/home/EmblaCarosal"),
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

const BookCallSection = dynamic(
  () => import("@/components/home/BookCall"),
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

export const metadata = homeMetadata;

export default function Home() {
  return (
    <main className="relative bg-white text-black">
      {/* <AugmentHeroSection />
      <div className="w-full bg-black">
        <div className="mx-auto max-w-full bg-white py-4">
          <div className="mx-auto bg-white px-0">
            <CompanyLogoCarousel
              companyLogos={[...companyLogos, ...companyLogos]}
              wrapperClassName="min-h-0 bg-white"
            />
          </div>
        </div>
      </div> */}
      <TeamSolutionsSection />
      <BrainFeatureSection isDark={false} />
      <FeaturesSection />
      <EmblaCarousel />
      <StickyStepSection />
      {/* <HowItWorksCard classes="pt-0" /> */}

      <IntegrationsSection
        title="Your stack, connected. Configured on delivery not figured out later."
        description="Every integration Supreme Coach supports is set up, tested, and live before we hand over the keys. No documentation to follow. No API keys to paste. No hoping two platforms will finally sync. You open your business and everything already works."
      />
      <ClientsSection
        title="Trusted by growing companies"
        isShowCompanies={false}
      />
      <StickySolutionsSection items={solutionItems} />
      <BookCallSection
        title="Book a Discovery Call With Our Team"
        icon="solar:phone-linear"
        subTitle="Tell us where your business is right now and where you're trying to take it. We'll show you exactly what Supreme Coach looks like in practice and give you an honest answer on whether it's the right fit."
        topClasses="bg-[#f3f4f6]"
        bottomClasses="bg-[#f3f4f6]"
      />
      <FAQSection faqs={homeFaqs} />
    </main>
  );
}