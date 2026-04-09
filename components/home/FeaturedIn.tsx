"use client";

import Image from "next/image";

export default function FeaturedInSection() {
  return (
    <section className="bg-black px-4 pb-14 pt-6 sm:px-6 sm:pb-16 md:px-8 md:pb-20 lg:px-10 lg:pb-24">
      <div className="mx-auto max-w-[1268px]">
        <div className="overflow-hidden rounded-[28px] bg-[linear-gradient(90deg,#151515_0%,#171717_50%,#141414_100%)] px-6 py-8 sm:px-8 sm:py-10 md:rounded-[32px] md:px-12 md:py-12 lg:px-[72px] lg:py-[30px]">
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-white/60 sm:text-[12px]">
            Featured In
          </p>

          <div className="mt-6 flex justify-center sm:mt-7 lg:mt-6">
            <div className="relative w-full max-w-235">
              <Image
                src="/companies.svg"
                alt="TechCrunch, Forbes and Bloomberg logos"
                width={940}
                height={104}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>

          <p className="mx-auto mt-8 max-w-[860px] text-center font-serif text-[24px] font-[100] leading-[1.3] tracking-[-0.03em] text-white/90 sm:mt-9 sm:text-[28px] md:mt-10 md:text-[34px] lg:mt-8 lg:text-[27px] lg:leading-[1.28]">
            &quot;Augment is building a curriculum tailor-made for entrepreneurs&quot;
          </p>
        </div>
      </div>
    </section>
  );
}