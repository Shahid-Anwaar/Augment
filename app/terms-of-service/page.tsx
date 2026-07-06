import dynamic from "next/dynamic";

import CustomLoader from "@/components/custom/CustomLoader";

import { termsSections } from "@/data/data";
import { termsOfServiceMetadata } from "@/lib/seo";

const PrivacySectionsList = dynamic(
  () => import("@/components/privacy/PrivacySectionList"),
  {
    loading: () => <CustomLoader minHeightClass="min-h-[300px]" />,
  }
);

export const metadata = termsOfServiceMetadata;

export default function TermsOfServiceSection() {
  return (
    <section className="bg-white text-black">
      <div className="section-container py-10 pt-20 sm:py-12 lg:py-14 lg:pt-32">
        <div className="mx-auto">
          <div className="mb-8">
            <h1 className="section-title mb-2 text-[30px] font-semibold tracking-[-0.04em] text-black sm:text-[36px] lg:text-[42px]">
              Terms of Service
            </h1>

            <p className="text-[13px] leading-relaxed text-[#6f6f6f]">
              25th January 2025
            </p>
          </div>

          <div className="divider mb-8 bg-black/10" />

          <PrivacySectionsList sections={termsSections} />
        </div>
      </div>
    </section>
  );
}