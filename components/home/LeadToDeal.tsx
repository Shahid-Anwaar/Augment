import { Icon } from "@iconify/react";
import type { RefObject } from "react";
import { SolutionItem } from "@/data/data";

type LeadToDealsSectionProps = {
  items: SolutionItem[];
  cardsRef?: RefObject<HTMLDivElement | null>;
};

export default function LeadToDealsSection({
  items,
  cardsRef,
}: LeadToDealsSectionProps) {
  return (
    <section className="bg-white overflow-hidden">
      <div className="section-container">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="section-title mx-auto text-black">
            Everything you need, from finding leads to winning deals
          </h2>

          <p className="section-description mx-auto mb-6 text-black">
            Powered by Apollo Data — one of the largest, most accurate business
            data networks on the planet.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`mt-12 grid gap-4 sm:grid-cols-2  ${items.length !== 4 ? " lg:grid-cols-3" : " lg:grid-cols-4"}`}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex min-h-[210px] flex-col items-center justify-center rounded-[7px] bg-[#f4f1ee] px-6 py-10 text-center sm:min-h-[230px]"
            >
              <div className="mb-3 inline-flex h-[44px] w-[44px] items-center justify-center rounded-[4px] bg-[#161616] text-white">
                <Icon icon={item.icon} className="h-7 w-7" />
              </div>

              <h3 className="text-[24px] font-medium tracking-[-0.04em] text-black sm:text-[26px]">
                {item.cardTitle}
              </h3>

              <p className="mt-3 max-w-[270px] text-[#6d6862] sm:text-[13px] text-[12px] font-normal leading-[1.45] tracking-[0.015em] text-black/80 sm:text-[14px] md:text-[15px] lg:text-[16px]">
                {item.cardDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}