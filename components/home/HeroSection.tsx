"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { FEATURES, HERO_SLIDES, HeroSlide } from "@/data/home";
import CustomEmblaCarousel from "./CustomCarosal";

export default function AugmentHeroSection() {
    return (
        <section className="hero-carousel relative z-1 overflow-hidden bg-black">
            <div className="relative mx-auto flex max-w-full flex-col bg-black pb-8 pt-18 sm:pb-10 sm:pt-22 md:pt-24 lg:flex-row lg:items-center lg:pb-18 lg:pt-28 2xl:max-w-400">
                <div className="relative z-30 mx-auto w-full px-4 pb-6 pt-4 text-center text-white sm:px-6 sm:pb-8 lg:absolute lg:left-0 lg:w-[50%] lg:px-0 lg:pb-4 lg:pl-8 lg:pr-0 lg:text-left xl:mx-16 xl:max-w-116 xl:pl-0">
                    <h1 className="section-title mx-auto max-w-[11ch] text-[34px] font-normal leading-[1.02] tracking-tight text-white sm:max-w-[13ch] sm:text-[46px] md:max-w-[15ch] md:text-[58px] lg:mx-0 lg:max-w-125 lg:text-[66px]">
                        The MBA for Entrepreneurs
                    </h1>

                    <p className="section-description mx-auto mt-4 max-w-[32rem] text-sm leading-6 sm:mt-5 sm:text-base lg:mx-0 lg:max-w-112.5 lg:text-start">
                        Join the Business School for Entrepreneurs. Built by the founders
                        of YouTube, Waze, Siri and Wikipedia. For the founders of tomorrow.
                    </p>

                    <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5 sm:mt-8 sm:gap-y-3 md:gap-x-5 lg:mt-10.5 lg:justify-start">
                        {FEATURES.map((item) => (
                            <li
                                key={item.label}
                                className="flex items-center gap-1.5 sm:gap-2"
                            >
                                <Icon
                                    icon={item.icon}
                                    className="h-4 w-4 shrink-0 text-white sm:h-4.5 sm:w-4.5"
                                />
                                <span className="text-center text-[11px] font-normal leading-4 uppercase tracking-[0.02em] text-white sm:whitespace-nowrap sm:text-[14px] md:text-[16px]">
                                    {item.label}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className="mx-auto mt-7 flex w-full max-w-[22rem] flex-col items-center gap-3 sm:mt-8 sm:max-w-none lg:mx-0 lg:mt-10.5 lg:items-start">
                        <Link
                            href="https://augment.school/sHK7SoG?"
                            className="group flex w-full items-center justify-center px-6 contained-btn sm:w-auto sm:min-w-65"
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
                            className="flex w-full items-center justify-center px-6 closed-btn sm:w-auto sm:min-w-65"
                        >
                            Watch Free Class
                        </Link>
                    </div>
                </div>

                <div className="relative flex w-full justify-end">
                    <div className="w-full lg:max-w-180 xl:max-w-255">
                        <div className="relative mt-6 block w-full overflow-hidden px-4 sm:mt-8 sm:px-6 lg:hidden">
                            <div className="pointer-events-none absolute inset-y-0 left-4 z-10 w-8 bg-linear-to-r from-black/70 via-black/20 to-transparent sm:left-6 sm:w-10" />
                            <div className="pointer-events-none absolute inset-y-0 right-4 z-10 w-8 bg-linear-to-l from-black/70 via-black/20 to-transparent sm:right-6 sm:w-10" />

                            <CustomEmblaCarousel
                                CustomCard={(item, index, firstItemIndex) => {
                                    return (
                                        <div
                                            key={index}
                                            className="min-h-[360px] min-w-0 shrink-0 grow-0 basis-full p-2 sm:min-h-[430px] sm:basis-1/2 md:min-h-[520px]"
                                        >
                                            <HeroCard
                                                key={`${item.id}-${index}`}
                                                slide={item}
                                            />
                                        </div>
                                    );
                                }}
                                isAutoplay={true}
                                items={HERO_SLIDES}
                                options={{ loop: true, align: "start", skipSnaps: false }}
                                wrapperClassName="min-h-[360px] sm:min-h-[430px] md:min-h-[520px]"
                            />
                        </div>

                        <div className="relative hidden w-full overflow-hidden lg:block">
                            <div className="pointer-events-none absolute right-0 z-10 h-full w-full bg-linear-to-r from-black/55 via-transparent to-transparent" />
                            <CustomEmblaCarousel
                                isAutoplay={true}
                                CustomCard={(item, index, firstItemIndex) => {
                                    return (
                                        <div
                                            key={index}
                                            className="min-h-105 min-w-0 shrink-0 grow-0 basis-full p-2 sm:min-h-130 sm:basis-1/2 lg:min-h-170 lg:basis-1/2 xl:basis-1/3"
                                        >
                                            <HeroCard
                                                key={`${item.id}-${index}`}
                                                slide={item}
                                            />
                                        </div>
                                    );
                                }}
                                items={HERO_SLIDES}
                                options={{ loop: true, align: "start", skipSnaps: false }}
                                wrapperClassName="mt-16 min-h-180 lg:mr-14"
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