/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoScroll from "embla-carousel-auto-scroll";

type AutoplayConfig = {
    delay?: number;
    stopOnInteraction?: boolean;
    stopOnMouseEnter?: boolean;
};

type ContinuousPlayConfig = {
    speed?: number;
    startDelay?: number;
    direction?: "forward" | "backward";
    stopOnInteraction?: boolean;
    stopOnMouseEnter?: boolean;
};

type MoveDirection = "top" | "bottom" | "right" | "left";

type EmblaCarouselProps = {
    options?: EmblaOptionsType;
    CustomCard?: (item: any, index: number, scrollToSelectedIndex?: (index: number) => void) => ReactNode;
    items?: any[];
    onSpecificChoosed?: (n: number) => void,
    wrapperClassName?: string;
    CustomButtonWrapper?: (
        onPrevClickChoosed: () => void,
        onNextClickChoosed: () => void,
        onSpecificChoosed: (n: number) => void,

    ) => ReactNode;
    isAutoplay?: boolean;
    isContinuousPlay?: boolean;
    autoplayConfig?: AutoplayConfig;
    continuousPlayConfig?: ContinuousPlayConfig;
    handleActiveItemIndexChange?: (index: number) => void;
    moveDirection?: MoveDirection;
    selectedIndex?: number;
};

export default function CustomEmblaCarousel({
    options,
    CustomCard = () => null,
    items = [],
    wrapperClassName = "",
    CustomButtonWrapper = () => null,
    isAutoplay = false,
    isContinuousPlay = false,
    autoplayConfig = {},
    continuousPlayConfig = {},
    handleActiveItemIndexChange,
    moveDirection: moveTo,
    selectedIndex
}: EmblaCarouselProps) {
    const resolvedMoveTo = moveTo ?? "left";

    const isVertical = resolvedMoveTo === "top" || resolvedMoveTo === "bottom";

    const moveToDirection: "forward" | "backward" =
        resolvedMoveTo === "right" || resolvedMoveTo === "bottom"
            ? "backward"
            : "forward";

    const shouldUseReverseAutoplay =
        isAutoplay &&
        !isContinuousPlay &&
        moveTo &&
        (resolvedMoveTo === "right" || resolvedMoveTo === "bottom");

    const mergedAutoplayConfig: Required<AutoplayConfig> = {
        delay: 2500,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        ...autoplayConfig,
    };

    const mergedContinuousPlayConfig: Required<ContinuousPlayConfig> = {
        speed: 1.2,
        startDelay: 0,
        direction: "forward",
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        ...continuousPlayConfig,
        ...(moveTo ? { direction: moveToDirection } : {}),
    };

    const plugins = useMemo(() => {
        if (isContinuousPlay) {
            return [
                AutoScroll(mergedContinuousPlayConfig),
            ];
        }

        if (isAutoplay && !shouldUseReverseAutoplay) {
            return [
                Autoplay(mergedAutoplayConfig),
            ];
        }

        return [];
    }, [
        isAutoplay,
        isContinuousPlay,
        shouldUseReverseAutoplay,
        mergedAutoplayConfig,
        mergedContinuousPlayConfig,
    ]);

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "center",
            ...options,
            ...(isVertical ? { axis: "y" as const } : {}),
        },
        plugins
    );

    const onPrevClickChoosed = useCallback(() => {
        emblaApi?.scrollPrev();
    }, [emblaApi]);

    const onSpecificChoosed = useCallback((i: number) => {
        emblaApi?.scrollTo(i);
    }, [emblaApi]);

    const onNextClickChoosed = useCallback(() => {
        emblaApi?.scrollNext();
    }, [emblaApi]);

    const updateIndexes = useCallback(() => {
        if (!emblaApi) return;
        handleActiveItemIndexChange && handleActiveItemIndexChange(emblaApi.selectedScrollSnap())
        // setSelectedSnap);
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi || !isContinuousPlay) return;
        emblaApi.plugins()?.autoScroll?.play();
    }, [emblaApi, isContinuousPlay]);

    useEffect(() => {
        if (!emblaApi || !shouldUseReverseAutoplay) return;

        let autoplayInterval: ReturnType<typeof setInterval>;

        const playReverseAutoplay = () => {
            autoplayInterval = setInterval(() => {
                emblaApi.scrollPrev();
            }, mergedAutoplayConfig.delay);
        };

        const stopReverseAutoplay = () => {
            clearInterval(autoplayInterval);
        };

        playReverseAutoplay();

        const rootNode = emblaApi.rootNode();

        if (mergedAutoplayConfig.stopOnMouseEnter) {
            rootNode.addEventListener("mouseenter", stopReverseAutoplay);
            rootNode.addEventListener("mouseleave", playReverseAutoplay);
        }

        return () => {
            stopReverseAutoplay();

            if (mergedAutoplayConfig.stopOnMouseEnter) {
                rootNode.removeEventListener("mouseenter", stopReverseAutoplay);
                rootNode.removeEventListener("mouseleave", playReverseAutoplay);
            }
        };
    }, [emblaApi, shouldUseReverseAutoplay, mergedAutoplayConfig.delay]);

    useEffect(() => {
        if (!emblaApi) return;

        updateIndexes();

        emblaApi.on("select", updateIndexes);
        emblaApi.on("reInit", updateIndexes);

        return () => {
            emblaApi.off("select", updateIndexes);
            emblaApi.off("reInit", updateIndexes);
        };
    }, [emblaApi, updateIndexes]);

    useEffect(() => {
        if (!emblaApi) return;
        if (selectedIndex === undefined) return;

        emblaApi.scrollTo(selectedIndex);
    }, [emblaApi, selectedIndex]);

    return (
        <div className={`w-full relative text-white ${isVertical ? "h-full min-h-0" : ""}`}>
            <div className="text-white">
                {CustomButtonWrapper(onPrevClickChoosed, onNextClickChoosed, onSpecificChoosed)}
            </div>
            <div
                className={`overflow-hidden bg-black ${wrapperClassName}`}
                ref={emblaRef}
            >
                <div className={`flex h-full cursor-grab ${isVertical ? "flex-col" : ""}`}>
                    {items.map((review, index) =>
                        CustomCard(review, index, onSpecificChoosed)
                    )}
                </div>
            </div>
        </div>
    );
}