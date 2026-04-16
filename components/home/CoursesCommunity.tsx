import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

export default function CoursesCommunity() {
    const tempArray = [
        "https://www.thinkific.com/wp-content/uploads/2026/02/G2BestSoftware2026-Badge-Global-Canadian-260x300.png",
        "https://www.thinkific.com/wp-content/uploads/2026/02/G2BestSoftware2026-Badge-Persona-EducationProducts-260x300.png",
        "https://www.thinkific.com/wp-content/uploads/2025/05/TrustRadius-BuyersChoice-2026-150x150.png",
        "https://www.thinkific.com/wp-content/uploads/2026/02/G2users-love-us-258x300.png",
        "https://www.thinkific.com/wp-content/uploads/2025/05/g2-momentum-leader-2026-261x300.png"
    ]
    return (
        // <div className="bg-black text-white">
        //     <div className="section-container section-spacing text-center">
        //         <h2 className='section-title text-white max-w-150 mx-auto'>
        //             Courses. Community. Commerce. We do them better.
        //         </h2>
        //         <p className='section-description mx-auto max-w-200'>
        //             We can help you launch and sell online learning experiences that drive revenue and retention.
        //             Talk to one of our team members today.
        //         </p>
        //         <div className="flex justify-center items-center gap-3 mt-5">
        //             <Link
        //                 href="/"
        //                 className={`group contained-btn ${true
        //                     ? " px-8 text-[14px] sm:px-10"
        //                     : " px-8 py-3 text-[13px] xl:px-10 xl:text-[14px]"
        //                     }`}
        //             >
        //                 <span className="text-[0.98em] font-semibold uppercase tracking-[0.12em]">
        //                     Talk to Sales
        //                 </span>

        //                 <Icon
        //                     icon={"mingcute:arrow-right-fill"}
        //                     width="19"
        //                     height="19"
        //                     className="shrink-0"
        //                 />
        //             </Link>
        //             <Link
        //                 href="#"
        //                 className="closed-btn px-7 py-3"
        //             >
        //                 Explore integrations
        //             </Link>
        //         </div>
        //         <div className="hidden lg:flex gap-3 max-w-2xl mx-auto mt-8">
        //             {tempArray.map((item, index) => (
        //                 <div key={index} className="relative h-28 w-24 shrink-0 mx-auto">
        //                     <Image
        //                         src={item}
        //                         alt={`badge-${index}`}
        //                         fill
        //                         sizes="42px"
        //                         className="object-cover h-full w-auto"
        //                         unoptimized
        //                     />
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
        <div className="overflow-hidden bg-black text-white">
    <div className="section-container section-spacing text-center">
        <h2 className="section-title mx-auto max-w-[22rem] text-white sm:max-w-[32rem] lg:max-w-150">
            Courses. Community. Commerce. We do them better.
        </h2>

        <p className="section-description mx-auto max-w-[36rem] text-white/90 sm:max-w-[42rem] lg:max-w-200">
            We can help you launch and sell online learning experiences that drive revenue and retention.
            Talk to one of our team members today.
        </p>

        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
            <Link
                href="/"
                className="group contained-btn inline-flex w-full max-w-[260px] justify-center px-8 text-[14px] sm:w-auto sm:max-w-none sm:px-10"
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
                className="closed-btn inline-flex w-full max-w-[260px] justify-center px-7 py-3 sm:w-auto sm:max-w-none"
            >
                Explore integrations
            </Link>
        </div>

        <div className="mt-6 grid grid-cols-5 gap-1 sm:mt-7 sm:gap-1.5 lg:mt-8 lg:flex lg:max-w-2xl lg:justify-center lg:gap-3 lg:mx-auto">
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
</div>
    </div>
</div>
    )
}
