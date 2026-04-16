import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import BookCallSection from "./BookCall";

type FooterLink = {
    label: string;
    href: string;
};

type SocialLink = {
    label: string;
    href: string;
    icon: string;
    className?: string;
    size?: number;
};

const leftLinks: FooterLink[] = [
    { label: "Program", href: "/program" },
    { label: "Faculty", href: "/faculty" },
    { label: "About Us", href: "/about-us" },
    { label: "Testimonials", href: "/testimonials" },
];

const rightLinks: FooterLink[] = [
    { label: "Book a Call", href: "/book-a-call" },
    { label: "Blog", href: "/blog" },
    { label: "Free Class", href: "/free-class" },
    { label: "Support", href: "/support" },
];

const socialLinks: SocialLink[] = [
    {
        label: "Facebook",
        href: "https://www.facebook.com/",
        icon: "logos:facebook",
        size: 20,
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/",
        icon: "skill-icons:instagram",
        size: 20,
    },
    {
        label: "TikTok",
        href: "https://www.tiktok.com/",
        icon: "simple-icons:tiktok",
        className: "text-white",
        size: 20,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: "logos:linkedin-icon",
        size: 20,
    },
    {
        label: "Twitter",
        href: "https://x.com/",
        icon: "logos:twitter",
        size: 20,
    },
    {
        label: "YouTube",
        href: "https://www.youtube.com/",
        icon: "logos:youtube-icon",
        size: 20,
    },
];

const legalLinks: FooterLink[] = [
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Legal Notice", href: "/legal-notice" },
];

// function FooterColumn({ links }: { links: FooterLink[] }) {
//     return (
//         <ul className="space-y-[20px] md:space-y-[22px]">
//             {links.map((item) => (
//                 <li key={item.label}>
//                     <Link
//                         href={item.href}
//                         className="inline-block text-[18px] font-medium leading-none tracking-[-0.03em] text-white transition-opacity duration-200 hover:text-primary md:text-[19px] lg:text-[20px]"
//                     >
//                         {item.label}
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     );
// }

// export default function Footer() {
//     return (
//             <footer className=" bg-black text-white ">
//                 <div className="section-container pb-8 pt-12 md:pb-12 md:pt-28">
//                     <div className="grid grid-cols-1 gap-y-12 md:grid-cols-[1.08fr_0.95fr_0.95fr] md:gap-x-10 lg:grid-cols-[1.1fr_0.9fr_0.9fr_1fr] lg:gap-x-14">
//                         <div>
//                             <Link
//                                 href="/"
//                                 className="inline-flex"
//                                 aria-label="Augment Business School"
//                             >
//                                 <Image
//                                     src="/footer-logo.svg"
//                                     alt="Augment Business School"
//                                     width={240}
//                                     height={72}
//                                     className="h-auto w-[175px] sm:w-[190px] md:w-[228px]"
//                                 />
//                             </Link>
//                         </div>

//                         <div>
//                             <FooterColumn links={leftLinks} />
//                         </div>

//                         <div>
//                             <FooterColumn links={rightLinks} />
//                         </div>

//                         <div className="max-w-[290px] text-end">
//                             <h3 className="text-[22px] font-medium leading-[1.08] tracking-[-0.04em] text-white md:text-[23px] lg:text-[24px]">
//                                 Still have questions?
//                             </h3>

//                             <p className="mt-2 text-[17px] font-medium leading-[1.35] tracking-[-0.025em] text-white">
//                                 Use the contact form below.
//                             </p>

//                             <Link
//                                 href="/contact"
//                                 className="mt-7 inline-flex  items-center justify-center rounded-full bg-[#D9F52B] px-12 py-4 text-[15px] contained-btn"
//                             >
//                                 Contact Us
//                             </Link>
//                         </div>
//                     </div>

//                     <div className="mt-14 flex flex-col gap-4 md:mt-16 md:flex-row md:items-center md:gap-7">
//                         <span className="text-[20px] font-medium tracking-[-0.03em] text-white">
//                             Follow us
//                         </span>

//                         <div className="flex items-center gap-[18px] md:gap-[24px]">
//                             {socialLinks.map((item) => (
//                                 <Link
//                                     key={item.label}
//                                     href={item.href}
//                                     aria-label={item.label}
//                                     className="inline-flex items-center justify-center transition-all duration-200 hover:scale-125 hover:opacity-85"
//                                 >
//                                     <Icon
//                                         icon={item.icon}
//                                         className={item.className ?? ""}
//                                         width={item.size ?? 20}
//                                         height={item.size ?? 20}
//                                     />
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>

