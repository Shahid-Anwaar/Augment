"use client";

import { HOW_IT_WORKS_CARDS, HowItWorksCardItem } from "@/data/data";
import WorksCard from "./WorkCard";
import { useEffect, useRef, useState } from "react";

const tempSteps = ["Capture", "Nurture", "Convert", "Deliver", "Retain"];

export default function HowItWorksCard({ classes, steps= tempSteps, cards = HOW_IT_WORKS_CARDS }
  : { classes?: string; steps?: string[], cards?: HowItWorksCardItem[] }) {
  const [activeStep, setActiveStep] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let ticking = false;

    const updateActiveStep = () => {
      let currentIndex = 0;
      let closestDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();

        // Active point means where card should be considered "currently in view"
        // You can adjust 180 value if needed
        const activePoint = 180;

        const distance = Math.abs(rect.top - activePoint);

        if (distance < closestDistance) {
          closestDistance = distance;
          currentIndex = index;
        }
      });

      setActiveStep(currentIndex);
    };

    const handleScroll = () => {
      if (ticking) return;

      ticking = true;

      requestAnimationFrame(() => {
        updateActiveStep();
        ticking = false;
      });
    };

    updateActiveStep();

    window.addEventListener("scroll", handleScroll, true);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section className={`w-full bg-[#f3f4f6] px-4 pb-10 sm:px-6 sm:pb-12 md:px-8 md:pb-16 lg:px-10 lg:pb-20 ${classes ? classes : "  pt-8 sm:pt-10 md:pt-12 lg:pt-14"}`}>
      <div className="mx-auto flex section-container flex-col gap-10 lg:flex-row lg:items-start lg:gap-10">
        <div className="w-full lg:sticky lg:top-16 lg:max-w-[430px] lg:self-start xl:max-w-[470px] pt-10">
          <div className="mb-4 sm:mb-5">
            <span className="section-label text-black">Everything inside Supreme</span>
          </div>

          <h2 className="section-title max-w-[20rem] text-black sm:max-w-[28rem] lg:max-w-none">
            The complete coaching business ecosystem built, owned, and running for life
          </h2>

          <p className="section-description text-black/85">Every stage of your client journey, handled by one system. From the first lead to the long-term relationship nothing falls through the gaps and nothing needs a separate tool.</p>

          <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4 md:mt-6 lg:space-y-6">
            {steps.map((step, index) => (
              <div
                key={step}
                onClick={() => {
                  cardRefs.current[index]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });

                  setActiveStep(index);
                }}
                className="group flex cursor-pointer items-start gap-3 sm:gap-4 lg:gap-5"
              >
                <div
                  className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] text-[12px] font-semibold transition-colors duration-300 sm:h-7 sm:w-7 sm:text-[14px] ${activeStep === index
                      ? "bg-primary text-black"
                      : "bg-[#ddd5ca] text-black"
                    }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className={`cursor-pointer transition-colors duration-200 group-hover:text-black custom-para
                ${activeStep === index
                    ? " text-black/80"
                    : ""
                  }
                    `}>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="ml-0 flex w-full flex-col gap-5 md:gap-8 lg:ml-10">
          {cards.map((item, index) => (
            <div
              key={index}
              id={`index${index + 1}`}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
            >
              <WorksCard item={item} className={index === 0 ? " mt-0! sm:mt-0! lg:mt-0!" : ""} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}