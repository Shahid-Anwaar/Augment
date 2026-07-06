"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

type PricingTab = "coaches" | "forms";

type featureObj = {
    feature: string;
    available: boolean;
}

type PricingPlan = {
    name: string;
    description: string;
    price: string;
    oldPrice?: string;
    badge?: string;
    buttonText: string;
    popular?: boolean;
    custom?: boolean;
    features: featureObj[];
};

const pricingData: Record<PricingTab, PricingPlan[]> = {
    coaches: [
        {
            name: "Builder",
            description:
                "Essential features for building and selling your coaching products.",
            price: "69,000",
            oldPrice: "89,000",
            badge: "SAVE 20,000",
            buttonText: "Start now",
            features: [
                {
                    feature: "10 products",
                    available: true,
                },
                {
                    feature: "Create products with AI",
                    available: true,
                },
                {
                    feature: "Email integration",
                    available: true,
                },
                {
                    feature: "Real-time support",
                    available: true,
                },
                {
                    feature: "Affiliate program",
                    available: false,
                },
                {
                    feature: "Custom admin permissions",
                    available: false,
                },
                {
                    feature: "Dedicated success manager",
                    available: false,
                },
            ],
        },
        {
            name: "Growth",
            description:
                "Powerful tools for growing your revenue, audience, and coaching team.",
            price: "139,000",
            oldPrice: "189,000",
            badge: "POPULAR",
            buttonText: "Start now",
            popular: true,
            features: [
                {
                    feature: "Everything in Builder",
                    available: true,
                },
                {
                    feature: "Custom admin permissions",
                    available: true,
                },
                {
                    feature: "Priority support",
                    available: true,
                },
                {
                    feature: "Advanced email automation",
                    available: true,
                },
                {
                    feature: "Lead capture forms",
                    available: true,
                },
                {
                    feature: "Sandbox setup for testing",
                    available: false,
                },
                {
                    feature: "Dedicated success manager",
                    available: false,
                },
            ],
        },
        {
            name: "Custom",
            description:
                "For high-volume coaching businesses that need custom tools and premium support.",
            price: "Custom",
            buttonText: "Contact sales",
            custom: true,
            features: [
                {
                    feature: "Everything in Growth",
                    available: true,
                },
                {
                    feature: "Unlimited products",
                    available: true,
                },
                {
                    feature: "Dedicated success manager",
                    available: true,
                },
                {
                    feature: "Bulk sales features",
                    available: true,
                },
                {
                    feature: "Flexible admin seats",
                    available: true,
                },
                {
                    feature: "Sandbox setup for testing",
                    available: true,
                },
                {
                    feature: "Priority SLA-based support",
                    available: true,
                },
                {
                    feature: "Migration assistance",
                    available: true,
                },
                {
                    feature: "Custom integrations",
                    available: true,
                },
                {
                    feature: "Custom contract & billing terms",
                    available: true,
                },
            ],
        },
    ],

    forms: [
        {
            name: "Core",
            description:
                "Centralize and launch your business forms with essential workflow tools.",
            price: "600,000",
            buttonText: "Start now",
            features: [
                {
                    feature: "Form management",
                    available: true,
                },
                {
                    feature: "25 forms",
                    available: true,
                },
                {
                    feature: "2 TB storage",
                    available: true,
                },
                {
                    feature: "Email support",
                    available: true,
                },
                {
                    feature: "Basic reporting",
                    available: true,
                },
                {
                    feature: "Single Sign-On",
                    available: false,
                },
                {
                    feature: "Remove branding",
                    available: false,
                },
                {
                    feature: "Advanced analytics",
                    available: false,
                },
            ],
        },
        {
            name: "Pro",
            description:
                "Expand your forms system with advanced management, branding, and SSO.",
            price: "1,200,000",
            buttonText: "Start now",
            popular: true,
            features: [
                {
                    feature: "Everything in Core",
                    available: true,
                },
                {
                    feature: "1,000 users",
                    available: true,
                },
                {
                    feature: "Advanced workflow approvals",
                    available: true,
                },
                {
                    feature: "Standard support",
                    available: true,
                },
                {
                    feature: "Advanced analytics",
                    available: true,
                },
                {
                    feature: "Custom form limits",
                    available: false,
                },
                {
                    feature: "Priority SLA-based support",
                    available: false,
                },
            ],
        },
        {
            name: "Custom",
            description:
                "Work with our team to create a customized forms plan for your organization.",
            price: "Custom",
            buttonText: "Contact sales",
            custom: true,
            features: [
                {
                    feature: "Everything in Pro",
                    available: true,
                },
                {
                    feature: "Customizable admin seats",
                    available: true,
                },
                {
                    feature: "Secure Single Sign-On",
                    available: true,
                },
                {
                    feature: "Advanced analytics",
                    available: true,
                },
                {
                    feature: "Dedicated onboarding",
                    available: true,
                },
                {
                    feature: "Priority support",
                    available: true,
                },
                {
                    feature: "Custom integrations",
                    available: true,
                },
                {
                    feature: "Custom security review",
                    available: true,
                },
            ],
        },
    ],
};

const tabs: {
    label: string;
    value: PricingTab;
    icon: string;
}[] = [
        {
            label: "For Coaches",
            value: "coaches",
            icon: "mdi:account",
        },
        {
            label: "For Firms",
            value: "forms",
            icon: "mdi:file-document-outline",
        },
    ];

