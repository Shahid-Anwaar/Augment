"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { testimonials, type TestimonialItem } from "@/data/home";

const INITIAL_VISIBLE = 12;

function splitIntoColumns(items: TestimonialItem[], columns: number) {
  const result: TestimonialItem[][] = Array.from({ length: columns }, () => []);
  items.forEach((item, index) => {
    result[index % columns].push(item);
  });
  return result;
}

function clampText(text: string, maxLength: number) {
  if (text.length <= maxLength) return { shorText: text, truncated: false };
  return {
    shorText: `${text.slice(0, maxLength).trimEnd()}…`,
    truncated: true,
  };
}

function TestimonialCard({ item, setShownFullTextIds, shownFullTextIds }: { item: TestimonialItem, shownFullTextIds: number[], setShownFullTextIds: any }) {
  const { shorText, truncated } = clampText(item.text, 240);

  return (
    <article className="break-inside-avoid rounded-[10px] border border-black/4 bg-white px-4 pb-4 pt-4 shadow-[0_0_0_1px_rgba(0,0,0,0.015)] sm:px-3.75 sm:pb-3.5 sm:pt-3.5">
      <div className="flex items-start gap-3">
        <div className="relative h-10.5 w-10.5 shrink-0 overflow-hidden rounded-full bg-[#d9d9d9]">
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            sizes="42px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0">
              <h3 className="truncate text-[13px] font-medium leading-[1.2] tracking-[-0.02em] text-[#374151] sm:text-[16px] mb-1">
                {item.name}
              </h3>
              <p className="truncate text-[11px] font-normal leading-tight tracking-[-0.015em] text-[#708098] sm:text-[14px]">
                {item.role}
              </p>
            </div>

            {item.linkedin ? (
              <Icon
                icon="entypo-social:linkedin-with-circle"
                width="22"
                height="22"
                className="mt-0.5 shrink-0 text-blue-600"
              />
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-[13px] font-normal leading-normal tracking-[-0.02em] text-gray-600 sm:text-[16px]">
          {shownFullTextIds.includes(item.id) ? item?.text : shorText}
        </p>

        {truncated ? (
          <>{shownFullTextIds.includes(item.id) ? <button
            type="button"
            onClick={() => {
              setShownFullTextIds(shownFullTextIds.filter((id: any) => id !== item.id));
            }}
            className="mt-1 cursor-pointer text-[14px] font-normal leading-[1.3] tracking-[-0.015em] text-[#788596] transition-opacity duration-200 hover:opacity-70"
          >
            Read Less
          </button> : <button
            type="button"
            onClick={() => {
              setShownFullTextIds((prev: any) => [...prev, item.id]);
            }}
            className="mt-1 text-[14px] cursor-pointer font-normal leading-[1.3] tracking-[-0.015em] text-[#788596] transition-opacity duration-200 hover:opacity-70"
          >
            Read more
          </button>}
          </>
        ) : null}
      </div>
    </article>
  );
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
                  <TestimonialCard key={item.id} item={item} setShownFullTextIds={setShownFullTextIds} shownFullTextIds={shownFullTextIds} />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-10 hidden sm:grid lg:hidden sm:grid-cols-3 sm:gap-3">
            {mobileColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-3">
                {column.map((item) => (
                  <TestimonialCard key={item.id} item={item} setShownFullTextIds={setShownFullTextIds} shownFullTextIds={shownFullTextIds} />
                ))}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3 sm:hidden">
            {visibleItems.map((item) => (
              <TestimonialCard key={item.id} item={item} setShownFullTextIds={setShownFullTextIds} shownFullTextIds={shownFullTextIds} />
            ))}
          </div>
        </div>

        {!showAll ? (
          <div className="relative bottom-7 flex justify-center lg:mt-0">
            <button
              type="button"
              onClick={() =>
                setShowAll(true)
              }
              className=" px-20 text-[15px] secondary-btn"
            >
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}