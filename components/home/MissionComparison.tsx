import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  augmentMbaItems,
  traditionalMbaItems,
  type ComparisonItem,
} from "@/data/data";
import CustomLink from "../custom/CustomLink";

type ComparisonCardProps = {
  title: string;
  items: ComparisonItem[];
  variant: "dark" | "light";
  ctaHref?: string;
  ctaLabel?: string;
};

function ComparisonCard({
  title,
  items,
  variant,
  ctaHref,
  ctaLabel,
}: ComparisonCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={[
        "min-w-0 rounded-[16px] px-4 pb-6 pt-6 sm:rounded-[20px] sm:px-6 sm:pb-8 sm:pt-8 md:px-8 md:pb-9 md:pt-9 lg:px-10 lg:pb-10 lg:pt-10",
        isDark
          ? "bg-[linear-gradient(90deg,#17181b_0%,#111214_55%,#17181b_100%)] text-white"
          : "bg-[#f3f4f6] text-black",
      ].join(" ")}
    >
      <h3
        className={[
          "section-title break-words text-[26px] sm:text-[30px] md:text-[34px] lg:text-[37px]",
          isDark ? "text-white" : "text-black",
        ].join(" ")}
      >
        {title}
      </h3>

      <div
        className={[
          "mt-4 h-px w-full sm:mt-5",
          isDark ? "bg-white/70" : "bg-black/70",
        ].join(" ")}
      />

      <ul className="mt-5 sm:mt-6 md:mt-8">
        {items.map((item, index) => (
          <li
            key={item.text}
            className={[
              "flex min-w-0 items-start gap-3 py-3 sm:gap-4 sm:py-3.5 md:items-center md:py-3.75",
              index !== items.length - 1
                ? isDark
                  ? "border-b border-white/20"
                  : "border-b border-black/14"
                : "",
            ].join(" ")}
          >
            <span className="mt-0.5 shrink-0 md:mt-px">
              {isDark ? (
                <Icon
                  icon="lucide:x"
                  width="22"
                  height="22"
                  className="h-[18px] w-[18px] text-white/80 sm:h-[20px] sm:w-[20px] md:h-[22px] md:w-[22px]"
                />
              ) : (
                <Icon
                  icon="mdi:check-circle"
                  width="19"
                  height="19"
                  className="h-[16px] w-[16px] text-black/90 sm:h-[18px] sm:w-[18px] md:h-[19px] md:w-[19px]"
                />
              )}
            </span>

            <span
              className={[
                "min-w-0 text-[15px] font-normal leading-[1.45] tracking-[-0.02em] sm:text-[16px] md:text-[17px] lg:text-[17px]",
                isDark ? "text-white/95" : "text-black/95",
              ].join(" ")}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      {!isDark && ctaHref && ctaLabel ? (
        <div className="mt-7 flex justify-center sm:mt-8 md:mt-10">
          <CustomLink
            href={ctaHref}
            text={ctaLabel}
            variant="contained"
          />
        </div>
      ) : null}
    </div>
  );
}

export default function MissionComparisonSection() {
  return (
    <section className="overflow-hidden bg-black">
      <div className="mx-auto section-container py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16">
        <div className=" text-center">
          <p className="section-label">
            Our Mission
          </p>

          <h2 className="section-title mx-auto mt-3 text-white">
            We're Challenging How Coaching Businesses Are Built
          </h2>
        </div>

        <div className="mt-4 grid grid-cols-1 items-start gap-5 sm:mt-5 sm:gap-6 md:gap-7 lg:mt-6 lg:grid-cols-2 lg:gap-9">
          <ComparisonCard
            title="The Old Way"
            items={traditionalMbaItems}
            variant="dark"
          />

          <ComparisonCard
            title="The Supreme Coach Way"
            items={augmentMbaItems}
            variant="light"
            ctaHref="/enroll"
            ctaLabel="Book a Discovery Call"
          />
        </div>
      </div>
    </section>
  );
}