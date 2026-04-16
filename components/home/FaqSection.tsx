"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { faqs, type FAQItem } from "@/data/home";

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
        className="flex w-full items-start justify-between gap-3 py-4 text-left sm:gap-4 md:gap-6 md:py-5"
      >
        <span className="min-w-0 pr-2 text-[16px] font-semibold leading-[1.3] tracking-[-0.03em] stylish-family text-black sm:pr-4 sm:text-[17px] md:text-[20px]">
          {item.question}
        </span>

        <Icon
          icon="mdi:chevron-down"
          width="28"
          height="28"
          className={`mt-0.5 h-5 w-5 shrink-0 text-gray-600 transition-transform duration-200 sm:h-6 sm:w-6 md:h-7 md:w-7 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-w-full pb-4 pr-2 text-[15px] font-normal leading-[1.5] tracking-[-0.02em] text-black sm:pb-5 sm:pr-6 sm:text-[17px] md:max-w-255 md:pr-8 md:text-[19px] lg:text-[20px]">
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
    <section className="bg-[#f3f4f6]">
      <div className="section-container py-10 md:py-14 lg:pb-16 lg:pt-24">
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-[260px_minmax(0,1fr)] md:gap-x-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-x-19.5">
          <div>
            <h2 className="section-title max-w-[14rem] sm:max-w-[18rem] md:max-w-57.5">
              <span className="block md:hidden">Frequently Asked Questions</span>
              <span className="hidden md:block">
                Frequently
                <br />
                Asked
                <br />
                Questions
              </span>
            </h2>
          </div>

          <div className="pt-0 md:pt-0.5">
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
    </section>
  );
}