//                     <div className="mt-8 h-px w-full bg-white/40" />

//                     <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
//                         <p className="text-[12px] font-normal uppercase tracking-[-0.015em] text-white/75 md:text-[14px]">
//                             Fundamental Education
//                         </p>

//                         <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-14 md:justify-end">
//                             {legalLinks.map((item) => (
//                                 <Link
//                                     key={item.label}
//                                     href={item.href}
//                                     className="text-[12px] cursor-pointer font-medium tracking-[-0.02em] text-white/75 transition-opacity duration-200 hover:text-primary md:text-[14px]"
//                                 >
//                                     {item.label}
//                                 </Link>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//     );
// }

function FooterColumn({ links }: { links: FooterLink[] }) {
    return (
        <ul className="space-y-4 sm:space-y-[18px] md:space-y-[22px]">
            {links.map((item) => (
                <li key={item.label}>
                    <Link
                        href={item.href}
                        className="inline-block text-[16px] font-medium leading-none tracking-[-0.03em] text-white transition-opacity duration-200 hover:text-primary sm:text-[17px] md:text-[19px] lg:text-[20px]"
                    >
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default function Footer() {
    return (
        <footer className="bg-black text-white overflow-hidden">
            <div className="section-container pb-8 pt-10 sm:pb-10 sm:pt-12 md:pb-12 md:pt-20 lg:pt-28">
                <div className="grid grid-cols-1 gap-y-10 sm:gap-y-12 md:grid-cols-[1.08fr_0.95fr_0.95fr] md:gap-x-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr_1fr] lg:gap-x-14">
                    <div className="text-center md:text-left">
                        <Link
                            href="/"
                            className="inline-flex"
                            aria-label="Augment Business School"
                        >
                            <Image
                                src="/footer-logo.svg"
                                alt="Augment Business School"
                                width={240}
                                height={72}
                                className="h-auto w-[150px] sm:w-[175px] md:w-[228px]"
                            />
                        </Link>
                    </div>

                    <div className="text-center md:text-left">
                        <FooterColumn links={leftLinks} />
                    </div>

                    <div className="text-center md:text-left">
                        <FooterColumn links={rightLinks} />
                    </div>

                    <div className="mx-auto max-w-[290px] text-center md:col-span-3 md:mx-0 md:max-w-[360px] md:text-left lg:col-span-1 lg:ml-auto lg:text-end">
                        <h3 className="text-[20px] font-medium leading-[1.08] tracking-[-0.04em] text-white sm:text-[21px] md:text-[23px] lg:text-[24px]">
                            Still have questions?
                        </h3>

                        <p className="mt-2 text-[15px] font-medium leading-[1.35] tracking-[-0.025em] text-white sm:text-[16px] md:text-[17px]">
                            Use the contact form below.
                        </p>

                        <Link
                            href="/contact"
                            className="contained-btn mt-6 inline-flex w-full max-w-[220px] items-center justify-center rounded-full bg-[#D9F52B] px-8 py-3 text-[14px] sm:mt-7 sm:w-auto sm:px-12 sm:py-4 sm:text-[15px]"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                <div className="mt-12 flex flex-col items-center gap-4 text-center sm:mt-14 md:mt-16 md:flex-row md:items-center md:gap-7 md:text-left">
                    <span className="text-[18px] font-medium tracking-[-0.03em] text-white sm:text-[20px]">
                        Follow us
                    </span>

                    <div className="flex items-center gap-4 sm:gap-[18px] md:gap-[24px]">
                        {socialLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                aria-label={item.label}
                                className="inline-flex items-center justify-center transition-all duration-200 hover:scale-125 hover:opacity-85"
                            >
                                <Icon
                                    icon={item.icon}
                                    className={item.className ?? ""}
                                    width={item.size ?? 20}
                                    height={item.size ?? 20}
                                />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-7 sm:mt-8 h-px w-full bg-white/40" />

                <div className="mt-6 flex flex-col items-center gap-4 text-center md:mt-7 md:flex-row md:items-center md:justify-between md:text-left">
                    <p className="text-[11px] font-normal uppercase tracking-[-0.015em] text-white/75 sm:text-[12px] md:text-[14px]">
                        Fundamental Education
                    </p>

                    <div className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 md:justify-end md:gap-14">
                        {legalLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="cursor-pointer text-[11px] font-medium tracking-[-0.02em] text-white/75 transition-opacity duration-200 hover:text-primary sm:text-[12px] md:text-[14px]"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}