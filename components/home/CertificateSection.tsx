export default function CertificateSection() {
  return (
    <section className="section-space">
      <div className="container-app grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="card-soft min-h-[420px] rounded-[36px] border border-black" />

        <div>
          <h2 className="section-title">Earn a certificate upon completion</h2>
          <p className="section-text mt-6 max-w-[620px]">
            Display your business credentials on your resume and LinkedIn with a certificate that reflects your progress.
          </p>

          <div className="mt-8">
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