import dynamic from "next/dynamic";
import CommunityHero from "@/components/community/CommunityHero";
import CustomLoader from "@/components/custom/CustomLoader";
import { communityFaqs } from "@/data/data";
import { communityMetadata } from "@/lib/seo";

const StudentsTestmonials = dynamic(
    () => import("@/components/community/StudentsTestmonials"),
    {
        loading: () => <CustomLoader />,
    }
);

const StudentDirectory = dynamic(
    () => import("@/components/community/StudentDirectory"),
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

const StudentsCompaniesBuilt = dynamic(
    () => import("@/components/community/StudentCompanies"),
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

export const metadata = communityMetadata;

export default function CommunityPage() {
    return (
        <main className="relative bg-white text-black">
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