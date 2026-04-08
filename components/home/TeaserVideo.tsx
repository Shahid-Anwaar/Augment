"use client";

import Link from "next/link";

const TEASER_WISTIA_ID = "2cf0n0g1bd";

export default function TeaserSection() {
  return (
    <section className="overflow-hidden bg-black px-4 pb-20 pt-10 md:px-6 md:pb-24 md:pt-12">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          {/* <p className="text-[14px] font-medium uppercase tracking-[0.06em] text-white">
            TEASER
          </p>

          <h2 className="mt-4 text-[34px] font-normal leading-[1.04] tracking-[-0.06em] text-white sm:text-[48px] md:text-[58px]">
            Learn from the Best in Business
          </h2> */}
          <p className="section-label">
             TEASER
          </p>

          <h2 className="mt-6 text-white section-title">
            Learn from the Best in Business
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-280">
          <div className="overflow-hidden rounded-[28px] bg-[#111] shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <iframe
              className="aspect-video w-full overflow-hidden rounded-[28px]"
              src={`https://fast.wistia.net/embed/iframe/${TEASER_WISTIA_ID}`}
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="https://s13rwwhxhl9.typeform.com/to/d2IccJb1"
            target="_blank"
            className="px-7 py-4 contained-btn"
          >
            Watch Free Class
          </Link>
        </div>
      </div>
    </section>
  );
}