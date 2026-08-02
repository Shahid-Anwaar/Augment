"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { type FeaturedItem, featuredItems } from "@/data/data";
import CustomLink from "../custom/CustomLink";
import ArrowButton from "../custom/CustomArrowBtn";
import CustomCarosal from "./CustomCarosal";

const CARD_GAP = 24;

// function InstructorLogo({
//   logoIcon,
//   company,
// }: {
//   logoIcon?: string;
//   company: string;
// }) {
//   if (logoIcon) {
//     return (
//       <div className="flex h-9 items-end text-white sm:h-10 lg:h-11">
//         <Icon icon={logoIcon} width="44" height="44" className="h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11" />
//       </div>
//     );
//   }

//   return company ? (
//     <div className="flex h-9 items-end sm:h-10 lg:h-11">
//       <span className="text-[18px] font-semibold tracking-[-0.03em] text-white sm:text-[20px] lg:text-[22px]">
//         {company}
//       </span>
//     </div>
//   ) : (
//     <div className="h-9 sm:h-10 lg:h-11" />
//   );
// }

// function InstructorCard({
//   item,
//   cardWidth,
// }: {
//   item: FeaturedItem;
//   cardWidth: number;
// }) {
//   return (
//     <article
//       style={{ width: `${cardWidth}px` }}
//       className="group relative h-[340px] shrink-0 overflow-hidden rounded-[16px] bg-[#111] sm:h-[380px] sm:rounded-[18px] md:h-[400px] lg:h-105"
//     >
//       <Image
//         src={item.image}
//         alt={item.title}
//         fill
//         sizes="(max-width: 639px) 240px, (max-width: 767px) 260px, (max-width: 1023px) 280px, 292px"
//         className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//       />

//       <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.0)_0%,rgba(23,23,23,0.0)_32%,rgba(23,23,23,1)_80%)]" />

//       {/* {item.badge ? (
//         <div className="absolute left-3 right-3 top-3 rounded-lg border border-white/15 bg-black/35 px-3 py-2 text-center text-[11px] font-medium uppercase tracking-[0.06em] text-white/95 backdrop-blur-md sm:left-4 sm:right-4 sm:top-4 sm:rounded-xl sm:px-4 sm:text-[13px] lg:text-[14px]">
//           {item.badge}
//         </div>
//       ) : null} */}

//       <div className="absolute inset-x-0 bottom-0 px-3 pb-4 sm:px-4 sm:pb-5">
//         <h3 className="text-nowrap text-[29px] font-normal leading-[1.1] tracking-[-0.04em] text-white sm:text-[32px]">
//           <span className="text-wrap">{item.title}</span>
//           <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
//             →
//           </span>
//         </h3>
//         <div className="divider my-2.5 bg-white/40 sm:my-3"></div>

//         <div>
//           <p className="mt-2 text-[12px] font-semibold leading-[1.2] tracking-[0.04em] text-white sm:text-[14px]">
//             {item.description}
//           </p>
//         </div>
//       </div>
//     </article>
//   );
// }

function InstructorCard({
  item,
  cardWidth,
}: {
  item: FeaturedItem;
  cardWidth: number;
}) {
  return (
    <article
      // style={{ width: `${cardWidth}px` }}
      className="overflow-hidden rounded-3xl w-[95%] mx-auto bg-[#F5F5FA] text-black"
    >
      <div className="flex h-[420px]">
        {/* Left Content */}
        <div className="flex w-1/2 flex-col justify-center p-8">
          {/* {item.badge && (
            <span className="mb-5 w-fit rounded-full bg-[#635BFF] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              {item.badge}
            </span>
          )} */}

          <h3 className="text-5xl font-semibold leading-tight tracking-[-0.04em]">
            {item.title}
          </h3>

          <p className="mt-6 text-lg leading-8 text-[#555]">
            {item.description}
          </p>
          <div className="mt-4 sm:mt-5 md:mt-8 flex gap-4">
          <CustomLink
            href="/products"
            // variant="outlined"
            text="Learn More"
          />
          <CustomLink
            href="/products"
            variant="outlined"
            text="Explore More"
          />
        </div>
        </div>

        {/* Right Image */}
        <div className="relative w-1/2">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </article>
  );
}

