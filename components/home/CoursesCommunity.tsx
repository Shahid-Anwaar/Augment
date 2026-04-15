import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function CoursesCommunity() {
    const tempArray = [
        "https://www.thinkific.com/wp-content/uploads/2026/02/G2BestSoftware2026-Badge-Global-Canadian-260x300.png",
        "https://www.thinkific.com/wp-content/uploads/2026/02/G2BestSoftware2026-Badge-Persona-EducationProducts-260x300.png",
        "https://www.thinkific.com/wp-content/uploads/2025/05/TrustRadius-BuyersChoice-2026-150x150.png",
        "https://www.thinkific.com/wp-content/uploads/2026/02/G2users-love-us-258x300.png",
        "https://www.thinkific.com/wp-content/uploads/2025/05/g2-momentum-leader-2026-261x300.png"
    ]
    return (
        <div className="bg-black text-white">
            <div className="section-container section-spacing text-center">
                <h2 className='section-title text-white max-w-150 mx-auto'>
                    Courses. Community. Commerce. We do them better.
                </h2>
                <p className='section-description mx-auto max-w-200'>
                    We can help you launch and sell online learning experiences that drive revenue and retention.
                    Talk to one of our team members today.
                </p>
                <div className="flex justify-center items-center gap-3 mt-5">
                    <Link
                        href="/"
                        className={`group contained-btn ${true
                            ? " px-8 text-[14px] sm:px-10"
                            : " px-8 py-3 text-[13px] xl:px-10 xl:text-[14px]"
                            }`}
                    >
                        <span className="text-[0.98em] font-semibold uppercase tracking-[0.12em]">
                            Talk to Sales
                        </span>

                        <Icon
                            icon={"mingcute:arrow-right-fill"}
                            width="19"
                            height="19"
                            className="shrink-0"
                        />
                    </Link>
                    <Link
                        href="#"
                        className="closed-btn px-7 py-3"
                    >
                        Explore integrations
                    </Link>
                </div>
                <div className="flex gap-3 max-w-2xl mx-auto mt-8">
                    {tempArray.map((item, index) => (
                        <div key={index} className="relative h-28 w-24 shrink-0 mx-auto">
                            <Image
                                src={item}
                                alt={`badge-${index}`}
                                fill
                                sizes="42px"
                                className="object-cover h-full w-auto"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
