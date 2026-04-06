export default function CTASection() {
  return (
    <section className="section-space">
      <div className="container-app">
        <div className="rounded-[36px] border border-black bg-primary px-6 py-10 md:px-10 md:py-14">
          <h2 className="max-w-[760px] text-[34px] leading-[1.02] font-semibold tracking-[-0.03em] text-black md:text-[52px]">
            Ready to build smarter, lead better, and grow faster?
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">
            <button type="button" className="secondary-btn bg-white">
              <span>Book a Call</span>
            </button>

            <button type="button" className="contained-btn">
              <span>Enroll Now</span>
              <span className="ml-2.5 text-[22px] leading-none">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}