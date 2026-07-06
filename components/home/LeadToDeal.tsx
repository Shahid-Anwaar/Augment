import { Icon } from "@iconify/react";
import type { RefObject } from "react";
import { SolutionItem } from "@/data/data";

type LeadToDealsSectionProps = {
  items: SolutionItem[];
  handleIndexChange?: (index: number, isScrollImediately?: boolean) => void;
  cardsRef?: RefObject<HTMLDivElement | null>;
};

export default function LeadToDealsSection({
  items,
  handleIndexChange,
  cardsRef,
}: LeadToDealsSectionProps) {
  return (
    <section className="overflow-hidden bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="section-title mx-auto text-black">
            Everything you need, from finding leads to winning deals
          </h2>

          <p className="section-description mx-auto mb-5 text-black sm:mb-6">
            Powered by Apollo Data — one of the largest, most accurate business
            data networks on the planet.
          </p>
        </div>

        <div
          ref={cardsRef}
          className={`mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 ${items.length !== 4 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            }`}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleIndexChange?.(index, true)}
              className="flex min-h-[170px] cursor-pointer flex-col items-center justify-center rounded-[7px] bg-[#f4f1ee] px-4 py-7 text-center transition-colors hover:bg-[#e0dcd8] sm:min-h-[230px] sm:px-6 sm:py-10"
            >
              <div className="mb-2.5 inline-flex h-[38px] w-[38px] items-center justify-center rounded-[4px] bg-[#161616] text-white sm:mb-3 sm:h-[44px] sm:w-[44px]">
                <Icon icon={item.icon} className="h-5.5 w-5.5 sm:h-7 sm:w-7" />
              </div>

              <h3 className="text-[19px] font-medium leading-[1.15] tracking-[-0.035em] text-black sm:text-[26px] sm:tracking-[-0.04em]">
                {item.cardTitle}
              </h3>

              <p className="mt-2 max-w-[270px] text-[12px] font-normal leading-[1.45] tracking-[0.01em] text-black/80 sm:mt-3 sm:text-[14px] md:text-[15px] lg:text-[16px]">
                {item.cardDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}