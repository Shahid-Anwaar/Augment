"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
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
    <article className="min-w-0 w-full rounded-xl border border-[#cfc8bf] bg-[#f5f3ef] p-2.5 sm:p-4 md:p-5 lg:border-0 lg:px-0 lg:py-0">
      <div className="grid h-full min-w-0 gap-2.5 sm:gap-3 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-0 xl:grid-cols-[370px_minmax(0,1fr)]">
        <div className="relative w-full overflow-hidden rounded-xl border border-[#cfc8bf] aspect-[4/3.25] sm:aspect-[4/3.8] md:aspect-[4/4] lg:aspect-auto lg:min-h-70 xl:min-h-80">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="rounded-xl object-cover"
            sizes="(max-width: 1024px) 100vw, 360px"
          />
        </div>

        <div className="min-w-0 flex min-h-[220px] flex-col rounded-xl border border-[#cfc8bf] bg-white p-3.5 sm:min-h-[300px] sm:p-5 md:min-h-[320px] lg:min-h-85 lg:p-5 xl:p-6">
          <blockquote className="quote-text mb-auto min-w-0 break-words text-start text-black">
            “{item.quote}”
          </blockquote>

          <div className="mt-5 border-t border-[#cec8c0] pt-3 sm:mt-6 sm:pt-4 lg:mt-auto">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
              <div className="min-w-0 text-start">
                <h3 className="truncate text-[12px] font-semibold text-black/70 sm:text-[13px]">
                  {item.name}
                </h3>

                <p className="mt-1 break-words text-[11px] leading-[1.45] text-black/70 sm:text-[13px]">
                  {item.role ? `${item.role} | ${item.company}` : item.company}
                </p>
              </div>

              <div className="relative h-7 w-18 shrink-0 self-start sm:h-10 sm:w-24 sm:self-auto md:w-28">
                {item.logo ? (
                  <Image
                    src={item.logo}
                    alt={item.company}
                    fill
                    className="object-contain object-left-bottom sm:object-right-bottom"
                    sizes="116px"
                    unoptimized
                  />
                ) : (
                  <span className="break-words text-xs font-semibold text-black/60 sm:text-sm">
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

export default function ClientsSection({ title, isShowCompanies = false }: { title: string, isShowCompanies?: boolean }) {
  return (
    <section className="overflow-hidden bg-[#f3f4f6]">
      <div className="section-container max-w-[1360px]">
        <div className="text-center">
          <span className="section-label text-black">Testimonials</span>

          <h2 className="section-title mx-auto mt-3 text-black">
            {title}
          </h2>

          <CustomEmblaCarousel
            CustomCard={(item, index) => {
              return (
                <div
                  key={index}
                  className="box-border min-w-0 shrink-0 grow-0 basis-full px-3 lg:px-12"
                >
                  <TestimonialCard item={item} />
                </div>
              );
            }}
            isAutoplay={false}
            items={TESTIMONIALS}
            options={{ loop: true, align: "center", skipSnaps: false }}
            wrapperClassName="mt-3 min-h-0 bg-transparent sm:mt-4 lg:mt-5"
            CustomButtonWrapper={(onPrevClick, onNextClick) => {
              return (
                <div className="absolute inset-0 z-50 flex w-full items-center justify-between gap-3 sm:gap-4">
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