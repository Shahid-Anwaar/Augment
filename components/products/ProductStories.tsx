
"use client";
import CustomEmblaCarousel from '../home/CustomCarosal';
import { Icon } from '@iconify/react';
import { FlipStudentCard } from '../community/StudentDirectory';
import { students } from '@/data/data';

export default function ProductStories() {
    return (
        <section className="bg-black py-8 sm:py-10 md:py-12 lg:py-8 xl:py-10">
            <div className="mx-auto w-full max-w-400 px-4 sm:px-5 md:px-6 lg:px-0">
                <div className="relative text-center">
                    <div className="mt-4 section-container py-0 sm:mt-6 md:mt-8 lg:mt-10">
                        <h3 className="text-center text-[15px] tracking-[-0.03em] text-white/70 sm:text-[16px] md:text-start md:text-[17px]">
                            Students
                        </h3>
                        <div className="mt-2 h-0.5 w-full bg-white/90 sm:mt-1" />
                    </div>

                    <CustomEmblaCarousel
                        CustomCard={(item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="box-border min-w-0 shrink-0 grow-0 basis-[86%] px-1 sm:basis-[52%] sm:px-1.5 md:basis-[42%] md:px-2 lg:basis-[19%]"
                                >
                                    <div className="overflow-hidden rounded-[16px] border-2 border-[#474747] sm:rounded-[18px]">
                                        {FlipStudentCard(item)}
                                    </div>
                                </div>
                            );
                        }}
                        isAutoplay={false}
                        items={students}
                        options={{ loop: true, align: "center", skipSnaps: false }}
                        wrapperClassName="mt-4 min-h-0 bg-transparent mb-20 sm:mt-6 sm:mb-24 md:mt-8 md:mb-28 lg:mt-10"
                        CustomButtonWrapper={(onPrevClick, onNextClick) => {
                            return (
                                <div className="absolute -bottom-12 flex w-full items-center justify-center gap-3 sm:-bottom-14 sm:gap-4 md:-bottom-16 lg:-bottom-18">
                                    <button
                                        type="button"
                                        onClick={onPrevClick}
                                        aria-label="Previous testimonial"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-[#181818] text-white backdrop-blur-sm transition duration-300 hover:scale-[1.04] hover:border-white hover:bg-white hover:text-black sm:h-11 sm:w-11"
                                    >
                                        <Icon icon="lucide:chevron-left" className="h-5 w-5" />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={onNextClick}
                                        aria-label="Next testimonial"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 bg-[#181818] text-white backdrop-blur-sm transition duration-300 hover:scale-[1.04] hover:border-white hover:bg-white hover:text-black sm:h-11 sm:w-11"
                                    >
                                        <Icon icon="lucide:chevron-right" className="h-5 w-5" />
                                    </button>
                                </div>
                            );
                        }}
                    />
                </div>
            </div>
        </section>
    );
}