import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import BookCallSection from "./BookCall";
import Chats from "./Chats";
import CoursesCommunity from "./CoursesCommunity";
import { securityItems } from "@/data/data";
import { DESKTOP_NAV_ITEMS } from "@/data/home";

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
    { label: "Business Coaches", href: "/for-coaches" },
    { label: "Executive Coaches", href: "/for-coaches" },
];

const mainItems: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  // { label: "Solutions", href: "/solutions" },
  { label: "For Coaches", href: "/for-coaches" },
  { label: "For Firms", href: "/for-firms" },
  // { label: "Community", href: "/community" },
  // { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  // { label: "Log in", href: "#" },
];

const rightLinks: FooterLink[] = [
     { label: "Coaches", href: "/for-coaches" },
  { label: "Firms", href: "/for-firms" },
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
    { label: "Privacy Policy", href: "/privacy-policy" },
    // { label: "Legal Notice", href: "/legal-notice" },
    { label: "Terms and conditions", href: "/terms-of-service" },
];

function FooterColumn({ links, title }: { links: FooterLink[], title: string }) {
    return (
        <>
            <p className="mb-5 text-[16px] font-semibold leading-none tracking-[-0.03em] text-white sm:text-[17px] md:text-[18px] lg:text-[22px]">{title}</p>
            <ul className="space-y-1.5 sm:space-y-1.5 xl:space-y-2">
                {links.map((item) => (
                    <li key={item.label}>
                        <Link
                            href={item.href}
                            className="inline-block text-[15px] font-medium leading-none tracking-[-0.03em] text-white/80 transition-opacity duration-200 hover:text-primary sm:text-[16px] md:text-[17px] lg:text-[18px]"
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default function Footer() {
    return (
        <>
            <CoursesCommunity />
            <BookCallSection
                title="Book a Discovery Call With Our Team"
                icon="solar:phone-linear"
                subTitle="Tell us where your business is right now and where you're trying to take it. We'll show you exactly what Supreme Coach looks like in practice and give you an honest answer on whether it's the right fit."
                topClasses="bg-black"
                bottomClasses="bg-black"
            />
            <footer className="bg-black text-white overflow-hidden">
                <div className="section-container mx-auto w-full px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-12 md:pb-12 md:pt-20 lg:px-8 lg:pt-28">
                    <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 xl:grid-cols-[1.5fr_2.8fr_1fr] xl:gap-x-14">

                        {/* Logo / About */}
                        <div className="order-1 text-center sm:text-left">
                            <Link
                                href="/"
                                className="inline-flex"
                                aria-label="Supreme Coach Business School"
                            >
                                <Image
                                    src="/logos/s coach logo full c.svg"
                                    alt="Supreme Coach Business School"
                                    width={240}
                                    height={72}
                                    className="h-auto w-[150px] sm:w-[175px] md:w-[210px] lg:w-[228px]"
                                />
                            </Link>

                            <p className="mx-auto mt-3 max-w-[420px] text-[14px] font-medium leading-[1.45] tracking-[-0.025em] text-white/90 sm:mx-0 sm:text-[15px] md:text-[16px]">
                                Supreme Coach helps coaches and firms launch courses, build communities, and sell from one simple platform.
                            </p>
                        </div>

                        {/* Footer Links */}
                        <div className="order-3 grid w-full grid-cols-1 gap-8 sm:col-span-2 sm:grid-cols-3 sm:gap-6 xl:order-2 xl:col-span-1">
                            <div className="text-center xl:text-left">
                                <FooterColumn title="Explore More" links={mainItems} />
                            </div>

                            <div className="text-center xl:text-left">
                                <FooterColumn title="Solutions For" links={leftLinks} />
                            </div>

                            <div className="text-center xl:text-left">
                                <FooterColumn title="Software For" links={rightLinks} />
                            </div>
                        </div>

                        {/* Contact CTA */}
                        <div className="order-2 text-center sm:ml-auto sm:max-w-[360px] sm:text-right xl:order-3">
                            <h3 className="text-[20px] font-medium leading-[1.12] tracking-[-0.04em] text-white sm:text-[21px] md:text-[23px] lg:text-[24px]">
                                Still have questions?
                            </h3>

                            <p className="mt-2 text-[15px] font-medium leading-[1.4] tracking-[-0.025em] text-white sm:text-[16px] md:text-[17px]">
                                Use the contact form below.
                            </p>

                            <Link
                                href="/contact-sales"
                                className="contained-btn mx-auto mt-6 inline-flex w-full max-w-[220px] justify-center px-4 sm:ml-auto sm:mr-0 sm:mt-7 sm:w-auto sm:px-8"
                            >
                                Contact Sales
                            </Link>
                        </div>
                    </div>

                    {/* Social + Security */}
                    <div className="mt-8 flex flex-col items-center justify-center gap-7 sm:mt-10 lg:flex-row lg:items-end lg:justify-between">
                        <div className="flex flex-col items-center gap-3 text-center sm:gap-4 md:flex-row md:gap-6 md:text-left">
                            <span className="text-[15px] font-medium tracking-[-0.03em] text-white sm:text-[17px] md:text-[18px] lg:text-[20px]">
                                Follow us
                            </span>

                            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-5 lg:gap-6">
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
                                            width={item.size ?? 18}
                                            height={item.size ?? 18}
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="flex max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-4 sm:gap-x-5 md:gap-x-6 lg:justify-end lg:gap-x-5">
                            {securityItems.map((item, i) => (
                                <div
                                    key={item.name}
                                    className="flex flex-col items-center justify-center text-center"
                                >
                                    <img
                                        src={item.src}
                                        alt={item.name}
                                        width={item.width}
                                        height={item.height}
                                        className={`h-7 w-7 object-contain sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 ${i !== 4 ? "opacity-[0.6]" : ""
                                            }`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-7 h-px w-full bg-white/40 sm:mt-8" />

                    {/* Copyright + Legal */}
                    <div className="mt-6 flex flex-col items-center gap-4 text-center md:mt-7 md:flex-row md:items-center md:justify-between md:text-left">
                        <p className="text-[11px] font-normal tracking-[-0.015em] text-white/75 sm:text-[12px] md:text-[14px]">
                            Copyright 2026 © Supreme Coach, Inc. All rights reserved.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 sm:gap-x-8 md:justify-end md:gap-x-10 lg:gap-x-14">
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
        </>
    );
}