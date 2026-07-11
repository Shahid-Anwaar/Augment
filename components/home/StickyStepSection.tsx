"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";

const STICKY_CARDS = [
  {
    key: "data",
    label: "DATA",
    title: "Get data from the most",
    highlightedTitle: "complete data marketplace",
    description:
      "One contract to buy data from 200+ data and AI vendors in Clay’s marketplace. Create intent signals from anything on the internet.",
    bgClass: "bg-blue-100",
    textClass: "text-secondary-900",
    highlightClass: "text-secondary-500",
    badgeClass: "bg-secondary-500",
    buttonClass: "bg-secondary-500 hover:bg-secondary-400",
    image: "/external-images/img-2aeeec10.webp",
    icons: ["simple-icons:anthropic", "simple-icons:intercom", "simple-icons:mistralai"],
    points: [
      {
        brand: "Anthropic",
        text: "3x’d their enrichment rate with Clay’s data marketplace.",
      },
      {
        brand: "Intercom",
        text: "grew outbound pipeline 140% by researching target accounts.",
      },
      {
        brand: "Mistral AI",
        text: "cut the time to map their TAM from 2 months to 10 days.",
      },
    ],
    secondaryButton: "Explore data marketplace",
  },
  {
    key: "agents",
    label: "AGENTS",
    title: "Create agents who",
    highlightedTitle: "mimic your best reps",
    description:
      "Mine the web for custom data points to research and qualify accounts. Prep reps with the detail they need to tailor every touchpoint.",
    bgClass: "bg-[#fff1ec]",
    textClass: "text-[#3b1200]",
    highlightClass: "text-[#c74405]",
    badgeClass: "bg-[#c74405]",
    buttonClass: "bg-[#c74405] hover:bg-[#a93804]",
    image: "/external-images/img-f4152475.webp",
    icons: ["simple-icons:openai", "simple-icons:canva", "simple-icons:vanta"],
    points: [
      {
        brand: "OpenAI",
        text: "used Clay to automate pre-call prep by researching prospect context.",
      },
      {
        brand: "Canva",
        text: "saved 4 hrs/rep/week by automating contact sourcing.",
      },
      {
        brand: "Vanta",
        text: "cut follow-up time from 3 days to less than 1 hour.",
      },
    ],
    secondaryButton: "Explore agents",
  },
  {
    key: "orchestration",
    label: "ORCHESTRATION",
    title: "Orchestrate workflows",
    highlightedTitle: "across tools in real time",
    description:
      "Connect every GTM or AI tool to a common data layer. Update data across millions of records in your CRM and warehouse.",
    bgClass: "bg-primary-50",
    textClass: "text-primary-950",
    highlightClass: "text-primary-700",
    badgeClass: "bg-primary-700",
    buttonClass: "bg-primary-700 hover:bg-primary-800",
    image: "/external-images/img-3f4ca6a1.webp",
    icons: ["simple-icons:elevenlabs", "mdi:check-bold", "simple-icons:lovable"],
    points: [
      {
        brand: "ElevenLabs",
        text: "increased SQLs by 50% by reducing speed-to-lead to less than 5 mins.",
      },
      {
        brand: "Verkada",
        text: "routes warm lead replies to the right nurture campaign.",
      },
      {
        brand: "Lovable",
        text: "booked 50% more qualified meetings per rep.",
      },
    ],
    secondaryButton: "Explore the GTM data layer",
  },
  {
    key: "execution",
    label: "EXECUTION",
    title: "Launch new plays as",
    highlightedTitle: "fast as you have ideas",
    description:
      "Trigger emails, ads, and more with integrations to your existing GTM tools. Launch new tests in days.",
    bgClass: "bg-[#fff0fa]",
    textClass: "text-[#3b0028]",
    highlightClass: "text-[#d600a9]",
    badgeClass: "bg-[#d600a9]",
    buttonClass: "bg-[#d600a9] hover:bg-[#b80091]",
    image: "/external-images/img-2aeeec10.webp",
    icons: ["simple-icons:rippling", "simple-icons:figma", "mdi:email-fast-outline"],
    points: [
      {
        brand: "Rippling",
        text: "2x’d cold email performance by tailoring copy based on persona data.",
      },
      {
        brand: "Legora",
        text: "increased qualified lead volume 60% using research agents.",
      },
      {
        brand: "Figma",
        text: "increased PLG conversion by automatically prospecting into self-serve accounts.",
      },
    ],
    secondaryButton: "Learn more about building plays",
  },
  {
  key: "optimization",
  label: "OPTIMIZATION",
  title: "Improve workflow with",
  highlightedTitle: "continuous insights",
  description:
    "Track results across every campaign, identify what is working, and automatically refine your targeting, messaging, and workflows.",
  bgClass: "bg-[#f1f0ff]",
  textClass: "text-[#1f1459]",
  highlightClass: "text-[#635bff]",
  badgeClass: "bg-[#635bff]",
  buttonClass: "bg-[#635bff] hover:bg-[#5048e5]",
  image: "/external-images/img-b1de1c49.webp",
  icons: [
    "simple-icons:hubspot",
    "simple-icons:salesforce",
    "simple-icons:googleanalytics",
  ],
  points: [
    
    {
      brand: "Salesforce",
      text: "kept CRM records accurate with automated enrichment and performance tracking.",
    },
    {
      brand: "Google Analytics",
      text: "connected campaign activity with real-time engagement and conversion insights.",
    },
  ],
  secondaryButton: "Explore performance insights",
},
];

