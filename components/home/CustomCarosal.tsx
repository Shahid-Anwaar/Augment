import { useCallback, useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

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
        align: "center",
        ...options,
    }, [
        Autoplay({
            delay: 2500,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        }),
    ]);

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
            <div
                className={`overflow-hidden lg:mr-14 ${wrapperClassName}`}
                ref={emblaRef}
            >
                <div className="flex h-full bg-black -ml-2">
                    {items.map((review, index) => (
                        <div
                            key={`${review?.id ?? index}-${index}`}
                            className={`min-h-105 sm:min-h-130 lg:min-h-170 min-w-0 shrink-0 grow-0 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-2 ${selectedSnap === index ? "" : ""
                                }`}
                        >
                            {CustomCard(review, index, selectedSnap)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}