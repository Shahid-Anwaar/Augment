import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import CustomLink from "../custom/CustomLink";

export default function ProductsHeroSection() {
    return (
        <section className="bg-white">
            <div className="section-container relative pb-3 sm:pb-5 md:pb-6 lg:pb-7 xl:pb-8 pt-32 ">
                <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(520px,1fr)] lg:gap-10 xl:gap-14">
                    <div className=" text-center lg:text-left">
                        <p className="section-label section-label-border text-black">
                            Supreme Coach
                        </p>

                        <h1 className="section-title hero-title  text-black lg:max-w-180">
                            Deployed on Your Servers. Owned by You.
                        </h1>

                        <p className="section-description mx-auto mt-5 max-w-2xl text-black lg:mx-0 lg:mt-6 lg:max-w-170">
                            Supreme Coach is not software you subscribe to. We are a specialist build-and-deploy service for coaching businesses. We take our proven coaching infrastructure frameworks — refined across years of working inside coaching businesses — customise every component for your brand, audience, and methodology, and deploy everything on your own servers. You get battle-tested foundations with full custom precision. And you own all of it permanently.
                        </p>

                        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:mt-8 lg:justify-start">
                            <CustomLink
                                href="/"
                                text="Book A Strategy Call"
                                variant="contained"
                                showIcon
                                icon="solar:phone-linear"
                            />
                            <CustomLink
                                href="/pricing"
                                variant="outlined"
                                text=" See Our Project Investment Levels"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-150 overflow-hidden rounded-[14px] bg-[#f3f3f3] sm:rounded-[18px] lg:rounded-[20px]">
                            <Image
                                src="/external-images/img-36f1a8bd.webp"
                                alt="Supreme Coach online courses dashboard on laptop"
                                width={1200}
                                height={760}
                                unoptimized
                                className="h-auto w-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}