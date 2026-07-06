"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import { ReviewItem, reviewsContent } from "@/data/data";
import Image from "next/image";

type EmblaCarouselProps = {
    options?: EmblaOptionsType;
};

type ArrowButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

function usePrevNextButtons(
    emblaApi: EmblaCarouselType | undefined
): {
    prevBtnDisabled: boolean;
    nextBtnDisabled: boolean;
    onPrevButtonClick: () => void;
    onNextButtonClick: () => void;
} {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
    }, [emblaApi]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
    }, [emblaApi]);

    const onSelect = useCallback((api: EmblaCarouselType) => {
        setPrevBtnDisabled(!api.canScrollPrev());
        setNextBtnDisabled(!api.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);

        return () => {
            emblaApi.off("reInit", onSelect);
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
}

function PrevButton({
    disabled,
    className = "",
    ...props
}: ArrowButtonProps) {
    return (
        <button
            type="button"
            {...props}
            aria-label="Previous slide"
            disabled={disabled}
            className={`absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-[#f7f7f7] text-black transition-all duration-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 sm:left-4 sm:h-10 sm:w-10 md:left-8 md:h-12 md:w-12 lg:left-10 lg:h-16 lg:w-16 ${className}`}
        >
            <Icon
                icon="lucide:arrow-left"
                className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7"
            />
        </button>
    );
}

function NextButton({
    disabled,
    className = "",
    ...props
}: ArrowButtonProps) {
    return (
        <button
            type="button"
            {...props}
            aria-label="Next slide"
            disabled={disabled}
            className={`absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-black bg-[#f7f7f7] text-black transition-all duration-200 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 sm:right-4 sm:h-10 sm:w-10 md:right-8 md:h-12 md:w-12 lg:right-10 lg:h-16 lg:w-16 ${className}`}
        >
            <Icon
                icon="lucide:arrow-right"
                className="h-4 w-4 sm:h-5 sm:w-5 lg:h-7 lg:w-7"
            />
        </button>
    );
}

function StarRow() {
    return (
        <div className="flex items-center gap-px text-black">
            {Array.from({ length: 5 }).map((_, index) => (
                <Icon
                    key={index}
                    icon="mdi:star"
                    className="h-4.5 w-4.5 sm:h-5 sm:w-5"
                />
            ))}
        </div>
    );
}

function ReviewCard({
    item,
}: {
    item: ReviewItem;
}) {
    return (
        <article
            className="
                flex min-h-[290px] w-[calc(100vw-32px)] max-w-full flex-none flex-col rounded-[14px] bg-white
                px-4 pb-4 pt-4
                sm:min-h-[330px] sm:w-[34rem] sm:rounded-[15px] sm:px-5 sm:pb-5 sm:pt-5
                md:min-h-[360px] md:w-[46rem] md:px-6 md:pb-6 md:pt-6
                lg:h-75 lg:min-h-0 lg:w-205 lg:px-8 lg:pb-7 lg:pt-7
            "
        >
            <StarRow />

            <p
                className="
                    quote-text stylish-family mt-4 max-w-full
                    text-left
                    sm:mt-5
                    md:mt-6 md:max-w-2xl
                    lg:max-w-180
                "
            >
                “{item.quote}”
            </p>

            <div className="mt-auto flex items-center gap-3 pt-5 sm:gap-4 sm:pt-6 md:pt-7 lg:pt-8">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-neutral-300 sm:h-11 sm:w-11">
                    <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        sizes="(max-width: 640px) 40px, 44px"
                        className="object-cover"
                    />
                </div>

                <div className="min-w-0">
                    <p className="truncate text-[14px] font-semibold leading-none text-[#4a4a4a] sm:text-[15px] md:text-[16px]">
                        {item.name}
                    </p>
                    <span className="mt-1 block text-[11px] font-medium leading-snug tracking-[-0.02em] text-black/70 sm:text-[13px] md:text-[15px] lg:text-[16px]">
                        {item.role}
                    </span>
                </div>
            </div>
        </article>
    );
}

export default function EmblaCarousel({
    options,
}: EmblaCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "center",
        ...options,
    });

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

    const stopAutoplay = useCallback(() => {
        if (autoplayRef.current) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    }, []);

    const startAutoplay = useCallback(() => {
        if (!emblaApi) return;

        stopAutoplay();

        autoplayRef.current = setInterval(() => {
            emblaApi.scrollNext();
        }, 4000);
    }, [emblaApi, stopAutoplay]);

    useEffect(() => {
        startAutoplay();

        return () => {
            stopAutoplay();
        };
    }, [startAutoplay, stopAutoplay]);

    return (
        <div
            className="relative w-full"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
        >
            <div
                className="overflow-hidden bg-[#f3f4f6] py-7 sm:py-8 md:py-10 lg:pt-12 lg:pb-4"
                ref={emblaRef}
            >
                <div className="-ml-3 flex touch-pan-y sm:-ml-4">
                    {reviewsContent.map((review, index) => (
                        <div key={`${review.id}-${index}`} className="pl-3 sm:pl-4">
                            <ReviewCard item={review} />
                        </div>
                    ))}
                </div>
            </div>

            <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
            />
            <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
            />
        </div>
    )
}