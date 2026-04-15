import BookCallSection from "@/components/home/BookCall";
import FacultySection from "@/components/home/FacultySection";
import FAQSection from "@/components/home/FaqSection";
import FeaturedInSection from "@/components/home/FeaturedIn";
import Footer from "@/components/home/Footer";
import MissionComparisonSection from "@/components/home/MissionComparison";
import HeaderSection from "@/components/home/Header";
import TeaserVideoSection from "@/components/home/TeaserVideo";
import StudentTestimonialsSection from "@/components/home/TestmonialSection";
import WhyAugmentSection from "@/components/home/WhyAugment";
import Chats from "@/components/home/Chats";
import EmblaCarousel from "@/components/home/EmblaCarosal";
import AugmentHeroSection from "@/components/home/HeroSection";
import ViewsSection from "@/components/home/ViewsSection";
import HowItWorksCard from "@/components/home/HowItWorks";
import IntegrationsSection from "@/components/home/Integrations";
import ClientsSection from "@/components/home/clients";
import CoursesCommunity from "@/components/home/CoursesCommunity";

export default function Home() {
  return (
    <main className="bg-white text-black relative">
      <HeaderSection />
      <AugmentHeroSection />
      <FeaturedInSection />
      <ViewsSection />
      <FacultySection />
      <EmblaCarousel />
      <HowItWorksCard />
      <IntegrationsSection />
      <ClientsSection />
      <BookCallSection
        title="15-Day Money-Back Guarantee"
        btnText="Enroll Now"
        subTitle="Try Augment for 15 days and if you are not completely satisfied, you can claim a full refund - no questions asked."
        topClasses="bg-[#f1efeb]"
        bottomClasses="bg-[#f3f4f6]"
      />
      <FAQSection />
      <BookCallSection
        title="Stand out with the Augment LinkedIn Certificate"
        btnText="Enroll Now"
        subTitle="Earn a certificate upon completion and display your business credentials on your resume and LinkedIn."
        topClasses="bg-[#f3f4f6]"
        bottomClasses="bg-[#000000]"
        imgSrc="/certificate.webp"
      />
      <MissionComparisonSection />
      <BookCallSection
        title="15-Day Money-Back Guarantee"
        btnText="Enroll Now"
        subTitle="Try Augment for 15 days and if you are not completely satisfied, you can claim a full refund - no questions asked."
        topClasses="bg-[#000000]"
        bottomClasses="bg-[#000000]"
      />
      <CoursesCommunity />

      {/* <TeaserVideoSection /> */}
      {/* <WhyAugmentSection /> */}
      {/* <StudentTestimonialsSection /> */}
      {/* <BookCallSection
        title="Stand out with the Augment LinkedIn Certificate"
        btnText="Enroll Now"
        subTitle="Earn a certificate upon completion and display your business credentials on your resume and LinkedIn."
        topClasses="bg-[#f3f4f6]"
        bottomClasses="bg-[#000000]"
        imgSrc="/certificate.webp"
      />
      <MissionComparisonSection />
      <BookCallSection
        title="15-Day Money-Back Guarantee"
        btnText="Enroll Now"
        subTitle="Try Augment for 15 days and if you are not completely satisfied, you can claim a full refund - no questions asked."
        topClasses="bg-[#000000]"
        bottomClasses="bg-[#f3f4f6]"
      />
      <FAQSection /> */}
      <BookCallSection
        title="Book a Call with a Program Advisor"
        icon="solar:phone-linear"
        subTitle="Discuss your business goals and find out if Augment is a fit for you."
        topClasses="bg-black"
        bottomClasses="bg-black"
      />
      <Footer />
      <Chats />
    </main>
  );
}
