"use client";
import { SolutionItem } from "@/data/data";

type CompactSolutionTabsProps = {
  items: SolutionItem[];
  activeIndex: number;
  show: boolean;
  stickyTop?: number;
};

export default function CompactSolutionTabs({
  items,
  activeIndex,
  show,
  stickyTop = 72,
}: CompactSolutionTabsProps) {
  return (
    <div
      className={[
        "fixed left-0 right-0 z-30 bg-white transition-all duration-300",
        show
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-5 opacity-0",
      ].join(" ")}
      style={{
        top: `${stickyTop}px`,
      }}
    >
      <div className="mx-auto w-full max-w-[1560px] px-6 sm:px-8 md:px-10 lg:px-12">
        <div className={`grid gap-4 sm:grid-cols-2  ${items.length !== 4 ? " lg:grid-cols-3" : " lg:grid-cols-4"}`}>
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={item.id}
                className={[
                  "flex items-center justify-center rounded-[4px] px-3 py-2 text-center font-mono text-[13px] font-medium uppercase tracking-[0.08em] transition-all duration-300",
                  isActive
                    ? "bg-primary text-black"
                    : "bg-[#f4f1ee] text-black",
                ].join(" ")}
              >
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}