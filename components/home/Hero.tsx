import Image from "next/image";
import Link from "next/link";

const logos = [
  "https://augment.org/_next/image?q=75&url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252Fdc89bc3cd7724a2aaf01a829033b7459&w=128",
  "https://augment.org/_next/image?q=75&url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252Fdc89bc3cd7724a2aaf01a829033b7459&w=128",
  "https://augment.org/_next/image?q=75&url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252Fdc89bc3cd7724a2aaf01a829033b7459&w=128",
  "https://augment.org/_next/image?q=75&url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252Fdc89bc3cd7724a2aaf01a829033b7459&w=128",
  "https://augment.org/_next/image?q=75&url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252F06bef9fc17084d87acf59d651c6943b6&w=1920",
  "https://augment.org/_next/image?q=75&url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252Fdc89bc3cd7724a2aaf01a829033b7459&w=128",
];

const mentorCards = [
  {
    name: "Founder",
    role: "Wikipedia",
    image:
      "https://augment.org/_next/image?q=75&url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252Fa0e282e92c21426cb72a9d5c27a9178e&w=3840",
  },
  {
    name: "Founder",
    role: "Waze",
    image:
      "https://augment.org/_next/image?q=75&url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252F5d4d10c4587c4840beaaf4e40c00bfa2&w=3840",
  },
  {
    name: "Founder",
    role: "Siri",
    image:
      "https://augment.org/_next/image?q=75&url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252F62ad1505398547cabae48191fe09f1f2&w=3840",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* =====================================================
          PAGE WRAPPER
          Full black background like the live Augment homepage
          ===================================================== */}
      <div className="mx-auto w-full max-w-[1440px] px-3 pb-12 pt-3 sm:px-4 lg:px-5">
        {/* =====================================================
            HERO SHELL
            Large rounded outer frame that contains header + hero
            ===================================================== */}
        <section className="overflow-hidden rounded-[30px] border border-white/10 bg-[#080808] shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:rounded-[34px] lg:rounded-[38px]">
          {/* =====================================================
              HEADER
              Same style: logo left, nav center, CTA right
              Mobile switches to hamburger button
              ===================================================== */}
          <header className="relative z-20 px-4 pt-4 sm:px-6 sm:pt-5 lg:px-8 lg:pt-6">
            <div className="flex h-[64px] items-center justify-between rounded-full border border-white/10 bg-black/55 px-4 backdrop-blur-xl sm:h-[68px] sm:px-5 lg:h-[72px] lg:px-6">
              {/* Logo */}
              <Link href="/" className="flex shrink-0 items-center">
                <Image
                  src="https://augment.org/_next/image?q=75&url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252Fdc89bc3cd7724a2aaf01a829033b7459&w=128"
                  alt="Augment"
                  width={118}
                  height={28}
                  className="h-auto w-[96px] sm:w-[108px] lg:w-[118px]"
                  priority
                />
              </Link>

              {/* Desktop nav */}
              <nav className="hidden items-center gap-7 xl:flex">
                {/* Navigation links matching the website structure */}
                {[
                  "Home",
                  "Curriculum",
                  "Faculty",
                  "Community",
                  "Free Classes",
                  "For Teams",
                  "About",
                  "Log in",
                ].map((item) => (
                  <Link
                    key={item}
                    href="#"
                    className="text-[13px] font-medium tracking-[0.02em] text-white/78 transition-colors duration-200 hover:text-white"
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              {/* Right side CTA desktop */}
              <div className="hidden xl:flex">
                <Link
                  href="#"
                  className="inline-flex h-[44px] items-center justify-center rounded-full bg-[#D9FF3F] px-6 text-[12px] font-extrabold uppercase tracking-[0.08em] text-black transition-transform duration-200 hover:scale-[1.02]"
                >
                  Enroll Now
                </Link>
              </div>

              {/* Mobile menu button */}
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 xl:hidden"
              >
                {/* <Menu className="h-5 w-5" /> */}
              </button>
            </div>
          </header>

          {/* =====================================================
              HERO CONTENT AREA
              Two-column layout on desktop, stacked on mobile/tablet
              ===================================================== */}
          <div className="relative px-4 pb-5 pt-7 sm:px-6 sm:pb-6 sm:pt-10 lg:px-8 lg:pb-8 lg:pt-12">
            {/* Soft glow backgrounds to mimic premium hero lighting */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_18%_22%,rgba(190,90,60,0.30),transparent_28%),radial-gradient(circle_at_55%_18%,rgba(255,255,255,0.06),transparent_20%),radial-gradient(circle_at_82%_18%,rgba(90,60,40,0.28),transparent_24%)]" />

            <div className="relative grid items-stretch gap-5 lg:grid-cols-[minmax(0,1.08fr)_390px] xl:grid-cols-[minmax(0,1.08fr)_420px] xl:gap-6">
              {/* =================================================
                  LEFT HERO PANEL
                  Main heading, description, features, CTAs, logos
                  ================================================= */}
              <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01))] p-5 sm:rounded-[30px] sm:p-7 lg:min-h-[650px] lg:p-8 xl:min-h-[690px] xl:p-10">
                {/* Eyebrow */}
                <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70 sm:mb-5">
                  Entrepreneur Education
                </div>

                {/* Headline */}
                <h1 className="max-w-[760px] text-[34px] font-black leading-[0.95] tracking-[-0.045em] text-white sm:text-[46px] md:text-[58px] lg:text-[72px] xl:text-[82px]">
                  The MBA for
                  <br />
                  Entrepreneurs
                </h1>

                {/* Description */}
                <p className="mt-5 max-w-[720px] text-[14px] leading-[1.65] text-white/72 sm:mt-6 sm:text-[15px] md:text-[16px] lg:max-w-[680px] lg:text-[17px]">
                  Join the Business School for Entrepreneurs. Built by the
                  founders of YouTube, Waze, Siri and Wikipedia. For the
                  founders of tomorrow.
                </p>

                {/* Feature pills */}
                <div className="mt-6 flex flex-wrap gap-2.5 sm:mt-7 sm:gap-3">
                  {[
                    "Online",
                    "Bite-sized Lessons",
                    "Certificate",
                  ].map((item) => (
                    <div
                      key={item}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 text-[12px] font-semibold uppercase tracking-[0.08em] text-white/88 sm:px-5"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center">
                  <Link
                    href="#"
                    className="inline-flex h-[52px] items-center justify-center rounded-full bg-[#D9FF3F] px-7 text-[13px] font-extrabold uppercase tracking-[0.08em] text-black transition-transform duration-200 hover:scale-[1.02] sm:h-[56px] sm:px-8"
                  >
                    Enroll Now
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/12 bg-white/5 px-7 text-[13px] font-bold uppercase tracking-[0.08em] text-white transition-colors duration-200 hover:bg-white/10 sm:h-[56px] sm:px-8"
                  >
                    Watch Free Class
                  </Link>
                </div>

                {/* Logo strip */}
                <div className="mt-9 rounded-[22px] border border-white/10 bg-white/[0.04] px-4 py-4 sm:mt-10 sm:px-5 sm:py-5 lg:mt-12">
                  <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45 sm:mb-5">
                    Built by founders of
                  </p>
                  <div className="grid grid-cols-2 items-center gap-x-5 gap-y-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
                    {logos.map((logo, index) => (
                      <div
                        key={logo + index}
                        className="flex h-[28px] items-center justify-start opacity-80 grayscale transition-opacity duration-200 hover:opacity-100"
                      >
                        <Image
                          src={logo}
                          alt="brand logo"
                          width={120}
                          height={28}
                          className="h-auto max-h-[22px] w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom preview video frame */}
                <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-[#111111] sm:mt-7 lg:mt-8">
                  <div className="relative aspect-[16/8.2] w-full">
                    <Image
                      src="https://augment.org/_next/image?q=75&url=https%3A%2F%2Fcdn.builder.io%2Fapi%2Fv1%2Fimage%2Fassets%252F20c9f56ee0104a98bd873ddbe200463a%252Fb5af1d4b8da24517ac97335c5a3e1fb8&w=3840"
                      alt="Preview video"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/18" />
                    <button
                      type="button"
                      aria-label="Play video"
                      className="absolute left-1/2 top-1/2 inline-flex h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/45 backdrop-blur-md transition-transform duration-200 hover:scale-105"
                    >
                      <span className="ml-1 inline-block h-0 w-0 border-b-[12px] border-l-[18px] border-t-[12px] border-b-transparent border-l-white border-t-transparent" />
                    </button>
                  </div>
                </div>
              </div>

              {/* =================================================
                  RIGHT HERO STACK
                  Portrait mentor cards like the original homepage
                  ================================================= */}
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:gap-5">
                {mentorCards.map((card, index) => (
                  <article
                    key={card.name + index}
                    className={`group relative overflow-hidden rounded-[26px] border border-white/10 bg-[#101010] ${
                      index === 0
                        ? "sm:col-span-2 lg:col-span-1"
                        : "sm:col-span-1 lg:col-span-1"
                    }`}
                  >
                    <div className="relative aspect-[0.85/1] min-h-[250px] sm:min-h-[320px] lg:min-h-[210px] xl:min-h-[220px]">
                      <Image
                        src={card.image}
                        alt={card.role}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.18)_35%,rgba(0,0,0,0.76)_100%)]" />

                      {/* Top tag */}
                      <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/90 backdrop-blur-md sm:left-4 sm:top-4">
                        Instructor
                      </div>

                      {/* Bottom content */}
                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/60">
                          {card.name}
                        </p>
                        <h3 className="mt-1 text-[24px] font-black leading-[0.95] tracking-[-0.04em] text-white sm:text-[28px] xl:text-[30px]">
                          {card.role}
                        </h3>
                        <div className="mt-4 flex items-center justify-between gap-3">
                          <span className="text-[13px] leading-none text-white/70">
                            Learn from industry-leading founders
                          </span>
                          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D9FF3F] text-[20px] font-light text-black">
                            ↗
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
