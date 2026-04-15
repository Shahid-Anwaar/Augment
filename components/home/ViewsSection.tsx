"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const views = [
    {
        title: "Your view",
        description:
            "Easily create your products, manage your business, and customize your students' learning experience in one place.",
        image:
            "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e47a1edeb440ab80fdf439_0eb0b462897381c9122d4546e00aca77_ui-main-hero-tab-2.webp",
    },
    {
        title: "Your student's view",
        description:
            "Intuitive, mobile-friendly, and built for your students to seamlessly access and discover your products and offers.",
        image:
            "https://cdn.prod.website-files.com/687904fb2b26c434698c47e9/68e47a1d7727e0f7bd1ac19e_8b04a4deab039f00b369cedcd9295a73_ui-main-hero-tab-1.webp",
    },
];

function ProgressBar({
    active,
    version,
}: {
    active: boolean;
    version: number;
}) {
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (!active) {
            setStarted(false);
            return;
        }

        setStarted(false);

        const raf1 = requestAnimationFrame(() => {
            const raf2 = requestAnimationFrame(() => {
                setStarted(true);
            });

            return () => cancelAnimationFrame(raf2);
        });

        return () => cancelAnimationFrame(raf1);
    }, [active, version]);

    return (
        <div className="mb-3 h-0.5 w-full rounded-3xl bg-gray-300/40">
            <div
                className={`h-full rounded-3xl bg-black transition-[width] ease-linear ${active ? "opacity-100" : "opacity-0"
                    }`}
                style={{
                    width: active && started ? "100%" : "0%",
                    transitionDuration: "5000ms",
                }}
            />
        </div>
    );
}

export default function ViewsSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [progressVersion, setProgressVersion] = useState(0);

    useEffect(() => {
        const interval = window.setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % views.length);
            setProgressVersion((prev) => prev + 1);
        }, 5000);

        return () => {
            window.clearInterval(interval);
        };
    }, []);

    const handleCardClick = (index: number) => {
        setActiveIndex(index);
        setProgressVersion((prev) => prev + 1);
    };

    return (
        <section className="overflow-hidden bg-white px-4 pb-20 pt-10 md:px-6 md:pb-24 md:pt-12">
            <div className="mx-auto max-w-8xl text-center">
                <div className="text-center">
                    <h2 className="mb-6 mx-auto max-w-xl text-black section-title">
                        The future of your education business happens here
                    </h2>
                    <p className="mx-auto max-w-2xl text-black section-description">
                        Whatever your expertise—languages, fitness, or coding—Teachable helps you deliver impactful learning, run a smarter business, and scale worldwide.
                    </p>
                </div>

                {/* <div className="mt-12 flex justify-center">
                    <Link
                        href="https://s13rwwhxhl9.typeform.com/to/d2IccJb1"
                        target="_blank"
                        className="px-7 py-4 contained-btn capitalize!"
                    >
                        Start For Free
                    </Link>
                    <Link
                        href="https://s13rwwhxhl9.typeform.com/to/lmPnaKUF?utm_source=website&"
                        className="ml-4 px-7 py-4 text-sm outlined-btn capitalize!"
                    >
                        Explore Our Plans
                    </Link>
                </div> */}

                <div className="mx-auto mt-12 max-w-330 overflow-hidden rounded-[15px] bg-gray-100">
                    <div className="relative mb-4 aspect-[1300/700] overflow-hidden bg-gray-100">
                        {views.map((view, index) => (
                            <Image
                                key={view.image}
                                src={view.image}
                                alt={view.title}
                                fill
                                className={`object-cover transition-opacity duration-1000 ${activeIndex === index ? "opacity-100" : "opacity-0"
                                    }`}
                                sizes="(max-width: 768px) 100vw, 1600px"
                                priority={index === 0}
                            />
                        ))}
                    </div>

                    <div className="mt-14 grid grid-cols-1 gap-3 py-4 md:grid-cols-2">
                        {views.map((view, index) => (
                            <div
                                key={index}
                                onClick={() => handleCardClick(index)}
                                className="cursor-pointer px-8 py-4"
                            >
                                <ProgressBar
                                    active={activeIndex === index}
                                    version={progressVersion}
                                />
                                <h3 className="mb-2 text-lg font-bold text-black/85">
                                    {view.title}
                                </h3>
                                <p className="text-[18px] leading-6 text-gray-900">
                                    {view.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <Link
                    href="https://s13rwwhxhl9.typeform.com/to/lmPnaKUF?utm_source=website&"
                    className="mt-7 mx-auto px-7 py-4 text-sm contained-btn capitalize!"
                >
                    Explore Demo
                </Link>
            </div>
        </section>
    );
}