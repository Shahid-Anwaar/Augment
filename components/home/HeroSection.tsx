"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { HERO_SLIDES, HeroSlide } from "@/data/data";
import CustomEmblaCarousel from "./CustomCarosal";
import { FEATURES, heroSecurityItems } from "@/data/home";

type HeroFeature = {
  label: string;
  icon: string;
};

type HeroSecurityItem = {
  name: string;
  src: string;
  width: number;
  height: number;
};

type AugmentHeroSectionProps = {
  title?: string;
  description?: string;
  features?: HeroFeature[];
  primaryButtonText?: string;
  primaryButtonHref?: string;
  primaryButtonIcon?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  securityItems?: HeroSecurityItem[];
  slides?: typeof HERO_SLIDES;
  sectionClassName?: string;
};

const defaultHeroTitle =
  "The Intelligent Growth Partner";

const defaultHeroDescription =
  "Built for the coaches and firms of tomorrow who want stronger businesses, deeper client relationships, and practices built to last.";

export default function AugmentHeroSection({
  title = defaultHeroTitle,
  description = defaultHeroDescription,
  features = FEATURES,
  primaryButtonText = "Book a Strategy Call",
  primaryButtonHref = "/call",
  primaryButtonIcon = "solar:phone-linear",
  secondaryButtonText = "See What We Build",
  secondaryButtonHref = "/contact-sales",
  securityItems = heroSecurityItems,
  slides = HERO_SLIDES,
  sectionClassName = "",
}: AugmentHeroSectionProps) {
  return (
    <section
      className={`hero-carousel relative z-1 overflow-hidden bg-black ${sectionClassName}`}
    >
      <div className="relative mx-auto flex flex-col bg-black sm:pt-16 pt-14 lg:flex-row lg:items-center pb-2 maximum-width">
        <div className="relative z-30 text-center text-white lg:col-span-5 lg:text-left xl:col-span-5">
          <p className="section-label section-label-border">
            For Coaches & Firms
          </p>
          <h1 className="section-title hero-title mx-auto text-white  lg:mx-0">
            {title}
          </h1>

          <p className="section-description mx-auto mt-4 max-w-[34rem] text-sm leading-6 text-white/90 sm:text-base lg:mx-0 lg:mt-5 lg:max-w-[34rem]">
            {description}
          </p>

          <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5 sm:gap-x-5 lg:mt-5 lg:gap-x-8 xl:gap-x-10 lg:justify-start">
            {features.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-1.5 sm:gap-2"
              >
                <Icon
                  icon={item.icon}
                  className="h-4 w-4 shrink-0 text-white sm:h-4.5 sm:w-4.5"
                />
                <span className="text-[11px] font-normal leading-4 uppercase tracking-[0.02em] text-white sm:text-[14px] md:text-[15px]">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-5 flex w-full max-w-88 flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
            <Link
              href={primaryButtonHref}
              className="group flex w-full items-center justify-center px-6 contained-btn sm:w-auto sm:min-w-65"
            >
              {primaryButtonText}
              <Icon
                icon={primaryButtonIcon}
                width="19"
                height="19"
                className="shrink-0"
              />
            </Link>

            <Link
              href={secondaryButtonHref}
              className="flex w-full items-center justify-center px-6 closed-btn sm:w-auto sm:min-w-65"
            >
              {secondaryButtonText}
            </Link>
          </div>

          <div className="mt-5 lg:w-full flex justify-center gap-x-5 md:gap-x-7 lg:gap-x-8 xl:gap-x-10 lg:justify-between lg:pr-3">
            {securityItems.map((item, index) => (
              <div
                key={item.name}
                className="flex flex-col items-center justify-center text-center"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  width={item.width}
                  height={item.height}
                  className={`h-8 w-8 object-contain sm:h-9 sm:w-9 lg:h-10 lg:w-10 xl:h-12 xl:w-12 ${index !== 4 ? " opacity-[0.7]" : " "}`}
                />

                <p className="mt-1 text-[13px] font-normal leading-tight tracking-[-0.03em] text-white sm:text-[15px] lg:text-[16px] xl:text-[17px]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex w-full justify-end">
          <div className="w-full lg:max-w-180 xl:max-w-240">
            <div className="relative mt-6 block w-full overflow-hidden px-4 sm:mt-8 sm:px-6 lg:hidden">
              <div className="pointer-events-none absolute inset-y-0 left-4 z-10 w-8 bg-linear-to-r from-black/70 via-black/20 to-transparent sm:left-6 sm:w-10" />
              <div className="pointer-events-none absolute inset-y-0 right-4 z-10 w-8 bg-linear-to-l from-black/70 via-black/20 to-transparent sm:right-6 sm:w-10" />

              <CustomEmblaCarousel
                CustomCard={(item, index) => {
                  return (
                    <div
                      key={index}
                      className="min-h-[360px] min-w-0 shrink-0 grow-0 basis-full p-2 sm:min-h-[430px] sm:basis-1/2 md:min-h-[520px]"
                    >
                      <HeroCard key={`${item.id}-${index}`} slide={item} />
                    </div>
                  );
                }}
                isAutoplay={true}
                items={slides}
                options={{ loop: true, align: "start", skipSnaps: false }}
                wrapperClassName="min-h-[360px] sm:min-h-[430px] md:min-h-[520px]"
              />
            </div>

            <div className="relative hidden w-full overflow-hidden lg:block">
              <div className="pointer-events-none absolute right-0 z-10 h-full w-full bg-linear-to-r from-black/55 via-transparent to-transparent" />

              <CustomEmblaCarousel
                isAutoplay={true}
                moveTo="left"
                CustomCard={(item, index) => {
                  return (
                    <div
                      key={index}
                      className="min-h-105 min-w-0 shrink-0 grow-0 basis-full p-2 sm:min-h-130 sm:basis-1/2 lg:min-h-151 lg:basis-1/2 xl:basis-1/3"
                    >
                      <HeroCard key={`${item.id}-${index}`} slide={item} />
                    </div>
                  );
                }}
                items={slides}
                options={{ loop: true, align: "start", skipSnaps: false }}
                wrapperClassName="mt-16 min-h-170"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCard({ slide }: { slide: HeroSlide }) {
  return (
    <article
      className={[
        "group relative h-full min-h-[360px] w-full overflow-hidden rounded-[16px] bg-black text-white sm:min-h-[440px] sm:rounded-[18px]",
        "opacity-[0.94] lg:min-h-100 xl:rounded-[22px]",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-black">
        <img
          src={slide.image}
          alt={slide.name}
          className={[
            "h-full w-full object-cover transition-all duration-700 ease-out",
            "scale-100 group-hover:opacity-0",
          ].join(" ")}
        />
        <video
          key={slide.video}
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={slide.image}
        >
          <source src={slide.video} type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_12%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.92)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-[28%] bg-linear-to-r from-black/50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[20%] bg-linear-to-l from-black/32 to-transparent" />

      <div
        className={[
          "absolute bottom-0 left-0 right-0 z-2",
          "px-3.5 pb-4.5 sm:px-4 sm:pb-5 lg:px-4 lg:pb-6",
        ].join(" ")}
      >
        <div className="mb-3">
          {slide.company ? (
            <figure
              className={[
                "relative overflow-hidden",
                "h-5 w-19.5 sm:h-6 sm:w-23 lg:h-6 lg:w-24 xl:h-7 xl:w-27",
              ].join(" ")}
            >
              <img
                src={slide.company}
                alt={`${slide.name} company logo`}
                className="h-full w-full object-contain object-left"
                loading="lazy"
              />
            </figure>
          ) : (
            <div
              className={[
                "font-medium tracking-[-0.05em] text-white/88",
                "text-[16px] sm:text-[17px] lg:text-[18px] xl:text-[20px]",
              ].join(" ")}
            >
              {slide.name}
            </div>
          )}

          <div
            className={[
              "mt-3 h-0.5 bg-white/75",
              "w-16 xl:w-18",
            ].join(" ")}
          />
        </div>

        <>
          <p className="mb-1 text-[13px] font-medium leading-[1.08] tracking-[-0.05em] text-white sm:text-[18px] lg:text-[16px] xl:text-[18px]">
            {slide.role}
          </p>
          <h3
            className={[
              "tracking-[-0.05em] text-white",
              "text-[22px] font-medium leading-[1.02] sm:text-[28px] lg:text-[34px] xl:text-[38px]",
            ].join(" ")}
          >
            {slide.name}
          </h3>
        </>
      </div>
    </article>
  );
}