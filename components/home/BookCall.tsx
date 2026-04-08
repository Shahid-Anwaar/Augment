import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

type BookCallSectionProps = {
    title: string;
    subTitle: string;
    btnText?: string;
    btnLink?: string;
    imgSrc?: string;
    icon?: string;
    topClasses: string;
    bottomClasses?: string;
    cardClasses?: string;
};

export default function BookCallSection({
    title = "",
    subTitle = "",
    imgSrc = "",
    btnText = "Book a Call",
    btnLink = "/book-a-call",
    icon = "mingcute:arrow-right-fill",
    topClasses = "bg-white",
    bottomClasses = "bg-black",
    cardClasses = "py-10",
}: BookCallSectionProps) {
    const hasImage = !!imgSrc;

    return (
        <section className="relative w-full">
            <div className="absolute inset-0 grid grid-rows-2">
                <div className={topClasses} />
                <div className={bottomClasses} />
            </div>

            <div className={`section-container relative z-1 ${cardClasses}`}>
                <div className="rounded-[10px] bg-white px-6 pb-10 pt-10 sm:rounded-[24px] sm:px-8 sm:pb-12 sm:pt-12 md:px-12 md:pb-14 md:pt-14 lg:px-24 lg:py-20">
                    {hasImage ? (
                        <div className="grid grid-cols-1 items-center gap-y-5 md:grid-cols-[1.02fr_1fr] md:gap-x-6 lg:gap-x-8">
                            <div>
                                <h2 className="max-w-155 section-title">{title}</h2>

                                <p className="mt-5 max-w-[560px] text-[20px] font-normal leading-[1.34] tracking-[-0.035em] text-black sm:text-[22px] md:text-[24px] lg:text-[21px]">
                                    {subTitle}
                                </p>

                                <Link
                                    href={btnLink}
                                    className="mt-5 px-16 contained-btn"
                                >
                                    <span>{btnText}</span>
                                    <Icon
                                        icon={icon}
                                        width="19"
                                        height="19"
                                        className="shrink-0"
                                    />
                                </Link>
                            </div>

                            <div className="flex justify-center md:justify-end">
                                <div className="relative w-full max-w-[380px]">
                                    <Image
                                        src={imgSrc}
                                        alt={title}
                                        width={380}
                                        height={300}
                                        className="h-auto w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-[1.02fr_1fr] md:gap-x-2 lg:gap-x-0">
                            <div>
                                <h2 className="max-w-[400px] section-title">{title}</h2>

                                <div className="mt-10 divider max-w-117.5 md:mt-[42px] lg:max-w-[466px]" />
                            </div>

                            <div className="flex flex-col md:pt-1 lg:pt-[2px]">
                                <p className="max-w-[560px] text-[20px] font-normal leading-[1.34] tracking-[-0.035em] text-black sm:text-[22px] md:text-[24px] lg:text-[21px]">
                                    {subTitle}
                                </p>

                                <Link
                                    href={btnLink}
                                    className="mt-8 max-w-[260px] px-8 text-[16px] font-bold md:mt-[42px] contained-btn"
                                >
                                    <span>{btnText}</span>
                                    <Icon
                                        icon={icon}
                                        width="19"
                                        height="19"
                                        className="shrink-0"
                                    />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}