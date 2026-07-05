import BrainGrid from "./BrainGrid";


export default function BrainFeatureSection({ isDark = true }: { isDark?: boolean }) {
    return (
        <section className={`relative overflow-hidden ${isDark ? " bg-black text-white" : " bg-white text-black"}`}>
            {/* Top gradient glow */}
            {/* <div className="pointer-events-none absolute left-1/2 top-0 h-[170px] w-[75%] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,rgba(15,136,255,0.45),rgba(214,253,58,0.16),rgba(255,80,130,0.45))] opacity-80 blur-[90px]" /> */}

            <div className="section-container max-w-[1560px] relative z-10">
                <h2 className={`section-title text-center mx-auto max-w-100 sm:max-w-2xl ${isDark ? " text-white" : "  text-black"} `}>
                    The best business is your business
                </h2>
                <p className={`section-description mb-5 text-center mx-auto max-w-152 ${isDark ? " text-white/85" : " text-black/85"}`}>
                    Already plugin to your team, your tools and your tasks.
                </p>
                <BrainGrid isDark={isDark} />
            </div>
        </section>
    );
}