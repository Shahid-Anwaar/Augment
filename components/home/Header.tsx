"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
};

const DESKTOP_NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Curriculum", href: "#" },
  { label: "Faculty", href: "#" },
  { label: "Community", href: "#" },
  { label: "Free Classes", href: "#" },
  { label: "For Teams", href: "#" },
  { label: "About", href: "#" },
  { label: "Log in", href: "#" },
] as const;

export default function HeaderSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = menuOpen ? "hidden" : originalOverflow;

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuOpen]);

  return (
    <>
      <header className="relative z-40 bg-black text-white">
        <div className="mx-auto max-w-[1560px] px-6 sm:px-8 md:px-10 xl:px-12 py-6 md:py-8">
          <div className="relative flex items-center justify-between ">
            <Link
              href="/"
              className=" hidden min-[1345px]:inline-flex"
              aria-label="Augment Business School"
            >
              <Image
                src="/header-logo.svg"
                alt="Augment Business School"
                width={240}
                height={72}
                className="h-auto w-[105px] sm:w-[120px] md:w-[158px]"
              />
            </Link>

            <Link
              href="/"
              className="inline-flex min-[1345px]:hidden"
              aria-label="Augment Business School"
            >
              <Image
                src="/logo2.webp"
                alt="Augment Business School"
                width={80}
                height={70}
                className="h-auto w-[55px] sm:w-[60px] md:w-[65px]"
              />
            </Link>

            <div className="hidden min-[1345px]:flex items-baseline-last justify-end gap-x-8">
              <nav
                aria-label="Primary navigation"
                className=""
              >
                <ul className="flex items-center gap-6 xl:gap-8">
                  {DESKTOP_NAV_ITEMS.map((item, index) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        className="group inline-flex flex-col items-start text-[15px] font-medium tracking-[-0.02em] text-white/96 transition-colors duration-200 text-nowrap hover:text-white xl:text-[16px]"
                      >
                        <span className="group-hover:text-[#D9F72B]">{item.label}</span>
                        <span
                          className={`mt-[11px] h-[2px] rounded-full bg-[#D9F72B] transition-all duration-300 ${index === 0
                            ? "w-[34px] opacity-100"
                            : "w-0 opacity-0"
                            }`}
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <PrimaryCta href="#" />
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center text-white transition-opacity duration-200 hover:opacity-80 min-[1345px]:hidden"
            >
              <Icon icon="mdi:menu" className="h-[30px] w-[30px]" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black text-white min-[1345px]:hidden">
          <div className="relative mx-auto flex min-h-screen max-w-[1560px] flex-col px-7 pb-7 pt-7 sm:px-10 sm:pb-8 md:px-14 md:pt-8">
            <div className="flex items-start justify-between">
              {/* <Link
                href="#"
                aria-label="Augment home"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center"
              >
                <Icon
                  icon="ph:caret-up-bold"
                  className="h-[34px] w-[34px] rotate-180 text-[#D9F72B] sm:h-9.5 sm:w-9.5"
                />
              </Link> */}
              <Link
                href="/"
                className="inline-flex min-[1345px]:hidden"
                aria-label="Augment Business School"
              >
                <Image
                  src="/logo2.webp"
                  alt="Augment Business School"
                  width={80}
                  height={70}
                  className="h-auto w-[55px] sm:w-[60px] md:w-[65px]"
                />
              </Link>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center text-white transition-opacity duration-200 hover:opacity-80"
              >
                <Icon icon="ph:asterisk-bold" className="h-[30px] w-[30px]" />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="mt-17 flex-1 overflow-y-auto pb-40 sm:mt-[86px] md:mt-[96px]"
            >
              <ul className="space-y-8 sm:space-y-9 md:space-y-10">
                {DESKTOP_NAV_ITEMS.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="inline-block text-[18px] font-medium tracking-[-0.03em] text-white transition-opacity duration-200 hover:opacity-80 sm:text-[20px] md:text-[21px]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pointer-events-none absolute inset-x-0 bottom-7 flex items-end justify-center px-7 sm:bottom-8 sm:px-10 md:px-14">
              <div className="pointer-events-auto">
                <PrimaryCta href="#" mobile />
              </div>

              <div className="pointer-events-auto absolute bottom-[2px] right-7 sm:right-10 md:right-14">
                <button
                  type="button"
                  aria-label="Open support chat"
                  className="inline-flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-black shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-transform duration-300 hover:-translate-y-[1px] sm:h-[54px] sm:w-[54px]"
                >
                  <Icon icon="ph:chat-circle-dots-fill" className="h-[24px] w-[24px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function PrimaryCta({
  href,
  mobile = false,
}: {
  href: string;
  mobile?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`group contained-btn ${mobile
        ? " px-8 text-[14px] sm:px-10"
        : " px-8 py-3 text-[13px] xl:px-10 xl:text-[14px]"
        }`}
    >
      <span className="text-[0.98em] font-semibold uppercase tracking-[0.12em]">
        Enroll Now
      </span>

      <Icon
        icon={"mingcute:arrow-right-fill"}
        width="19"
        height="19"
        className="shrink-0"
      />
    </Link>
  );
}