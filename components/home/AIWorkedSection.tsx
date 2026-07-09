import Image from "next/image";
import BrainGrid from "./BrainGrid";
import CustomLink from "../custom/CustomLink";

const footerImage =
  "/external-images/img-52ea6f0c.webp";

function ClickUpStyleLogo() {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] sm:h-[86px] sm:w-[86px]">
      <svg
        width="46"
        height="46"
        viewBox="0 0 46 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 19.5L23 8L36 19.5"
          stroke="url(#topGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 28L23 38L36 28"
          stroke="url(#bottomGradient)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="topGradient" x1="10" y1="8" x2="36" y2="19.5">
            <stop stopColor="#FF2AAE" />
            <stop offset="0.5" stopColor="#FF5C35" />
            <stop offset="1" stopColor="#FFB000" />
          </linearGradient>

          <linearGradient id="bottomGradient" x1="10" y1="28" x2="36" y2="38">
            <stop stopColor="#8B5CF6" />
            <stop offset="0.5" stopColor="#168BFF" />
            <stop offset="1" stopColor="#00C2FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function AiPoweredWorkSection() {
  return (
    <section className="bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto section-container pt-3 max-w-[1360px]">
        <div className="relative overflow-hidden rounded-t-[28px] bg-[radial-gradient(circle_at_20%_85%,#087BFF_0%,rgba(8,123,255,0.92)_18%,rgba(117,59,255,0.95)_38%,rgba(238,36,161,0.96)_68%,#FF5A2D_100%)] px-5 pt-10 text-center text-white sm:px-8 sm:pt-12 lg:pt-12">
          {/* Grain / soft texture */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.45)_1px,transparent_0)] [background-size:4px_4px]" />

          

          {/* Heading */}
          <h2 className="relative z-10 mx-auto max-w-[820px] font-bold text-white section-title">
            All your work, all your people,
            <span className="block">all powered by AI</span>
          </h2>

          {/* Button */}
          <div className="relative z-10 mt-7">
            <CustomLink
                            href="/contact-sales"
                            variant="closed"
                            text="Get started FREE"
                        />
          </div>

          {/* Product image */}
          <div className="relative z-10 mx-auto mt-12 max-w-[1220px] sm:mt-14 lg:mt-12">
            <div className="relative h-[230px] overflow-hidden sm:h-[330px] md:h-[420px] lg:h-[480px]">
              <Image
                src={footerImage}
                alt="AI powered workspace dashboard preview"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-contain object-top"
              />
            </div>
          </div>

          {/* Bottom blue fade like screenshot */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-[160px] bg-gradient-to-t from-[#0F88FF]/85 via-[#0F88FF]/35 to-transparent" />
        </div>
         <BrainGrid classes="rounded-t-0 rounded-b-[28px]" />
      </div>
     
    </section>
  );
}