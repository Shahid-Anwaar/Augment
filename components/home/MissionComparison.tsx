import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  augmentMbaItems,
  traditionalMbaItems,
  type ComparisonItem,
} from "@/data/home";

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
        "rounded-[20px] px-7 pb-8 pt-8 sm:px-9 sm:pb-9 sm:pt-9 md:px-10 md:pb-10 md:pt-10",
        isDark
          ? "bg-[linear-gradient(90deg,#17181b_0%,#111214_55%,#17181b_100%)] text-white"
          : "bg-[#f3f4f6] text-black",
      ].join(" ")}
    >
      <h3
        className={[
          "section-title text-[34px] sm:text-[38px] lg:text-[37px]",
          isDark ? "text-white" : "text-black",
        ].join(" ")}
      >
        {title}
      </h3>

      <div
        className={[
          "mt-5 h-px w-full",
          isDark ? "bg-white/70" : "bg-black/70",
        ].join(" ")}
      />

      <ul className="mt-8">
        {items.map((item, index) => (
          <li
            key={item.text}
            className={[
              "flex items-center gap-4 py-3.75",
              index !== items.length - 1
                ? isDark
                  ? "border-b border-white/20"
                  : "border-b border-black/14"
                : "",
            ].join(" ")}
          >
            <span className="mt-px shrink-0">
              {isDark ? (
                <Icon
                  icon="lucide:x"
                  width="22"
                  height="22"
                  className="text-white/80"
                />
              ) : (
                <Icon
                  icon="mdi:check-circle"
                  width="19"
                  height="19"
                  className="text-black/90"
                />
              )}
            </span>

            <span
              className={[
                "text-[18px] font-normal leading-[1.35] tracking-[-0.03em] lg:text-[17px]",
                isDark ? "text-white/95" : "text-black/95",
              ].join(" ")}
            >
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      {!isDark && ctaHref && ctaLabel ? (
        <div className="mt-10 flex justify-center">
          <Link
            href={ctaHref}
            className="contained-btn px-10 text-[15px]"
          >
            {ctaLabel}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default function MissionComparisonSection() {
  return (
    <section className="bg-black">
      <div className="mx-auto w-full max-w-282.5 px-6 pb-3 pt-16 sm:px-8 md:px-10 md:pb-4 md:pt-20 lg:px-12 lg:pb-12 lg:pt-22">
        <div className="mx-auto max-w-265 text-center">
          <p className="section-label">
            Our Mission
          </p>

          <h2 className="mt-6 text-white section-title">
            We&apos;re Challenging the Traditional Education System
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 items-start gap-9 lg:mt-18 lg:grid-cols-2 lg:gap-9">
          <ComparisonCard
            title="Traditional MBAs"
            items={traditionalMbaItems}
            variant="dark"
          />

          <ComparisonCard
            title="The Augment MBA"
            items={augmentMbaItems}
            variant="light"
            ctaHref="/enroll"
            ctaLabel="Enroll Now"
          />
        </div>
      </div>
    </section>
  );
}