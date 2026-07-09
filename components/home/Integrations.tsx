import Link from "next/link";
import { Icon } from "@iconify/react";
import CustomLink from "../custom/CustomLink";

type IntegrationItem = {
    name: string;
    icon: string;
    iconColor?: string;
    tileClassName?: string;
    iconClassName?: string;
};

const INTEGRATIONS: IntegrationItem[] = [
    {
        name: "Google Drive",
        icon: "simple-icons:googledrive",
        iconColor: "#0F9D58",
        tileClassName: "bg-white",
    },
    // Video & Conferencing
    {
        name: "Zoom",
        icon: "simple-icons:zoom",
        iconColor: "#ffffff",
        tileClassName: "bg-[#1d5cff]",
    },

    // Scheduling & Calendar
    {
        name: "Calendly",
        icon: "simple-icons:calendly",
        iconColor: "#2E69FF",
        tileClassName: "bg-white",
    },
    {
        name: "Cal.com",
        icon: "simple-icons:caldotcom",
        iconColor: "#ffffff",
        tileClassName: "bg-white/5",
    },
    {
        name: "Google Calendar",
        icon: "simple-icons:googlecalendar",
        iconColor: "#4285F4",
        tileClassName: "bg-white",
    },
    {
        name: "Apple Calendar",
        icon: "simple-icons:apple",
        iconColor: "#ffffff",
        tileClassName: "bg-white/5",
    },

    // Email Marketing
    {
        name: "Mailchimp",
        icon: "simple-icons:mailchimp",
        iconColor: "#111111",
        tileClassName: "bg-[#f3d540]",
    },
    {
        name: "ActiveCampaign",
        icon: "logos:active-campaign-icon",
        iconColor: "#004CFF",
        tileClassName: "bg-white",
    },
    {
        name: "Brevo",
        icon: "simple-icons:brevo",
        iconColor: "#0B996E",
        tileClassName: "bg-white",
    },

    // Payments
    {
        name: "Stripe",
        icon: "simple-icons:stripe",
        iconColor: "#635BFF",
        tileClassName: "bg-white",
    },
    {
        name: "PayPal",
        icon: "simple-icons:paypal",
        iconColor: "#003087",
        tileClassName: "bg-white",
    },
    {
        name: "Google Pay",
        icon: "simple-icons:googlepay",
        iconColor: "#4285F4",
        tileClassName: "bg-white",
    },
    {
        name: "Apple Pay",
        icon: "simple-icons:applepay",
        iconColor: "#ffffff",
        tileClassName: "bg-white/5",
    },

    // Analytics & Tracking
    {
        name: "Google Analytics",
        icon: "simple-icons:googleanalytics",
        iconColor: "#E37400",
        tileClassName: "bg-white",
    },
    {
        name: "Meta Pixel",
        icon: "simple-icons:meta",
        iconColor: "#1B74E4",
        tileClassName: "bg-white",
    },
    {
        name: "Firebase",
        icon: "simple-icons:firebase",
        iconColor: "#FFCA28",
        tileClassName: "bg-white",
    },
];

type GridLayout = {
    cols: number;
    rows: number;
    colsClassName: string;
    placements: Array<{
        row: number;
        cols: number[];
    }>;
    tileBoxClassName: string;
    iconClassName: string;
};

const SM_LAYOUT: GridLayout = {
    cols: 6,
    rows: 6,
    colsClassName: "grid-cols-6",
    placements: [
        { row: 1, cols: [1, 2, 3, 4] },
        { row: 2, cols: [1, 2, 3, 4] },
        { row: 3, cols: [1, 2, 3, 4] },
        { row: 4, cols: [1, 2, 3, 4] },
    ],
    tileBoxClassName: "h-[40px] w-[40px]",
    iconClassName: "h-5.5 w-5.5",
};

const MD_LAYOUT: GridLayout = {
    cols: 8,
    rows: 5,
    colsClassName: "grid-cols-8",
    placements: [
        { row: 1, cols: [1, 2, 3, 4, 5, 6] },
        { row: 2, cols: [1, 2, 3, 4, 5, 6] },
        { row: 3, cols: [2, 3, 4, 5,] },
    ],
    tileBoxClassName: "h-[46px] w-[46px]",
    iconClassName: "h-6 w-6",
};

const LG_LAYOUT: GridLayout = {
    cols: 10,
    rows: 4,
    colsClassName: "grid-cols-10",
    placements: [
        { row: 1, cols: [1, 2, 3, 4, 5, 6, 7, 8] },
        { row: 2, cols: [1, 2, 3, 4, 5, 6, 7, 8] },
    ],
    tileBoxClassName: "h-[56px] w-[56px]",
    iconClassName: "h-7 w-7",
};

