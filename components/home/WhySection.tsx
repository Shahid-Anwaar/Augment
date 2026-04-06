import { whyCards } from "@/data/home";


export default function WhySection() {
  return (
    <section className="section-space">
      <div className="container-app">
        <div className="max-w-[760px]">
          <h2 className="section-title">Why Augment?</h2>
          <p className="section-text mt-5">
            A modern business education built around practical outcomes, flexible learning, and world-class operators.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {whyCards.map((card) => (
            <div key={card.title} className="card-clean">
              <div className="mb-10 size-12 rounded-full border border-black" />
              <h3 className="text-[24px] font-semibold tracking-[-0.03em]">
                {card.title}
              </h3>
              <p className="mt-4 text-[16px] leading-[1.6] text-secondary-700">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}