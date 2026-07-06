"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { HERO_SLIDES, HeroSlide } from "@/data/data";
import CustomEmblaCarousel from "../home/CustomCarosal";
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
    "Grow Your Coaching Practice with Confidence";

const defaultHeroDescription =
    "Everything you need to attract clients, deliver exceptional coaching, and build a business that reflects your expertise creates lasting impact, strengthens client relationships, and drives predictable business growth.";

export default function CoachHeroSection({
    title = defaultHeroTitle,
    description = defaultHeroDescription,
    features = FEATURES,
    primaryButtonText = "Book a Discovery Call",
    primaryButtonHref = "/call",
    primaryButtonIcon = "solar:phone-linear",
    secondaryButtonText = "See What's Included",
    secondaryButtonHref = "/contact-sales",
    securityItems = heroSecurityItems,
    slides = HERO_SLIDES,
    sectionClassName = "",
}: AugmentHeroSectionProps) {
    const firstColumnSlides = HERO_SLIDES.filter((_, index) => index % 3 === 0);
    const secondColumnSlides = HERO_SLIDES.filter((_, index) => index % 3 === 1);
    const thirdColumnSlides = HERO_SLIDES.filter((_, index) => index % 3 === 2);

    const firstColumnSlidesLoop = [
        ...firstColumnSlides,
        ...firstColumnSlides,
        ...firstColumnSlides,
    ];

    const secondColumnSlidesLoop = [
        ...secondColumnSlides,
        ...secondColumnSlides,
        ...secondColumnSlides,
    ];

    const thirdColumnSlidesLoop = [
        ...thirdColumnSlides,
        ...thirdColumnSlides,
        ...thirdColumnSlides,
    ];
    return (
        <section
            className={`hero-carousel relative z-1 overflow-hidden bg-black ${sectionClassName}`}
        >
            <div className="relative mx-auto w-full max-w-[1600px] bg-black px-4 pb-6 pt-20 sm:px-6 sm:pt-24 lg:min-h-[720px] lg:px-8 xl:px-12">
                <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">
                    {/* Left Content */}
                    <div className="relative z-30 text-center text-white lg:col-span-5 lg:text-left xl:col-span-5">
                        <p className="inline-flex section-label section-label-border mb-3 w-fit max-w-200">
                            For Individual Coaches
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

                        <div className="mt-5 lg:w-full flex justify-center gap-x-5 md:gap-x-7 lg:gap-x-8 xl:gap-x-10 lg:justify-between max-w-[33rem] ">
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

                    {/* Right Carousel Area */}
                    <div className="relative w-full overflow-hidden lg:col-span-7 xl:col-span-7">
                        {/* Mobile Carousel */}
                        <div className="relative block w-full overflow-hidden lg:hidden">
                            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-black/80 via-black/20 to-transparent sm:w-10" />
                            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-black/80 via-black/20 to-transparent sm:w-10" />

                            <CustomEmblaCarousel
                                CustomCard={(item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="h-[360px] min-w-0 shrink-0 grow-0 basis-full p-2 sm:h-[430px] sm:basis-1/2 md:h-[520px]"
                                        >
                                            <HeroCard key={`${item.id}-${index}`} slide={item} />
                                        </div>
                                    );
                                }}
                                isAutoplay={true}
                                items={slides}
                                options={{ loop: true, align: "center", skipSnaps: false }}
                                wrapperClassName="h-[360px] sm:h-[430px] md:h-[520px]"
                            />
                        </div>

                        {/* Desktop 3 Vertical Columns */}
                        <div className="relative hidden w-full overflow-hidden lg:block">
                            <div className="pointer-events-none absolute w-full top-0 z-10 h-28 bg-linear-to-b from-black/80 via-black/30 to-transparent" />
                            <div className="pointer-events-none absolute w-full bottom-0 z-10 h-28 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="grid h-[620px] grid-cols-3 gap-3 overflow-hidden xl:h-[700px] xl:gap-4 2xl:h-[760px]">
                                <CustomEmblaCarousel
                                    isContinuousPlay
                                    moveTo="top"
                                    continuousPlayConfig={{
                                        speed: 0.9,
                                        // stopOnMouseEnter: false,
                                    }}
                                    CustomCard={(item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="h-[300px] min-h-0 min-w-0 shrink-0 grow-0 basis-[300px] p-1.5 xl:h-[340px] xl:basis-[340px] xl:p-2 2xl:h-[360px] 2xl:basis-[360px]"
                                            >
                                                <HeroCard key={`${item.id}-${index}`} slide={item} />
                                            </div>
                                        );
                                    }}
                                    items={firstColumnSlidesLoop}
                                    options={{ loop: true, align: "center", skipSnaps: false }}
                                    wrapperClassName="h-full min-h-0"
                                />

                                <CustomEmblaCarousel
                                    isContinuousPlay
                                    moveTo="bottom"
                                    continuousPlayConfig={{
                                        speed: 0.9,
                                        // stopOnMouseEnter: false,
                                    }}
                                    CustomCard={(item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="h-[300px] min-h-0 min-w-0 shrink-0 grow-0 basis-[300px] p-1.5 xl:h-[340px] xl:basis-[340px] xl:p-2 2xl:h-[360px] 2xl:basis-[360px]"
                                            >
                                                <HeroCard key={`${item.id}-${index}`} slide={item} />
                                            </div>
                                        );
                                    }}
                                    items={secondColumnSlidesLoop}
                                    options={{ loop: true, align: "center", skipSnaps: false }}
                                    wrapperClassName="h-full min-h-0"
                                />

                                <CustomEmblaCarousel
                                    isContinuousPlay
                                    moveTo="top"
                                    continuousPlayConfig={{
                                        speed: 0.9,
                                        // stopOnMouseEnter: false,
                                    }}
                                    CustomCard={(item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="h-[300px] min-h-0 min-w-0 shrink-0 grow-0 basis-[300px] p-1.5 xl:h-[340px] xl:basis-[340px] xl:p-2 2xl:h-[360px] 2xl:basis-[360px]"
                                            >
                                                <HeroCard key={`${item.id}-${index}`} slide={item} />
                                            </div>
                                        );
                                    }}
                                    items={thirdColumnSlidesLoop}
                                    options={{ loop: true, align: "center", skipSnaps: false }}
                                    wrapperClassName="h-full min-h-0"
                                />
                            </div>
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
                "group relative h-full min-h-0 w-full overflow-hidden rounded-[16px] bg-black text-white sm:rounded-[18px]",
                "opacity-[0.94] xl:rounded-[22px]",
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
                    "px-3 pb-3.5 sm:px-3.5 sm:pb-4 lg:px-3.5 lg:pb-4 xl:pb-5",
                ].join(" ")}
            >
                <div className="mb-2">
                    {slide.company ? (
                        <figure
                            className={[
                                "relative overflow-hidden",
                                "h-4.5 w-17 sm:h-5 sm:w-20 lg:h-5 lg:w-21 xl:h-6 xl:w-24",
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
                                "text-[14px] sm:text-[15px] lg:text-[16px] xl:text-[18px]",
                            ].join(" ")}
                        >
                            {slide.name}
                        </div>
                    )}

                    <div className="mt-2.5 h-0.5 w-14 bg-white/75 xl:w-16" />
                </div>

                <p className="mb-1 text-[12px] font-medium leading-[1.08] tracking-[-0.05em] text-white sm:text-[15px] lg:text-[13px] xl:text-[15px] 2xl:text-[16px]">
                    {slide.role}
                </p>

                <h3
                    className={[
                        "tracking-[-0.05em] text-white",
                        "text-[20px] font-medium leading-[1.02] sm:text-[24px] lg:text-[24px] xl:text-[30px] 2xl:text-[34px]",
                    ].join(" ")}
                >
                    {slide.name}
                </h3>
            </div>
        </article>
    );
}