import BookCallSection from "@/components/home/BookCall";
import ViewsSection from "@/components/home/ViewsSection";
import HowItWorksCard from "@/components/home/HowItWorks";
import IntegrationsSection from "@/components/home/Integrations";
import ClientsSection from "@/components/home/clients";
import ProductFeaturesSection from "@/components/products/ProductFeatures";
import { Firms_FEATURES, Firms_FEATURES2, HowItWorksCardItem, solutionItems, teamFaqs } from "@/data/data";
import ProductSalesHubSection from "@/components/products/ProductSalesHub";
import CompanyLogoCarousel from "@/components/home/CompaniesSlider";
import FAQSection from "@/components/home/FaqSection";
import FirmHeroSection from "@/components/for-firms/FirmHero";
import FeaturesSection from "@/components/home/FacultySection";
import { forFirmsMetadata } from "@/lib/seo";
import BrainFeatureSection from "@/components/home/BrainFeature";
import StickySolutionsSection from "@/components/home/StickyControl";

const views = [
  {
    title: "Main Admin View",
    description:
      "Full visibility across the entire firm, every coach, every client, every programme, every invoice, and every financial metric in one command centre. Nothing happens in your business without you being able to see it.",
    image:
      "/external-images/img-3f4ca6a1.webp",
  },
  {
    title: "Coach Portal",
    description:
      "Every coach on your team gets their own dedicated workspace, their clients, their sessions, their programmes, and their pipeline organised, accessible, and completely separate from everyone else's.",
    image:
      "/external-images/img-ef6a7f79.webp",
  },
  {
    title: "Team Portal",
    description:
      "Your operations, admin, and support staff coordinated in one place role-based permissions, internal messaging, shared resources, and activity tracking without a single status meeting or shared inbox.",
    image:
      "/view3.png",
  },
  {
    title: "Client Portal",
    description:
      "A fully branded, white-label experience your clients associate entirely with your firm programmes, goals, sessions, community, and resources on any device, any time. Not a platform. Your practice.",
    image:
      "/external-images/img-2f2f6a27.webp",
  },
];

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

const SALES_HUB_FEATURES = [
  {
    title: "Corporate payments",
    description:
      "One invoice per company regardless of how many employees are enrolled. Every corporate client billed professionally and automatically with no manual step, no chasing.",
    image:
      "/external-images/img-f04c8b1e.webp",
    imageAlt: "Corporate payments preview",
    objClass: "",
  },
  {
    title: "Tax-compliant invoicing",
    description:
      "Every invoice generated, formatted, and sent without your team touching it. Individual receipts, company invoices, and VAT applied correctly per client location all handled automatically.",
    image:
      "/external-images/img-a96842b1.webp",
    imageAlt: "Tax-compliant invoicing preview",
    objClass: "lg:-translate-y-28",
  },
  {
    title: "BFM Dashboard",
    description:
      "Revenue per coach, pipeline forecasting, corporate contract values, and lifetime client value across the entire operation in one real-time view, no spreadsheet required.",
    image:
      "/external-images/img-ae29ee70.webp",
    imageAlt: "BFM dashboard preview",
    // objClass: "lg:-translate-y-14",
  },
  {
    title: "Modeller Agents",
    description:
      "The Modeller simulates revenue scenarios in seconds. The Analyst flags anomalies before they become problems. The Planner tells you exactly what to do next based on live data, not gut feeling.",
    image:
      "/external-images/img-a96842b1.webp",
    imageAlt: "Modeller agents analytics dashboard preview",
    objClass: "lg:-translate-y-28",
  },
];

const steps = [
  "Win Clients",
  "Coordinate Teams",
  "Deliver at Scale",
  "Prove ROI",
  "Scale Operations",
];

