"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import { useState } from "react";
import CustomEmblaCarousel from "./CustomCarosal";

export type TestimonialItem = {
  id: number;
  image: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  logo?: string;
};

const companyLogos = [
  {
    title: "AA",
    image: "https://www.gogetta.com/home/logo-aa.svg",
  },
  {
    title: "AK",
    image: "https://www.gogetta.com/home/logo-ak.svg",
  },
  {
    title: "CIET",
    image: "https://www.gogetta.com/home/logo-ciet.svg",
  },
  {
    title: "Visy",
    image: "https://www.gogetta.com/home/logo-visy.svg",
  },
  {
    title: "GFS",
    image: "https://www.gogetta.com/home/logo-gfs.svg",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 1,
    image: "/client (1).webp",
    logo: "https://www.gogetta.com/home/testimonials/mckay.svg",
    quote:
      "Their approach to collaborative problem-solving ensures that proposed solutions are aligned with our objectives and deliver real value. As a result, they have become a valued partner—contributing not only to the success of individual projects but also supporting our long-term strategic outcomes.",
    name: "Carolyn Chapman",
    role: "People & Culture Operations Manager",
    company: "McKay",
  },
  {
    id: 2,
    image: "/client (2).webp",
    logo: "https://www.gogetta.com/home/testimonials/hrv.svg",
    quote:
      "Advertising is easy and efficient. Staff are always helpful, and quick to respond, and give great advice, and recommendation to tailor your advertising or social campaigns here in NZ and overseas. Good calibre of candidates would definitely recommend.",
    name: "Natalie James",
    role: "",
    company: "HRV",
  },
  {
    id: 3,
    image: "/client (3).webp",
    logo: "https://www.gogetta.com/home/testimonials/chatham.svg",
    quote:
      "Chatham Islands Electricity Ltd engaged the team to help us fill 2 vacant positions. We had been trying the traditional way of advertising the positions for a long time with little success. The team put together a campaign that attracted a lot of interest and applications for us. Through this process, we have been able to fill both positions with people who will be a benefit to our company and the Chatham Islands community.",
    name: "Stuart Holdaway",
    role: "Manager",
    company: "Chatham Island Electricity Ltd",
  },
  {
    id: 4,
    image: "/client (4).webp",
    logo: "https://www.gogetta.com/home/testimonials/ak.svg",
    quote:
      "Working with the team was great. The radio and social media were very effective at getting our listings in front of a targeted audience and really got people talking. We received a large number of quality applications and were able to fill 3 roles as a result.",
    name: "Robby (Bobby) Elliot",
    role: "Managing Director",
    company: "AK Electrical",
  },
  {
    id: 5,
    image: "/client (5).webp",
    logo: "https://www.gogetta.com/home/testimonials/gfs.svg",
    quote:
      "The experience was very positive and we were blown away by the number of quality applications we received from the campaign. We found this to be a very economical way of sourcing candidates and we'd definitely recommend working with them.",
    name: "Peter Leitch",
    role: "Managing Director",
    company: "Guaranteed Flow Systems",
  },
];

// export function TestimonialCard({ item }: { item: TestimonialItem }) {
//   return (
//     <article className="overflow-hidden h-full w-full rounded-xl bord border-[#cfc8bf] bg-[#f5f3ef] px-20">
//       <div className="grid h-full lg:grid-cols-[320px_minmax(0,1fr)] xl:grid-cols-[360px_minmax(0,1fr)]">
//         <div className="relative rounded-xl border border-[#cfc8bf] aspect-[4/4.2] h-full lg:aspect-auto lg:min-h-[430px] xl:min-h-[460px]">
//           <Image
//             src={item.image}
//             alt={item.name}
//             fill
//             className="object-cover rounded-xl"
//             sizes="(max-width: 1024px) 100vw, 360px"
//           />
//         </div>

//         <div className="flex min-h-full rounded-xl border border-[#cfc8bf] bg-white flex-col p-3 sm:p-4 lg:p-5 xl:p-6">
//           <blockquote
//             className="quote-text text-black text-start"
//           >
//             “{item.quote}”
//           </blockquote>

//           <div className="mt-8 border-t border-[#cec8c0] pt-3 sm:pt-4 lg:mt-auto">
//             <div className="flex items-end justify-between gap-5">
//               <div className="min-w-0 text-start">
//                 <h3 className="text-[11px] font-semibold text-black/70 sm:text-[13px]">
//                   {item.name}
//                 </h3>

//                 <p className="mt-1 text-[11px] leading-[1.45] text-black/70 sm:text-[13px]">
//                   {item.role ? `${item.role} | ${item.company}` : item.company}
//                 </p>
//               </div>
//               <div className="relative h-8 w-20 shrink-0 sm:h-10 sm:w-24 md:w-28">
//                 {item.logo ? (
//                   <Image
//                     src={item.logo}
//                     alt={item.company}
//                     fill
//                     className="object-contain object-right-bottom"
//                     sizes="116px"
//                     unoptimized
//                   />
//                 ) : (
//                   <span className="text-sm font-semibold text-black/60">
//                     {item.company}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </article>
//   );
// }

