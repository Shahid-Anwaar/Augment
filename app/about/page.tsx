import BookCallSection from "@/components/home/BookCall";
import Footer from "@/components/home/Footer";
import FAQSection from "@/components/home/FaqSection";
import { aboutFaqs, coachesFaqs } from "@/data/data";
import CommunityHero from "@/components/community/CommunityHero";
import StudentsTestmonials from "@/components/community/StudentsTestmonials";
import StudentDirectory from "@/components/community/StudentDirectory";
import StudentsCompaniesBuilt from "@/components/community/StudentCompanies";
import InPersonEventsSection from "@/components/community/InPersonEvents";
import EmblaCarousel from "@/components/home/EmblaCarosal";
import ProductStories from "@/components/products/ProductStories";
import AlumniStatsSection from "@/components/about/AluminyStatSection";
import PressMediaSection from "@/components/about/PressMediaSection";
import StorySection from "@/components/about/StorySection";
import ManifestoSection from "@/components/about/ManifestoSection";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import { aboutMetadata } from "@/lib/seo";

export const metadata = aboutMetadata;
export default function AboutPage() {
  return (
    <main className="bg-white text-black relative">
      <AboutHeroSection />
      <ManifestoSection />
      <StorySection />
      <PressMediaSection />
      <AlumniStatsSection />
      <ProductStories />
      <InPersonEventsSection isShownHeading={false} />
      <BookCallSection
        title="15-Day Money-Back Guarantee"
        btnText="Enroll Now"
        subTitle="Try Supreme Coach for 15 days and if you are not completely satisfied, you can claim a full refund - no questions asked."
        topClasses="bg-black"
        bottomClasses="bg-[#f3f4f6]"
      />
      <FAQSection faqs={aboutFaqs} />
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
