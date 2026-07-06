import BookCallSection from "@/components/home/BookCall";
import ViewsSection from "@/components/home/ViewsSection";
import HowItWorksCard from "@/components/home/HowItWorks";
import IntegrationsSection from "@/components/home/Integrations";
import ClientsSection from "@/components/home/clients";
import ProductFeaturesSection from "@/components/products/ProductFeatures";
import { Coaches_FEATURES, Coaches_FEATURES2, coachesFaqs, Firms_FEATURES, Firms_FEATURES2, HowItWorksCardItem, solutionItems } from "@/data/data";
import ProductSalesHubSection from "@/components/products/ProductSalesHub";
import CompanyLogoCarousel from "@/components/home/CompaniesSlider";
import FAQSection from "@/components/home/FaqSection";
import { forCoachesMetadata } from "@/lib/seo";
import CoachHeroSection from "@/components/for-coach/CoachHero";
import FeaturesSection from "@/components/home/FacultySection";
import BrainFeatureSection from "@/components/home/BrainFeature";
import StickySolutionsSection from "@/components/home/StickyControl";

const companyLogos = [
  {
    title: "AA",
    image: "/external-images/img-cdcf3d31.webp",
  },
  {
    title: "AK",
    image: "/external-images/img-e982166d.webp",
  },
  {
    title: "CIET",
    image: "/external-images/img-129b3243.webp",
  },
  {
    title: "Visy",
    image: "/external-images/img-c6334e3e.webp",
  },
  {
    title: "GFS",
    image: "/external-images/img-696b08de.webp",
  },
];
const steps = [
  "Be Found",
  "Build Trust",
  "Sign Clients",
  "Deliver Results",
  "Grow Quietly",
];

const HOW_IT_WORKS_CARDS: HowItWorksCardItem[] = [
  {
    id: 1,
    step: "01",
    label: "BE FOUND",
    title: "The right clients are searching for you. Make sure they find you.",
    description:
      "Most coaching websites are invisible to search engines and forgettable to visitors. Supreme Coach builds a digital presence that works 24/7 so you're discoverable, credible, and compelling before a single conversation takes place.",
    image: "/hiw-img2.webp",
    cta: "Book a Discovery Call",
    points: [
      {
        icon: "lucide:layout-template",
        text: "7-page website funnel built around your niche, your methodology, and your ideal client",
      },
      {
        icon: "lucide:search-check",
        text: "Complete SEO setup local and national so you appear when clients are searching",
      },
      {
        icon: "lucide:magnet",
        text: "Lead magnet designed and positioned to attract qualified prospects automatically",
      },
      {
        icon: "lucide:badge-check",
        text: "Your brand, your domain, your identity fully white-label from day one",
      },
    ],
  },
  {
    id: 2,
    step: "02",
    label: "BUILD TRUST",
    title: "Clients don't buy coaching. They buy the person they trust most.",
    description:
      "Trust isn't built in a single visit. Supreme Coach builds the nurture infrastructure that keeps you present and credible in a prospect's mind from first contact until they're ready to commit.",
    image: "/hiw-img1.webp",
    cta: "Book a Discovery Call",
    points: [
      {
        icon: "lucide:mail-check",
        text: "Automated email sequences that nurture leads while you sleep",
      },
      {
        icon: "lucide:circle-play",
        text: "Free community or free lesson preview that lets prospects experience your work before buying",
      },
      {
        icon: "lucide:bell-ring",
        text: "Notification journeys triggered by behaviour, sending the right message at exactly the right moment",
      },
      {
        icon: "lucide:clipboard-check",
        text: "Client assessments that show prospects you understand their situation before they've paid a penny",
      },
    ],
  },
  {
    id: 3,
    step: "03",
    label: "SIGN CLIENTS",
    title: "Stop losing clients between the first conversation and the signed contract.",
    description:
      "The gap between interest and enrolment is where most coaches lose revenue. Supreme Coach closes that gap with booking, pipeline tracking, payment, and onboarding all connected and running automatically.",
    image: "/hiw-img3.webp",
    cta: "Book a Discovery Call",
    points: [
      {
        icon: "lucide:calendar-check",
        text: "Book-a-call page integrated with Calendly, Cal.com, and Zoom with no back-and-forth scheduling",
      },
      {
        icon: "lucide:kanban",
        text: "Sales pipeline tracking every prospect from first message to signed client",
      },
      {
        icon: "lucide:credit-card",
        text: "Stripe, PayPal, Google Pay, and Apple Pay so clients pay the moment they're ready",
      },
      {
        icon: "lucide:user-check",
        text: "Automated onboarding triggered on payment so first impressions are handled before you've lifted a finger",
      },
    ],
  },
  {
    id: 4,
    step: "04",
    label: "DELIVER RESULTS",
    title:
      "Clients who get visible results stay longer, refer more, and buy everything you build next.",
    description:
      "Supreme Coach builds a client experience that makes your coaching feel as premium as it actually is: structured delivery, clear progress, and the engagement tools that keep clients active between every session.",
    image: "/hiw-img4.webp",
    cta: "Book a Discovery Call",
    points: [
      {
        icon: "lucide:monitor-smartphone",
        text: "Branded client portal with unlimited programmes, modules, and lesson formats",
      },
      {
        icon: "lucide:target",
        text: "Goal tracking and milestone management so progress is visible to both you and the client at every stage",
      },
      {
        icon: "lucide:activity",
        text: "Habit trackers, journals, quizzes, and 30-day challenges built directly into your programmes",
      },
      {
        icon: "lucide:timeline",
        text: "Client timeline with every session, milestone, and interaction logged automatically so you always know the full story",
      },
    ],
  },
  {
    id: 5,
    step: "05",
    label: "GROW QUIETLY",
    title: "The business that grows while you coach, not instead of it.",
    description:
      "Every referral, renewal, and new client should come from the system working, not from you posting every day and hoping someone enquires. Supreme Coach builds the infrastructure that compounds in the background so your business grows without you adding more hours to your week.",
    image: "/hiw-img5.webp",
    cta: "Book a Discovery Call",
    points: [
      {
        icon: "lucide:repeat",
        text: "Automated renewal flows triggered before a programme ends so retention happens without the awkward ask",
      },
      {
        icon: "lucide:users-round",
        text: "Community spaces that keep clients engaged, connected, and associated with the results you delivered",
      },
      {
        icon: "lucide:workflow",
        text: "Automation workflows that remove every recurring manual task permanently",
      },
      {
        icon: "lucide:gauge",
        text: "BFM Dashboard showing revenue, lifetime client value, and pipeline in real time so you always know where your business stands",
      },
    ],
  },
];

