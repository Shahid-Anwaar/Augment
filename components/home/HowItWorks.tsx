"use client";

import { HOW_IT_WORKS_CARDS } from "@/data/home";
import WorksCard from "./WorkCard";

const steps = [
    "Set Goals",
    "Build Campaigns",
    "Find Talent",
    "Human Screening",
    "Support",
];

export default function HowItWorksCard() {
    return (
        <section className="w-full bg-[#f3f4f6] px-4 pt-8 pb-10 sm:px-6 sm:pt-10 sm:pb-12 md:px-8 md:pt-12 md:pb-16 lg:px-10 lg:pt-14 lg:pb-20">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:gap-10">
                <div className="w-full lg:sticky lg:top-16 lg:max-w-[430px] lg:self-start xl:max-w-[470px] pt-5 md:pt-8 lg:pt-20">
                    <div className="mb-4 sm:mb-5">
                        <span className="section-label text-black">
                            How It Works
                        </span>
                    </div>

                    <h2 className="section-title max-w-[20rem] text-black sm:max-w-[28rem] lg:max-w-none">
                        Great talent isn't always looking, but we find them
                    </h2>

                    <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4 md:mt-10 lg:mt-14 lg:space-y-6">
                        {steps.map((step, index) => (
                            <div
                                key={step}
                                onClick={() => {
                                    document
                                        .getElementById("index" + (index + 1))
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="group flex cursor-pointer items-start gap-3 sm:gap-4 lg:gap-5"
                            >
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-[#ddd5ca] text-[12px] font-semibold text-black sm:h-7 sm:w-7 sm:text-[14px]">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <p
                                    className="
                                        cursor-pointer text-[15px] leading-[1.15] tracking-[-0.04em] text-[#8f8c89]
                                        transition-colors duration-200 group-hover:text-black
                                        sm:text-[18px]
                                        md:text-[20px]
                                        lg:text-[24px] lg:leading-none
                                    "
                                >
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ml-0 flex w-full flex-col gap-5 md:gap-8 lg:ml-10">
                    <WorksCard item={HOW_IT_WORKS_CARDS[0]} />
                    <WorksCard item={HOW_IT_WORKS_CARDS[1]} />
                    <WorksCard item={HOW_IT_WORKS_CARDS[2]} />
                    <WorksCard item={HOW_IT_WORKS_CARDS[3]} />
                    <WorksCard item={HOW_IT_WORKS_CARDS[4]} />
                </div>
            </div>
        </section>
    );
}