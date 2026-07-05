"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { SolutionItem } from "@/data/data";

type ProspectingSectionProps = {
    items: SolutionItem[];
    activeIndex: number;
};

export default function ProspectingSection({
    items,
    activeIndex,
}: ProspectingSectionProps) {
    const activeItem = items[activeIndex] || items[0];

    if (!activeItem) return null;

    return (
        <section className="w-full bg-white">
            <div className="section-container pt-10 sm:pt-12 lg:pt-16">
                <div className="grid items-center gap-10 pt-14 sm:pt-16 md:grid-cols-[1fr_0.9fr] md:gap-12 lg:pt-20 xl:gap-20">
                    <div>
                        <h2 className="section-title max-w-140">
                            {activeItem.heroTitle}
                        </h2>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            
<button
                                type="button"
                                className="contained-btn py-2"
                            >
                                 Contact Sales
                            </button>
                            <button
                                type="button"
                                className="outlined-btn py-2"
                            >
                                Learn More
                            </button>
                        </div>

                        <ul className="mt-10 space-y-4">
                            {activeItem.points.map((point, index) => (
                                <li
                                    key={point}
                                    className="flex items-start gap-3 text-[15px] leading-[1.4] text-[#4d4a46] sm:text-[16px]"
                                >
                                    <Icon
                                        icon={
                                            index === 0
                                                ? "lucide:sparkles"
                                                : index === 1
                                                    ? "lucide:mail-check"
                                                    : index === 2
                                                        ? "lucide:list-checks"
                                                        : "lucide:workflow"
                                        }
                                        className="mt-[2px] h-4 w-4 shrink-0 text-black"
                                    />

                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full flex justify-center md:justify-end">
                        <div className="relative w-full max-w-[520px] overflow-hidden rounded-[10px] bg-[#f4f1ee] shadow-sm">
                            <Image
                                src={activeItem.image}
                                alt={activeItem.cardTitle}
                                width={900}
                                height={700}
                                className="h-auto max-h-100 w-full object-cover"
                                priority
                            />
                        </div>

                        {/* <div className="mt-5 flex justify-center gap-1">
                            {items.map((item, index) => (
                                <span
                                    key={item.id}
                                    className={[
                                        "h-1.5 rounded-full transition-all duration-300",
                                        index === activeIndex ? "w-8 bg-primary" : "w-1.5 bg-black/20",
                                    ].join(" ")}
                                />
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}