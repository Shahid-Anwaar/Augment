import { logos } from "@/data/home";


export default function LogoStrip() {
  return (
    <section className="border-y border-black py-7">
      <div className="container-app">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:justify-between">
          {logos.map((logo) => (
            <span
              key={logo}
              className="text-[18px] font-semibold uppercase tracking-[0.08em] text-secondary-600"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}