"use client";

import { useMemo, useState } from "react";
import { testimonials, type TestimonialItem } from "@/data/data";
import { CustomTestimonialCard } from "./CustomTestimonialCard";
import CustomLink from "../custom/CustomLink";

const INITIAL_VISIBLE = 12;

function splitIntoColumns(items: TestimonialItem[], columns: number) {
  const result: TestimonialItem[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, index) => {
    result[index % columns].push(item);
  });
  return result;
}

export function clampText(text: string, maxLength: number) {
  if (text.length <= maxLength) return { shorText: text, truncated: false };
  return {
    shorText: `${text.slice(0, maxLength).trimEnd()}…`,
    truncated: true,
  };
}

export default function StudentTestimonialsSection() {
  const [showAll, setShowAll] = useState(false);
  const [shownFullTextIds, setShownFullTextIds] = useState([]);

  console.log("ids.....", shownFullTextIds);


  const visibleItems = showAll ? testimonials : testimonials.slice(0, INITIAL_VISIBLE);

  const desktopColumns = useMemo(
    () => splitIntoColumns(visibleItems, 4),
    [visibleItems]
  );

  const mobileColumns = useMemo(
    () => splitIntoColumns(visibleItems, 3),
    [visibleItems]
  );


  return (
    <section className="bg-[#f3f4f6]">
      <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-14 sm:px-6 md:px-8 lg:px-10 lg:pb-14 lg:pt-17">
        <div className="text-center">
          <p className="section-label text-black">
            Our Community
          </p>
          <h2 className="mt-4 text-black section-title">
            Student Testimonials
          </h2>
        </div>

        <div className="relative">
          {!showAll && <div className="absolute h-full w-full bg-linear-to-t from-[#f3f4f6] via-transparent to-transparent" />}
          <div className="mt-10 hidden lg:grid lg:grid-cols-4 lg:gap-3">
            {desktopColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-3">
                {column.map((item) => (
                  <CustomTestimonialCard key={item.id} item={item} setShownFullTextIds={setShownFullTextIds} shownFullTextIds={shownFullTextIds} />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10 hidden sm:grid lg:hidden sm:grid-cols-3 sm:gap-3">
            {mobileColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-3">
                {column.map((item) => (
                  <CustomTestimonialCard key={item.id} item={item} setShownFullTextIds={setShownFullTextIds} shownFullTextIds={shownFullTextIds} />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3 sm:hidden">
            {visibleItems.map((item) => (
              <CustomTestimonialCard key={item.id} item={item} setShownFullTextIds={setShownFullTextIds} shownFullTextIds={shownFullTextIds} />
            ))}
          </div>
        </div>

        {!showAll ? (
          <div className="relative bottom-7 flex justify-center lg:mt-0">
            <CustomLink
              // href="/pricing"
              onClick={() =>
                setShowAll(true)
              }
              variant="outlined"
              text="Load More"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}