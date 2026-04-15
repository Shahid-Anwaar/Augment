"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

type IntegrationItem = {
    name: string;
    icon: string;
    iconColor?: string;
    tileClassName?: string;
    iconClassName?: string;
};

const INTEGRATIONS: IntegrationItem[] = [
    {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    },
    {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    },
    {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    },
    {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    },
    {
        name: "Stripe",
        icon: "simple-icons:stripe",
        iconColor: "#635BFF",
        tileClassName: "bg-white",
    },
    {
        name: "Zapier",
        icon: "simple-icons:zapier",
        iconColor: "#FF5A00",
        tileClassName: "bg-white",
    },
    {
        name: "Google Analytics",
        icon: "simple-icons:googleanalytics",
        iconColor: "#E37400",
        tileClassName: "bg-white",
    },
    {
        name: "Mailchimp",
        icon: "simple-icons:mailchimp",
        iconColor: "#111111",
        tileClassName: "bg-[#f3d540]",
    },
    {
        name: "Jira",
        icon: "simple-icons:jira",
        iconColor: "#4C8BF5",
        tileClassName: "bg-white",
    },
    {
        name: "Zoom",
        icon: "simple-icons:zoom",
        iconColor: "#ffffff",
        tileClassName: "bg-[#1d5cff]",
    },
    {
        name: "Calendly",
        icon: "simple-icons:calendly",
        iconColor: "#2E69FF",
        tileClassName: "bg-white",
    },
    {
        name: "Pinterest",
        icon: "simple-icons:pinterest",
        iconColor: "#E60023",
        tileClassName: "bg-white",
    },
    {
        name: "Udemy",
        icon: "simple-icons:udemy",
        iconColor: "#ffffff",
        tileClassName: "bg-black",
    },
    {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    },
    {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    },
    {
        name: "PayPal",
        icon: "simple-icons:paypal",
        iconColor: "#003087",
        tileClassName: "bg-white",
    },
    // {
    //     name: "ConvertKit",
    //     icon: "simple-icons:convertkit",
    //     iconColor: "#FB6970",
    //     tileClassName: "bg-white",
    // },
    {
        name: "OneDrive",
        icon: "simple-icons:microsoftonedrive",
        iconColor: "#0078D4",
        tileClassName: "bg-white",
    },
    {
        name: "TikTok",
        icon: "simple-icons:tiktok",
        iconColor: "#ffffff",
        tileClassName: "bg-black",
    },
    {
        name: "Segment",
        icon: "mdi:chart-pie",
        iconColor: "#4FB286",
        tileClassName: "bg-white",
    },
    {
        name: "Kit",
        icon: "simple-icons:kit",
        iconColor: "#FB6970",
        tileClassName: "bg-white",
    },
    {
        name: "Meta",
        icon: "simple-icons:meta",
        iconColor: "#1B74E4",
        tileClassName: "bg-white",
    },
    {
        name: "Dropbox",
        icon: "simple-icons:dropbox",
        iconColor: "#ffffff",
        tileClassName: "bg-[#1373E6]",
    },
    {
        name: "Google Drive",
        icon: "simple-icons:googledrive",
        iconColor: "#0F9D58",
        tileClassName: "bg-white",
    },
    {
        name: "Circle",
        icon: "simple-icons:circle",
        iconColor: "#155EEF",
        tileClassName: "bg-white",
    },
    {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    }, {
        name: "",
        icon: "",
        iconColor: "#635BFF",
        tileClassName: "",
    },
];

function IntegrationTile({ item }: { item: IntegrationItem }) {
    return (
        <div className="flex relative h-full group w-full aspect-square items-center justify-center" style={{ borderRight: "1px solid #f1f0ec", borderBottom: "1px dashed #f1f0ec" }}>
            {item.icon && <div
                className={[
                    "flex h-[86px] w-[86px] items-center justify-center border border-[#eeece9]",
                    item.tileClassName ?? "bg-white",
                ].join(" ")}
                aria-label={item.name}
                title={item.name}
            >
                <div className="absolute top-0 text-center opacity-0 group-hover:opacity-90 transition-opacity duration-200 ">
                    <div className="bg-black py-1 px-2 text-[12px] font-semibold text-white rounded-full">
                        {item.name}
                    </div>
                    <div className=" h-3 w-3 mx-auto" style={{
                        borderLeft: "6px solid transparent",
                        borderRight: "6px solid transparent",
                        borderTop: "6px solid black",
                    }} />

                </div>
                <Icon
                    icon={item.icon}
                    className={item.iconClassName ?? "h-13 w-13"}
                    style={{ color: item.iconColor }}
                />
            </div>}
        </div>
    );
}

export default function IntegrationsSection() {
    return (
        <section className="bg-white px-4 py-14 sm:px-6 md:px-8 lg:px-10 lg:py-18">
            <div className="mx-auto max-w-[1500px]">
                <div className="mx-auto max-w-[900px] text-center">
                    <h2 className="section-title text-black " >
                        Your stack, supercharged
                    </h2>

                    <p className="mx-auto max-w-2xl text-black section-description mt-4 ">
                        Teachable flexes to fit your workflow, integrating with the apps
                        you love while powering them into a system for growth.
                    </p>
                </div>

                <div className="overflow-hidden relative">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11">
                        {INTEGRATIONS.map((item, index) => (
                            <IntegrationTile key={item.name + index} item={item} />
                        ))}
                    </div>
                    <div className="absolute z-10 top-0 w-full h-40 bg-linear-to-b from-white to-transparent" />
                    <div className="absolute z-10 bottom-0 w-full h-40 bg-linear-to-t from-white to-transparent" />
                    <div className="absolute z-10 left-0 top-0 h-full w-40 bg-linear-to-r from-white via-transparent to-transparent" />
                    <div className="absolute z-10 right-0 top-0 h-full w-40 bg-linear-to-l from-white via-transparent to-transparent" />
                </div>

                <div className="mt-0 flex justify-center">
                    <Link
                        href="#"
                        className="outlined-btn capitalize! px-7"
                    >
                        Explore integrations
                    </Link>
                </div>
            </div>
        </section>
    );
}