export default function PricingSection() {
    const [activeTab, setActiveTab] = useState<PricingTab>("coaches");

    const plans = pricingData[activeTab];

    return (
        <section className="section-spacing pb-5">
            <div className="section-container">
                <div className="">
                    <h2 className="section-title max-w-5xl hero-title mx-auto text-center">
                        Project Investment Levels. One-Time. You Own Everything. Forever.
                    </h2>
                    <p className="section-description text-black text-center mx-auto mt-4">
                        Supreme Coach is not a subscription service. These are not monthly plan prices. When you work with Supreme Coach, you are commissioning a custom build project — and your investment is made once. After delivery, your coaching infrastructure belongs to you, runs on your servers, and costs nothing monthly. Ever.</p>

                    <div className="mt-6 w-full overflow-x-auto sm:mt-8 mx-auto text-center">
                        <div className="mx-auto inline-flex min-w-max rounded-full border border-black bg-white p-1">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.value}
                                    type="button"
                                    onClick={() => setActiveTab(tab.value)}
                                    className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[11px] font-bold uppercase transition sm:gap-2 sm:px-5 sm:py-3 sm:text-[13px] md:text-[14px] ${activeTab === tab.value
                                        ? "bg-black text-white"
                                        : "text-black hover:bg-gray-100"
                                        }`}
                                >
                                    <Icon icon={tab.icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <p className="paragraph-text text-center mx-auto my-3 max-w-[680px] px-2 text-[15px] leading-[1.45] sm:mt-5 sm:text-[16px] md:mt-6 md:max-w-[760px]">
                        One-time plans built to launch, sell, and scale your online
                        business.
                    </p>
                </div>

                <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`section-card relative flex min-h-0 flex-col border p-5 sm:p-6 lg:min-h-[560px] lg:p-7 ${plan.popular ? "border-secondary-800" : "border-black/10"
                                } ${plan.custom ? "bg-gray-50" : "bg-white"}`}
                        >
                            {plan.popular && (
                                <div className="absolute left-0 top-0 w-full rounded-t-3xl bg-black py-1.5 text-center text-[10px] font-bold uppercase text-white sm:py-2 sm:text-[12px]">
                                    Popular
                                </div>
                            )}

                            <div className={plan.popular ? "pt-7 sm:pt-8" : ""}>
                                {plan.badge && !plan.popular && (
                                    <span className="mb-3 inline-block rounded bg-secondary-50 px-2.5 py-1 text-[10px] font-bold uppercase text-black sm:mb-4 sm:px-3 sm:text-[12px]">
                                        {plan.badge}
                                    </span>
                                )}

                                {plan.custom && (
                                    <span className="mb-3 inline-block text-[11px] font-bold uppercase tracking-wide text-black sm:mb-4 sm:text-[13px]">
                                        Custom Plan
                                    </span>
                                )}

                                <h3 className="text-[24px] font-bold leading-tight text-black sm:text-[26px] lg:text-[28px]">
                                    {plan.name}
                                </h3>

                                <p className="mt-3 min-h-0 text-[14px] leading-[1.4] text-black sm:mt-4 sm:min-h-[54px] sm:text-[15px]">
                                    {plan.description}
                                </p>

                                <div className="mt-2 sm:mt-3">
                                    {plan.oldPrice && (
                                        <p className="text-[18px] text-black/40 line-through sm:text-[20px] lg:text-[22px]">
                                            £{plan.oldPrice}
                                        </p>
                                    )}

                                    {plan.price === "Custom" ? (
                                        <p className="mt-2 text-[34px] font-bold leading-none text-black sm:text-[38px] lg:text-[42px]">
                                            Custom
                                        </p>
                                    ) : (
                                        <p className="mt-2 text-[34px] font-bold leading-none text-black sm:text-[40px] lg:text-[48px]">
                                            £{plan.price}
                                        </p>
                                    )}

                                    {plan.price !== "Custom" && (
                                        <p className="mt-2 text-[12px] text-black sm:mt-3 sm:text-[14px]">
                                            One-time payment
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="button"
                                    className={`mt-5 w-full sm:mt-6 ${plan.popular
                                        ? "contained-btn"
                                        : "outlined-btn hover:bg-primary"
                                        }`}
                                >
                                    {plan.buttonText}
                                </button>

                                <ul className="mt-6 space-y-2 sm:mt-8 sm:space-y-3">
                                    {plan.features.map((feature, index) => (
                                        <li
                                            key={feature.feature}
                                            className={`flex items-center gap-2 text-[13px] leading-[1.4] text-black sm:text-[14px] ${index !== plan.features.length - 1 ? " border-b pb-3 border-black/70" : ""}`}
                                        >
                                            <div className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${feature.available ? "border-primary-700" : "border-red-500"}`}>
                                                <Icon icon={feature.available ? "mdi:check" : "mdi:close"} className={`h-3.5 w-3.5 ${feature.available ? "text-primary-700" : "text-red-500"}`} />
                                            </div>
                                            <span>{feature.feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {!plan.custom && (
                                <button
                                    type="button"
                                    className="mt-8 text-[13px] font-medium text-secondary-800 underline sm:mt-auto sm:pt-10 sm:text-[14px]"
                                >
                                    Compare all features
                                </button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}