"use client";

import { SolutionItem } from "@/data/data";

type CompactSolutionTabsProps = {
  items: SolutionItem[];
  activeIndex: number;
  handleIndexChange?: (index: number) => void;
  show: boolean;
  stickyTop?: number;
};

export default function CompactSolutionTabs({
  items,
  activeIndex,
  handleIndexChange,
  show,
  stickyTop = 72,
}: CompactSolutionTabsProps) {
  return (
    <div
      className={[
        "fixed left-0 right-0 hidden lg:block z-30 bg-white transition-all duration-300",
        show
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-5 opacity-0",
      ].join(" ")}
      style={{
        top: `${stickyTop}px`,
      }}
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 md:px-10 lg:px-12">
        <div
          className={`flex gap-2 overflow-x-auto py-2 pr-2 lg:grid lg:overflow-visible lg:py-0 lg:pr-0 lg:gap-4 ${
            items.length !== 4 ? "lg:grid-cols-3" : "lg:grid-cols-4"
          }`}
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={item.id}
                type="button"
                className={[
                  "shrink-0 cursor-pointer whitespace-nowrap rounded-full px-3 py-1.5 text-center font-mono text-[10px] font-medium uppercase tracking-[0.06em] transition-all duration-300",
                  "sm:px-4 sm:py-2 sm:text-[12px]",
                  "lg:flex lg:items-center lg:justify-center lg:px-3 lg:py-2 lg:text-[13px] lg:tracking-[0.08em]",
                  isActive
                    ? "bg-primary text-black"
                    : "bg-[#f4f1ee] text-black",
                ].join(" ")}
                onClick={() => handleIndexChange?.(index)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}