"use client";

import Image from "next/image";

const topBadges = [
  {
    src: "/external-images/img-e7d280bd.webp",
    alt: "Best Relationship",
  },
  {
    src: "/external-images/img-ac1548a0.webp",
    alt: "Best Results",
  },
  {
    src: "/external-images/img-75d7f268.webp",
    alt: "High Performer",
  },
  {
    src: "/external-images/img-6b178155.webp",
    alt: "Momentum Leader",
  },
  {
    src: "/external-images/img-d5430c16.webp",
    alt: "Best Estimated ROI",
  },
  {
    src: "/external-images/img-c0af4181.webp",
    alt: "Best Usability",
  },
  {
    src: "/external-images/img-4aeacb58.webp",
    alt: "Fastest Implementation",
  },
];

const securityBadges = [
  {
    src: "/external-images/img-8921ea20.png",
    alt: "AICPA SOC",
    className: "w-[78px] sm:w-[90px] md:w-[98px]",
  },
  {
    src: "/external-images/img-9708ab6d.png",
    alt: "GDPR",
    className: "w-[78px] sm:w-[90px] md:w-[98px]",
  },
  {
    src: "/external-images/img-c16d13a5.png",
    alt: "HIPAA",
    className: "w-[95px] sm:w-[110px] md:w-[125px]",
  },
];

const reviewBadges = [
  {
    src: "/external-images/img-19020ef5.webp",
    alt: "Software Advice Reviews",
    className: "w-[150px] sm:w-[165px]",
  },
  {
    src: "/external-images/img-7aa2526d.webp",
    alt: "Capterra Reviews",
    className: "w-[130px] sm:w-[145px]",
  },
];

export default function TrustBadgesSection() {
  return (
    <section className="w-full overflow-hidden px-4 py-8 sm:px-6 sm:py-12 md:px-8 lg:px-10">
  <div className="mx-auto flex max-w-[1100px] flex-col gap-6 sm:gap-8 lg:flex-row lg:items-start lg:justify-between">
    {/* Left Side */}
    <div className="flex min-w-0 flex-col items-center gap-5 sm:gap-7 lg:items-start">
      <div className="flex flex-wrap items-end justify-center gap-x-2.5 gap-y-3 sm:gap-x-3 sm:gap-y-4 lg:justify-start">
        {topBadges.map((badge) => (
          <Image
            key={badge.alt}
            src={badge.src}
            alt={badge.alt}
            width={80}
            height={100}
            unoptimized
            className="h-auto w-[46px] sm:w-[66px] md:w-[72px] lg:w-[76px]"
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 sm:gap-5 lg:justify-start lg:pl-[70px]">
        {reviewBadges.map((badge) => (
          <Image
            key={badge.alt}
            src={badge.src}
            alt={badge.alt}
            width={170}
            height={55}
            unoptimized
            className={`h-auto max-w-[130px] object-contain sm:max-w-none ${badge.className}`}
          />
        ))}
      </div>
    </div>

    {/* Right Side */}
    <div className="flex min-w-0 shrink-0 items-center justify-center gap-2.5 sm:gap-4 lg:justify-end">
      {securityBadges.map((badge) => (
        <Image
          key={badge.alt}
          src={badge.src}
          alt={badge.alt}
          width={130}
          height={130}
          unoptimized
          className={`h-auto max-w-[82px] object-contain sm:max-w-none ${badge.className}`}
        />
      ))}
    </div>
  </div>
</section>
  );
}