export const metadata = forCoachesMetadata;

export default function CoachesPage() {
  return (
    <main className="bg-white text-black relative">
      <CoachHeroSection />
      <div className="w-full bg-white pb-7">
        <div className="max-w-full bg-white py-4 mx-auto">
          <div className="mx-auto bg-white px-0">
            <CompanyLogoCarousel
              companyLogos={[...companyLogos, ...companyLogos]}
              wrapperClassName="min-h-0 bg-white"
            />
          </div>
        </div>
      </div>
      <BrainFeatureSection isDark={false} />
      <StickySolutionsSection items={solutionItems.slice(0, 3)} />
      <ProductFeaturesSection
        title="Programme creation tools built for coaches who take their client results seriously."
        description="A client who gets real, measurable outcomes doesn't just complete your programme they renew, refer, and come back for everything you build next."
        imgShown="left"
        imgSrc="/external-images/img-15da9c81.webp"
        imgAlt="Supreme Coach course onboarding and quiz preview"
        features={Coaches_FEATURES}
        btnText="Book a Discovery Call"
        wrapperClassName="bg-white py-0! sm:py-0! md:py-0! lg:py-0!"
      />
      <ProductFeaturesSection
        title="A community that keeps clients engaged long after the session ends."
        description="The coaches who retain clients longest don't just deliver great sessions they create a space where clients stay connected, stay motivated, and keep showing up. Supreme Coach builds that space directly into your practice."
        imgShown="right"
        imgSrc="/external-images/img-2aeeec10.webp"
        features={Coaches_FEATURES2}
        wrapperClassName="bg-white"
        btnText="Book a Discovery Call"
      />
      <ProductFeaturesSection
        title="Programme creation tools built for coaches who take their client results seriously."
        description="A client who gets real, measurable outcomes doesn't just complete your programme they renew, refer, and come back for everything you build next."
        imgShown="left"
        imgSrc="/external-images/img-15da9c81.webp"
        imgAlt="Supreme Coach course onboarding and quiz preview"
        features={Coaches_FEATURES}
        btnText="Book a Discovery Call"
        wrapperClassName="bg-white pt-0! sm:pt-0! md:pt-0! lg:pt-0!"
      />
      <ProductSalesHubSection
        btnText="Book a Discovery Call"
        title="Your coaching business and your financial command centre."
        subtitle="Supreme Coach handles every payment, every invoice, and every financial metric your business generates so you always know what's coming in, what's outstanding, and what your business is worth right now."
      />
      <FeaturesSection />
      <HowItWorksCard
        steps={steps}
        cards={HOW_IT_WORKS_CARDS}
      />
      <IntegrationsSection
        title="It's your business, your way"
        description="Imagine all the tools you know and love in one place. Connect with third-party integrations—including MailChimp, Zapier, Kit, Google Analytics, and dozens more."
      />
      <ClientsSection title="Supreme Coach success stories write themselves" isShowCompanies={false} />
      <FAQSection faqs={coachesFaqs} />
    </main>
  );
}
