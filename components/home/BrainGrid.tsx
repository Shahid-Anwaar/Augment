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
    
    return <div
  className={`grid overflow-hidden border border-white/10 md:grid-cols-3 ${
    isDark ? "bg-black" : "bg-white"
  } ${classes}`}
>
  {cards.map((card) => (
    <article
      key={card.id}
      className={`relative min-h-[360px] overflow-hidden border-b last:border-b-0 sm:min-h-[390px] md:min-h-[430px] md:border-b-0 md:border-r md:last:border-r-0 ${
        isDark ? "bg-black border-white/10" : "bg-white border-black/10"
      }`}
    >
      {/* Text */}
      <div className="relative z-20 px-4 py-5 sm:px-6 sm:py-7 md:px-6 lg:px-10 lg:py-8">
        <p
          className={`mb-3 text-[10px] font-bold uppercase tracking-[0.16em] sm:mb-4 sm:text-[11px] sm:tracking-[0.2em] md:text-[12px] md:tracking-[0.22em] ${
            isDark ? "text-white/90" : "text-black/90"
          }`}
        >
          {card.title}
        </p>

        <p
          className={`max-w-full text-[14px] font-normal leading-[1.45] tracking-[-0.02em] sm:text-[16px] sm:tracking-[-0.03em] md:text-[15px] lg:text-[17px] ${
            isDark ? "text-white/80" : "text-black/80"
          }`}
        >
          {card.description}
        </p>
      </div>

      {/* Image */}
      <div className="absolute bottom-0 left-0 h-[210px] w-full overflow-hidden sm:h-[235px] md:h-[255px]">
        <Image
          src={card.image}
          alt={card.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
    </article>
  ))}
</div>

}