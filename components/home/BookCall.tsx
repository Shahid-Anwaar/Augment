import Link from "next/link";
import { Icon } from "@iconify/react";

type BookCallSectionProps = {
    title: string;
    subTitle: string;
    btnText?: string;
    btnLink?: string;
    icon?: string;
};

export default function BookCallSection({
    title = "",
    subTitle = "",
    btnText = "Book a Call",
    btnLink = "/book-a-call",
    icon = "mingcute:arrow-right-fill",
}: BookCallSectionProps) {
    return (
        <section className={`bg-transparent absolute top-14`}>
            <div className="mx-auto w-full max-w-[1280px] px-1.5 sm:px-3 md:px-5 lg:px-0">
                <div className="rounded-[28px] bg-white px-6 pb-10 pt-10 sm:rounded-[30px] sm:px-8 sm:pb-12 sm:pt-12 md:px-12 md:pb-14 md:pt-14 lg:rounded-[30px] lg:px-[90px] lg:pb-[58px] lg:pt-[76px]">
                    <div className="grid grid-cols-1 gap-y-10 md:grid-cols-[1.02fr_1fr] md:gap-x-2 lg:gap-x-0">
                        <div>
                            <h2 className="max-w-[400px] section-title">
                                {title}
                            </h2>

                            <div className="mt-10 divider max-w-[470px] md:mt-[42px] lg:max-w-[466px]" />
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
                </div>
            </div>
        </section>
    );
}