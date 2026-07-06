import CustomLoader from "@/components/custom/CustomLoader";
import { privacySections } from "@/data/data";
import { pricingMetadata } from "@/lib/seo";
import dynamic from "next/dynamic";

const PrivacySectionsList = dynamic(() => import("@/components/privacy/PrivacySectionList"), {
  // ssr: false,
  loading: () => <CustomLoader />
});

export const metadata = pricingMetadata;
export default function PrivacyPolicySection() {
  return (
    <section className="bg-white text-black">
      <div className="section-container py-16 pt-20 sm:py-20 lg:py-24 lg:pt-32">
        <div className="mx-auto ">
          <div className="mb-8">
            <h1 className="section-title mb-2 text-[30px] font-semibold tracking-[-0.04em] text-black sm:text-[36px] lg:text-[42px]">
              Privacy Policy
            </h1>

            <p className="text-[13px] leading-relaxed text-[#6f6f6f]">
              1st September 2021
            </p>
          </div>

          <div className="divider mb-8 bg-black/10" />

          <PrivacySectionsList sections={privacySections} />
        </div>
      </div>
    </section>
  );
}