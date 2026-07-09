import dynamic from "next/dynamic";

import CoachHeroSection from "@/components/for-coach/CoachHero";
import CustomLoader from "@/components/custom/CustomLoader";
import {
  Coach_HOW_IT_WORKS_CARDS,
  coach_steps,
  Coaches_FEATURES,
  Coaches_FEATURES2,
  coachesFaqs,
  firmCompanyLogos,
  solutionItems,
} from "@/data/data";
import { forCoachesMetadata } from "@/lib/seo";

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

const FeaturesSection = dynamic(
  () => import("@/components/home/FacultySection"),
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

export const metadata = forCoachesMetadata;

export default function CoachesPage() {
  return (
    <main className="relative bg-white text-black">
      <CoachHeroSection />
      <div className="w-full bg-white pb-7">
        <div className="mx-auto max-w-full bg-white py-4">
          <div className="mx-auto bg-white px-0">
            <CompanyLogoCarousel
              companyLogos={[...firmCompanyLogos, ...firmCompanyLogos]}
              wrapperClassName="min-h-0 bg-white"
            />
          </div>
        </div>
      </div>
      <BrainFeatureSection isDark={false} />
      <StickySolutionsSection items={solutionItems.slice(0, 3)} />
      <ProductFeaturesSection
        title="Programme creation tools built for coaches who take their client results seriously."
        description="A client who gets real, measurable outcomes doesn't just complete your programme they renew, refer, and come back for everything you build next."
        imgShown="left"
        imgSrc="/external-images/img-15da9c81.webp"
        imgAlt="Supreme Coach course onboarding and quiz preview"
        features={Coaches_FEATURES}
        btnText="Book a Discovery Call"
        wrapperClassName="bg-white py-0! sm:py-0! md:py-0! lg:py-0!"
      />
      <ProductFeaturesSection
        title="A community that keeps clients engaged long after the session ends."
        description="The coaches who retain clients longest don't just deliver great sessions they create a space where clients stay connected, stay motivated, and keep showing up. Supreme Coach builds that space directly into your practice."
        imgShown="right"
        imgSrc="/external-images/img-2aeeec10.webp"
        features={Coaches_FEATURES2}
        wrapperClassName="bg-white"
        btnText="Book a Discovery Call"
      />
      <ProductFeaturesSection
        title="Programme creation tools built for coaches who take their client results seriously."
        description="A client who gets real, measurable outcomes doesn't just complete your programme they renew, refer, and come back for everything you build next."
        imgShown="left"
        imgSrc="/external-images/img-15da9c81.webp"
        imgAlt="Supreme Coach course onboarding and quiz preview"
        features={Coaches_FEATURES}
        btnText="Book a Discovery Call"
        wrapperClassName="bg-white pt-0! sm:pt-0! md:pt-0! lg:pt-0!"
      />
      <ProductSalesHubSection
        btnText="Book a Discovery Call"
        title="Your coaching business and your financial command centre."
        subtitle="Supreme Coach handles every payment, every invoice, and every financial metric your business generates so you always know what's coming in, what's outstanding, and what your business is worth right now."
      />
      <FeaturesSection />
      <StickyStepSection />
      {/* <HowItWorksCard
        steps={coach_steps}
        cards={Coach_HOW_IT_WORKS_CARDS}
      /> */}
      <IntegrationsSection
        title="It's your business, your way"
        description="Imagine all the tools you know and love in one place. Connect with third-party integrations—including MailChimp, Zapier, Kit, Google Analytics, and dozens more."
      />
      <ClientsSection
        title="Supreme Coach success stories write themselves"
        isShowCompanies={false}
      />
      <FAQSection faqs={coachesFaqs} />
    </main>
  );
}