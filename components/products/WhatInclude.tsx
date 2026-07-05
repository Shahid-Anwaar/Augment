"use client";

import { Icon } from "@iconify/react";

type IncludedRow = {
    feature: string;
    icons: {
        icon: string;
        label: string;
        className: string;
    }[];
    otherTools: string;
};

const includedRows: IncludedRow[] = [
    {
        feature: "CRM & Pipeline Management",
        icons: [
            { icon: "solar:database-bold", label: "CRM", className: "bg-orange-500 text-white" },
            { icon: "solar:chart-2-bold", label: "Pipeline", className: "bg-blue-500 text-white" },
        ],
        otherTools: "$99/monthly",
    },
    {
        feature: "Unlimited Sales Funnels",
        icons: [
            { icon: "solar:filter-bold", label: "Funnels", className: "bg-red-500 text-white" },
            { icon: "solar:routing-3-bold", label: "Builder", className: "bg-sky-500 text-white" },
        ],
        otherTools: "$297/monthly",
    },
    {
        feature: "Website Builder",
        icons: [
            { icon: "simple-icons:wordpress", label: "WordPress", className: "bg-blue-600 text-white" },
            { icon: "solar:monitor-bold", label: "Website", className: "bg-white text-black" },
            { icon: "solar:pen-new-square-bold", label: "Design", className: "bg-zinc-700 text-white" },
        ],
        otherTools: "$29/monthly",
    },
    {
        feature: "Surveys & Forms",
        icons: [
            { icon: "solar:clipboard-list-bold", label: "Forms", className: "bg-purple-500 text-white" },
            { icon: "solar:document-add-bold", label: "Survey", className: "bg-orange-400 text-white" },
            { icon: "solar:checklist-minimalistic-bold", label: "Checklist", className: "bg-red-400 text-white" },
        ],
        otherTools: "$49/monthly",
    },
    {
        feature: "Email Marketing",
        icons: [
            { icon: "solar:letter-bold", label: "Email", className: "bg-blue-500 text-white" },
            { icon: "solar:send-square-bold", label: "Send", className: "bg-orange-500 text-white" },
            { icon: "solar:graph-up-bold", label: "Stats", className: "bg-yellow-500 text-black" },
            { icon: "solar:user-id-bold", label: "Contacts", className: "bg-sky-500 text-white" },
        ],
        otherTools: "$99/monthly",
    },
    {
        feature: "2-Way SMS Marketing",
        icons: [
            { icon: "solar:chat-round-dots-bold", label: "SMS", className: "bg-pink-500 text-white" },
            { icon: "solar:phone-calling-bold", label: "Phone", className: "bg-sky-500 text-white" },
            { icon: "solar:dialog-2-bold", label: "Chat", className: "bg-zinc-800 text-white" },
        ],
        otherTools: "$99/monthly",
    },
    {
        feature: "Booking & Appointments",
        icons: [
            { icon: "solar:calendar-bold", label: "Calendar", className: "bg-blue-500 text-white" },
            { icon: "solar:clock-circle-bold", label: "Time", className: "bg-white text-black" },
            { icon: "solar:bell-bold", label: "Reminder", className: "bg-zinc-700 text-white" },
        ],
        otherTools: "$29/monthly",
    },
    {
        feature: "Workflow Automations",
        icons: [
            { icon: "solar:bolt-bold", label: "Automation", className: "bg-orange-500 text-white" },
            { icon: "solar:settings-bold", label: "Workflow", className: "bg-sky-500 text-white" },
            { icon: "solar:branching-paths-up-bold", label: "Flow", className: "bg-green-500 text-white" },
        ],
        otherTools: "$100/monthly",
    },
    {
        feature: "Courses / Products",
        icons: [
            { icon: "solar:square-academic-cap-bold", label: "Courses", className: "bg-teal-500 text-white" },
            { icon: "solar:bag-4-bold", label: "Products", className: "bg-blue-500 text-white" },
        ],
        otherTools: "$99/monthly",
    },
    {
        feature: "Call Tracking",
        icons: [
            { icon: "solar:phone-bold", label: "Calls", className: "bg-sky-500 text-white" },
            { icon: "solar:radar-bold", label: "Tracking", className: "bg-white text-black" },
        ],
        otherTools: "$49/monthly",
    },
    {
        feature: "Reputation Management",
        icons: [
            { icon: "solar:star-bold", label: "Reviews", className: "bg-white text-black" },
            { icon: "solar:shield-check-bold", label: "Trust", className: "bg-sky-500 text-white" },
            { icon: "solar:medal-ribbons-star-bold", label: "Reputation", className: "bg-blue-300 text-black" },
        ],
        otherTools: "$150/monthly",
    },
    {
        feature: "Tracking & Analytics",
        icons: [
            { icon: "solar:chart-square-bold", label: "Analytics", className: "bg-sky-500 text-white" },
            { icon: "solar:graph-new-up-bold", label: "Tracking", className: "bg-blue-500 text-white" },
        ],
        otherTools: "$299/monthly",
    },
    {
        feature: "Communities",
        icons: [
            { icon: "solar:users-group-rounded-bold", label: "Community", className: "bg-white text-black" },
            { icon: "solar:chat-square-like-bold", label: "Social", className: "bg-zinc-700 text-white" },
            { icon: "solar:global-bold", label: "Network", className: "bg-indigo-500 text-white" },
        ],
        otherTools: "$89/monthly",
    },
    {
        feature: "Document Signing",
        icons: [
            { icon: "solar:document-text-bold", label: "Document", className: "bg-green-500 text-white" },
            { icon: "solar:pen-new-square-bold", label: "Signing", className: "bg-primary text-black" },
        ],
        otherTools: "$47/monthly",
    },
    {
        feature: "Chat-Enabled Mobile App",
        icons: [],
        otherTools: "Unique to Supreme Coach",
    },
];

