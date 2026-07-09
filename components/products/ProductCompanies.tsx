"use client";

import { Icon } from "@iconify/react";
import CustomEmblaCarousel from "../home/CustomCarosal";

type HighlightItem = {
    icon: string;
    label: string;
    content: string;
};

const HIGHLIGHT_ITEMS: HighlightItem[] = [
    {
        icon: "lucide:dollar-sign",
        label: "$10B+",
        content: "earned by creators on the platform",
    },
    {
        icon: "mdi:account-school-outline",
        label: "100M+",
        content: "students served worldwide",
    },
    {
        icon: "mdi:web",
        label: "150+",
        content: "countries reached by creators",
    },
    {
        icon: "mdi:account-group-outline",
        label: "5M+",
        content: "active learners in communities",
    },
    {
        icon: "mdi:credit-card-outline",
        label: "1-click",
        content: "checkout and payment experience",
    },
    {
        icon: "mdi:chart-line",
        label: "High growth",
        content: "tools built to increase revenue",
    },
    {
        icon: "mdi:book-open-page-variant-outline",
        label: "Courses",
        content: "launch self-paced or cohort-based learning",
    },
    {
        icon: "mdi:account-multiple-outline",
        label: "Community",
        content: "engage students beyond the course",
    },
    {
        icon: "mdi:cart-outline",
        label: "Commerce",
        content: "sell products, bundles, and memberships",
    },
    {
        icon: "mdi:email-outline",
        label: "Built-in",
        content: "email tools for nurturing your audience",
    },
    {
        icon: "mdi:calendar-check-outline",
        label: "Bookings",
        content: "schedule calls, sessions, and events",
    },
    {
        icon: "mdi:chart-box-outline",
        label: "Analytics",
        content: "track performance and student progress",
    },
    {
        icon: "mdi:robot-outline",
        label: "AI tools",
        content: "speed up content and workflow creation",
    },
    {
        icon: "mdi:shape-outline",
        label: "Integrations",
        content: "connect with the tools you already use",
    },
    {
        icon: "mdi:shield-check-outline",
        label: "Reliable",
        content: "secure infrastructure for your business",
    },
];

function HighlightItemCard({ item }: { item: HighlightItem }) {
    return (
        <div className="flex shrink-0 items-center gap-2 whitespace-nowrap sm:gap-3 lg:gap-3">
            <Icon
                icon={item.icon}
                className="me-1 h-5 w-5 shrink-0 text-black sm:me-2 sm:h-6 sm:w-6 md:me-4 md:h-7 md:w-7 lg:me-7 xl:me-10"
            />

            <span className="rounded-[5px] bg-gray-100 px-2 py-1.5 text-[14px] font-semibold leading-none tracking-[-0.03em] text-black sm:rounded-[6px] sm:px-3 sm:py-2 sm:text-[18px] md:text-[20px] lg:text-[22px]">
                {item.label}
            </span>

            <span className="text-[14px] font-medium leading-none tracking-[0.03em] text-black sm:text-[16px] md:text-[18px] lg:text-[24px]">
                {item.content}
            </span>
        </div>
    );
}

export default function ProductsCompaniesSection() {
    return (
        <section className="overflow-hidden border-y border-black/8 bg-white">
            <div className="mx-auto w-full max-w-full bg-white">
                <CustomEmblaCarousel
                    CustomCard={(item, index) => {
                        return (
                            <div
                                key={index}
                                className="box-border min-w-0 shrink-0 grow-0 basis-[145%] px-3 sm:basis-[105%] sm:px-4 md:basis-[88%] md:px-5 lg:basis-[64%] xl:basis-[49%]"
                            >
                                <HighlightItemCard item={item} />
                            </div>
                        );
                    }}
                    isContinuousPlay={true}
                    isAutoplay={false}
                    items={HIGHLIGHT_ITEMS}
                    options={{ loop: true, align: "start", skipSnaps: false }}
                    wrapperClassName="min-h-0 bg-transparent py-4 sm:py-5 lg:py-6"
                    continuousPlayConfig={{
                        speed: 0.9,
                    }}
                />
            </div>
        </section>
    );
}