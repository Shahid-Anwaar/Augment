"use client";
import Image from "next/image";
import { Icon } from "@iconify/react";
import CustomEmblaCarousel from "../home/CustomCarosal";

type PressItem = {
  id: number;
  source: string;
  title: string;
  image: string;
  logoText: string;
  logoIcon: string;
};

const pressItems: PressItem[] = [
  {
    id: 1,
    source: "Forbes 30U30",
    logoIcon: "simple-icons:forbes",
    logoText: "Forbes 30",
    title: "Ariel and Roy made it to Forbes 30 Under 30",
    image:
      "/external-images/img-56664d31.webp",
  },
  {
    id: 2,
    source: "Maddyness",
    logoIcon: "mdi:newspaper-variant-outline",
    logoText: "Maddyness",
    title: "Supreme Coach is providing the missing pieces of the puzzle",
    image:
      "/external-images/img-0aeb00e7.webp",
  },
  {
    id: 3,
    source: "Gulf Times",
    logoIcon: "mdi:newspaper",
    logoText: "GULF TIMES",
    title: "Alternative MBA program to enhance skills of entrepreneurs",
    image:
      "/external-images/img-a936d161.webp",
  },
  {
    id: 4,
    source: "Poets & Quants",
    logoIcon: "mdi:school-outline",
    logoText: "Poets & Quants",
    title: "Supreme Coach Business School Provides A MasterClass-Like MBA",
    image:
      "/external-images/img-28b116eb.webp",
  },
  {
    id: 5,
    source: "Euronews",
    logoIcon: "simple-icons:euronews",
    logoText: "euronews.",
    title: "How global media is covering the future of online business education",
    image:
      "/external-images/img-b13eb5e9.webp",
  },
  {
    id: 6,
    source: "Bloomberg",
    logoIcon: "mdi:chart-line",
    logoText: "Bloomberg",
    title: "Business education is shifting toward flexible digital learning",
    image:
      "/external-images/img-c4952244.webp",
  },
  {
    id: 7,
    source: "TechCrunch",
    logoIcon: "simple-icons:techcrunch",
    logoText: "TechCrunch",
    title: "A startup-style approach to business school is gaining momentum",
    image:
      "/external-images/img-34218493.webp",
  },
  {
    id: 8,
    source: "Business Insider",
    logoIcon: "mdi:briefcase-outline",
    logoText: "Business Insider",
    title: "The new wave of online business education is gaining attention",
    image:
      "/external-images/img-df0857de.webp",
  },
  {
    id: 9,
    source: "Fast Company",
    logoIcon: "mdi:flash-outline",
    logoText: "Fast Company",
    title: "A modern approach to business education for ambitious founders",
    image:
      "/external-images/img-f08a53bf.webp",
  },
  {
    id: 10,
    source: "Yahoo Finance",
    logoIcon: "simple-icons:yahoo",
    logoText: "Yahoo Finance",
    title: "Business learning platforms are reshaping executive education",
    image:
      "/external-images/img-864ad758.webp",
  },
];

export default function PressMediaSection() {
  return (
    <section className="bg-white">
      <div className="section-container py-4 sm:py-5">
        <div className="mb-0">
          <h3 className="text-center text-[18px] font-[600] tracking-[-0.03em] text-[#1f1f1f] sm:text-[20px] md:text-start md:text-[22px]">
            Press & Media
          </h3>
          <div className="mt-2 h-0.5 w-full bg-black/12 sm:mt-1" />
        </div>
      </div>

      <div className="mx-auto w-full max-w-400 px-4 sm:px-5 md:px-6 lg:px-0">
        <div className="relative text-center">
          <CustomEmblaCarousel
            CustomCard={(item, index) => {
              return (
                <div
                  key={index}
                  className="box-border min-w-0 shrink-0 grow-0 basis-[86%] px-1 sm:basis-[52%] sm:px-1.5 md:basis-[42%] md:px-2 lg:basis-[24%]"
                >
                  <article
                    key={item.id}
                    className="group flex h-full w-full shrink-0 flex-col overflow-hidden rounded-[18px] border border-black/12 bg-white text-start transition duration-300 hover:-translate-y-1 sm:rounded-[20px] md:rounded-[22px]"
                  >
                    <div className="relative h-[170px] w-full overflow-hidden sm:h-[190px] md:h-[202px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 86vw, (max-width: 1024px) 52vw, 386px"
                        className="object-cover transition duration-500"
                      />

                      <div className="absolute left-4 top-4 z-10 flex items-center gap-2 text-white sm:left-5 sm:top-5 md:left-6 md:top-6">
                        <Icon
                          icon={item.logoIcon}
                          className="h-5 w-5 text-white sm:h-6 sm:w-6"
                        />

                        <span className="text-[20px] font-[800] leading-none tracking-[-0.04em] text-white sm:text-[22px] md:text-[24px]">
                          {item.logoText}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-end p-4 sm:p-5">
                      <div className="mt-auto">
                        <p className="text-[12px] font-[400] leading-[1.4] text-[#686868] sm:text-[13px]">
                          {item.source}
                        </p>

                        <div className="mt-2 flex items-end justify-between gap-3 sm:mt-3">
                          <h3 className="flex-1 text-[18px] font-[600] leading-[1.2] tracking-[0.2px] text-[#202020] sm:text-[20px] md:max-w-[290px] md:text-[22px] md:leading-[1.18] md:tracking-[0.5px]">
                            {item.title}
                          </h3>

                          <button
                            type="button"
                            aria-label={`Open article: ${item.title}`}
                            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/25 bg-transparent text-[#222] transition duration-300 hover:bg-black hover:text-white sm:h-6 sm:w-6"
                          >
                            <Icon
                              icon="mingcute:right-line"
                              className="h-4 w-4"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              );
            }}
            isAutoplay={false}
            items={[...pressItems, ...pressItems]}
            options={{ loop: true, align: "center", skipSnaps: false }}
            wrapperClassName="mt-2 min-h-0 bg-transparent mb-20 pt-2 sm:mt-3 sm:mb-24 md:mb-28"
            CustomButtonWrapper={(onPrevClick, onNextClick) => {
              return (
                <div className="absolute -bottom-12 flex w-full items-center justify-center gap-3 sm:-bottom-14 sm:gap-4 md:-bottom-16 lg:-bottom-18">
                  <button
                    type="button"
                    onClick={onPrevClick}
                    aria-label="Previous slide"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/12 bg-[#ededea] text-[#222] transition duration-300 hover:bg-black hover:text-white"
                  >
                    <Icon icon="lucide:chevron-left" className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={onNextClick}
                    aria-label="Next slide"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/12 bg-[#ededea] text-[#222] transition duration-300 hover:bg-black hover:text-white"
                  >
                    <Icon icon="lucide:chevron-right" className="h-5 w-5" />
                  </button>
                </div>
              );
            }}
          />
        </div>
      </div>
    </section>
  );
}