"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import CustomLink from "../custom/CustomLink";
import CustomEmblaCarousel from "./CustomCarosal";
import CompanyLogoCarousel from "./CompaniesSlider";
import Image from "next/image";
import { companyLogos } from "@/data/data";

type TeamKey =
    | "projects"
    | "marketing"
    | "product"
    | "it"
    | "hr"
    | "leadership"
    | "all";

type AgentCard = {
    icon: string;
    iconBg: string;
    text: string;
};

type TeamSolution = {
    key: TeamKey;
    tab: string;
    titleBlack: string[];
    titleGray: string;
    description: string;
    replaces: string[];
    bullets: string[];
    agents: AgentCard[];
    bgColor: string;
};

const TEAM_SOLUTIONS: TeamSolution[] = [
    {
        key: "projects",
        tab: "Projects",
        bgColor: "bg-sky-200",
        titleBlack: ["Deliver projects on time,"],
        titleGray: "every time",
        description:
            "Get your team, department, and company running smoothly with the industry's best project management solution.",
        replaces: [
            "simple-icons:asana",
            "simple-icons:mondaydotcom",
            "simple-icons:jira",
            "simple-icons:linear",
        ],
        bullets: [
            "Manage complex projects at scale",
            "Bring strategic initiatives to life",
            "Detect and mitigate project risks",
        ],
        agents: [
            {
                icon: "fluent-emoji:woman-technologist-light",
                iconBg: "bg-cyan-100",
                text: "Intake Agent standardizes project kickoff",
            },
            {
                icon: "fluent-emoji:man-office-worker-light",
                iconBg: "bg-orange-100",
                text: "Assign Agent determines task owners",
            },
            {
                icon: "fluent-emoji:woman-office-worker-medium-light",
                iconBg: "bg-pink-100",
                text: "PM Agent tracks deliverables + timelines",
            },
            {
                icon: "fluent-emoji:man-technologist-light",
                iconBg: "bg-yellow-100",
                text: "Live Answers Agent keeps everyone informed",
            },
        ],
    },
    {
        key: "marketing",
        tab: "Marketing",
        bgColor: "bg-pink-200",
        titleBlack: ["Maximize marketing's"],
        titleGray: "impact and results",
        description:
            "Coordinate content, creative, and campaigns in a single workspace purpose-built for marketers.",
        replaces: [
            "simple-icons:asana",
            "simple-icons:mondaydotcom",
            "simple-icons:notion",
            "simple-icons:slack",
        ],
        bullets: [
            "Execute campaigns with velocity",
            "Coordinate + run seamless events",
            "Eliminate content + creative bottlenecks",
        ],
        agents: [
            {
                icon: "fluent-emoji:woman-technologist-light",
                iconBg: "bg-cyan-100",
                text: "Brief Agent creates campaign briefs",
            },
            {
                icon: "fluent-emoji:woman-artist-light",
                iconBg: "bg-pink-100",
                text: "Content Agent drafts promo copy",
            },
            {
                icon: "fluent-emoji:man-office-worker-medium",
                iconBg: "bg-green-100",
                text: "Brand Agent applies guidelines",
            },
            {
                icon: "fluent-emoji:man-technologist-light",
                iconBg: "bg-orange-100",
                text: "Live Intel Agent updates core docs",
            },
        ],
    },
    {
        key: "product",
        tab: "Product & Eng",
        bgColor: "bg-violet-200",
        titleBlack: ["Ship faster,"],
        titleGray: "more reliable software",
        description:
            "Streamline the entire strategy + dev process in a single, connected workspace.",
        replaces: [
            "mdi:cards-diamond",
            "simple-icons:slack",
            "simple-icons:notion",
            "simple-icons:trello",
        ],
        bullets: [
            "Plan + execute the roadmap",
            "Identify + resolve bugs",
            "Integrate with AI coders",
        ],
        agents: [
            {
                icon: "fluent-emoji:man-technologist-medium-dark",
                iconBg: "bg-indigo-100",
                text: "PRD Agent creates docs from voice notes",
            },
            {
                icon: "fluent-emoji:man-office-worker-light",
                iconBg: "bg-yellow-100",
                text: "Triage Agent prioritizes bugs",
            },
            {
                icon: "fluent-emoji:woman-technologist-light",
                iconBg: "bg-orange-100",
                text: "Live Answers Agent keeps everyone informed",
            },
            {
                icon: "fluent-emoji:man-technologist-light",
                iconBg: "bg-yellow-100",
                text: "Codegen Agent produces quality code",
            },
        ],
    },
    {
        key: "it",
        tab: "IT",
        bgColor: "bg-emerald-200",
        titleBlack: ["Create the systems,"],
        titleGray: "for scale",
        description:
            "Streamline internal support processes and external vendor relationship protocols in a single, unified workspace.",
        replaces: [
            "mdi:cards-diamond",
            "simple-icons:slack",
            "simple-icons:notion",
            "simple-icons:trello",
        ],
        bullets: [
            "Manage vendors + budgeting",
            "Run tight asset management",
            "Streamline contracts + procurement",
        ],
        agents: [
            {
                icon: "fluent-emoji:man-technologist-medium-dark",
                iconBg: "bg-indigo-100",
                text: "Assets Agent tracks inventory",
            },
            {
                icon: "fluent-emoji:man-office-worker-light",
                iconBg: "bg-yellow-100",
                text: "RFP Agent manages reqs docs",
            },
            {
                icon: "fluent-emoji:woman-artist-light",
                iconBg: "bg-pink-100",
                text: "Contracts Agent standardizes terms",
            },
            {
                icon: "fluent-emoji:man-technologist-light",
                iconBg: "bg-orange-100",
                text: "Live Intel Agent identifies redundancies",
            },
        ],
    },
    {
        key: "hr",
        tab: "HR",
        bgColor: "bg-orange-200",
        titleBlack: ["Build the process"],
        titleGray: "that power your people",
        description:
            "Optimize the employee experience to keep morale as high as productivity.",
        replaces: [
            "simple-icons:asana",
            "simple-icons:mondaydotcom",
            "simple-icons:slack",
            "simple-icons:notion",
        ],
        bullets: [
            "Streamline employee onboarding",
            "Roll out effective training programs",
            "Keep a pulse on employee NPS",
        ],
        agents: [
            {
                icon: "fluent-emoji:woman-technologist-light",
                iconBg: "bg-cyan-100",
                text: "Onboarding Agent monitors progress + feedback",
            },
            {
                icon: "fluent-emoji:man-office-worker-light",
                iconBg: "bg-orange-100",
                text: "Pulse Check Agent collects employee sentiment",
            },
            {
                icon: "fluent-emoji:woman-office-worker-medium-light",
                iconBg: "bg-pink-100",
                text: "Trainer Agent analyzes course performance",
            },
            {
                icon: "fluent-emoji:man-technologist-light",
                iconBg: "bg-yellow-100",
                text: "Live Answers Agent provides real-time info",
            },
        ],
    },
    {
        key: "leadership",
        tab: "Leadership",
        bgColor: "bg-yellow-200",
        titleBlack: ["Close the strategy–"],
        titleGray: "execution gap",
        description:
            "Get your company rowing in the same direction with one AI workspace to define, execute, and track your top-line goals.",
        replaces: [
            "simple-icons:asana",
            "simple-icons:mondaydotcom",
            "simple-icons:slack",
            "simple-icons:notion",
        ],
        bullets: [
            "Set the strategy and actually execute it",
            "Drive organizational focus with tighter alignment",
            "Enforce accountability and ownership with ultimate visibility",
        ],
        agents: [
            {
                icon: "fluent-emoji:woman-technologist-light",
                iconBg: "bg-cyan-100",
                text: "Goal Reminder Agent removes tedious check-ins",
            },
            {
                icon: "fluent-emoji:man-office-worker-light",
                iconBg: "bg-orange-100",
                text: "Alignment Agent ensures cross-functional cohesion",
            },
            {
                icon: "fluent-emoji:woman-office-worker-medium-light",
                iconBg: "bg-pink-100",
                text: "Key Results Agent suggest relevant KPIs",
            },
            {
                icon: "fluent-emoji:man-technologist-light",
                iconBg: "bg-yellow-100",
                text: "Status Update Agent gives always-on visibility",
            },
        ],
    },
    {
        key: "all",
        tab: "See all teams",
        bgColor: "bg-slate-200",
        titleBlack: ["One workspace"],
        titleGray: "for every team",
        description:
            "Bring every department together with AI agents that understand work, context, and team priorities.",
        replaces: [
            "simple-icons:asana",
            "simple-icons:mondaydotcom",
            "simple-icons:notion",
            "simple-icons:slack",
        ],
        bullets: [
            "Unify work across departments",
            "Automate repeatable team workflows",
            "Keep everyone aligned with live context",
        ],
        agents: [
            {
                icon: "fluent-emoji:woman-technologist-light",
                iconBg: "bg-cyan-100",
                text: "Workspace Agent keeps all teams aligned",
            },
            {
                icon: "fluent-emoji:man-office-worker-light",
                iconBg: "bg-orange-100",
                text: "Automation Agent handles repetitive work",
            },
            {
                icon: "fluent-emoji:woman-office-worker-medium-light",
                iconBg: "bg-pink-100",
                text: "Knowledge Agent organizes company docs",
            },
            {
                icon: "fluent-emoji:man-technologist-light",
                iconBg: "bg-yellow-100",
                text: "Live Answers Agent gives instant context",
            },
        ],
    },
];