export default function WhatToInclude() {
    return (
        <section id="what-included" className="section-spacing py-0 bg-[#03101d]">
            <div className="section-container py-0">
                <div className="overflow-hidden rounded-[18px] bg-[#03101d] px-3 py-7 sm:px-6 sm:py-8 lg:px-9 lg:py-10">
                    <h2 className="section-title mx-auto text-white text-center">
                        What&apos;s included with Supreme Coach
                    </h2>

                    <div className="mt-7 w-full overflow-x-auto sm:mt-8">
                        <table className="w-full min-w-[680px] border-separate border-spacing-y-2 text-left sm:min-w-[760px] lg:min-w-0">
                            <thead>
                                <tr className="text-[12px] font-bold uppercase tracking-[0.05em] text-white/70 sm:text-[13px]">
                                    <th className="px-3 pb-2 sm:px-4">Features</th>
                                    <th className="px-3 pb-2 sm:px-4">Replaces</th>
                                    <th className="px-3 pb-2 sm:px-4">Other Tools</th>
                                    <th className="px-3 pb-2 text-center sm:px-4">
                                        <span className="inline-flex items-center justify-center gap-1 ">
                                            <Icon icon="solar:stars-bold" className="h-4 w-4 sm:h-5 sm:w-5" />
                                            Supreme Coach
                                        </span>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {includedRows.map((row) => (
                                    <tr
                                        key={row.feature}
                                        className="overflow-hidden rounded-[9px]  text-[12px] font-bold uppercase tracking-[0.03em] text-white shadow-sm sm:text-[13px]"
                                    >
                                        <td className="rounded-l-[9px] border-r border-white/8 px-3 py-3 sm:px-4 sm:py-3.5">
                                            {row.feature}
                                        </td>

                                        <td className="border-r border-white/8 px-3 py-3 sm:px-4 sm:py-3.5">
                                            <div className="flex items-center gap-1.5 sm:gap-2">
                                                {row.icons.length > 0 ? (
                                                    row.icons.map((item) => (
                                                        <span
                                                            key={`${row.feature}-${item.label}`}
                                                            title={item.label}
                                                            className={`flex h-6 w-6 items-center justify-center rounded-full sm:h-7 sm:w-7 ${item.className}`}
                                                        >
                                                            <Icon icon={item.icon} className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                                                        </span>
                                                    ))
                                                ) : (
                                                    <span className="text-white/35">—</span>
                                                )}
                                            </div>
                                        </td>

                                        <td className="border-r border-white/8 px-3 py-3 text-[11px] text-white/90 sm:px-4 sm:py-3.5 sm:text-[12px] lg:text-[13px]">
                                            {row.otherTools}
                                        </td>

                                        <td className="rounded-r-[9px] px-3 py-3 text-center sm:px-4 sm:py-3.5">
                                            <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/90">
                                                <Icon icon="mdi:check" className="h-4 w-4 text-white" />
                                            </span>
                                        </td>
                                    </tr>
                                ))}

                                <tr className=" text-[12px] font-bold uppercase tracking-[0.04em] text-white sm:text-[13px]">
                                    <td className="rounded-l-[9px] px-3 py-3.5 sm:px-4" />
                                    <td className="px-3 py-3.5 sm:px-4" />
                                    <td className="px-3 py-3.5 text-primary sm:px-4">
                                        Overall Price
                                    </td>
                                    <td className="rounded-r-[9px] px-3 py-3.5 sm:px-4">
                                        <div className="flex items-center justify-center gap-3">
                                            <span className="text-[12px] text-white/80 sm:text-[13px]">
                                                $1,604+ per month
                                            </span>
                                            <span className="text-[24px] font-black text-primary sm:text-[28px]">
                                                $97
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="my-7 flex justify-center">
                        <button className="closed-btn mx-auto px-4 py-2.5 text-[13px] xl:px-6 xl:text-[14px]">
                            Start With Supreme Coach
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}