const HOW_IT_WORKS_CARDS: HowItWorksCardItem[] = [
  {
    id: 1,
    step: "01",
    label: "WIN CLIENTS",
    title: "Corporate clients don't buy on instinct. They buy on evidence.",
    description:
      "Winning a firm-level contract requires more than a great conversation; it requires a professional pipeline, a credible digital presence, and a sales process that moves corporate buyers from interest to signed agreement without losing momentum.",
    image: "/hiw-img2.webp",
    cta: "Talk to Our Team",
    points: [
      {
        icon: "lucide:chart-no-axes-combined",
        text: "Sales pipeline tracking every corporate prospect from first enquiry to signed contract with estimated value at every stage",
      },
      {
        icon: "lucide:target",
        text: "ICP profiler to identify, target, and prioritise the organisations most likely to buy",
      },
      {
        icon: "lucide:layout-template",
        text: "Standalone funnels and landing pages for each service line built and live without a separate tool",
      },
      {
        icon: "lucide:file-signature",
        text: "Proposals triggered automatically after a discovery call so nothing falls through the gaps between conversations",
      },
    ],
  },
  {
    id: 2,
    step: "02",
    label: "COORDINATE TEAMS",
    title:
      "When the team grows, the coordination problem grows with it unless the infrastructure is built for it.",
    description:
      "Every new coach on your team is a new variable. Supreme Coach removes the coordination overhead. Role-based access, shared programme delivery, and activity tracking across the whole operation mean your team stays aligned without status meetings or shared inboxes.",
    image: "/hiw-img1.webp",
    cta: "Talk to Our Team",
    points: [
      {
        icon: "lucide:users-round",
        text: "Team portal with role-based permissions coach, admin, account manager, analyst each seeing exactly what they need",
      },
      {
        icon: "lucide:clipboard-list",
        text: "Shared programme templates so every coach delivers to the same standard regardless of experience level",
      },
      {
        icon: "lucide:activity",
        text: "Activity tracking across the full team so you can see what's happening without chasing anyone for updates",
      },
      {
        icon: "lucide:messages-square",
        text: "Internal messaging separate from client-facing communications so there are no crossed wires, ever",
      },
    ],
  },
  {
    id: 3,
    step: "03",
    label: "DELIVER AT SCALE",
    title:
      "Consistent delivery across multiple coaches, multiple clients, and multiple programmes without the founder holding it all together.",
    description:
      "The risk in a growing coaching firm isn't capacity, it's consistency. Supreme Coach builds the delivery infrastructure that makes every client experience the same, regardless of which coach is delivering it or how many clients are being served simultaneously.",
    image: "/hiw-img3.webp",
    cta: "Talk to Our Team",
    points: [
      {
        icon: "lucide:monitor-smartphone",
        text: "Branded client portal fully white-label, with your firm's identity on every touchpoint",
      },
      {
        icon: "lucide:user-plus",
        text: "Bulk enrolment for corporate cohorts so you can register an entire company team in seconds",
      },
      {
        icon: "lucide:video",
        text: "Live event studio for masterclasses, cohort kickoffs, and group sessions with broadcast and moderation built in",
      },
      {
        icon: "lucide:users",
        text: "Community spaces for cohort engagement that are private, branded, and attached to your programmes",
      },
    ],
  },
  {
    id: 4,
    step: "04",
    label: "PROVE ROI",
    title: "The report that renews the contract before you've asked for it.",
    description:
      "Corporate clients need evidence. L&D buyers and HR directors sign renewals based on data: utilisation rates, engagement scores, goal completion, and measurable outcomes across their team. Supreme Coach generates that evidence automatically.",
    image: "/hiw-img4.webp",
    cta: "Talk to Our Team",
    points: [
      {
        icon: "lucide:building-2",
        text: "Corporate hierarchy to manage organisations, budget holders, and individual employees under one clean account",
      },
      {
        icon: "lucide:bar-chart-3",
        text: "Company-level reporting for utilisation, programme completion, and engagement across the entire team in one dashboard",
      },
      {
        icon: "lucide:timeline",
        text: "Individual client timelines nested under the company account with every session, milestone, and outcome recorded automatically",
      },
      {
        icon: "lucide:receipt-text",
        text: "Automated invoicing per company with one professional, tax-compliant invoice sent without manual input",
      },
    ],
  },
  {
    id: 5,
    step: "05",
    label: "SCALE OPERATIONS",
    title:
      "The operational layer that lets a coaching firm grow without the founder doing everything manually.",
    description:
      "Most coaching firms hit a ceiling because their operations can't hold more complexity without breaking. Supreme Coach builds the automation, financial visibility, and AI-powered intelligence that removes that ceiling permanently.",
    image: "/hiw-img5.webp",
    cta: "Talk to Our Team",
    points: [
      {
        icon: "lucide:workflow",
        text: "Automation workflows that connect enrolment, payment, onboarding, delivery, and renewal so the business runs automatically once built",
      },
      {
        icon: "lucide:gauge",
        text: "BFM Dashboard showing MRR, lifetime client value, pipeline revenue, and outstanding invoices in one real-time view",
      },
      {
        icon: "lucide:bot",
        text: "Three AI Agents working in the background: the Modeller, the Analyst, and the Planner",
      },
      {
        icon: "lucide:badge-check",
        text: "Full white-label platform with client portal, team portal, and custom domain so every touchpoint carries your firm's brand, not ours",
      },
    ],
  },
];

