"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import CustomEmblaCarousel from "./CustomCarosal";
import CompanyLogoCarousel from "./CompaniesSlider";
import { companyLogos } from "@/data/data";

export type TestimonialItem = {
  id: number;
  image: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  logo?: string;
};

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    image: "/client (1).webp",
    logo: "/external-images/img-fb6f8dd6.webp",
    quote:
      "Their approach to collaborative problem-solving ensures that proposed solutions are aligned with our objectives and deliver real value. As a result, they have become a valued partner—contributing not only to the success of individual projects but also supporting our long-term strategic outcomes.",
    name: "Carolyn Chapman",
    role: "People & Culture Operations Manager",
    company: "McKay",
  },
  {
    id: 2,
    image: "/client (2).webp",
    logo: "/external-images/img-b77df556.webp",
    quote:
      "Advertising is easy and efficient. Staff are always helpful, and quick to respond, and give great advice, and recommendation to tailor your advertising or social campaigns here in NZ and overseas. Good calibre of candidates would definitely recommend.",
    name: "Natalie James",
    role: "",
    company: "HRV",
  },
  {
    id: 3,
    image: "/client (3).webp",
    logo: "/external-images/img-5d8075eb.webp",
    quote:
      "Chatham Islands Electricity Ltd engaged the team to help us fill 2 vacant positions. We had been trying the traditional way of advertising the positions for a long time with little success. The team put together a campaign that attracted a lot of interest and applications for us. Through this process, we have been able to fill both positions with people who will be a benefit to our company and the Chatham Islands community.",
    name: "Stuart Holdaway",
    role: "Manager",
    company: "Chatham Island Electricity Ltd",
  },
  {
    id: 4,
    image: "/client (4).webp",
    logo: "/external-images/img-194a3dea.webp",
    quote:
      "Working with the team was great. The radio and social media were very effective at getting our listings in front of a targeted audience and really got people talking. We received a large number of quality applications and were able to fill 3 roles as a result.",
    name: "Robby (Bobby) Elliot",
    role: "Managing Director",
    company: "AK Electrical",
  },
  {
    id: 5,
    image: "/client (5).webp",
    logo: "/external-images/img-8eb724d7.webp",
    quote:
      "The experience was very positive and we were blown away by the number of quality applications we received from the campaign. We found this to be a very economical way of sourcing candidates and we'd definitely recommend working with them.",
    name: "Peter Leitch",
    role: "Managing Director",
    company: "Guaranteed Flow Systems",
  },
];

export function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="min-w-0 w-full rounded-xl border lg:border-0 border-[#cfc8bf] bg-[#f5f3ef] p-3 sm:p-4 md:p-5 lg:px-0 lg:py-0">
      <div className="grid h-full min-w-0 gap-1 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-0 xl:grid-cols-[370px_minmax(0,1fr)]">
        <div className="relative w-full overflow-hidden rounded-xl border border-[#cfc8bf] aspect-[4/4.2] lg:aspect-auto lg:min-h-[430px] xl:min-h-[460px]">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="rounded-xl object-cover"
            sizes="(max-width: 1024px) 100vw, 360px"
          />
        </div>

        <div className="min-w-0 flex min-h-137 sm:min-h-90 md:min-h-80 lg:min-h-120 flex-col rounded-xl border border-[#cfc8bf] bg-white p-4 sm:p-5 lg:p-5 xl:p-6">
          <blockquote className="quote-text mb-auto min-w-0 text-start text-black break-words">
            “{item.quote}”
          </blockquote>

          <div className="mt-6 border-t border-[#cec8c0] pt-3 sm:pt-4 lg:mt-auto">
            <div className="flex items-end justify-between gap-4 sm:gap-5">
              <div className="min-w-0 text-start">
                <h3 className="truncate text-[12px] font-semibold text-black/70 sm:text-[13px]">
                  {item.name}
                </h3>

                <p className="mt-1 text-[11px] leading-[1.45] text-black/70 sm:text-[13px]">
                  {item.role ? `${item.role} | ${item.company}` : item.company}
                </p>
              </div>

              <div className="relative h-8 w-18 shrink-0 sm:h-10 sm:w-24 md:w-28">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.company}
                    fill
                    className="object-contain object-right-bottom"
                    sizes="116px"
                    unoptimized
                  />
                ) : (
                  <span className="text-sm font-semibold text-black/60">
                    {item.company}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ClientsSection({ title, isShowCompanies = true }: { title: string, isShowCompanies?: boolean }) {
  return (
    <section className="overflow-hidden bg-[#f3f4f6] py-5 sm:py-6 md:py-7 lg:py-8">
      <div className="section-container max-w-[1360px]">
        <div className="text-center">
          <span className="section-label text-black">Testimonials</span>

          <h2 className="section-title mx-auto mt-3 text-black">
            {title}
          </h2>

          <CustomEmblaCarousel
            CustomCard={(item, index, firstActiveItemIndex) => {
              return (
                <div
                  key={index}
                  className="box-border min-w-0 shrink-0 grow-0 basis-full px-1"
                >
                  <TestimonialCard item={item} />
                </div>
              );
            }}
            isAutoplay={false}
            items={TESTIMONIALS}
            options={{ loop: true, align: "start", skipSnaps: false }}
            wrapperClassName="mt-16 min-h-0 bg-transparent sm:mt-18 lg:mt-20"
            CustomButtonWrapper={(onPrevClick, onNextClick) => {
              return (
                <div className="absolute -top-12 flex w-full items-center justify-center gap-3 sm:-top-14 sm:gap-4 lg:-top-16">
                  <button
                    type="button"
                    onClick={onPrevClick}
                    aria-label="Previous testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdb5aa] bg-[#ded8ce] text-black transition-transform duration-300 hover:scale-[1.04] hover:bg-black hover:text-white sm:h-11 sm:w-11"
                  >
                    <Icon icon="lucide:arrow-left" className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={onNextClick}
                    aria-label="Next testimonial"
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#bdb5aa] bg-[#ded8ce] text-black transition-transform duration-300 hover:scale-[1.04] hover:bg-black hover:text-white sm:h-11 sm:w-11"
                  >
                    <Icon icon="lucide:arrow-right" className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </button>
                </div>
              );
            }}
          />
        </div>

        {isShowCompanies &&
          <div className="mx-auto max-w-full mt-6 px-4 sm:px-6 lg:px-0">
            <CompanyLogoCarousel companyLogos={[...companyLogos, ...companyLogos]} />
          </div>}
      </div>
    </section>
  );
}