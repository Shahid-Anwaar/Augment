"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { testimonials, type TestimonialItem } from "@/data/home";

const INITIAL_VISIBLE = 12;
const LOAD_MORE_COUNT = 8;

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
    <article className="break-inside-avoid rounded-[10px] border border-black/[0.04] bg-white px-4 pb-4 pt-4 shadow-[0_0_0_1px_rgba(0,0,0,0.015)] sm:px-[15px] sm:pb-[14px] sm:pt-[15px]">
      <div className="flex items-start gap-3">
        <div className="relative h-[42px] w-[42px] shrink-0 overflow-hidden rounded-full bg-[#d9d9d9]">
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
              <h3 className="truncate text-[13px] font-medium leading-[1.2] tracking-[-0.02em] text-[#374151] sm:text-[15px] mb-1">
                {item.name}
              </h3>
              <p className="truncate text-[11px] font-normal leading-[1.25] tracking-[-0.015em] text-[#708098] sm:text-[12px]">
                {item.role}
              </p>
            </div>

            {item.linkedin ? (
              <Icon
                icon="logos:linkedin-icon"
                width="18"
                height="18"
                className="mt-[2px] shrink-0"
              />
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <p className="text-[13px] font-normal leading-[1.5] tracking-[-0.02em] text-[#374151] sm:text-[14px]">
          {shownFullTextIds.includes(item.id) ? item?.text : shorText}
        </p>

        {truncated ? (
          <>{shownFullTextIds.includes(item.id) ? <button
            type="button"
            onClick={() => {
              setShownFullTextIds(shownFullTextIds.filter((id: any) => id !== item.id));
            }}
            className="mt-1 text-[12px] font-normal leading-[1.3] tracking-[-0.015em] text-[#788596] transition-opacity duration-200 hover:opacity-70"
          >
            Read Less
          </button> : <button
            type="button"
            onClick={() => {
              setShownFullTextIds((prev: any) => [...prev, item.id]);
            }}
            className="mt-1 text-[12px] font-normal leading-[1.3] tracking-[-0.015em] text-[#788596] transition-opacity duration-200 hover:opacity-70"
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
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);
  const [shownFullTextIds, setShownFullTextIds] = useState([]);

  console.log("ids.....", shownFullTextIds);


  const visibleItems = testimonials.slice(0, visibleCount);

  const desktopColumns = useMemo(
    () => splitIntoColumns(visibleItems, 4),
    [visibleItems]
  );

  const mobileColumns = useMemo(
    () => splitIntoColumns(visibleItems, 3),
    [visibleItems]
  );

  const canLoadMore = visibleCount < testimonials.length;

  return (
    <section className="bg-[#f3f4f6]">
      <div className="mx-auto w-full max-w-[1280px] px-4 pb-14 pt-14 sm:px-6 md:px-8 lg:px-10 lg:pb-[72px] lg:pt-[68px]">
        <div className="text-center">
          <p className="section-label text-black">
            Our Community
          </p>
          <h2 className="mt-4 text-black section-title">
            Student Testimonials
          </h2>
        </div>

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

        {canLoadMore ? (
          <div className="mt-8 flex justify-center lg:mt-10">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + LOAD_MORE_COUNT, testimonials.length)
                )
              }
              className="inline-flex h-[52px] min-w-[256px] items-center justify-center rounded-full border border-black bg-[#f4f4f1] px-10 text-[15px] font-bold uppercase tracking-[0.08em] text-black transition-all duration-200 hover:scale-[1.01] hover:bg-white"
            >
              Load More
            </button>
          </div>
        ) : null}
      </div>
    </section>
  );
}