"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { reviews, type ReviewItem } from "@/data/home";

const CENTER_W = 820;
const SIDE_W = 320;
const CARD_H = 300;
const SIDE_CROP_SHIFT = CENTER_W - SIDE_W; // 500

function StarRow() {
  return (
    <div className="flex items-center gap-px text-black">
      {Array.from({ length: 5 }).map((_, index) => (
        <Icon key={index} icon="mdi:star" width="20" height="20" />
      ))}
    </div>
  );
}

function ReviewCard({
  item,
  isActive,
}: {
  item: ReviewItem;
  isActive: boolean;
}) {
  return (
    <article
      className={[
        "flex h-75 w-205 flex-none flex-col rounded-[22px] bg-white px-8 pb-7 pt-7 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-opacity duration-300",
        isActive ? "opacity-100" : "opacity-90",
      ].join(" ")}
    >
      <StarRow />

      <p className="mt-6 max-w-180 font-thin font-[Georgia] text-[26px] leading-[1.1] tracking-[-0.03em] text-[#2f2f2f]">
        “{item.quote}”
      </p>

      <div className="mt-auto flex items-center gap-4 pt-8">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-neutral-300">
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            sizes="40px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0">
          <p className="truncate text-[16px] font-semibold leading-none text-[#4a4a4a]">
            {item.name}
          </p>
          <span className="mt-1 text-[13px] font-medium leading-none tracking-[-0.02em] text-black/80 md:text-[16px]">
            {item.role}
          </span>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsSliderSection() {
  const total = reviews.length;

  const loopedReviews = useMemo(() => {
    return [...reviews, ...reviews, ...reviews];
  }, []);

  const [activeIndex, setActiveIndex] = useState(total);
  const [offsetX, setOffsetX] = useState(0);
  const [sidePadding, setSidePadding] = useState(16);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const startX = useRef<number | null>(null);
  const isJumpingRef = useRef(false);

  const normalizeIndex = useCallback(
    (index: number) => ((index % total) + total) % total,
    [total]
  );

  const updateSliderPosition = useCallback((targetIndex: number) => {
    const container = containerRef.current;
    const activeSlide = slideRefs.current[targetIndex];

    if (!container || !activeSlide) return;

    const containerWidth = container.offsetWidth;
    const slideWidth = activeSlide.offsetWidth;
    const slideLeft = activeSlide.offsetLeft;

    const nextPadding = Math.max(16, containerWidth / 2 - slideWidth / 2);
    const nextOffset = slideLeft - nextPadding;

    setSidePadding(nextPadding);
    setOffsetX(nextOffset);
  }, []);

  const jumpWithoutAnimation = useCallback(
    (targetIndex: number) => {
      isJumpingRef.current = true;
      setIsAnimating(false);
      setActiveIndex(targetIndex);

      requestAnimationFrame(() => {
        updateSliderPosition(targetIndex);

        requestAnimationFrame(() => {
          isJumpingRef.current = false;
          setIsAnimating(true);
        });
      });
    },
    [updateSliderPosition]
  );

  const goPrev = useCallback(() => {
    if (isJumpingRef.current) return;
    setIsAnimating(true);
    setActiveIndex((prev) => prev - 1);
  }, []);

  const goNext = useCallback(() => {
    if (isJumpingRef.current) return;
    setIsAnimating(true);
    setActiveIndex((prev) => prev + 1);
  }, []);

  useLayoutEffect(() => {
    updateSliderPosition(activeIndex);
  }, [activeIndex, updateSliderPosition]);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setIsAnimating(true);
      updateSliderPosition(activeIndex);
    });

    return () => cancelAnimationFrame(id);
  }, [activeIndex, updateSliderPosition]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      updateSliderPosition(activeIndex);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    slideRefs.current.forEach((slide) => {
      if (slide) resizeObserver.observe(slide);
    });

    return () => {
      resizeObserver.disconnect();
    };
  }, [activeIndex, updateSliderPosition, loopedReviews.length]);

  const handleTrackTransitionEnd = (
    e: React.TransitionEvent<HTMLDivElement>
  ) => {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== "transform") return;

    if (activeIndex >= total * 2) {
      jumpWithoutAnimation(activeIndex - total);
      return;
    }

    if (activeIndex < total) {
      jumpWithoutAnimation(activeIndex + total);
    }
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
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
    <section className="overflow-hidden bg-[#f3f4f6]">
      <div className="relative mx-auto w-full max-w-400 py-7 sm:py-8 md:pt-20 md:pb-28">
        <div
          ref={containerRef}
          className="relative overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-17.5 bg-[linear-gradient(90deg,#f3f4f6_0%,rgba(243,244,246,0)_100%)] sm:w-25 md:w-32.5" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-17.5 bg-[linear-gradient(270deg,#f3f4f6_0%,rgba(243,244,246,0)_100%)] sm:w-25 md:w-32.5" />

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute left-4.5 top-1/2 z-20 flex h-9.5 w-9.5 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-[#ededeb] text-black transition-all duration-200 hover:bg-white sm:left-9 md:left-13 md:h-12 md:w-12"
          >
            <Icon icon="lucide:arrow-left" width="18" height="18" />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute right-4.5 top-1/2 z-20 flex h-9.5 w-9.5 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-[#ededeb] text-black transition-all duration-200 hover:bg-white sm:right-9 md:right-13 md:h-12 md:w-12"
          >
            <Icon icon="lucide:arrow-right" width="18" height="18" />
          </button>

          <div
            onTransitionEnd={handleTrackTransitionEnd}
            className={[
              "flex items-center gap-4 will-change-transform",
              isAnimating ? "transition-transform duration-500 ease-out" : "",
            ].join(" ")}
            style={{
              paddingLeft: `${sidePadding}px`,
              paddingRight: `${sidePadding}px`,
              transform: `translate3d(-${offsetX}px,0,0)`,
            }}
          >
            {loopedReviews.map((item, index) => {
              const isActive = index === activeIndex;
              const distance = Math.abs(index - activeIndex);
              const isNear = distance === 1;

              const isLeftSide = index < activeIndex;
              const innerShift = !isActive && isLeftSide ? -SIDE_CROP_SHIFT : 0;

              return (
                <div
                  key={`${item.id}-${index}`}
                  ref={(el) => {
                    slideRefs.current[index] = el;
                  }}
                  className={[
                    "relative flex-none overflow-hidden h-75",
                    isActive ? "w-205" : "w-[320px]",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "h-full transition-[opacity,transform] duration-500 ease-out",
                      isActive
                        ? "opacity-100 scale-100"
                        : isNear
                        ? "opacity-70 scale-[0.98]"
                        : "opacity-45 scale-[0.98]",
                    ].join(" ")}
                    style={{
                      transform: `translateX(${innerShift}px)`,
                    }}
                  >
                    <ReviewCard
                      item={item}
                      isActive={
                        normalizeIndex(index) === normalizeIndex(activeIndex)
                      }
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}