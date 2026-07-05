import BookCallSection from "@/components/home/BookCall";
import FeaturesSection from "@/components/home/FacultySection";
import FAQSection from "@/components/home/FaqSection";
import HowItWorksCard from "@/components/home/HowItWorks";
import IntegrationsSection from "@/components/home/Integrations";
import ClientsSection from "@/components/home/clients";
import ProductsHeroSection from "@/components/products/ProductsHero";
import ProductFeaturesSection from "@/components/products/ProductFeatures";
import { companyLogos, Firms_FEATURES, Firms_FEATURES2, productFaqs } from "@/data/data";
import ProductSalesHubSection from "@/components/products/ProductSalesHub";
import ProductTools from "@/components/products/ProductTools";
import CompanyLogoCarousel from "@/components/home/CompaniesSlider";
import { productsMetadata } from "@/lib/seo";
import WhatToInclude from "@/components/products/WhatInclude";
import BrainFeatureSection from "@/components/home/BrainFeature";

export const metadata = productsMetadata;

export default function ProductsPage() {
  return (
    <main className="bg-white text-black relative">
      <ProductsHeroSection />
      <div className="w-full bg-white pb-7">
        <div className="max-w-full bg-white py-0 mx-auto">
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
      <HowItWorksCard />
      <IntegrationsSection
        title="It's your business, your way"
        description="Imagine all the tools you know and love in one place. Connect with third-party integrations—including MailChimp, Zapier, Kit, Google Analytics, and dozens more."
      />
      <ClientsSection title="Supreme Coach success stories write themselves" />
      <ProductTools />
      <WhatToInclude />
      {/* <ProductSold /> */}
      <FAQSection faqs={productFaqs} />

      {/* <FeaturedInSection />
            <ViewsSection />
            <FacultySection />
            <EmblaCarousel /> */}


      {/* <ClientsSection /> */}


      {/* <BookCallSection
                title="Stand out with the Supreme Coach LinkedIn Certificate"
                btnText="Enroll Now"
                subTitle="Earn a certificate upon completion and display your business credentials on your resume and LinkedIn."
                topClasses="bg-[#f3f4f6]"
                bottomClasses="bg-[#000000]"
                imgSrc="/certificate.webp"
            />
            <MissionComparisonSection /> */}
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
