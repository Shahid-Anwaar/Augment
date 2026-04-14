import { useCallback, useEffect, useState, type ComponentType } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { NextButton, PrevButton, usePrevNextButtons } from "./CarosalButtons";
import { Icon } from "@iconify/react";

type EmblaCarouselProps = {
    options?: EmblaOptionsType;
    CustomCard?: (item: any, index: number, firstItemIndex: number) => React.ReactNode;
    items?: any[];
    wrapperClassName?: string;
};

export default function CustomEmblaCarousel({
    options,
    CustomCard = () => null,
    items = [],
    wrapperClassName = "",
}: EmblaCarouselProps) {
    const [selectedSnap, setSelectedSnap] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        duration: 25,
        ...options,
    });

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    // const CustomCard = customCard;

    console.log("items", items);

    const updateIndexes = useCallback(() => {
        if (!emblaApi) return;
        setSelectedSnap(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        updateIndexes();

        emblaApi.on("select", updateIndexes);
        emblaApi.on("slidesInView", updateIndexes);
        emblaApi.on("reInit", updateIndexes);

        return () => {
            emblaApi.off("select", updateIndexes);
            emblaApi.off("slidesInView", updateIndexes);
            emblaApi.off("reInit", updateIndexes);
        };
    }, [emblaApi, updateIndexes]);


    return (
        <div className="w-full relative">
            <div className={`overflow-hidden  ${wrapperClassName}`} ref={emblaRef}>
                <div className=" flex items-stretch h-full">
                    {items.map((review, index) => (
                        <div key={`${review?.id ?? index}-${index}`} className={`min-w-0 shrink-0 grow-0 transition-all duration-1000 ${selectedSnap === index ? "" : ""}`}>
                            {CustomCard(review, index, selectedSnap)}
                        </div>
                    ))}
                </div>
            </div>
            <button
                className={
                    "embla__button embla__button--prev flex h-6 w-6 items-center justify-center rounded-full bg-red-400 text-white transition disabled:cursor-not-allowed disabled:opacity-40"
                }
                type="button"
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                aria-label="Previous slide"
            >
                <Icon icon="mingcute:left-fill" className="h-4 w-4" />
            </button>

            <button
                className={
                    "embla__button embla__button--next flex h-6 w-6 items-center justify-center rounded-full bg-red-400 text-white transition disabled:cursor-not-allowed disabled:opacity-40"
                }
                type="button"
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                aria-label="Next slide"
            >
                <Icon icon="mingcute:right-fill" className="h-4 w-4" />
            </button>
        </div>
    );
}