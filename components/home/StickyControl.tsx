"use client";

import { useEffect, useRef, useState } from "react";
import ProspectingSection from "./ProspectingSection";
import LeadToDealsSection from "./LeadToDeal";
import CompactSolutionTabs from "./CompactTabs";
import { SolutionItem } from "@/data/data";

type StickySolutionsSectionProps = {
  items: SolutionItem[];
  stickyTop?: number;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function StickySolutionsSection({
  items,
  stickyTop = 120,
}: StickySolutionsSectionProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const leadCardsRef = useRef<HTMLDivElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [showCompactTabs, setShowCompactTabs] = useState(false);

  useEffect(() => {
   const handleScroll = () => {
  const wrapper = wrapperRef.current;
  const leadCards = leadCardsRef.current;

  if (!wrapper || !items.length) return;

  const wrapperRect = wrapper.getBoundingClientRect();

  if (leadCards) {
    const cardsRect = leadCards.getBoundingClientRect();

    // This waits until big cards are fully gone above navbar/header
    const largeCardsGone = cardsRect.bottom <= stickyTop + 0;

    // This keeps compact tabs visible during sticky section only
    const stickyAreaNotFinished = wrapperRect.bottom > stickyTop + 600;

    setShowCompactTabs(largeCardsGone && stickyAreaNotFinished);
  }

  const viewportHeight = window.innerHeight - stickyTop;
  const maxScroll = Math.max(wrapper.offsetHeight - viewportHeight, 1);

  const scrolled = clamp(stickyTop - wrapperRect.top, 0, maxScroll);

  const stepHeight = maxScroll / items.length;

  const nextIndex = Math.min(
    items.length - 1,
    Math.floor(scrolled / stepHeight),
  );

  setActiveIndex(nextIndex);
};

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [items.length, stickyTop]);

  if (!items.length) return null;

  return (
    <div className=" bg-white">
      <LeadToDealsSection items={items} cardsRef={leadCardsRef} />

      <CompactSolutionTabs
        items={items}
        activeIndex={activeIndex}
        show={showCompactTabs}
        stickyTop={stickyTop}
      />

      <section
        ref={wrapperRef}
        className="relative bg-white"
        style={{
          height: `${items.length * 100 + 100}vh`,
        }}
      >
        <div
          className="sticky bg-white"
          style={{
            top: `${stickyTop}px`,
            minHeight: ` 570px`,
          }}
        >
          <ProspectingSection items={items} activeIndex={activeIndex} />
        </div>
      </section>
    </div>
  );
}