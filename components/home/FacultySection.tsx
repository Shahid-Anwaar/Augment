"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { instructors, type InstructorItem } from "@/data/home";

const CARD_WIDTH = 292;
const CARD_HEIGHT = 392;
const CARD_GAP = 24;
const STEP = CARD_WIDTH + CARD_GAP;
const ANIMATION_MS = 500;

function InstructorLogo({
  logoIcon,
  company,
}: {
  logoIcon?: string;
  company: string;
}) {
  if (logoIcon) {
    return (
      <div className="flex h-[44px] items-end text-white">
        <Icon icon={logoIcon} width="44" height="44" />
      </div>
    );
  }

  return company ? (
    <div className="flex h-[44px] items-end">
      <span className="text-[22px] font-semibold tracking-[-0.03em] text-white">
        {company}
      </span>
    </div>
  ) : (
    <div className="h-[44px]" />
  );
}

function InstructorCard({ item }: { item: InstructorItem }) {
  return (
    <article className="group relative h-[420px] w-[292px] shrink-0 overflow-hidden rounded-[18px] bg-[#111]">
      <Image
        src={item.image}
        alt={item.name}
        fill
        sizes="292px"
        className="object-contaion transition-transform duration-500 group-hover:scale-[1.03]"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.0)_0%,rgba(23,23,23,0.0)_32%,rgba(23,23,23,1)_80%)]" />
      {/* <div className="absolute inset-y-0 left-0 w-[18%] bg-[linear-gradient(90deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0)_100%)]" /> */}
      {/* <div className="absolute inset-y-0 right-0 w-[18%] bg-[linear-gradient(270deg,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0)_100%)]" /> */}

      {item.badge ? (
        <div className="absolute left-4 right-4 top-4 rounded-[12px] border border-white/15 bg-black/35 px-4 py-2 text-center text-[14px] font-medium uppercase tracking-[0.06em] text-white/95 backdrop-blur-md">
          {item.badge}
        </div>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 px-4 pb-5">
        <InstructorLogo logoIcon={item.logoIcon} company={item.company} />
        <div className="divider bg-white/40 my-3"></div>
        <div className="">
          <h3 className="line-clamp-2 text-[22px] font-medium leading-[1.08] tracking-[-0.04em] text-white">
            {item.name}
          </h3>

          <p className="mt-2 line-clamp-2 text-[12px] font-semibold uppercase leading-[1.2] tracking-[0.04em] text-white">
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
      className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-white/65 bg-[#5a5a5a]/55 text-white backdrop-blur-sm transition-all duration-200 hover:bg-[#6a6a6a]/70"
    >
      <Icon
        icon={direction === "left" ? "lucide:arrow-left" : "lucide:arrow-right"}
        width="28"
        height="28"
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
      <div className="mx-auto w-full max-w-400 px-0 pb-16 pt-12 md:pb-20 md:pt-16">
        <div className="px-4 text-center md:px-4">
          <p className="section-label">
            FACULTY
          </p>

          <h2 className="mt-6 text-white section-title">
            Meet Your Instructors
          </h2>
        </div>

        <div className="relative mt-12 md:mt-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] md:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-[linear-gradient(270deg,#000_0%,rgba(0,0,0,0)_100%)] md:w-16" />

          <div className="absolute left-4 top-1/2 z-20 -translate-y-1/2 md:left-6">
            <ArrowButton direction="left" onClick={goPrev} />
          </div>

          <div className="absolute right-4 top-1/2 z-20 -translate-y-1/2 md:right-6">
            <ArrowButton direction="right" onClick={goNext} />
          </div>

          <div
            className="overflow-hidden px-4"
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
                gap: `${CARD_GAP}px`,
                transform: `translate3d(-${currentIndex * STEP}px,0,0)`,
              }}
            >
              {loopedItems.map((item, index) => (
                <InstructorCard key={`${item.id}-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/faculty"
            className="close-btn px-20"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}