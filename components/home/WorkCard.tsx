"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { HowItWorksCardItem } from "@/data/home";

type HowItWorksCardProps = {
    item: HowItWorksCardItem;
    className?: string;
};

export default function WorksCard({
    item,
    className = "",
}: HowItWorksCardProps) {
    return (
        <article
            id={"index" + item.id}
            className="pt-8 max-w-260"
        >
            <div className={[
                "rounded-[24px] mt-16 border border-[#cbc6bf] bg-[#f4f2ef]",
                "px-5 py-5 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12",
                className,
            ].join(" ")}>
                <div className="flex items-start justify-between gap-6">
                    <div className="min-w-0 flex flex-col gap-4">
                        <div className="inline-flex gap-1 overflow-hidden ">
                            <span className="flex h-6 items-center rounded-[6px] bg-primary px-2 text-[12px] font-semibold leading-none text-black">
                                {item.step}
                            </span>
                            <span className="flex h-6 items-center rounded-[6px] bg-[#d8d2cb] px-2 text-[12px] font-semibold uppercase leading-none tracking-[0.02em] text-black">
                                {item.label}
                            </span>
                        </div>
                        <h3
                            className="section-title text-[22px] sm:text-[28px] md:text-[36px] stylish-family text-black "
                        >
                            {item.title}
                        </h3>
                    </div>

                    <div className="relative hidden h-[88px] w-[110px] shrink-0 sm:block md:h-[96px] md:w-[120px]">
                        <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-contain object-right-top"
                        />
                    </div>
                </div>

                <div className="mt-7 sm:mt-9 md:mt-10">


                    <div className="relative mt-5 h-[72px] w-[92px] sm:hidden">
                        <Image
                            src={item.image}
                            alt={item.label}
                            fill
                            className="object-contain object-left"
                        />
                    </div>

                    <p className="my-8 md:my-16 paragraph-text">
                        {item.description}
                    </p>

                    <div className="mt-10 space-y-4 md:mt-12 md:space-y-5">
                        {item.points.map((point, index) => (
                            <div key={`${item.id}-${index}`} className="flex items-start gap-4">
                                <Icon
                                    icon={point.icon}
                                    className="mt-0.5 h-5 w-5 shrink-0 text-black/80 md:h-6 md:w-6"
                                />
                                <p className=" text-black/80 text-[12px] font-normal leading-[1.4] tracking-[0.015em] sm:text-[14px] md:text-[16px]">
                                    {point.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}