export default function StickyStepSection() {
  return (
    <section className="bg-[#f3f4f6]">
      <div className="section-container">
        <div className="relative">
          {STICKY_CARDS.map((item, index) => (
            <article
              key={item.key}
              className="sticky mb-5 sm:mb-7 lg:mb-8"
              style={{
                top: `${102 + index * 10}px`,
                zIndex: index + 1,
              }}
            >
              <div
                className={[
                  "grid min-h-[560px] overflow-hidden rounded-[28px] p-5 shadow-sm",
                  "sm:rounded-[36px] sm:p-8",
                  "lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 lg:p-12",
                  "",
                  item.bgClass,
                ].join(" ")}
              >
                {/* Left content */}
                <div className="flex flex-col justify-center">
                  <div className="mb-5 inline-flex w-fit items-center rounded-full bg-white/50 p-1">
                    <span
                      className={[
                        "section-label rounded-full px-4 py-1 text-white",
                        item.badgeClass,
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                    {/* <span className="ml-1 h-5 w-4 rounded-full bg-white/40" /> */}
                    {/* <span className="ml-[-6px] h-5 w-4 rounded-full bg-white/40" /> */}
                  </div>

                  <h2
                    className={"section-title"}
                  >
                    {item.title}
                    <br />
                    <span className={item.highlightClass}>
                      {item.highlightedTitle}
                    </span>
                  </h2>

                  <p
                    className={[
                      "mt-6 max-w-[500px] paragraph-text ",
                      item.textClass,
                    ].join(" ")}
                  >
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center">
                    {item.icons.map((icon, iconIndex) => (
                      <span
                        key={`${item.key}-${icon}-${iconIndex}`}
                        className="-ml-1 first:ml-0 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black shadow-sm"
                      >
                        <Icon icon={icon} className="h-5 w-5" />
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 max-w-[510px] space-y-3">
                    {item.points.map((point) => (
                      <p
                        key={point.brand}
                        className={[
                          "text-[12px] font-normal leading-[1.3] tracking-[0.015em] text-black/80 sm:text-[14px] md:text-[15px]",
                          item.textClass,
                        ].join(" ")}
                      >
                        <strong className="font-black">{point.brand}</strong>{" "}
                        {point.text}
                      </p>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      className={[
                        "btn-base inline-flex items-center justify-center rounded-full px-5 text-white",
                        item.buttonClass,
                      ].join(" ")}
                    >
                      Start free trial
                      <Icon
                        icon="material-symbols:arrow-forward-rounded"
                        className="h-4 w-4"
                      />
                    </button>

                    <button type="button" className="btn-base outlined-btn">
                      {item.secondaryButton}
                    </button>
                  </div>
                </div>

                {/* Right side only image */}
                <div className="mt-8 lg:mt-0">
                  <div className="relative h-[340px] w-full overflow-hidden rounded-[24px] bg-[#f4efe6] sm:h-[430px] lg:h-full lg:min-h-[450px]">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}

          <div className="h-[20vh]" />
        </div>
      </div>
    </section>
  );
}