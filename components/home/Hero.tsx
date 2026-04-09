"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { useEffect, useMemo, useState } from "react";

type FeatureItem = {
  label: string;
  icon: string;
};

type HeroSlide = {
  id: number;
  name: string;
  company: string;
  role: string;
  image: string;
  video?: string;
};

const AUTOPLAY_MS = 3000;

const FEATURES: FeatureItem[] = [
  { label: "Online", icon: "ph:play-circle-fill" },
  { label: "Bite-Sized Lessons", icon: "ph:clock-fill" },
  { label: "Certificate", icon: "ph:certificate-fill" },
];

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    name: "Jimmy Wales",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F3a370c96d97b4942b42ad70f3382c000",
    role: "Founder of Wikipedia",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F234946f583ab4a7e98dd9bba047775d2",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F52f0105d32714e168307b5da0a27b4fc%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=52f0105d32714e168307b5da0a27b4fc&alt=media&optimized=true",
  },
  {
    id: 2,
    name: "Georgia Lewis",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fad8c245895824a339ee40830d041c26c",
    role: "Former Prompt Engineer at Meta",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F7835a8f882ef450b84d1c16324fc8d75",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F7cfe202a016644adb4552d366932c01c%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=7cfe202a016644adb4552d366932c01c&alt=media&optimized=true",
  },
  {
    id: 3,
    name: "Steve Chen",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fa2bab8fba2434d09b01c553d115e3fbe",
    role: "Founder of Youtube",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F47dbb563aed44486b28b4631c8833235",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F509807a034044fd0b3aff3c3a6c3266a%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=509807a034044fd0b3aff3c3a6c3266a&alt=media&optimized=true",
  },
  {
    id: 4,
    name: "Zack Kass",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F56f4f4ee156f43b3847270e2669fd324",
    role: "Former Head of Go-To-Market at OpenAI",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F513af209523041388c737f66336e62e5",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F7c887e35c3a54751a8b7d63c2eb59f28%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=7c887e35c3a54751a8b7d63c2eb59f28&alt=media&optimized=true",
  },
  {
    id: 5,
    name: "Ann Hiatt",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fc33f8dc7073c4e65ad88bb99143e721a",
    role: "Chief of Staff",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F03323b1302d94d50a9bba04594d829ac",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fbc1c38b516ad4255bfb4cbfd2e6a0627%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=bc1c38b516ad4255bfb4cbfd2e6a0627&alt=media&optimized=true",
  },
  {
    id: 6,
    name: "Morin Oluwole",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fad8c245895824a339ee40830d041c26c",
    role: "Ex-Director at Meta",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F2e7ee683820648d9ab0ded82e21402de",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F4d37000288bc4898afba44b5568d0d7c%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=4d37000288bc4898afba44b5568d0d7c&alt=media&optimized=true",
  },
  {
    id: 7,
    name: "Chris Barton",
    company: "",
    role: "Founder of Shazam",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fb4bfaa5158ac467ebda01fc7802240d8",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F92eef86c59e44cb9bf88943ee46097eb%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=92eef86c59e44cb9bf88943ee46097eb&alt=media&optimized=true",
  },
  {
    id: 8,
    name: "Caen Contee",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F6a1f6df1d2d44b5fb5212174b1afcc41",
    role: "Founder of Lime",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fc115f60499c24833971a20af6d253375",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F734172ad92114e84ab3a068f9722cdfa%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=734172ad92114e84ab3a068f9722cdfa&alt=media&optimized=true",
  },
  {
    id: 9,
    name: "Uri Levine",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fb5387309aa2842f2b27b60f26a397778",
    role: "Founder of Waze",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F3c1232896777476e9b5704d580aec96f",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fe9701219a7e743408c14fa27cc8edd3a%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=e9701219a7e743408c14fa27cc8edd3a&alt=media&optimized=true",
  },
  {
    id: 10,
    name: "Kelly Richmond Pope",
    company:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F31d24bcfe549491f971d154458d493ab",
    role: "Best-Selling Author",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F27cc610e575c4478bc245cc94889dc15",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F80aee6543c4946ec854dc7c019eaf8c8%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=80aee6543c4946ec854dc7c019eaf8c8&alt=media&optimized=true",
  },
];

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
    <section className="hero-carousel relative z-[1] overflow-hidden bg-black">
      <div className="relative mx-auto flex max-w-full flex-col bg-black pb-10 lg:flex-row lg:items-center lg:pb-18 pt-28 2xl:max-w-[86em]">
        <div className="relative z-30 mx-auto px-4 pb-8 pt-4 text-center text-white sm:px-6 lg:absolute lg:left-0 lg:w-[50%] lg:px-0 lg:pb-4 lg:pl-10 lg:pr-0 lg:text-left xl:mx-24 xl:max-w-[464px] xl:pl-0">
          <h1 className="max-w-[15ch] text-[50px] font-normal leading-tight tracking-tight text-white sm:text-[58px] md:text-[66px] lg:max-w-[500px] section-title">
            The MBA for Entrepreneurs
          </h1>

          <p className="mx-auto mt-3 max-w-[36ch] text-[15px] font-normal leading-[1.45] tracking-[-0.02em] text-white/90 sm:text-[20px] lg:mx-0 lg:mt-4 lg:max-w-[450px]">
            Join the Business School for Entrepreneurs. Built by the founders
            of YouTube, Waze, Siri and Wikipedia. For the founders of tomorrow.
          </p>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 md:gap-x-5 lg:mt-[2.625rem] lg:justify-start">
            {FEATURES.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-1.5 md:gap-2"
              >
                <Icon
                  icon={item.icon}
                  className="h-[18px] w-[18px] shrink-0 text-white"
                />
                <span className="whitespace-nowrap text-[14px] font-normal uppercase tracking-[0.02em] text-white md:text-[16px]">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-8 flex items-start flex-col gap-3 lg:mx-0 lg:mt-[2.625rem]">
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
          <div className="w-full max-w-[901px]">
            <div className="hidden w-full overflow-hidden lg:block relative">
              <div className="absolute z-10 right-0 h-full w-full bg-linear-to-r from-black via-transparent to-transparent" />
              <div className="flex h-[620px] items-stretch gap-3 xl:h-[700px]">
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
          {/* <div className="mr-[-1px] h-full w-full min-w-[380px] bg-black lg:min-w-[460px]" /> */}
          {/* <div className="h-full w-full bg-linear-to-r from-black via-black/84 to-transparent" /> */}
        </div>

        <div
          className="pointer-events-none absolute right-[-1px] top-0 z-10 hidden h-full w-[15%] bg-gradient-to-l from-black via-black/88 to-transparent xl:block xl:w-[20%]"
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
        "basis-[56%] rounded-[18px] xl:basis-[58%] xl:rounded-[24px]",
        variant === "secondary" &&
        "basis-[17.5%] rounded-[18px] opacity-[0.94] xl:basis-[15.5%] xl:rounded-[22px]",
        variant === "peek" &&
        "basis-[8.5%] rounded-[18px] opacity-[0.5] xl:basis-[9%] xl:rounded-[22px]",
        variant === "mobilePrimary" &&
        "min-w-[72%] rounded-[18px] h-[280px] sm:min-w-[76%] sm:h-[340px]",
        variant === "mobileSecondary" &&
        "min-w-[24%] rounded-[18px] h-[280px] opacity-[0.78] sm:min-w-[26%] sm:h-[340px]",
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
      <div className="absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-black/50 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-[20%] bg-gradient-to-l from-black/32 to-transparent" />

      <div
        className={[
          "absolute bottom-0 left-0 right-0 z-[2]",
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
                  ? "h-8 w-[132px] sm:h-9 sm:w-[148px] lg:h-9 lg:w-[148px] xl:h-10 xl:w-[164px]"
                  : "h-5 w-[78px] sm:h-6 sm:w-[92px] lg:h-6 lg:w-[96px] xl:h-7 xl:w-[108px]",
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
                isPrimary ? "w-[98px] xl:w-[200px]" : "w-[64px] xl:w-[72px]",
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