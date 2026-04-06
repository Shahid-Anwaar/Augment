"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { faqs, type FAQItem } from "@/data/home";
import BookCallSection from "./BookCall";

type FAQRowProps = {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
};

function FAQRow({ item, isOpen, onToggle }: FAQRowProps) {
  return (
    <div className="border-b border-black/12">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-6 py-[18px] text-left md:py-[20px]"
      >
        <span className="pr-4 text-[18px] font-semibold leading-[1.28] tracking-[-0.035em] stylish-family text-black md:text-[20px]">
          {item.question}
        </span>

        <Icon
          icon="mdi:chevron-down"
          width="28"
          height="28"
          className={`mt-[1px] shrink-0 text-gray-600 transition-transform duration-200 ${isOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
      >
        <div className="overflow-hidden">
          <div className="max-w-[1020px] pb-[20px] pr-8 text-[18px] font-normal leading-[1.45] tracking-[-0.03em] text-black md:pb-[22px] md:text-[19px] lg:text-[20px]">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#000000] pt-52 relative">
      <div className="bg-[#f3f4f6]">
        <div className="mx-auto w-full max-w-[1280px] px-7 pb-14 sm:px-8 md:px-10 md:pb-20 lg:px-12 lg:pb-[88px] pt-64">
          <BookCallSection
            title="15-Day Money-Back Guarantee"
            btnText="Enroll Now"
            subTitle="Try Augment for 15 days and if you are not completely satisfied, you can claim a full refund - no questions asked."
          />
          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-[300px_minmax(0,1fr)] md:gap-x-16 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-x-[78px]">
            <div>
              <h2 className="max-w-[230px] section-title">
                Frequently
                <br />
                Asked
                <br />
                Questions
              </h2>
            </div>

            <div className="pt-[2px]">
              {faqs.map((item, index) => (
                <FAQRow
                  key={item.question}
                  item={item}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex((prev) => (prev === index ? null : index))
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}