"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { whyAugmentSlides } from "@/data/home";

function SlideDots({
    total,
    active,
    onChange,
}: {
    total: number;
    active: number;
    onChange: (index: number) => void;
}) {
    return (
        <div className="flex items-center gap-3">
            {Array.from({ length: total }).map((_, index) => {
                const isActive = index === active;

                return (
                    <button
                        key={index}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        aria-pressed={isActive}
                        onClick={() => {
                            document.getElementById("step" + index)?.scrollIntoView({ behavior: "smooth" });
                            // onChange(index);
                        }}
                        className={[
                            "flex h-7 w-7 items-center justify-center rounded-full border text-[13px] font-normal leading-none transition-all duration-200",
                            isActive
                                ? "border-[#d8f235] bg-[#d8f235] text-black"
                                : "border-black/12 bg-transparent text-black/45 hover:border-black/25 hover:text-black/70",
                        ].join(" ")}
                    >
                        {index + 1}
                    </button>
                );
            })}
        </div>
    );
}

function TextBlock({
    eyebrow,
    title,
    description,
    buttonLabel,
    buttonHref,
}: {
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    buttonHref: string;
}) {
    return (
        <div className="flex h-full py-auto flex-col">
            <p className="section-label text-[14px] text-black/70">
                {eyebrow}
            </p>

            <h2 className="mt-5 whitespace-pre-line text-black section-title">
                {title}
            </h2>

            <p className="mt-8 max-w-117.5 paragraph-text">
                {description}
            </p>

            <div className="mt-16">
                <Link
                    href={buttonHref}
                    className=" px-12 text-[15px] outlined-btn"
                >
                    {buttonLabel}
                </Link>
            </div>
        </div>
    );
}

function RightCompositeVisual({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    return (
        <div className="relative mx-auto w-full max-w-155 rounded-[18px] bg-[#f2f2f0] shadow-[0_0_0_1px_rgba(0,0,0,0.02)]">
            <div className="relative aspect-[1.03/1] w-full overflow-hidden rounded-[14px]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 620px"
                    className="object-cover"
                    priority
                />
            </div>
        </div>
    );
}

function LeftDashboardVisual({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    return (
        <div className="relative mx-auto w-full max-w-155 overflow-hidden rounded-3xl bg-[linear-gradient(90deg,#1b1b1d_0%,#151618_50%,#1b1b1d_100%)] p-0">
            <div className="relative aspect-[1.02/0.95] w-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 620px"
                    className="object-cover"
                />
            </div>
        </div>
    );
}

function RightCommunityVisual({
    src,
    alt,
}: {
    src: string;
    alt: string;
}) {
    return (
        <div className="relative mx-auto w-full max-w-155 rounded-[28px] bg-[#f2f2f0]">
            <div className="relative aspect-square w-full overflow-hidden rounded-[26px]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 620px"
                    className="object-cover"
                />
            </div>
        </div>
    );
}

function SlideVisual({
    layout,
    src,
    alt,
}: {
    layout: "right-composite" | "left-dashboard" | "right-community";
    src: string;
    alt: string;
}) {
    if (layout === "left-dashboard") {
        return <LeftDashboardVisual src={src} alt={alt} />;
    }

    if (layout === "right-community") {
        return <RightCommunityVisual src={src} alt={alt} />;
    }

    return <RightCompositeVisual src={src} alt={alt} />;
}

export default function WhyAugmentSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    //   const activeSlide = whyAugmentSlides[activeIndex];



    return (
        <section className="bg-[#f3f4f6]">
            <div className="section-container pb-0">
                <div className="text-center">
                    <p className="section-label text-black">
                        Why Augment?
                    </p>
                    <h2 className="mt-4 text-black section-title">
                        The Essentials of <br />Entrepreneurship
                    </h2>
                </div>
                {whyAugmentSlides.map((activeSlide, index) => {
                    const isImageLeft = activeSlide.layout === "left-dashboard";
                    return <div key={index} id={"step" + index} className={`w-full py-16 ${index === whyAugmentSlides.length - 1 ? "pb-3" : ""}`}>
                        <div
                            className={[
                                "grid items-center gap-y-10 lg:gap-x-20",
                                isImageLeft
                                    ? "grid-cols-1 lg:grid-cols-[1.05fr_0.95fr]"
                                    : "grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]",
                            ].join(" ")}
                        >
                            {isImageLeft ? (
                                <>
                                    <div className="order-2 lg:order-1">
                                        <SlideVisual
                                            layout={activeSlide.layout}
                                            src={activeSlide.image}
                                            alt={activeSlide.imageAlt}
                                        />
                                    </div>

                                    <div className="order-1 flex h-full flex-col justify-center px-14 lg:order-2 lg:pt-5">
                                        <SlideDots
                                            total={whyAugmentSlides.length}
                                            active={index}
                                            onChange={setActiveIndex}
                                        />

                                        <div className="mt-16">
                                            <TextBlock
                                                eyebrow={activeSlide.eyebrow}
                                                title={activeSlide.title}
                                                description={activeSlide.description}
                                                buttonLabel={activeSlide.buttonLabel}
                                                buttonHref={activeSlide.buttonHref}
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="order-1 flex h-full px-14 justify-center flex-col lg:pt-5">
                                        <SlideDots
                                            total={whyAugmentSlides.length}
                                            active={index}
                                            onChange={setActiveIndex}
                                        />

                                        <div className="mt-16">
                                            <TextBlock
                                                eyebrow={activeSlide.eyebrow}
                                                title={activeSlide.title}
                                                description={activeSlide.description}
                                                buttonLabel={activeSlide.buttonLabel}
                                                buttonHref={activeSlide.buttonHref}
                                            />
                                        </div>
                                    </div>

                                    <div className="order-2">
                                        <SlideVisual
                                            layout={activeSlide.layout}
                                            src={activeSlide.image}
                                            alt={activeSlide.imageAlt}
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                })}
            </div>
        </section>
    );
}