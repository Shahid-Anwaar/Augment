"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useEffect, useMemo, useState } from "react";
import { FEATURES, HERO_SLIDES, HeroSlide } from "@/data/home";

const AUTOPLAY_MS = 3000;

function getVisibleSlides(startIndex: number, count: number) {
  return Array.from({ length: count }, (_, index) => {
    return HERO_SLIDES[(startIndex + index) % HERO_SLIDES.length];
  });
}

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // if (paused) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(interval);
  }, []);

  const desktopSlides = useMemo(
    () => getVisibleSlides(activeIndex, 4),
    [activeIndex]
  );

  const mobileSlides = useMemo(
    () => getVisibleSlides(activeIndex, 3),
    [activeIndex]
  );

  return (
    <section className="hero-carousel relative z-1 overflow-hidden bg-black">
      <div className="relative mx-auto flex max-w-full flex-col bg-black pb-10 lg:flex-row lg:items-center lg:pb-18 pt-28 2xl:max-w-[86em]">
        <div className="relative z-30 mx-auto px-4 pb-8 pt-4 text-center text-white sm:px-6 lg:absolute lg:left-0 lg:w-[50%] lg:px-0 lg:pb-4 lg:pl-10 lg:pr-0 lg:text-left xl:mx-24 xl:max-w-116 xl:pl-0">
          <h1 className="max-w-[15ch] text-[50px] font-normal leading-tight tracking-tight text-white sm:text-[58px] md:text-[66px] lg:max-w-125 section-title">
            The MBA for Entrepreneurs
          </h1>

          <p className="mx-auto mt-3 max-w-[36ch] text-[15px] font-normal leading-[1.45] tracking-[-0.02em] text-white/90 sm:text-[20px] lg:mx-0 lg:mt-4 lg:max-w-112.5">
            Join the Business School for Entrepreneurs. Built by the founders
            of YouTube, Waze, Siri and Wikipedia. For the founders of tomorrow.
          </p>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 md:gap-x-5 lg:mt-10.5 lg:justify-start">
            {FEATURES.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-1.5 md:gap-2"
              >
                <Icon
                  icon={item.icon}
                  className="h-4.5 w-4.5 shrink-0 text-white"
                />
                <span className="whitespace-nowrap text-[14px] font-normal uppercase tracking-[0.02em] text-white md:text-[16px]">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-8 flex items-start flex-col gap-3 lg:mx-0 lg:mt-10.5">
            <Link
              href="https://augment.school/sHK7SoG?"
              className="group px-6 contained-btn min-w-65"
            >
              Enroll Now
              <Icon
                icon={"mingcute:arrow-right-fill"}
                width="19"
                height="19"
                className="shrink-0"
              />
            </Link>

            <Link
              href="https://s13rwwhxhl9.typeform.com/to/lmPnaKUF?utm_source=website&"
              className="px-6 close-btn min-w-65"
            >
              Watch Free Class
            </Link>
          </div>
        </div>

        <div
          className="relative flex w-full justify-end"
        >
          <div className="w-full max-w-225.5">
            <div className="hidden w-full overflow-hidden lg:block relative">
              <div className="absolute z-10 right-0 h-full w-full bg-linear-to-r from-black via-transparent to-transparent" />
              <div className="flex h-155 items-stretch gap-3 xl:h-175">
                {desktopSlides.map((slide, index) => (
                  <HeroCard
                    key={`${slide.id}-${index}`}
                    slide={slide}
                    variant={
                      index === 0
                        ? "primary"
                        : index === 3
                          ? "peek"
                          : "secondary"
                    }
                  />
                ))}
              </div>
            </div>

            <div className="block overflow-hidden px-4 sm:px-6 lg:hidden">
              <div className="flex items-stretch gap-3 overflow-hidden">
                {mobileSlides.map((slide, index) => (
                  <HeroCard
                    key={`${slide.id}-mobile-${index}`}
                    slide={slide}
                    variant={index === 0 ? "mobilePrimary" : "mobileSecondary"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-10 hidden lg:flex"
          aria-hidden="true"
        >
          {/* <div className="mr-[-1px] h-full w-full min-w-95 bg-black lg:min-w-[460px]" /> */}
          {/* <div className="h-full w-full bg-linear-to-r from-black via-black/84 to-transparent" /> */}
        </div>

        <div
          className="pointer-events-none absolute -right-px top-0 z-10 hidden h-full w-[15%] bg-linear-to-l from-black via-black/88 to-transparent xl:block xl:w-[20%]"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}



function HeroCard({
  slide,
  variant,
}: {
  slide: HeroSlide;
  variant:
  | "primary"
  | "secondary"
  | "peek"
  | "mobilePrimary"
  | "mobileSecondary";
}) {
  const isPrimary = variant === "primary" || variant === "mobilePrimary";
  const isPeek = variant === "peek";
  const showVideo = Boolean(slide.video) && isPrimary;

  return (
    <article
      className={[
        "group relative shrink-0 overflow-hidden bg-black text-white transition-all duration-700 ease-out",
        variant === "primary" &&
        "basis-[56%] rounded-[18px] xl:basis-[58%] xl:rounded-3xl",
        variant === "secondary" &&
        "basis-[17.5%] rounded-[18px] opacity-[0.94] xl:basis-[15.5%] xl:rounded-[22px]",
        variant === "peek" &&
        "basis-[8.5%] rounded-[18px] opacity-[0.5] xl:basis-[9%] xl:rounded-[22px]",
        variant === "mobilePrimary" &&
        "min-w-[72%] rounded-[18px] h-70 sm:min-w-[76%] sm:h-85",
        variant === "mobileSecondary" &&
        "min-w-[24%] rounded-[18px] h-70 opacity-[0.78] sm:min-w-[26%] sm:h-85",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="absolute inset-0 bg-black">
        <img
          src={slide.image}
          alt={slide.name}
          className={[
            "h-full w-full object-cover transition-all duration-700 ease-out",
            showVideo ? "opacity-0" : "opacity-100",
            isPeek ? "scale-[1.06]" : "scale-100 group-hover:scale-[1.02]",
          ].join(" ")}
        />

        {showVideo && (
          <video
            key={slide.video}
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={slide.image}
          >
            <source src={slide.video} type="video/mp4" />
          </video>
        )}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_12%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.92)_100%)]" />
      <div className="absolute inset-y-0 left-0 w-[28%] bg-linear-to-r from-black/50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[20%] bg-linear-to-l from-black/32 to-transparent" />

      <div
        className={[
          "absolute bottom-0 left-0 right-0 z-2",
          isPrimary
            ? "px-5 pb-6 lg:px-5 lg:pb-7 xl:px-6 xl:pb-8"
            : "px-4 pb-5 lg:px-4 lg:pb-6",
        ].join(" ")}
      >
        <div className="mb-3">
          {slide.company ? (
            <figure
              className={[
                "relative overflow-hidden",
                isPrimary
                  ? "h-8 w-33 sm:h-9 sm:w-37 lg:h-9 lg:w-37 xl:h-10 xl:w-41"
                  : "h-5 w-19.5 sm:h-6 sm:w-23 lg:h-6 lg:w-24 xl:h-7 xl:w-27",
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
                isPrimary
                  ? "text-[20px] sm:text-[22px] lg:text-[22px] xl:text-[24px]"
                  : "text-[16px] sm:text-[17px] lg:text-[18px] xl:text-[20px]",
              ].join(" ")}
            >
              {slide.name}
            </div>
          )}

          {!isPeek && (
            <div
              className={[
                "mt-3 h-0.5 bg-white/75",
                isPrimary ? "w-24.5 xl:w-50" : "w-16 xl:w-18",
              ].join(" ")}
            />
          )}
        </div>

        {!isPeek && (
          <>
            {isPrimary && (
              <p className="mb-1 tracking-[-0.05em] text-white text-[17px] font-medium leading-[1.02] sm:text-[20px] lg:text-[18px] xl:text-[21px]">
                {slide.role}
              </p>
            )}

            <h3
              className={[
                "tracking-[-0.05em] text-white",
            false
                  ? "text-[26px] font-medium leading-[1.02] sm:text-[30px] lg:text-[38px] xl:text-[42px]"
                  : "section-title",
              ].join(" ")}
            >
              {slide.name}
            </h3>
          </>
        )}
      </div>
    </article>
  );
}