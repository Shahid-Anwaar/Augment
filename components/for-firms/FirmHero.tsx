"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { HERO_SLIDES, HeroSlide, securityItems } from "@/data/data";
import CustomEmblaCarousel from "../home/CustomCarosal";
import { FEATURES, heroSecurityItems } from "@/data/home";
import Image from "next/image";

export default function FirmHeroSection() {
    return (
        <section className="hero-carousel relative z-1 overflow-hidden bg-black">
            <div className="relative mx-auto flex max-w-full flex-col bg-black px-4 pb-10 pt-22 sm:px-6 sm:pt-28 lg:px-8 2xl:max-w-400">

                {/* Top Center Content */}
                <div className="relative z-30 mx-auto flex w-full max-w-5xl flex-col items-center text-center text-white">
                    <p className="section-label section-label-border mb-5">
                        For Coaching Firms & Organisations
                    </p>
                    <h1 className="section-title hero-title mx-auto max-w-[15ch] text-white sm:max-w-[18ch] lg:max-w-[20ch]">
                        Built with intelligence. For the firms of tomorrow.

                    </h1>

                    <p className="section-description mx-auto mt-4 max-w-3xl text-sm leading-6 sm:mt-5 sm:text-base">
                        The complete operating layer for multi-coach businesses with the intelligence built in. Team coordination, corporate client management, and the infrastructure to grow without complexity. Built for the firms of tomorrow.
                    </p>

                    <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5 sm:mt-8 sm:gap-y-3 md:gap-x-5">
                        {FEATURES.map((item) => (
                            <li key={item.label} className="flex items-center gap-1.5 sm:gap-2">
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

                    <div className="mx-auto mt-7 flex w-full max-w-88 flex-col items-center gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:justify-center">
                        <Link
                            href="/team"
                            className="group flex w-full items-center justify-center px-6 contained-btn sm:w-auto sm:min-w-65"
                        >
                            Talk to Our Team
                            <Icon
                                icon={"mingcute:arrow-right-fill"}
                                width="19"
                                height="19"
                                className="shrink-0"
                            />
                        </Link>

                        <Link
                            href="/contact-sales"
                            className="flex w-full items-center justify-center px-6 closed-btn sm:w-auto sm:min-w-65"
                        >
                            See What's Included
                        </Link>
                    </div>

                    <div className="mt-8 flex justify-center gap-x-3 lg:gap-x-5 gap-y-5 sm:gap-x-10">
                        {heroSecurityItems.map((item, index) => (
                            <div
                                key={item.name}
                                className="flex flex-col items-center justify-center text-center"
                            >
                                <Image
                                    src={item.src}
                                    alt={item.name}
                                    width={item.width}
                                    height={item.height}
                                    className={`h-8 w-8 object-contain sm:h-9 sm:w-9 lg:h-10 lg:w-10 xl:h-12 xl:w-12 ${index !== 4 ? "opacity-[0.7]" : ""
                                        }`}
                                />

                                <p className="mt-1 text-[16px] font-normal tracking-[-0.03em] text-white sm:text-[18px]">
                                    {item.name}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Slider */}
                <div className="relative mt-10 w-full overflow-hidden sm:mt-12 lg:mt-16">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-black via-black/50 to-transparent sm:w-14" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-black via-black/50 to-transparent sm:w-14" />

                    <CustomEmblaCarousel
                        isAutoplay={true}
                        CustomCard={(item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="min-w-0 shrink-0 grow-0 basis-full p-2 md:basis-[88%] lg:basis-[76%] xl:basis-[66%] 2xl:basis-[49%]"
                                >
                                    <HeroCard
                                        key={`${item.id}-${index}`}
                                        slide={item}
                                    />
                                </div>
                            );
                        }}
                        items={HERO_SLIDES}
                        options={{ loop: true, align: "center", skipSnaps: false, }}
                        wrapperClassName="min-h-[350px]"
                        autoplayConfig={{ delay: 3500 }}
                    />
                </div>
            </div>
        </section>
    );
}

function HeroCard({ slide }: { slide: HeroSlide }) {
    return (
        <article className="group relative h-full min-h-[350px] w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#080808] text-white shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:rounded-[22px]">
            <div className="grid h-full min-h-[350px] grid-cols-1 overflow-hidden md:grid-cols-[1.4fr_1.0fr]">

                {/* Card Content Left */}
                <div className="relative z-10 flex flex-col justify-center px-5 py-7 sm:px-7 md:px-8 lg:px-10">
                    <div className="mb-5">
                        {slide.company ? (
                            <figure className="relative h-7 w-28 overflow-hidden sm:h-8 sm:w-32">
                                <Image
                                    src={slide.company}
                                    alt={`${slide.name} company logo`}
                                    fill
                                    sizes="128px"
                                    className="object-contain object-left"
                                />
                            </figure>
                        ) : (
                            <div className="text-[18px] font-medium tracking-[-0.04em] text-white/90 sm:text-[20px]">
                                {slide.name}
                            </div>
                        )}

                        <div className="mt-4 h-0.5 w-18 bg-white/75" />
                    </div>

                    <p className="mb-2 text-[14px] font-medium leading-5 tracking-[-0.03em] text-white/70 sm:text-[16px]">
                        {slide.role}
                    </p>

                    <h3 className="max-w-md text-[30px] font-medium leading-[1.02] tracking-[-0.05em] text-white sm:text-[38px] lg:text-[44px]">
                        {slide.name}
                    </h3>

                    <p className="mt-5 max-w-md text-[14px] leading-6 text-white/72 sm:text-[15px] lg:text-[16px]">
                        {slide.description}
                    </p>
                </div>

                {/* Card Image / Video Right */}
                <div className="relative min-h-[210px] overflow-hidden md:min-h-full">
                    <Image
                        src={slide.image}
                        alt={slide.name}
                        fill
                        sizes="100vw"
                        className="object-cover transition-all duration-700 ease-out group-hover:opacity-0"
                    />

                    <video
                        key={slide.video}
                        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster={slide.image}
                    >
                        <source src={slide.video} type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 bg-linear-to-r from-[#080808]/55 via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                </div>
            </div>
        </article>
    );
}