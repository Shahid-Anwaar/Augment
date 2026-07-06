import Image from "next/image";

type BrainCard = {
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
};

const BRAIN_CARDS: BrainCard[] = [
    {
        id: 1,
        title: "Context",
        description:
            "Brain² sees your tasks, docs, and conversations. It does not need a brief because it knows what is happening in real-time.",
        image:
            "/external-images/business-1.webp",
        alt: "Team working on tasks and documents",
    },
    {
        id: 2,
        title: "Intelligence",
        description:
            "Brain² picks the best AI model for each job. One subscription. Every frontier model running with full context.",
        image:
            "/external-images/business-2.webp",
        alt: "Artificial intelligence and software system",
    },
    {
        id: 3,
        title: "Personality",
        description:
            "Brain² learns how you and your team talk: your tone, your shorthand, your preferences.",
        image:
            "/external-images/business-3.webp",
        alt: "Team communication and collaboration",
    },
];

export default function BrainGrid({cards = BRAIN_CARDS, classes = "rounded-lg", isDark}: {cards?: BrainCard[], classes?: string, isDark?: boolean}) {
    console.log(isDark, "isDark");
    
    return <div className={`grid overflow-hidden border border-white/10 md:grid-cols-3 ${isDark ? " bg-black" : " bg-white"} ${classes} `}>
        {cards.map((card) => (
            <article
                key={card.id}
                className={`relative min-h-[430px] overflow-hidden border-b last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 ${isDark ? " bg-black border-white/10" : " bg-gray-50/80 border-black/10"}`}
            >
                {/* Text */}
                <div className="relative z-20 px-6 py-7 sm:px-8 sm:py-8 lg:px-10">
                    <p className={`mb-4 text-[12px] font-bold uppercase tracking-[0.22em]  ${isDark ? " text-white/90" : " text-black/90"}`}>
                        {card.title}
                    </p>

                    <p className={`max-w-full text-[16px] font-normal leading-[1.45] tracking-[-0.03em]  sm:text-[17px] ${isDark ? " text-white/80" : " text-black/80"}`}>
                        {card.description}
                    </p>
                </div>

                {/* Image */}
                <div className="absolute bottom-0 left-0 h-[255px] w-full overflow-hidden">
                    <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                    />

                    {/* Dark overlay like screenshot */}
                    {/* <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#000_0%,rgba(0,0,0,0.35)_35%,rgba(0,0,0,0.95)_100%)]" /> */}

                    {/* Soft color tint */}
                    {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(214,253,58,0.12),rgba(15,136,255,0.12))]" /> */}
                </div>
            </article>
        ))}
    </div>

}