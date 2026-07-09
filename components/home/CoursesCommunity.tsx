import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'
import TrustBadgesSection from './TrustBadgesSeciton'
import CustomLink from '../custom/CustomLink'

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
            <div className="section-container section-spacing pb-0 pt-8 text-center sm:pt-16 lg:pt-20">
                <h2 className="section-title mx-auto text-white">
                    Better Client Relationships. Data Backed Results. Predictable Business Growth.
                </h2>

                <p className="section-description mx-auto mt-3 max-w-[900px] text-white/90 sm:mt-4">
                    Supreme Coach designs and builds the complete infrastructure behind your
                    coaching practice so you attract the right clients, deliver an exceptional
                    experience, and grow a business that runs without you holding it together.
                </p>

                <div className="mt-4 flex flex-col items-center justify-center gap-2.5 sm:mt-5 sm:flex-row sm:flex-wrap sm:gap-3">
                    <CustomLink
                        href="/"
                        text="Book a Discovery Call"
                        variant="contained"
                        showIcon
                        icon="solar:phone-linear"
                    />
                    <CustomLink
                        href="/contact-sales"
                        variant="closed"
                        text="Talk to Our Team"
                    />
                </div>

                <div className="mt-6 sm:mt-8">
                    <TrustBadgesSection />
                </div>
            </div>
        </div>
    )
}
