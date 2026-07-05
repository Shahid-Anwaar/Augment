import BookCallSection from "@/components/home/BookCall";
import FAQSection from "@/components/home/FaqSection";
import { communityFaqs } from "@/data/data";
import CommunityHero from "@/components/community/CommunityHero";
import StudentsTestmonials from "@/components/community/StudentsTestmonials";
import StudentDirectory from "@/components/community/StudentDirectory";
import StudentsCompaniesBuilt from "@/components/community/StudentCompanies";
import InPersonEventsSection from "@/components/community/InPersonEvents";
import EmblaCarousel from "@/components/home/EmblaCarosal";
import { communityMetadata } from "@/lib/seo";

export const metadata = communityMetadata;
export default function CommunityPage() {
    return (
        <main className="bg-white text-black relative">
            <CommunityHero />
            <StudentsTestmonials />
            <StudentDirectory />
            <EmblaCarousel />
            <StudentsCompaniesBuilt />
            <InPersonEventsSection />

            <BookCallSection
                title="15-Day Money-Back Guarantee"
                btnText="Enroll Now"
                subTitle="Try Supreme Coach for 15 days and if you are not completely satisfied, you can claim a full refund - no questions asked."
                topClasses="bg-black"
                bottomClasses="bg-[#f3f4f6]"
            />
            <FAQSection faqs={communityFaqs} />
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
