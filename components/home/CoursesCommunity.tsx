import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import TrustBadgesSection from './TrustBadgesSeciton'

export default function CoursesCommunity() {
    const tempArray = [
        "/external-images/img-9408e7b0.webp",
        "/external-images/img-6b4723c1.webp",
        "/external-images/img-ec59bc6d.webp",
        "/external-images/img-539641b0.webp",
        "/external-images/img-c606fe40.webp"
    ]
    return (
        <div className="overflow-hidden bg-black text-white">
            <div className="section-container section-spacing pb-0 text-center">
                <h2 className="section-title mx-auto text-white">
                    Better Client Relationships. Data Backed Results. Predictable Business Growth.
                </h2>
                <p className="section-description mx-auto text-white/90">
                   Supreme Coach designs and builds the complete infrastructure behind your coaching practice  so you attract the right clients, deliver an exceptional experience, and grow a business that runs without you holding it together.
                </p>
                <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
                    <Link
                        href="/"
                        className="group contained-btn inline-flex w-full max-w-[260px] justify-center px-8 text-[14px] sm:w-auto sm:max-w-none sm:px-10"
                    >
                        <span className="text-[0.98em] font-semibold uppercase tracking-[0.12em]">
                            Book a Discovery Call
                        </span>

                        <Icon
                            icon={"solar:phone-linear"}
                            width="19"
                            height="19"
                            className="shrink-0"
                        />
                    </Link>

                    <Link
                        href="/contact-sales"
                        className="closed-btn inline-flex w-full max-w-[260px] justify-center px-7 py-3 sm:w-auto sm:max-w-none"
                    >
                        Talk to Our Team
                    </Link>
                </div>
                <TrustBadgesSection />

                {/* <div className="mt-6 grid grid-cols-5 gap-1 sm:mt-7 sm:gap-1.5 lg:mt-8 lg:flex lg:max-w-2xl lg:justify-center lg:gap-3 lg:mx-auto">
                    {tempArray.map((item, index) => (
                        <div
                            key={index}
                            className="relative mx-auto h-14 w-11 shrink-0 sm:h-16 sm:w-13 lg:h-28 lg:w-24"
                        >
                            <Image
                                src={item}
                                alt={`badge-${index}`}
                                fill
                                sizes="(max-width: 640px) 44px, (max-width: 1024px) 52px, 96px"
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}
