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
        <section className="w-full bg-[#f3f2ef] px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-10 lg:py-14">
            <div className="mx-auto max-w-320 flex items-start">
                <div className="sticky top-40">
                    <div className="mb-4 sm:mb-5">
                        <span className=" text-black section-label">
                            How It Works
                        </span>
                    </div>

                    <h2 className="section-title max-w-auto" >
                        Great talent isn't always looking, but we find them
                    </h2>
                    <div className="mt-8 space-y-5 sm:mt-10 sm:space-y-6 md:mt-14">
                        {steps.map((step, index) => (
                            <div key={step} onClick={() => {
                                document.getElementById("index" + (index + 1))?.scrollIntoView({ behavior: "smooth", })
                            }} className=" group cursor-pointer flex items-center gap-4 sm:gap-5">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-[#ddd5ca] text-[14px] font-semibold text-black sm:h-7 sm:w-7">
                                    {String(index + 1).padStart(2, "0")}
                                </div>

                                <p
                                    className="
                                    text-[16px]
                                    leading-none
                                    tracking-[-0.04em]
                                    text-[#8f8c89]
                                    sm:text-[20px]
                                    md:text-[24px] group-hover:text-black cursor-pointer
                                "
                                >
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col ml-10">
                    <WorksCard item={HOW_IT_WORKS_CARDS[0]} />
                    <WorksCard item={HOW_IT_WORKS_CARDS[1]} />
                    <WorksCard item={HOW_IT_WORKS_CARDS[2]} />
                    <WorksCard item={HOW_IT_WORKS_CARDS[3]} />
                    <WorksCard item={HOW_IT_WORKS_CARDS[4]} />
                </div>
            </div>

            {/* <section className="bg-[#efeeeb] px-4 py-6 sm:px-6 md:px-8 lg:px-10">
                <div className="mx-auto max-w-[1380px] space-y-6">
                    {HOW_IT_WORKS_CARDS.map((item) => (
                        <WorksCard key={item.id} item={item} />
                    ))}
                </div>
            </section> */}
        </section>
    );
}