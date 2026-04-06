import { testimonials } from "@/data/home";


export default function TestimonialsSection() {
  return (
    <section className="section-space bg-[#f3f3f3]">
      <div className="container-app">
        <h2 className="section-title max-w-[720px]">
          Entrepreneurs love the experience
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.name} className="card-clean bg-white">
              <p className="text-[17px] leading-[1.65] text-black">{item.text}</p>
              <div className="mt-8">
                <h3 className="text-[18px] font-semibold">{item.name}</h3>
                <p className="mt-1 text-[14px] text-secondary-700">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}