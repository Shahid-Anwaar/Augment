import { comparisonRows } from "@/data/home";


export default function ComparisonSection() {
  return (
    <section className="section-space">
      <div className="container-app">
        <div className="max-w-[760px]">
          <h2 className="section-title">
            A smarter alternative to traditional MBA programs
          </h2>
        </div>

        <div className="mt-10 overflow-hidden rounded-[28px] border border-black">
          <div className="grid grid-cols-3 border-b border-black bg-[#f3f3f3]">
            <div className="p-5 text-[15px] font-semibold">Feature</div>
            <div className="border-l border-black p-5 text-[15px] font-semibold">
              Augment
            </div>
            <div className="border-l border-black p-5 text-[15px] font-semibold">
              Traditional MBA
            </div>
          </div>

          {comparisonRows.map((row) => (
            <div
              key={row[0]}
              className="grid grid-cols-3 border-b border-black last:border-b-0"
            >
              <div className="p-5 text-[15px]">{row[0]}</div>
              <div className="border-l border-black p-5 text-[15px]">{row[1]}</div>
              <div className="border-l border-black p-5 text-[15px]">{row[2]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}