const XL_LAYOUT: GridLayout = {
    cols: 10,
    rows: 4,
    colsClassName: "grid-cols-10",
    placements: [
        { row: 1, cols: [1, 2, 3, 4, 5, 6, 7, 8] },
        { row: 2, cols: [1, 2, 3, 4, 5, 6, 7, 8] },
    ],
    tileBoxClassName: "h-[64px] w-[64px]",
    iconClassName: "h-8 w-8",
};

function buildSlotMap(layout: GridLayout) {
    const slotMap = new Map<number, IntegrationItem>();
    let itemIndex = 0;

    layout.placements.forEach((placement) => {
        placement.cols.forEach((col) => {
            if (!INTEGRATIONS[itemIndex]) return;
            const slotIndex = placement.row * layout.cols + col;
            slotMap.set(slotIndex, INTEGRATIONS[itemIndex]);
            itemIndex += 1;
        });
    });

    return slotMap;
}

function IntegrationTile({
    item,
    tileBoxClassName,
    iconClassName,
}: {
    item?: IntegrationItem;
    tileBoxClassName: string;
    iconClassName: string;
}) {
    return (
        <div className="group relative aspect-square w-full border-r border-b border-white/20">
            {item ? (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className={[
                            "relative flex items-center justify-center border border-white/50",
                            tileBoxClassName,
                            item.tileClassName ?? "bg-white",
                        ].join(" ")}
                        aria-label={item.name}
                        title={item.name}
                    >
                        <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            <div className="rounded-full bg-black px-2 py-1 text-[10px] font-semibold text-white sm:text-[11px]">
                                {item.name}
                            </div>
                            <div className="mx-auto h-0 w-0 border-l-[5px] border-r-[5px] border-t-[5px] border-l-transparent border-r-transparent border-t-black" />
                        </div>

                        <Icon
                            icon={item.icon}
                            className={item.iconClassName ?? iconClassName}
                            style={{ color: item.iconColor }}
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
}

function FramedGrid({ layout }: { layout: GridLayout }) {
    const slotMap = buildSlotMap(layout);
    const totalSlots = layout.cols * layout.rows;

    return (
        <div className={`grid border-l border-t border-black/30 ${layout.colsClassName}`}>
            {Array.from({ length: totalSlots }).map((_, index) => (
                <IntegrationTile
                    key={index}
                    item={slotMap.get(index)}
                    tileBoxClassName={layout.tileBoxClassName}
                    iconClassName={layout.iconClassName}
                />
            ))}
        </div>
    );
}

export default function IntegrationsSection({ title, description, btnText = "Explore integrations" }: { title: string, description: string, btnText?: string; }) {
    return (
        <section className="bg-black px-4 py-12 sm:px-6 sm:py-14 md:px-8 lg:px-10 lg:py-18 xl:py-0">
            <div className="mx-auto max-w-[1500px]">
                <div className="mx-auto max-w-[900px] text-center xl:relative top-12">
                    <h2 className="section-title text-white">
                        {title}
                    </h2>

                    <p className="section-description relative z-20 mx-auto mt-3 text-white">
                        {description}
                    </p>
                </div>

                <div className="relative overflow-hidden">
                    <div className="block sm:hidden">
                        <FramedGrid layout={SM_LAYOUT} />
                    </div>

                    <div className="hidden sm:block lg:hidden">
                        <FramedGrid layout={MD_LAYOUT} />
                    </div>

                    <div className="hidden lg:block xl:hidden 2xl:hidden">
                        <FramedGrid layout={LG_LAYOUT} />
                    </div>

                    <div className="hidden 2xl:hidden xl:block">
                        <FramedGrid layout={LG_LAYOUT} />
                    </div>

                    <div className="hidden 2xl:block">
                        <FramedGrid layout={XL_LAYOUT} />
                    </div>

                    <div className="absolute top-0 z-10 h-20 w-full bg-linear-to-b from-black to-transparent sm:h-24 lg:h-32" />
                    <div className="absolute bottom-0 z-10 h-20 w-full bg-linear-to-t from-black to-transparent sm:h-24 lg:h-32" />
                    <div className="absolute left-0 top-0 z-10 h-full w-10 bg-linear-to-r from-black via-transparent to-transparent sm:w-14 lg:w-24" />
                    <div className="absolute right-0 top-0 z-10 h-full w-10 bg-linear-to-l from-black via-transparent to-transparent sm:w-14 lg:w-24" />
                </div>

                <div className="mt-3 flex justify-center xl:mt-0 xl:relative xl:bottom-14 z-20">
                    <CustomLink
                        href="/products#what-included"
                        variant="outlined"
                        text={btnText}
                    />
                </div>
            </div>
        </section>
    );
}