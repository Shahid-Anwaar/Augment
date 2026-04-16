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
            className="max-w-full lg:max-w-260"
        >
            <div
                className={[
                    "mt-8 rounded-[18px] border border-[#cbc6bf] bg-[#f4f2ef] sm:mt-12 lg:mt-16",
                    "px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-12",
                    className,
                ].join(" ")}
            >
                <div className="flex flex-col gap-5 sm:gap-6">
                    <div className="flex items-start justify-between gap-4 sm:gap-6">
                        <div className="min-w-0 flex flex-col gap-3 sm:gap-4">
                            <div className="inline-flex max-w-full flex-wrap gap-1 overflow-hidden">
                                <span className="flex h-6 items-center rounded-[6px] bg-primary px-2 text-[11px] font-semibold leading-none text-black sm:text-[12px]">
                                    {item.step}
                                </span>
                                <span className="flex h-6 items-center rounded-[6px] bg-[#d8d2cb] px-2 text-[11px] font-semibold uppercase leading-none tracking-[0.02em] text-black sm:text-[12px]">
                                    {item.label}
                                </span>
                            </div>

                            <h3 className="stylish-family section-title text-[22px] text-black sm:text-[28px] md:text-[32px] lg:text-[36px]">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative hidden h-[72px] w-[88px] shrink-0 sm:block md:h-[86px] md:w-[105px] lg:h-[96px] lg:w-[120px]">
                            <Image
                                src={item.image}
                                alt={item.label}
                                fill
                                className="object-contain object-right-top"
                            />
                        </div>
                    </div>

                    <div className="mt-1 sm:mt-3 md:mt-4">
                        <div className="relative mt-1 h-[64px] w-[82px] sm:hidden">
                            <Image
                                src={item.image}
                                alt={item.label}
                                fill
                                className="object-contain object-left"
                            />
                        </div>

                        <p className="paragraph-text my-6 text-black/85 sm:my-8 md:my-10 lg:my-16">
                            {item.description}
                        </p>

                        <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4 md:mt-10 lg:mt-12 lg:space-y-5">
                            {item.points.map((point, index) => (
                                <div
                                    key={`${item.id}-${index}`}
                                    className="flex items-start gap-3 sm:gap-4"
                                >
                                    <Icon
                                        icon={point.icon}
                                        className="mt-0.5 h-4.5 w-4.5 shrink-0 text-black/80 sm:h-5 sm:w-5 md:h-6 md:w-6"
                                    />
                                    <p className="text-[12px] font-normal leading-[1.45] tracking-[0.015em] text-black/80 sm:text-[14px] md:text-[15px] lg:text-[16px]">
                                        {point.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}