export default function FeaturesSection({ isShowBtn = true }: { isShowBtn?: boolean }) {
  const DEFAULT_CARD_WIDTH = 292;
  const DEFAULT_CARD_GAP = CARD_GAP;
  const [activeItemIndex, setActiveItemIndex] = useState(0);

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

  return (
    <section className="overflow-hidden bg-black">
      <div className="mx-auto w-full max-w-320 px-0 pb-14 pt-10 sm:pb-16 sm:pt-12 md:pb-20 md:pt-16">
        <div className="px-4 text-center">
          <p className="section-label">FEATURES</p>

          <h2 className="section-title my-3 mx-auto text-white">
            Everything Your Coaching Business Needs. Nothing It Doesn't.
          </h2>
        </div>

        <div className="mx-auto relative mb-5 sm:mb-6 max-w-5xl bg-black">
          <div className="absolute pointer-events-none flex justify-between inset-0 z-10">
            <div className="w-32 bg-linear-to-r via-black/90 from-black to-transparent" />
            <div className="w-32 bg-linear-to-l via-black/90 from-black to-transparent" />
          </div>
          <div className="mx-auto bg-black px-0">
            <div className="mx-auto mt-0 max-w-[92%] w-full">
              <CustomCarosal
                selectedIndex={activeItemIndex}
                handleActiveItemIndexChange={(index: number) => {
                  console.log("ttttttttt", index);
                  setActiveItemIndex(index);
                  // setActiveKey(allTabs[index]?.key);
                }}
                CustomCard={(item: any, index: number, scrollToSelectedIndex) => {
                  return (
                    <div
                      key={item.key + index}
                      className="box-border flex min-w-0 shrink-0 grow-0 basis-auto items-center justify-center px-2 "
                    >
                      <button
                        type="button"
                        onClick={() => {
                          setActiveItemIndex(index);
                          scrollToSelectedIndex && scrollToSelectedIndex(index);
                        }}
                        className={[
                          "rounded-full border px-2.5 py-1.5 text-[10px] font-bold leading-none transition-all duration-200",
                          "sm:px-5 sm:py-3 sm:text-[14px]",
                          "max-w-full whitespace-nowrap transition-all duration-1000",
                          activeItemIndex === index
                            ? "border-white/30 bg-primary text-black"
                            : "border-white/30 text-white/80 cursor-pointer bg-transparent hover:bg-white/10",
                        ].join(" ")}
                      >
                        {item.title}
                      </button>
                    </div>
                  );
                }}
                // isContinuousPlay={true}
                // continuousPlayConfig={{
                //     speed: 0.6
                // }}
                isAutoplay={true}
                items={featuredItems}
                options={{
                  loop: true,
                  align: "center",
                  skipSnaps: false,
                }}
                autoplayConfig={{
                  stopOnMouseEnter: false,
                  delay: 5000,
                }}
                wrapperClassName="min-h-0 bg-black"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-4 sm:mt-5 md:mt-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-6 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] sm:w-10 md:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-6 bg-[linear-gradient(270deg,#000_0%,rgba(0,0,0,0)_100%)] sm:w-10 md:w-16" />

          <CustomCarosal
            items={featuredItems}
            options={{ loop: true, align: "center", containScroll: "trimSnaps" }}
            wrapperClassName="px-4 sm:px-5 md:px-4"
            selectedIndex={activeItemIndex}
            handleActiveItemIndexChange={(index: number) => {
              console.log("ttttttttt", index);
              setActiveItemIndex(index);
              // setActiveKey(allTabs[index]?.key);
            }}
            CustomCard={(item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-full"
                style={{ marginRight: `${cardGap}px` }}
              >
                <InstructorCard
                  item={item}
                  cardWidth={1200} // no longer used
                />
              </div>
            )}
            CustomButtonWrapper={(onPrevClick, onNextClick, onSpe) => (
              <>
                <div className="absolute left-2 top-1/2 z-20 -translate-y-1/2 sm:left-4 md:left-6">
                  <ArrowButton direction="left" onClick={onPrevClick} />
                </div>

                <div className="absolute right-2 top-1/2 z-20 -translate-y-1/2 sm:right-4 md:right-6">
                  <ArrowButton direction="right" onClick={onNextClick} />
                </div>
              </>
            )}
          />
        </div>

        {/* {isShowBtn && <div className="mt-4 flex justify-center sm:mt-5 md:mt-6">
          <CustomLink
            href="/products"
            variant="closed"
            text="Explore More"
          />
        </div>} */}
      </div>
    </section>
  );
}