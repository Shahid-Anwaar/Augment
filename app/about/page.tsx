import dynamic from "next/dynamic";
import AboutHeroSection from "@/components/about/AboutHeroSection";
import CustomLoader from "@/components/custom/CustomLoader";
import { aboutFaqs } from "@/data/data";
import { aboutMetadata } from "@/lib/seo";

const ManifestoSection = dynamic(
  () => import("@/components/about/ManifestoSection"),
  {
    loading: () => <CustomLoader />,
  }
);

const StorySection = dynamic(
  () => import("@/components/about/StorySection"),
  {
    loading: () => <CustomLoader />,
  }
);

const PressMediaSection = dynamic(
  () => import("@/components/about/PressMediaSection"),
  {
    loading: () => <CustomLoader />,
  }
);

const AlumniStatsSection = dynamic(
  () => import("@/components/about/AluminyStatSection"),
  {
    loading: () => <CustomLoader />,
  }
);

const ProductStories = dynamic(
  () => import("@/components/products/ProductStories"),
  {
    loading: () => <CustomLoader />,
  }
);

const InPersonEventsSection = dynamic(
  () => import("@/components/community/InPersonEvents"),
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

export const metadata = aboutMetadata;

export default function AboutPage() {
  return (
    <main className="relative bg-white text-black">
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