const allTabs = [...TEAM_SOLUTIONS, ...TEAM_SOLUTIONS, ...TEAM_SOLUTIONS];

export default function TeamSolutionsSection() {
    const [activeKey, setActiveKey] = useState<TeamKey>("projects");

    const activeTeam =
        TEAM_SOLUTIONS.find((item) => item.key === activeKey) || TEAM_SOLUTIONS[0];

    return (
        <section className="bg-white overflow-hidden">
            <div className="section-container max-w-[1360px]">
                <div className="text-center">
                    <h2 className="section-title mx-auto text-black">
                        AI solutions for every team
                    </h2>

                    <p className="section-description mx-auto mb-5 sm:mb-6 text-black">
                        Your key workflows, powered by Supreme Coach Agents.
                    </p>
                </div>

                <div className="mx-auto relative mb-5 max-w-3xl bg-white">
                    <div className="absolute flex justify-between inset-0 z-50">
                        <div className="w-40 bg-linear-to-r via-white/90 from-white to-transparent" />
                        <div className="w-40 bg-linear-to-l via-white/90 from-white to-transparent" />
                    </div>
                    <div className="mx-auto bg-white px-0">
                        <div className="mx-auto mt-0 max-w-[92%] w-full">
                            <CustomEmblaCarousel
                                CustomCard={(item: any, index: number, activeIndex: number) => {
                                    setActiveKey(allTabs[activeIndex]?.key);
                                    return (
                                        <div
                                            key={item.key + index}
                                            className="box-border flex min-w-0 shrink-0 grow-0 basis-auto items-center justify-center px-1 "
                                        >
                                            <button
                                                type="button"
                                                // onClick={() => setActiveKey(item.key)}
                                                className={[
                                                    "rounded-full border px-2.5 py-1.5 text-[10px] font-bold leading-none transition-all duration-200",
                                                    "sm:px-5 sm:py-2.5 sm:text-[14px]",
                                                    "max-w-full whitespace-nowrap",
                                                    "cursor-pointer border-black/30 text-black",
                                                    activeKey == item.key
                                                        ? "border-black/30 text-black/80 " + item.bgColor
                                                        : "cursor-pointer border-black/30 bg-primary-300 text-black hover:bg-primary-400",
                                                ].join(" ")}
                                            >
                                                {item.tab}
                                            </button>
                                        </div>
                                    );
                                }}
                                // isContinuousPlay={true}
                                // continuousPlayConfig={{
                                //     speed: 0.6
                                // }}
                                isAutoplay={true}
                                items={allTabs}
                                options={{
                                    loop: true,
                                    align: "center",
                                    skipSnaps: false,
                                }}
                                autoplayConfig={{ stopOnMouseEnter: false }}
                                wrapperClassName="min-h-0 bg-white"
                            />
                        </div>
                    </div>
                </div>

                {/* Main card */}
                <div className={`rounded-[20px] px-4 py-5 sm:rounded-[24px] sm:px-6 md:px-7 lg:rounded-[32px] lg:px-10 lg:py-8 transition-all duration-1000 ${activeTeam.bgColor}`} >
                    <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                        {/* Left content */}
                        <div className="min-w-0">
                            <h2 className="section-title max-w-full font-[600] text-[#202124]">
                                {activeTeam.titleBlack.map((line) => (
                                    <span key={line} className="block">
                                        {line}
                                    </span>
                                ))}

                                <span className="block text-[#878787]">
                                    {activeTeam.titleGray}
                                </span>
                            </h2>

                            <p className="mt-3 max-w-[500px] text-[15px] leading-[1.35] tracking-[-0.02em] text-[#2d2d2d] sm:mt-4 sm:text-[18px] sm:leading-[1.3] md:text-[20px]">
                                {activeTeam.description}
                            </p>

                            <div className="mt-8 sm:mt-12 lg:mt-16">
                                <div className="mb-4 flex flex-wrap items-center gap-2">
                                    <span className="text-[12px] font-bold uppercase tracking-[0.04em] text-black/55 sm:text-[14px]">
                                        Replaces
                                    </span>

                                    <div className="flex flex-wrap items-center gap-2">
                                        {activeTeam.replaces.map((icon, index) => (
                                            <Icon
                                                key={`${icon}-${index}`}
                                                icon={icon}
                                                className="text-[16px] text-black/55 sm:text-[17px]"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <ul className="space-y-2.5">
                                    {activeTeam.bullets.map((bullet) => (
                                        <li
                                            key={bullet}
                                            className="flex items-start gap-2.5 text-[14px] leading-[1.35] tracking-[-0.01em] text-black/55 sm:gap-3 sm:text-[16px] sm:leading-[1.3] md:text-[17px]"
                                        >
                                            <Icon
                                                icon="lucide:check"
                                                className="mt-0.5 shrink-0 text-[17px] text-black/45 sm:text-[19px]"
                                            />
                                            <span className="min-w-0">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right cards */}
                        <div className="mx-auto w-full max-w-[510px] min-w-0">
                            <div className="space-y-2.5 sm:space-y-3">
                                {activeTeam.agents.map((agent) => (
                                    <div
                                        key={agent.text}
                                        className="flex min-h-[60px] items-center gap-3 rounded-[12px] border border-black/5 bg-white/40 px-3 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.12)] sm:min-h-[68px] sm:gap-4 sm:rounded-[14px] sm:px-4"
                                    >
                                        <div
                                            className={[
                                                "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full sm:h-9 sm:w-9",
                                                agent.iconBg,
                                            ].join(" ")}
                                        >
                                            <Icon icon={agent.icon} className="text-[22px] sm:text-[26px]" />

                                            <span className="absolute -bottom-1 -right-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-white sm:h-4 sm:w-4">
                                                <Icon
                                                    icon="fluent:star-four-points-16-filled"
                                                    className="text-[12px] text-secondary sm:text-[14px]"
                                                />
                                            </span>
                                        </div>

                                        <p className="min-w-0 text-[14px] font-medium leading-[1.35] tracking-[-0.02em] text-[#202124] sm:text-[16px] sm:leading-[1.3] md:text-[17px]">
                                            {agent.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <CustomLink
                                className="mt-4"
                                text="Explore solution"
                                icon="lucide:arrow-right"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}