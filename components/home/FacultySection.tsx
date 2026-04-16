"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { instructors, type InstructorItem } from "@/data/home";

const CARD_WIDTH = 292;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;

function InstructorLogo({
  logoIcon,
  company,
}: {
  logoIcon?: string;
  company: string;
}) {
  if (logoIcon) {
    return (
      <div className="flex h-9 items-end text-white sm:h-10 lg:h-11">
        <Icon icon={logoIcon} width="44" height="44" className="h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11" />
      </div>
    );
  }

  return company ? (
    <div className="flex h-9 items-end sm:h-10 lg:h-11">
      <span className="text-[18px] font-semibold tracking-[-0.03em] text-white sm:text-[20px] lg:text-[22px]">
        {company}
      </span>
    </div>
  ) : (
    <div className="h-9 sm:h-10 lg:h-11" />
  );
}

function InstructorCard({
  item,
  cardWidth,
}: {
  item: InstructorItem;
  cardWidth: number;
}) {
  return (
    <article
      style={{ width: `${cardWidth}px` }}
      className="group relative h-[340px] shrink-0 overflow-hidden rounded-[16px] bg-[#111] sm:h-[380px] sm:rounded-[18px] md:h-[400px] lg:h-105"
    >
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="(max-width: 639px) 240px, (max-width: 767px) 260px, (max-width: 1023px) 280px, 292px"
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.0)_0%,rgba(23,23,23,0.0)_32%,rgba(23,23,23,1)_80%)]" />

      {item.badge ? (
        <div className="absolute left-3 right-3 top-3 rounded-lg border border-white/15 bg-black/35 px-3 py-2 text-center text-[11px] font-medium uppercase tracking-[0.06em] text-white/95 backdrop-blur-md sm:left-4 sm:right-4 sm:top-4 sm:rounded-xl sm:px-4 sm:text-[13px] lg:text-[14px]">
          {item.badge}
        </div>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 px-3 pb-4 sm:px-4 sm:pb-5">
        <InstructorLogo logoIcon={item.logoIcon} company={item.company} />
        <div className="divider my-2.5 bg-white/40 sm:my-3"></div>

        <div>
          <h3 className="line-clamp-2 text-[19px] font-medium leading-[1.08] tracking-[-0.04em] text-white sm:text-[21px] lg:text-[22px]">
            {item.name}
          </h3>

          <p className="mt-2 line-clamp-2 text-[11px] font-semibold uppercase leading-[1.2] tracking-[0.04em] text-white sm:text-[12px]">
            {item.role}
          </p>
        </div>
      </div>
    </article>
  );
}

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous instructors" : "Next instructors"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/65 bg-[#5a5a5a]/55 text-white backdrop-blur-sm transition-all duration-200 hover:bg-[#6a6a6a]/70 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
    >
      <Icon
        icon={direction === "left" ? "lucide:arrow-left" : "lucide:arrow-right"}
        width="28"
        height="28"
        className="h-4.5 w-4.5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
      />
    </button>
  );
}

export default function FacultySection() {
  const total = instructors.length;
  const loopedItems = useMemo(
    () => [...instructors, ...instructors, ...instructors],
    []
  );

  const DEFAULT_CARD_WIDTH = 292;
  const DEFAULT_CARD_GAP = CARD_GAP;

  const [cardWidth, setCardWidth] = useState(DEFAULT_CARD_WIDTH);
  const [cardGap, setCardGap] = useState(DEFAULT_CARD_GAP);

  useEffect(() => {
    const updateMetrics = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setCardWidth(240);
        setCardGap(12);
      } else if (width < 768) {
        setCardWidth(260);
        setCardGap(14);
      } else if (width < 1024) {
        setCardWidth(280);
        setCardGap(16);
      } else {
        setCardWidth(DEFAULT_CARD_WIDTH);
        setCardGap(DEFAULT_CARD_GAP);
      }
    };

    updateMetrics();
    window.addEventListener("resize", updateMetrics);
    return () => window.removeEventListener("resize", updateMetrics);
  }, []);

  const STEP = cardWidth + cardGap;

  const [currentIndex, setCurrentIndex] = useState(total);
  const [withTransition, setWithTransition] = useState(true);

  const startX = useRef<number | null>(null);
  const isMovingRef = useRef(false);

  const goNext = useCallback(() => {
    if (isMovingRef.current) return;
    isMovingRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const goPrev = useCallback(() => {
    if (isMovingRef.current) return;
    isMovingRef.current = true;
    setWithTransition(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const finishSilentReset = useCallback(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setWithTransition(true);
        isMovingRef.current = false;
      });
    });
  }, []);

  const handleTransitionEnd = useCallback(
    (e: React.TransitionEvent<HTMLDivElement>) => {
      if (e.target !== e.currentTarget) return;
      if (e.propertyName !== "transform") return;

      if (currentIndex >= total * 2) {
        setWithTransition(false);
        setCurrentIndex((prev) => prev - total);
        finishSilentReset();
        return;
      }

      if (currentIndex < total) {
        setWithTransition(false);
        setCurrentIndex((prev) => prev + total);
        finishSilentReset();
        return;
      }

      isMovingRef.current = false;
    },
    [currentIndex, finishSilentReset, total]
  );

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (isMovingRef.current) return;
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (startX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const delta = endX - startX.current;

    if (delta > 50) goPrev();
    if (delta < -50) goNext();

    startX.current = null;
  };

  return (
    <section className="overflow-hidden bg-black">
      <div className="mx-auto w-full max-w-400 px-0 pb-14 pt-10 sm:pb-16 sm:pt-12 md:pb-20 md:pt-16">
        <div className="px-4 text-center">
          <p className="section-label">FACULTY</p>

          <h2 className="section-title mt-5 text-white sm:mt-6">
            Meet Your Instructors
          </h2>
        </div>

        <div className="relative mt-10 sm:mt-12 md:mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] sm:w-10 md:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-[linear-gradient(270deg,#000_0%,rgba(0,0,0,0)_100%)] sm:w-10 md:w-16" />

          <div className="absolute left-2 top-1/2 z-20 -translate-y-1/2 sm:left-4 md:left-6">
            <ArrowButton direction="left" onClick={goPrev} />
          </div>

          <div className="absolute right-2 top-1/2 z-20 -translate-y-1/2 sm:right-4 md:right-6">
            <ArrowButton direction="right" onClick={goNext} />
          </div>

          <div
            className="overflow-hidden px-4 sm:px-5 md:px-4"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              onTransitionEnd={handleTransitionEnd}
              className={[
                "flex will-change-transform",
                withTransition ? "transition-transform duration-500 ease-out" : "",
              ].join(" ")}
              style={{
                gap: `${cardGap}px`,
                transform: `translate3d(-${currentIndex * STEP}px,0,0)`,
              }}
            >
              {loopedItems.map((item, index) => (
                <InstructorCard
                  key={`${item.id}-${index}`}
                  item={item}
                  cardWidth={cardWidth}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-12 md:mt-14">
          <Link
            href="/faculty"
            className="closed-btn mx-auto inline-flex w-full max-w-[220px] items-center justify-center px-8 sm:w-auto sm:max-w-none sm:px-14 lg:px-20"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}