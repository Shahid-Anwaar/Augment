"use client";

import { useCallback, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType, EmblaOptionsType } from "embla-carousel";
import { ReviewItem, reviews } from "@/data/home";
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
            // onClick={goPrev}
            {...props}
            aria-label="Previous slide"
            className="flex h-10 w-10 md:h-16 md:w-16 items-center justify-center rounded-full border border-black bg-[#f7f7f7] text-black hover:bg-white absolute left-4.5 sm:left-9 md:left-10 top-1/2 z-20 -translate-y-1/2 transition-all duration-200"
        >
            <Icon icon="lucide:arrow-left" width="28" height="28" />
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
            // onClick={goPrev}
            {...props}
            aria-label="Next slide"
            className="flex h-10 w-10 md:h-16 md:w-16 items-center justify-center rounded-full border border-black bg-[#f7f7f7] text-black hover:bg-white absolute right-4.5 sm:right-9 md:right-10 top-1/2 z-20 -translate-y-1/2 transition-all duration-200"
        >
            <Icon icon="lucide:arrow-right" width="28" height="28" />
        </button>

    );
}

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
}: {
    item: ReviewItem;
}) {
    return (
        <article
            className="
        flex flex-none flex-col rounded-[15px] bg-white
        w-[calc(100vw-32px)] max-w-full
        min-h-80
        px-5 pt-5 pb-5
        sm:w-xl sm:min-h-90 sm:px-6 sm:pt-6 sm:pb-6
        md:w-3xl md:min-h-75 md:px-7 md:pt-7 md:pb-7
        lg:h-75 lg:w-205 lg:px-8 lg:pt-7 lg:pb-7
      "
        >
            <StarRow />

            <p
                className="
          mt-4 sm:mt-5 md:mt-6 max-w-full md:max-w-2xl lg:max-w-180
          quote-text
        "
            >
                “{item.quote}”
            </p>

            <div className="mt-auto flex items-center gap-3 pt-6 sm:gap-4 sm:pt-7 md:pt-8">
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
                    <p className="truncate text-[15px] font-semibold leading-none text-[#4a4a4a] sm:text-[16px]">
                        {item.name}
                    </p>
                    <span className="mt-1 block text-[12px] font-medium leading-snug tracking-[-0.02em] text-black/70 sm:text-[14px] md:text-[15px] lg:text-[16px]">
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

    return (
        <div className="w-full relative">
            <div className="overflow-hidden bg-[#f3f4f6] py-20" ref={emblaRef}>
                <div className="-ml-4 flex touch-pan-y">
                    {reviews.map((review, index) => (
                        <div key={`${review.id}-${index}`} className=" px-4 ">
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
    );
}