// export default function ClientsSection() {

//   return (
//     <section className="bg-[#f1efeb] py-20 lg:py-24 xl:py-32">
//       <div className="mx-auto max-w-400">
//         <div className="text-center">
//           <span className="section-label text-black">
//             Testimonials
//           </span>
//           <h2
//             className="mx-auto mt-5 section-title max-w-auto text-black"
//           >
//             Trusted by growing companies
//           </h2>

//           <CustomEmblaCarousel
//             CustomCard={(item, index, firstActiveItemIndex) => {
//               // console.log("rendering card", index, item);
//               return <div
//                 key={index}
//                 className={`min-w-0 shrink-0 grow-0 basis-full px-28 sm:px-32 md:px-36 lg:px-40 `}
//               >
//                 <TestimonialCard item={TESTIMONIALS[index]} />
//               </div>;
//             }}
//             isAutoplay={false}
//             items={TESTIMONIALS}
//             options={{ loop: true, align: "start", skipSnaps: false }}
//             wrapperClassName="min-h-0 mt-32 bg-transparent"
//             CustomButtonWrapper={(onPrevClick, onNextClick) => {
//               return <div className="absolute -top-20 flex w-full items-center justify-center gap-4 ">
//                 <button
//                   type="button"
//                   onClick={onPrevClick}
//                   aria-label="Previous testimonial"
//                   className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bdb5aa] bg-[#ded8ce] hover:bg-black hover:text-white text-black transition-transform duration-300 hover:scale-[1.04]"
//                 >
//                   <Icon icon="lucide:arrow-left" className="h-5 w-5" />
//                 </button>

//                 <button
//                   type="button"
//                   onClick={onNextClick}
//                   aria-label="Next testimonial"
//                   className="flex h-11 w-11 items-center justify-center rounded-full border border-[#bdb5aa] bg-[#ded8ce] hover:bg-black hover:text-white text-black transition-transform duration-300 hover:scale-[1.04]"
//                 >
//                   <Icon icon="lucide:arrow-right" className="h-5 w-5" />
//                 </button>
//               </div>
//             }}
//           />
//         </div>
//         <div className="max-w-xl mt-28 mx-auto">
//           <CustomEmblaCarousel
//             CustomCard={(item, index, firstActiveItemIndex) => {
//               return <div
//                 key={index}
//                 className="flex min-w-0 shrink-0 grow-0 basis-[29%] items-center justify-center px-0"
//               >
//                 <div className="flex h-9 w-[120px] items-center justify-center">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     className="max-h-full w-auto object-contain"
//                     width={120}
//                     height={40}
//                     unoptimized
//                   />
//                 </div>
//               </div>;
//             }}
//             isContinuousPlay={true}
//             isAutoplay={true}
//             items={companyLogos}
//             options={{ loop: true, align: "start", skipSnaps: false }}
//             wrapperClassName="min-h-0 mt-7 bg-transparent"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

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

export default function ClientsSection() {
  return (
    <section className="overflow-hidden bg-[#f3f4f6] py-14 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="mx-auto max-w-400 px-4 sm:px-6 lg:px-0">
        <div className="text-center">
          <span className="section-label text-black">Testimonials</span>

          <h2 className="section-title mx-auto mt-5 text-black">
            Trusted by growing companies
          </h2>

          <CustomEmblaCarousel
            CustomCard={(item, index, firstActiveItemIndex) => {
              return (
                <div
                  key={index}
                  className="box-border min-w-0 shrink-0 grow-0 basis-full px-1 lg:px-24 xl:px-40"
                >
                  <TestimonialCard item={item} />
                </div>
              );
            }}
            isAutoplay={false}
            items={TESTIMONIALS}
            options={{ loop: true, align: "start", skipSnaps: false }}
            wrapperClassName="mt-20 min-h-0 bg-transparent sm:mt-24 lg:mt-32"
            CustomButtonWrapper={(onPrevClick, onNextClick) => {
              return (
                <div className="absolute -top-14 flex w-full items-center justify-center gap-3 sm:-top-16 sm:gap-4 lg:-top-20">
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

        <div className="mx-auto mt-16 max-w-[92%] sm:mt-20 sm:max-w-xl lg:mt-28">
          <CustomEmblaCarousel
            CustomCard={(item, index, firstActiveItemIndex) => {
              return (
                <div
                  key={index}
                  className="box-border flex min-w-0 shrink-0 grow-0 basis-1/2 items-center justify-center px-1 sm:basis-[34%] md:basis-[29%]"
                >
                  <div className="flex h-8 w-[95px] items-center justify-center sm:h-9 sm:w-[110px] md:w-[120px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="max-h-full w-auto object-contain"
                      width={120}
                      height={40}
                      unoptimized
                    />
                  </div>
                </div>
              );
            }}
            isContinuousPlay={true}
            isAutoplay={true}
            items={companyLogos}
            options={{ loop: true, align: "start", skipSnaps: false }}
            wrapperClassName="mt-6 min-h-0 bg-transparent sm:mt-7"
          />
        </div>
      </div>
    </section>
  );
}