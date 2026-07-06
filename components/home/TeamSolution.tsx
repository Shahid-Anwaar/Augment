"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

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
};

const TEAM_SOLUTIONS: TeamSolution[] = [
    {
        key: "projects",
        tab: "Projects",
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

export default function TeamSolutionsSection() {
    const [activeKey, setActiveKey] = useState<TeamKey>("projects");

    const activeTeam =
        TEAM_SOLUTIONS.find((item) => item.key === activeKey) || TEAM_SOLUTIONS[0];

    return (
        <section className="bg-white">
            <div className="section-container max-w-[1360px]">
                <div className="text-center">
                    <h2 className="section-title mx-auto text-black">
                        AI solutions for every team
                    </h2>
                    <p className="section-description mx-auto mb-6 text-black">
                        Your key workflows, powered by Supreme Coach Agents.
                    </p>
                </div>
                {/* Tabs */}
                <div className="mb-7 flex flex-wrap items-center justify-center gap-2.5">
                    {TEAM_SOLUTIONS.map((team) => {
                        const isActive = team.key === activeKey;

                        return (
                            <button
                                key={team.key}
                                type="button"
                                onClick={() => setActiveKey(team.key)}
                                className={[
                                    "rounded-full border px-5 py-2.5 text-[14px] font-bold leading-none transition-all duration-200",
                                    isActive
                                        ? "border border-black/30 bg-primary-500 text-black/80"
                                        : "border cursor-pointer border-black/30 bg-primary-300 hover:bg-primary-400 text-black",
                                ].join(" ")}
                            >
                                {team.tab}
                            </button>
                        );
                    })}
                </div>

                {/* Main card */}
                <div className="rounded-[32px] bg-[#f6f7f8] px-4 py-5 sm:px-6 md:px-7 lg:px-10 lg:py-8">
                    <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                        {/* Left content */}
                        <div>
                            <h2 className="max-w-[1700px] section-title font-[600] text-[#202124] ">
                                {activeTeam.titleBlack.map((line) => (
                                    <span key={line} className="block">
                                        {line}
                                    </span>
                                ))}

                                <span className="block text-[#878787]">
                                    {activeTeam.titleGray}
                                </span>
                            </h2>

                            <p className="mt-4 max-w-[500px] text-[18px] leading-[1.28] tracking-[-0.03em] text-[#2d2d2d] sm:text-[20px]">
                                {activeTeam.description}
                            </p>

                            <div className="mt-16 sm:mt-20">
                                <div className="mb-4 flex flex-wrap items-center gap-2">
                                    <span className="text-[14px] font-bold uppercase tracking-[0.04em] text-black/55">
                                        Replaces
                                    </span>

                                    <div className="flex items-center gap-2">
                                        {activeTeam.replaces.map((icon, index) => (
                                            <Icon
                                                key={`${icon}-${index}`}
                                                icon={icon}
                                                className="text-[17px] text-black/55"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <ul className="space-y-2.5">
                                    {activeTeam.bullets.map((bullet) => (
                                        <li
                                            key={bullet}
                                            className="flex items-start gap-3 text-[16px] leading-[1.25] tracking-[-0.02em] text-black/55 sm:text-[17px]"
                                        >
                                            <Icon
                                                icon="lucide:check"
                                                className="mt-0.5 shrink-0 text-[19px] text-black/45"
                                            />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right cards */}
                        <div className="mx-auto w-full max-w-[510px]">
                            <div className="space-y-3">
                                {activeTeam.agents.map((agent) => (
                                    <div
                                        key={agent.text}
                                        className="flex min-h-[68px] items-center gap-4 rounded-[14px] border border-black/5 bg-white px-4 py-3 shadow-[0_1px_4px_rgba(0,0,0,0.12)]"
                                    >
                                        <div
                                            className={[
                                                "relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                                                agent.iconBg,
                                            ].join(" ")}
                                        >
                                            <Icon icon={agent.icon} className="text-[26px]" />

                                            <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                                                <Icon
                                                    icon="fluent:star-four-points-16-filled"
                                                    className="text-[14px] text-secondary"
                                                />
                                            </span>
                                        </div>

                                        <p className="text-[16px] font-medium leading-[1.25] tracking-[-0.035em] text-[#202124] sm:text-[17px]">
                                            {agent.text}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <button
                                type="button"
                                className="outlined-btn mt-4 "
                            >
                                Explore solution
                                <Icon icon="lucide:arrow-right" className="text-[16px]" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}