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
                <div className="rounded-[10px] bg-white px-4 pb-8 pt-8 sm:rounded-[20px] sm:px-6 sm:pb-10 sm:pt-10 md:rounded-3xl md:px-10 md:pb-12 md:pt-12 lg:px-24 lg:py-20">
                    {hasImage ? (
                        <div className="grid grid-cols-1 items-center gap-y-8 md:grid-cols-[1.02fr_1fr] md:gap-x-6 lg:gap-x-8">
                            <div>
                                <h2 className="section-title max-w-full sm:max-w-155">
                                    {title}
                                </h2>

                                <p className="mt-4 max-w-full text-[17px] font-normal leading-[1.4] tracking-[-0.03em] text-black sm:mt-5 sm:max-w-140 sm:text-[20px] md:text-[22px] lg:text-[21px]">
                                    {subTitle}
                                </p>

                                <Link
                                    href={btnLink}
                                    className="contained-btn mt-6 inline-flex w-full justify-center px-8 sm:w-auto sm:px-12 md:px-14 lg:px-16"
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
                                <div className="relative w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-95">
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
                        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-[1.02fr_1fr] md:gap-x-6 lg:gap-x-0">
                            <div>
                                <h2 className="section-title max-w-full sm:max-w-100">
                                    {title}
                                </h2>

                                <div className="divider mt-6 max-w-full sm:mt-8 md:mt-10 lg:max-w-116.5" />
                            </div>

                            <div className="flex flex-col md:pt-1 lg:pt-0.5">
                                <p className="max-w-full text-[17px] font-normal leading-[1.4] tracking-[-0.03em] text-black sm:max-w-140 sm:text-[20px] md:text-[22px] lg:text-[21px]">
                                    {subTitle}
                                </p>

                                <Link
                                    href={btnLink}
                                    className="contained-btn mt-6 inline-flex w-full justify-center px-8 text-[15px] font-bold sm:w-auto sm:max-w-65 sm:px-10 sm:text-[16px] md:mt-8 lg:mt-10.5"
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