export const metadata = forFirmsMetadata;
export default function FirmsPage() {
  return (
    <main className="bg-white text-black relative">
      <FirmHeroSection />
      <CompanyLogoCarousel companyLogos={[...companyLogos, ...companyLogos]} />;
      <div className="py-7"></div>
      <BrainFeatureSection isDark={false} />
      <StickySolutionsSection items={solutionItems.slice(0, 3)} />
      <FeaturesSection />
      <ProductFeaturesSection
        title="Built for firms that deliver at scale and prove it with data."
        description="Your firm needs more than a coaching platform; it needs an operating system that coordinates your team, manages corporate clients, and generates reports that renew contracts automatically."
        imgShown="left"
        imgSrc="/external-images/img-15da9c81.webp"
        imgAlt="Supreme Coach course onboarding and quiz preview"
        features={Firms_FEATURES}
        wrapperClassName="bg-white pb-0!"
      />
      <ProductFeaturesSection
        title="Powerful enough for enterprise. Clean enough for one person to run."
        description="When you're managing multiple coaches, corporate clients, and complex delivery you need infrastructure that handles the complexity without creating more of it."
        imgShown="right"
        imgSrc="/external-images/img-2aeeec10.webp"
        features={Firms_FEATURES2}
        wrapperClassName="bg-white"
      />
      <ProductFeaturesSection
        title="Built for firms that deliver at scale and prove it with data."
        description="Your firm needs more than a coaching platform; it needs an operating system that coordinates your team, manages corporate clients, and generates reports that renew contracts automatically."
        imgShown="left"
        imgSrc="/external-images/img-15da9c81.webp"
        imgAlt="Supreme Coach course onboarding and quiz preview"
        features={Firms_FEATURES}
        wrapperClassName="bg-white pt-0!"
      />
      <ProductSalesHubSection
        title="Your firm's financial command centre built for scale."
        subtitle="Every payment, every invoice, and every financial metric across your entire firm, individual clients, corporate accounts, and team operations all in one place, updated in real time."
        features={SALES_HUB_FEATURES}
        classes="grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-7"
      />
      <HowItWorksCard steps={steps} cards={HOW_IT_WORKS_CARDS} />
      <IntegrationsSection
        title="It's your business, your way"
        description="Imagine all the tools you know and love in one place. Connect with third-party integrations—including MailChimp, Zapier, Kit, Google Analytics, and dozens more."
      />
      <ClientsSection title="Supreme Coach success stories write themselves" isShowCompanies={false} />
      <FAQSection faqs={teamFaqs} />

    </main>
  );
}
