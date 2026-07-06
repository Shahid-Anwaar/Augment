"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import { SolutionItem } from "@/data/data";

type ProspectingSectionProps = {
    items: SolutionItem[];
    activeIndex: number;
    isLoading?: boolean;
};

export default function ProspectingSection({
    items,
    isLoading,
    activeIndex,
}: ProspectingSectionProps) {
    const activeItem = items[activeIndex] || items[0];

    if (!activeItem) return null;

    return (
        <section className="w-full overflow-hidden bg-white">
            <div
                className={`section-container pt-4 transition-all duration-1000 sm:pt-12 lg:pt-16 ${isLoading ? "opacity-10" : "opacity-100"
                    }`}
            >
                <div className="grid min-w-0 items-center gap-5 pt-3 sm:gap-10 sm:pt-16 md:grid-cols-[1fr_0.9fr] md:gap-12 lg:pt-20 xl:gap-20">
                    <div className="min-w-0">
                        <h2 className="section-title max-w-full sm:max-w-140">
                            {activeItem.heroTitle}
                        </h2>

                        <div className="mt-4 flex w-full flex-col items-stretch gap-2 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                            <button type="button" className="contained-btn w-full py-2 sm:w-auto">
                                Contact Sales
                            </button>

                            <button type="button" className="outlined-btn w-full py-2 sm:w-auto">
                                Learn More
                            </button>
                        </div>

                        <ul className="mt-5 space-y-2.5 sm:mt-10 sm:space-y-4">
                            {activeItem.points.map((point, index) => (
                                <li
                                    key={point}
                                    className="flex min-w-0 items-start gap-2 text-[13px] leading-[1.35] text-[#4d4a46] sm:gap-3 sm:text-[16px] sm:leading-[1.4]"
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
                                        className="mt-[2px] h-3.5 w-3.5 shrink-0 text-black sm:h-4 sm:w-4"
                                    />

                                    <span className="min-w-0 break-words">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex w-full min-w-0 justify-center md:justify-end">
                        <div className="relative w-full max-w-[520px] overflow-hidden rounded-[10px] bg-[#f4f1ee] shadow-sm">
                            <Image
                                src={activeItem.image}
                                alt={activeItem.cardTitle}
                                width={900}
                                height={700}
                                className="h-auto max-h-[160px] w-full object-cover sm:max-h-[400px]"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}