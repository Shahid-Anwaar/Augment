export type NavLink = {
  label: string;
  href: string;
};

export type WhyCard = {
  title: string;
  text: string;
};

export type Testimonial = {
  name: string;
  role: string;
  text: string;
};

export type ComparisonRow = [string, string, string];

export type ComparisonItem = {
  text: string;
};

export type TestimonialItem = {
  id: number;
  name: string;
  role: string;
  title?: string;
  avatar: string;
  text: string;
  linkedin?: boolean;
  schoolLink?: string;
};

export type WhyAugmentSlide = {
  id: number;
  eyebrow: string;
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  image: string;
  imageAlt: string;
  layout: "right-composite" | "left-dashboard" | "right-community";
};

export type InstructorItem = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  logoIcon?: string;
  badge?: string;
};

export type ReviewItem = {
  id: number;
  quote: string;
  name: string;
  avatar: string;
  role: string;
};

export type HeroSlide = {
  id: number;
  name: string;
  company: string;
  role: string;
  image: string;
  video?: string;
  description: string;
};

export type HowItWorksCardItem = {
  id: number;
  step: string;
  label: string;
  title: string;
  description: string;
  image: string;
  cta?: string;
  points: {
    icon: string;
    text: string;
  }[];
};

export type Student = {
  id: number;
  name: string;
  role: string;
  company: string;
  location: string;
  image: string;
  quote: string;
  classLabel: string;
};

export type SolutionItem = {
    id: string;
    label: string;
    icon: string;
    heroTitle: string;
    cardTitle: string;
    cardDescription: string;
    points: string[];
    image: string;
};

export const solutionItems: SolutionItem[] = [
  {
    id: "outbound",
    label: "Outbound",
    icon: "lucide:rss",
    heroTitle: "Turn hours of prospecting into minutes",
    cardTitle: "Outbound",
    image: "/external-images/img-9c6d2fa4.webp",
    cardDescription:
      "Book more meetings faster with better data, smarter AI, and easier automation.",
    points: [
      "AI-powered, multichannel campaigns in a click",
      "Built-in email deliverability guardrails",
      "Prioritized task lists to maximize selling",
      "Workflow automations to identify and scale what works",
    ],
  },
  {
    id: "inbound",
    label: "Inbound",
    icon: "lucide:triangle",
    heroTitle: "Capture and qualify leads faster",
    cardTitle: "Inbound",
    image: "/external-images/img-cc03c5d9.webp",
    cardDescription:
      "Capture, qualify, and route every lead instantly so hot leads never go cold.",
    points: [
      "Capture leads from every channel",
      "Qualify prospects automatically",
      "Route hot leads to the right team",
      "Follow up before opportunities go cold",
    ],
  },
  {
    id: "data-enrichment",
    label: "Data Enrichment",
    icon: "lucide:activity",
    heroTitle: "Keep your lead data clean and complete",
    cardTitle: "Data Enrichment",
    image: "/external-images/img-3fd9a0fd.webp",
    cardDescription:
      "Cleanse and complete your records with always-fresh data that powers smarter targeting.",
    points: [
      "Enrich contacts with accurate business data",
      "Complete missing company details",
      "Refresh outdated records automatically",
      "Improve targeting with better insights",
    ],
  },
  {
    id: "deal-execution",
    label: "Deal Execution",
    icon: "lucide:aperture",
    heroTitle: "Move deals forward with less manual work",
    cardTitle: "Deal Execution",
    image: "/external-images/img-84d8d9dd.webp",
    cardDescription:
      "Keep deals moving with AI-powered prep, meeting insights, and follow-up.",
    points: [
      "Prepare for meetings with AI insights",
      "Track important deal activities",
      "Automate post-meeting follow-ups",
      "Help teams focus more on closing",
    ],
  },
];

export const students: Student[] = [
  {
    id: 1,
    name: "Andy Smith",
    role: "Founder",
    company: "StrategIQ",
    location: "London, U.K.",
    image:
      "/external-images/img-5952654b.webp",
    quote:
      "Supreme Coach helped me sharpen my offer and build a stronger network with business owners who think bigger.",
    classLabel: "Class of March '23",
  },
  {
    id: 2,
    name: "Janna Lusk",
    role: "Team Manager",
    company: "Google",
    location: "Austin, USA",
    image:
      "/external-images/img-6c7ff720.webp",
    quote:
      "Supreme Coach teaches business with the best value proposition for busy professionals like me. I grew alongside my client's needs.",
    classLabel: "Class of March '23",
  },
  {
    id: 3,
    name: "Matt Marsh",
    role: "Founder",
    company: "Stelacasa",
    location: "Tennessee, USA",
    image:
      "/external-images/img-29733e45.webp",
    quote:
      "The network I built through Supreme Coach opened doors to partnerships I would not have reached alone.",
    classLabel: "Class of April '23",
  },
  {
    id: 4,
    name: "Ted Burgess",
    role: "Director of Psychological Health",
    company: "Air National Guard",
    location: "Boise, USA",
    image:
      "/external-images/img-49000e52.webp",
    quote:
      "This community helped me turn business learning into practical systems I could apply immediately.",
    classLabel: "Class of April '23",
  },
  {
    id: 5,
    name: "Jamaal Bethea",
    role: "Director of Brand & Media",
    company: "CUA",
    location: "Los Angeles, USA",
    image:
      "/external-images/img-c835e689.webp",
    quote:
      "The mentorship and peer learning made this much more than a course. It felt like a real growth circle.",
    classLabel: "Class of April '23",
  },
  {
    id: 6,
    name: "Hester Scotton",
    role: "CFO",
    company: "Potter Clarkson",
    location: "London, U.K.",
    image:
      "/external-images/img-021d0a1f.webp",
    quote:
      "I found clear frameworks, a supportive cohort, and business lessons I could use right away.",
    classLabel: "Class of May '23",
  },
  {
    id: 7,
    name: "Adediran Adelekun",
    role: "Founder",
    company: "NeighborTrailer",
    location: "Chicago, USA",
    image:
      "/external-images/img-f7d82f99.webp",
    quote:
      "Supreme Coach’s instructors simplify business concepts while the supportive community helped me overcome any challenge I faced.",
    classLabel: "Class of April '23",
  },
  {
    id: 8,
    name: "Faye Sta. Ana-Corpuz",
    role: "Country Launcher",
    company: "Taptap Send",
    location: "Dubai, UAE",
    image:
      "/external-images/img-c72a846b.webp",
    quote:
      "I came for the learning, but stayed for the network. The people in this program are exceptional.",
    classLabel: "Class of May '23",
  },
  {
    id: 9,
    name: "Gillan Watt",
    role: "Founder",
    company: "Thinking Labs",
    location: "Austin, USA",
    image:
      "/external-images/img-eb4c84fb.webp",
    quote:
      "The Supreme Coach student directory itself became one of the most valuable assets of the experience.",
    classLabel: "Class of June '23",
  },
  {
    id: 10,
    name: "Jon-David Hague",
    role: "Founder",
    company: "Bountisphere",
    location: "San Francisco, USA",
    image:
      "/external-images/img-60a7cd47.webp",
    quote:
      "The program gave me better clarity, stronger positioning, and direct access to ambitious operators.",
    classLabel: "Class of June '23",
  },
  {
    id: 11,
    name: "Mohit Patel",
    role: "Founder",
    company: "Terrifit",
    location: "Mumbai, India",
    image:
      "/external-images/img-90580a60.webp",
    quote:
      "What stood out most was how practical and founder-focused everything felt.",
    classLabel: "Class of June '23",
  },
  {
    id: 12,
    name: "Eric Luttemoser",
    role: "Founder",
    company: "Electrifying Ventures",
    location: "Miami, USA",
    image:
      "/external-images/img-37640afc.webp",
    quote:
      "I left with more than business insight — I left with genuine connections.",
    classLabel: "Class of July '23",
  },
  {
    id: 13,
    name: "Charlie Canard",
    role: "Founder",
    company: "Social To Go",
    location: "New York, USA",
    image:
      "/external-images/img-646b7487.webp",
    quote:
      "The peer conversations pushed my thinking further than any traditional course ever had.",
    classLabel: "Class of July '23",
  },
  {
    id: 14,
    name: "Amanda Squilla",
    role: "Chief of Staff",
    company: "H.J. Baker",
    location: "Chicago, USA",
    image:
      "/external-images/img-76c3106f.webp",
    quote:
      "Supreme Coach gave me both confidence and clarity in how to communicate my business value.",
    classLabel: "Class of August '23",
  },
  {
    id: 15,
    name: "Thibault Genouille",
    role: "Project Lead",
    company: "BCG",
    location: "Paris, France",
    image:
      "/external-images/img-6c1e50e8.webp",
    quote:
      "I met people from different industries, yet the advice always felt surprisingly relevant.",
    classLabel: "Class of August '23",
  },
  {
    id: 16,
    name: "Ed Trafager",
    role: "CEO & Founder",
    company: "Greenwave Media",
    location: "Boston, USA",
    image:
      "/external-images/img-68669422.webp",
    quote:
      "The content was strong, but the caliber of the community is what made it memorable.",
    classLabel: "Class of August '23",
  },
  {
    id: 17,
    name: "Ashley Davis",
    role: "Director",
    company: "Media Ventures",
    location: "New York, USA",
    image:
      "/external-images/img-30505ee7.webp",
    quote:
      "Thanks to the flexibility of remote learning, I balanced reserve duty and becoming a parent while having a great experience.",
    classLabel: "Class of April '24",
  },
  {
    id: 18,
    name: "Paolo Viale",
    role: "Senior Manager",
    company: "PressShop",
    location: "California, USA",
    image:
      "/external-images/img-7fef4487.webp",
    quote:
      "The structure of the program made every lesson easy to apply and easy to remember.",
    classLabel: "Class of April '24",
  },
  {
    id: 19,
    name: "Bahrel Burhan",
    role: "Business Analyst",
    company: "Dromotics",
    location: "Malaysia",
    image:
      "/external-images/img-7e4c2c15.webp",
    quote:
      "The experience was practical, high quality, and rich with smart people from across the world.",
    classLabel: "Class of May '24",
  },
  {
    id: 20,
    name: "Gerardo Ramirez",
    role: "Director",
    company: "Learning Center",
    location: "Mexico City, Mexico",
    image:
      "/external-images/img-9ed2e6d6.webp",
    quote:
      "It was one of the few programs where I felt every session added real value.",
    classLabel: "Class of May '24",
  },
  {
    id: 21,
    name: "Ilona Zablockaja",
    role: "Dental Nurse",
    company: "Independent",
    location: "London, U.K.",
    image:
      "/external-images/img-bc304c07.webp",
    quote:
      "I appreciated how welcoming the cohort felt from the very first session.",
    classLabel: "Class of June '24",
  },
  {
    id: 22,
    name: "Giovanni Azadi",
    role: "Senior Engineer",
    company: "Lava Construction",
    location: "Washington, USA",
    image:
      "/external-images/img-d4ded7bd.webp",
    quote:
      "The network was real, the lessons were useful, and the experience exceeded expectations.",
    classLabel: "Class of June '24",
  },
  {
    id: 23,
    name: "Tom Lambrecht",
    role: "Business Development",
    company: "Stratbright",
    location: "Ghent, Belgium",
    image:
      "/external-images/img-5952654b.webp",
    quote:
      "I joined for growth and left with a stronger support system than I expected.",
    classLabel: "Class of June '24",
  },
  {
    id: 24,
    name: "Sofia Martins",
    role: "Marketing Manager",
    company: "BrightPath Studio",
    location: "Lisbon, Portugal",
    image:
      "/external-images/img-57845ea0.webp",
    quote:
      "The sessions were practical, the people were inspiring, and I left with ideas I could use immediately.",
    classLabel: "Class of July '24",
  },
];

export const ProductStoriesTestimonials = [
  {
    id: 1,
    avatar:
      "/external-images/img-014aabd8.webp",
    name: "Anna Geiger",
    role: "The Science of Reading",
    title: "Revenue Engine",
    text: "I’ve been using Supreme Coach since 2017, and it continues to be a major revenue generator for my business. It’s easy to create and upload content, and I never have to worry about tax compliance or payment processing. I’ve tried other platforms—Supreme Coach is hands down the best for me and my students.",
    schoolLink: "#",
  },
  {
    id: 2,
    avatar:
      "/external-images/img-cddf2e96.webp",
    name: "Leila Gharani",
    role: "XelPlus Academy",
    title: "Global Reach",
    text: "With students from 188 countries, tax compliance could have been a nightmare. Supreme Coach handles it all, so instead of drowning in admin work, we can focus on helping our members upgrade their data skills. The platform makes our global reach possible.",
    schoolLink: "#",
  },
  {
    id: 3,
    avatar:
      "/external-images/img-43fb6fb6.webp",
    name: "Erin Booth",
    role: "Virtual Assistant Coach",
    title: "Get Full Control",
    text: "You should never have anyone dictating the prices you charge for your content. With Supreme Coach, you get full control—you can talk to your students, match their learning styles, and build real relationships instead of going through third parties.",
    schoolLink: "#",
  },
  {
    id: 4,
    avatar:
      "/external-images/img-c1ff8444.webp",
    name: "Razvan Ciobanu",
    role: "Voxyde",
    title: "Peace of Mind",
    text: "Supreme Coach is consistently monitored and delivers excellent uptime. As an instructor, that peace of mind is invaluable. On top of that, Supreme Coach’s built-in tax handling has been a huge advantage, freeing me up to focus more on creating content and supporting my students.",
    schoolLink: "#",
  },
  {
    id: 5,
    avatar:
      "/external-images/img-2198e7aa.webp",
    name: "Francesco Cositore",
    role: "Vaporetto Italiano",
    title: "Has Been Essential",
    text: "Supreme Coach has been essential for the growth of my business and for reaching thousands of students all over the world. It automatically takes care of payments, taxes, and enrollments, freeing me from administrative tasks so I can fully focus on the creative side of my job.",
    schoolLink: "#",
  },
  {
    id: 6,
    avatar:
      "/external-images/img-fdebe4f0.webp",
    name: "Dan George",
    role: "FlightInsight",
    title: "10,000+ Students",
    text: "Supreme Coach gave me the structure to scale beyond the classroom. What started as a few dozen students has grown into 10,000+ pilots worldwide. My courses now run 24/7, serving pilots in every time zone, while I focus on teaching and Supreme Coach handles the technology.",
    schoolLink: "#",
  },
  {
    id: 7,
    avatar:
      "/external-images/img-bb68a76c.webp",
    name: "Huzan R & Nicoleta S",
    role: "Speak Norsk",
    title: "Made Simple",
    text: "We realized we couldn’t do everything on our own—teaching, managing operations, and course delivery. That’s when Supreme Coach came in. The platform made it simple to create and deliver our programs, and even let us offer a free course so students could get comfortable before enrolling.",
    schoolLink: "#",
  },
];

export const companyLogos = [
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

export const HOW_IT_WORKS_CARDS: HowItWorksCardItem[] = [
  {
    id: 1,
    step: "01",
    label: "CAPTURE",
    title: "Get the right clients in the door before they've spoken to you",
    description:
      "Your 7-page website funnel, lead magnets, and assessments attract qualified prospects and filter out the wrong ones around the clock, without you involved.",
    image: "/hiw-img2.webp",
    cta: "Book a Discovery Call",
    points: [
      {
        icon: "lucide:layout-template",
        text: "7-page website funnel and lead magnet built for your niche",
      },
      {
        icon: "lucide:clipboard-check",
        text: "Client assessment that qualifies leads before any call is booked",
      },
      {
        icon: "lucide:search-check",
        text: "Built-in SEO so you appear when the right clients are searching",
      },
      {
        icon: "lucide:circle-play",
        text: "Standalone funnels for every programme with a free lesson preview built in",
      },
    ],
  },
  {
    id: 2,
    step: "02",
    label: "NURTURE",
    title: "Stay front of mind until they're ready automatically",
    description:
      "Most coaches lose potential clients not because they said no, but because nobody followed up. Supreme Coach builds the sequences, journeys, and community spaces that keep you present without manual effort.",
    image: "/hiw-img1.webp",
    cta: "Book a Discovery Call",
    points: [
      {
        icon: "lucide:mail-check",
        text: "Email marketing setup with automated welcome and nurture sequences",
      },
      {
        icon: "lucide:bell-ring",
        text: "Notification journeys triggered by behaviour not by you checking in manually",
      },
      {
        icon: "lucide:users-round",
        text: "Free community as a low-commitment space for leads not ready to buy yet",
      },
      {
        icon: "lucide:refresh-cw",
        text: "Re-engagement workflows that bring quiet leads back without a single manual message",
      },
    ],
  },
  {
    id: 3,
    step: "03",
    label: "CONVERT",
    title: "Turn interest into signed clients without the back and forth",
    description:
      "Booking, pipeline tracking, payment, and onboarding are all connected. A lead books a call, attends, pays, and is onboarded without you managing a single step manually.",
    image: "/hiw-img3.webp",
    cta: "Book a Discovery Call",
    points: [
      {
        icon: "lucide:calendar-check",
        text: "Book-a-call page integrated with Calendly, Cal.com, and Zoom",
      },
      {
        icon: "lucide:kanban",
        text: "Sales pipeline tracking every prospect from first enquiry to signed client",
      },
      {
        icon: "lucide:credit-card",
        text: "Stripe, PayPal, Google Pay, and Apple Pay all native, no third-party checkout",
      },
      {
        icon: "lucide:badge-check",
        text: "Payment plans attached to every offer clients invest once, you own the system for life",
      },
    ],
  },
  {
    id: 4,
    step: "04",
    label: "DELIVER",
    title: "An experience so good, clients don't want to leave",
    description:
      "From the moment a client enrols, they step into a branded, professional environment built around their transformation programmes, goals, sessions, and community in one place.",
    image: "/hiw-img4.webp",
    cta: "Book a Discovery Call",
    points: [
      {
        icon: "lucide:monitor-smartphone",
        text: "Branded client portal with unlimited programmes, modules, and delivery formats",
      },
      {
        icon: "lucide:target",
        text: "Goal tracking, milestone management, and client timeline every step recorded automatically",
      },
      {
        icon: "lucide:video",
        text: "Live sessions, group bookings, and broadcast events managed inside Supreme Coach",
      },
      {
        icon: "lucide:activity",
        text: "Engagement tools habit trackers, journals, quizzes, and challenges built into every programme",
      },
    ],
  },
  {
    id: 5,
    step: "05",
    label: "RETAIN",
    title: "Build a business that renews and refers without asking",
    description:
      "The most expensive thing in coaching is a client who leaves quietly. Supreme Coach builds the retention infrastructure that keeps clients engaged, delivers visible results, and makes the case for staying without you having to.",
    image: "/hiw-img5.webp",
    cta: "Book a Discovery Call",
    points: [
      {
        icon: "lucide:trophy",
        text: "Paid and free communities with gamification, badges, and leaderboards that reward consistency",
      },
      {
        icon: "lucide:repeat",
        text: "Automated renewal flows triggered before a programme ends",
      },
      {
        icon: "lucide:bar-chart-3",
        text: "Progress scorecards and outcome reports that make results undeniable to the client and to you",
      },
      {
        icon: "lucide:file-chart-column",
        text: "Corporate reporting that shows L&D teams ROI across their team the report that renews contracts",
      },
    ],
  },
];

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    name: "Jimmy Wales",
    company:
      "/external-images/img-69b955eb.webp",
    role: "Founder of Wikipedia",
    image:
      "/external-images/img-7ac2afa7.webp",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F52f0105d32714e168307b5da0a27b4fc%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=52f0105d32714e168307b5da0a27b4fc&alt=media&optimized=true",
    description:
      "Learn how Jimmy Wales turned a simple idea into one of the world’s most trusted knowledge platforms and built a community-driven product at global scale.",
  },
  {
    id: 2,
    name: "Georgia Lewis",
    company:
      "/external-images/img-a079a90c.webp",
    role: "Former Prompt Engineer at Meta",
    image:
      "/external-images/img-180b7ff1.webp",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F7cfe202a016644adb4552d366932c01c%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=7cfe202a016644adb4552d366932c01c&alt=media&optimized=true",
    description:
      "Discover practical lessons on AI, prompt thinking, and how founders can use emerging technology to make smarter product and business decisions.",
  },
  {
    id: 3,
    name: "Steve Chen",
    company:
      "/external-images/img-28c76c34.webp",
    role: "Founder of Youtube",
    image:
      "/external-images/img-28536b35.webp",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F509807a034044fd0b3aff3c3a6c3266a%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=509807a034044fd0b3aff3c3a6c3266a&alt=media&optimized=true",
    description:
      "Learn from Steve Chen’s journey of building YouTube, understanding user behavior, scaling fast, and creating a product people use every day.",
  },
  {
    id: 4,
    name: "Zack Kass",
    company:
      "/external-images/img-c0422752.webp",
    role: "Former Head of Go-To-Market at OpenAI",
    image:
      "/external-images/img-b571095c.webp",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F7c887e35c3a54751a8b7d63c2eb59f28%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=7c887e35c3a54751a8b7d63c2eb59f28&alt=media&optimized=true",
    description:
      "Get go-to-market insights from Zack Kass on positioning, adoption, AI opportunity, and how founders can bring powerful products to the market.",
  },
  {
    id: 5,
    name: "Ann Hiatt",
    company:
      "/external-images/img-546dc9e8.webp",
    role: "Chief of Staff",
    image:
      "/external-images/img-4dcdb991.webp",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fbc1c38b516ad4255bfb4cbfd2e6a0627%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=bc1c38b516ad4255bfb4cbfd2e6a0627&alt=media&optimized=true",
    description:
      "Understand leadership, execution, and high-performance team habits from Ann Hiatt’s experience working close to some of the world’s top leaders.",
  },
  {
    id: 6,
    name: "Morin Oluwole",
    company:
      "/external-images/img-a079a90c.webp",
    role: "Ex-Director at Meta",
    image:
      "/external-images/img-4422cf8c.webp",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F4d37000288bc4898afba44b5568d0d7c%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=4d37000288bc4898afba44b5568d0d7c&alt=media&optimized=true",
    description:
      "Learn how global product, partnerships, and growth teams think about scale, market expansion, and building strong business relationships.",
  },
  {
    id: 7,
    name: "Chris Barton",
    company: "",
    role: "Founder of Shazam",
    image:
      "/external-images/img-0aa41876.webp",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F92eef86c59e44cb9bf88943ee46097eb%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=92eef86c59e44cb9bf88943ee46097eb&alt=media&optimized=true",
    description:
      "Explore how Chris Barton built Shazam by solving a real user problem, staying persistent, and turning a complex idea into a simple product experience.",
  },
  {
    id: 8,
    name: "Caen Contee",
    company:
      "/external-images/img-98378e77.webp",
    role: "Founder of Lime",
    image:
      "/external-images/img-cf98df01.webp",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F734172ad92114e84ab3a068f9722cdfa%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=734172ad92114e84ab3a068f9722cdfa&alt=media&optimized=true",
    description:
      "Get founder lessons on building mobility products, scaling operations, understanding cities, and creating a business that solves everyday problems.",
  },
  {
    id: 9,
    name: "Uri Levine",
    company:
      "/external-images/img-7264ec14.webp",
    role: "Founder of Waze",
    image:
      "/external-images/img-766f6ec2.webp",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2Fe9701219a7e743408c14fa27cc8edd3a%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=e9701219a7e743408c14fa27cc8edd3a&alt=media&optimized=true",
    description:
      "Learn how Uri Levine approaches problem-solving, product-market fit, and building user-focused companies that grow through real-world value.",
  },
  {
    id: 10,
    name: "Kelly Richmond Pope",
    company:
      "/external-images/img-06092097.webp",
    role: "Best-Selling Author",
    image:
      "/external-images/img-44e39a2a.webp",
    video:
      "https://cdn.builder.io/o/assets%2F20c9f56ee0104a98bd873ddbe200463a%2F80aee6543c4946ec854dc7c019eaf8c8%2Fcompressed?apiKey=20c9f56ee0104a98bd873ddbe200463a&token=80aee6543c4946ec854dc7c019eaf8c8%2F80aee6543c4946ec854dc7c019eaf8c8&alt=media&optimized=true",
    description:
      "Gain practical insight on trust, decision-making, ethics, and business responsibility from Kelly Richmond Pope’s experience as an author and educator.",
  },
];

export type FeaturedItem = {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
};

export const featuredItems: FeaturedItem[] = [
  {
    id: 1,
    title: "Programmes",
    description:
      "Build once. Enrol forever. Video, audio, lessons, and free previews with a built-in funnel and payment plan attached from the start.",
    image:
      "/external-images/img-7001ff63.webp",
    href: "/features/coaching",
  },
  {
    id: 2,
    title: "Communities",
    description:
      "Free or paid. Attached to a programme or standalone. A private space where your clients connect, stay engaged, and go further together.",
    image:
      "/external-images/img-1cd5482a.webp",
    href: "/features/courses",
  },
  {
    id: 3,
    title: "Sessions",
    description:
      "1-on-1 and group bookings, automated reminders, and session notes stored on the client profile. Your calendar, finally under control.",
    image:
      "/external-images/img-9c9d37fe.webp",
    href: "/features/community",
  },
  {
    id: 4,
    title: "Client Portal",
    description:
      "A fully branded space where clients access their programmes, track goals, message you, and see exactly how far they've come.",
    image:
      "/external-images/img-85fe1f68.webp",
    href: "/features/memberships",
  },
  {
    id: 5,
    title: "Goal Tracking",
    description:
      "Set goals. Break them into milestones. Track every step. Clients who can see their progress stay longer and this makes progress impossible to miss.",
    image:
      "/external-images/img-f4b27b7d.webp",
    href: "/features/live-sessions",
  },
  {
    id: 6,
    title: "Engagement Tools",
    description:
      "Habit trackers, workbooks, journals, quizzes, challenges, scorecards, and accountability partners everything that keeps clients active between sessions.",
    image:
      "/external-images/img-ff1f1dad.webp",
    href: "/features/digital-products",
  },
  {
    id: 7,
    title: "Client Timeline",
    description:
      "Every session, payment, message, and milestone logged automatically in chronological order. Open a client profile and know the full story instantly.",
    image:
      "/external-images/img-3cdc23b2.webp",
    href: "/features/booking",
  },
  {
    id: 8,
    title: "Funnels & Pages",
    description:
      "Sales pages, landing pages, and opt-in funnels built inside Supreme Coach. Launch a programme and the funnel goes live with it no separate setup.",
    image:
      "/external-images/img-7dabeb01.webp",
    href: "/features/payments",
  },
  {
    id: 9,
    title: "Payments & Invoicing",
    description:
      "One-time, instalment, or subscription. Stripe, PayPal, Google Pay, and Apple Pay. Automated invoices. Zero manual chasing.",
    image:
      "/external-images/img-62a0e9fc.webp",
    href: "/features/payments",
  },
  {
    id: 10,
    title: "Sales Pipeline",
    description:
      "Track every prospect from first enquiry to signed client with ICP profiling, pipeline value, and forecasting built in.",
    image:
      "/external-images/img-d796c29b.webp",
    href: "/features/sales-pipeline",
  },
  {
    id: 11,
    title: "Automation & Workflows",
    description:
      "Connect every part of your business and remove every recurring manual task permanently. Build the workflow once. It runs forever.",
    image:
      "/external-images/img-e16544ce.webp",
    href: "/features/automation-workflows",
  },
  {
    id: 12,
    title: "Chat & Messaging",
    description:
      "Coach-to-client, group channels, and internal team messaging all inside Supreme Coach. Not WhatsApp. Not email threads.",
    image:
      "/external-images/img-3868f8fb.webp",
    href: "/features/chat-messaging",
  },
  {
    id: 13,
    title: "Integrations",
    description:
      "Zoom, Calendly, Stripe, Mailchimp, ActiveCampaign, Google Analytics, Meta Pixel, and more configured and live before we hand over the keys.",
    image:
      "/external-images/img-815b09a3.webp",
    href: "/features/integrations",
  },
  {
    id: 14,
    title: "Analytics",
    description:
      "Programme performance, client engagement, funnel conversions, and revenue every number that matters, in one place.",
    image:
      "/external-images/img-7de96a7c.webp",
    href: "/features/analytics",
  },
  {
    id: 15,
    title: "White Label",
    description:
      "Your name. Your brand. Your domain. Client portal, coach portal, team portal every touchpoint carries your identity, not ours.",
    image:
      "/external-images/img-ee160e5e.webp",
    href: "/features/white-label",
  },
];

export const instructors: InstructorItem[] = [
  {
    id: 1,
    name: "Jimmy Wales",
    role: "Founder of Wikipedia",
    company: "Wikipedia",
    image:
      "/faculty (1).webp",
    logoIcon: "mdi:wikipedia",
  },
  {
    id: 2,
    name: "Steve Chen",
    role: "Founder of YouTube",
    company: "YouTube",
    image:
      "/faculty (6).webp",
    logoIcon: "mdi:youtube",
  },
  {
    id: 3,
    name: "Chris Barton",
    role: "Founder of Shazam",
    company: "Shazam",
    image:
      "/external-images/img-99f718b9.webp",
    logoIcon: "mdi:music-circle",
  },
  {
    id: 4,
    name: "Rend Stephan",
    role: "Managing Director at BCG",
    company: "BCG",
    image:
      "/external-images/img-e7f9ff13.webp",
    logoIcon: "mdi:briefcase-variant",
  },
  {
    id: 5,
    name: "Caen Contee",
    role: "Founding Team at Lime",
    company: "Lime",
    image:
      "/external-images/img-56b47496.webp",
    logoIcon: "mdi:leaf-circle",
  },
  {
    id: 6,
    name: "Morin Oluwole",
    role: "Ex-Director at Meta",
    company: "Meta",
    image:
      "/external-images/img-50b82161.webp",
    logoIcon: "mdi:infinity",
  },
  {
    id: 7,
    name: "Angela Visage",
    role: "Founder of Eventbrite",
    company: "Eventbrite",
    image:
      "/faculty (5).webp",
    logoIcon: "mdi:ticket-confirmation",
  },
  {
    id: 8,
    name: "Gabriela Hersham",
    role: "Founder of Huckletree",
    company: "Huckletree",
    image:
      "/external-images/img-810fc6e5.webp",
    logoIcon: "mdi:tree",
  },
  {
    id: 9,
    name: "Jeffrey Gitomer",
    role: "Best-Selling Sales Author",
    company: "The New York Times",
    image:
      "/external-images/img-99f718b9.webp",
    logoIcon: "mdi:newspaper-variant",
  },
  {
    id: 10,
    name: "Tobi Oluwole",
    role: "LinkedIn Creator & Entrepreneur",
    company: "LinkedIn",
    image:
      "/external-images/img-183fbc87.webp",
    logoIcon: "mdi:linkedin",
  },
  {
    id: 11,
    name: "Uri Levine",
    role: "Founder of Waze",
    company: "Waze",
    image:
      "/external-images/img-12f849b6.webp",
    logoIcon: "mdi:car",
  },
  {
    id: 12,
    name: "Ann Hiatt",
    role: "First Chief of Staff at Google",
    company: "Google",
    image:
      "/external-images/img-810fc6e5.webp",
    logoIcon: "mdi:google",
  },
  {
    id: 13,
    name: "Kelly Richmond Pope",
    role: "Best-Selling Finance Author",
    company: "",
    image:
      "/external-images/img-e33c36da.webp",
    logoIcon: "mdi:cash-multiple",
  },
  {
    id: 14,
    name: "Greg Hoffman",
    role: "Former CMO at Nike",
    company: "Nike",
    image:
      "/faculty (4).webp",
    logoIcon: "mdi:shoe-sneaker",
    // badge: "New Course",
  },
  {
    id: 15,
    name: "Steve Cadigan",
    role: "Former CHRO at LinkedIn",
    company: "LinkedIn",
    image:
      "/faculty (3).webp",
    logoIcon: "mdi:linkedin",
    // badge: "Coming Soon",
  },
  {
    id: 16,
    name: "Felix Haas",
    role: "Design at Lovable",
    company: "Lovable",
    image:
      "/faculty (5).webp",
    logoIcon: "mdi:heart",
    // badge: "New Course",
  },
  {
    id: 17,
    name: "Sahil Bloom",
    role: "Best-Selling Author",
    company: "The New York Times",
    image:
      "/external-images/img-12f849b6.webp",
    logoIcon: "mdi:newspaper-variant",
  },
  {
    id: 18,
    name: "Zack Kass",
    role: "Former Head of Go-To-Market at OpenAI",
    company: "OpenAI",
    image:
      "/faculty (2).webp",
    logoIcon: "mdi:brain",
  },
  {
    id: 19,
    name: "Georgia Lewis Anderson",
    role: "Former Prompt Engineer at Microsoft",
    company: "Microsoft",
    image:
      "/external-images/img-50b82161.webp",
    logoIcon: "mdi:microsoft-windows",
  },
  {
    id: 20,
    name: "Harry Stebbings",
    role: "Founder of 20VC",
    company: "20VC",
    image:
      "/external-images/img-183fbc87.webp",
    logoIcon: "mdi:numeric-20-circle",
  },
  {
    id: 21,
    name: "Adam Cheyer",
    role: "Founder of Siri",
    company: "Apple",
    image:
      "/external-images/img-c691f61f.webp",
    logoIcon: "mdi:apple",
  },
];

export const whyAugmentSlides: WhyAugmentSlide[] = [
  {
    id: 1,
    eyebrow: "Why Supreme Coach?",
    title: "Real-World Startup\nInsights",
    description:
      "Gain hands-on experience and actionable skills. Supreme Coach provides real-world tactics and frameworks, taught by business legends.",
    buttonLabel: "Explore Courses",
    buttonHref: "/courses",
    image: "/step1.webp",
    imageAlt: "Course module preview collage",
    layout: "right-composite",
  },
  {
    id: 2,
    eyebrow: "Why Supreme Coach?",
    title: "Learn On Your Own\nTime",
    description:
      "Flexible, self-paced education for entrepreneurs. Access the best alternative MBA—anywhere, anytime, on any device.",
    buttonLabel: "Explore Courses",
    buttonHref: "/courses",
    image: "/step2.webp",
    imageAlt: "Supreme Coach dashboard preview",
    layout: "left-dashboard",
  },
  {
    id: 3,
    eyebrow: "Why Supreme Coach?",
    title: "Connect With Fellow\nFounders",
    description:
      "Get support from your peers through online masterminds and real-world networking events.",
    buttonLabel: "Explore Community",
    buttonHref: "/community",
    image: "/step3.webp",
    imageAlt: "Founder community member collage",
    layout: "right-community",
  },
];

export const Coaches_FEATURES = [
  {
    title: "Build it your way",
    description:
      "Video, audio, lessons, or worksheets structure your programme exactly how your methodology works. Drag modules, set drip schedules, and unlock lessons by milestone.",
  },
  {
    title: "Engagement that runs between sessions",
    description:
      "Habit trackers, journals, quizzes, scorecards, and 30-day challenges built directly into the programme so clients stay active, progress compounds, and results follow.",
  },
  {
    title: "Launch-ready from day one",
    description:
      "Every programme comes with a built-in funnel, free lesson preview, and payment plan attached from the start. One click to go live. Leads start coming in immediately.",
  },
];

export const Coaches_FEATURES2 = [
  {
    title: "Free or paid, your call",
    description:
      "Attach a community to any programme, offer it as a premium upgrade, or run it free to warm up leads not ready to buy yet. No Facebook group, no Discord, no separate platform to manage.",
  },
  {
    title: "A space that feels like yours",
    description:
      "Fully branded with your name and your domain. Polls, discussions, challenges, and stories all inside an environment your clients associate with your practice, not someone else's platform.",
  },
  {
    title: "Community that drives results, not just conversation",
    description:
      "Gamification, leaderboards, badges, and progress sharing built in so members celebrate each other's milestones, stay consistent between sessions, and turn community into long-term client relationships.",
  },
];

export const Firms_FEATURES = [
  {
    title: "Corporate client management",
    description:
      "Manage organisations, budget holders, and entire employee cohorts under one clean account. Bulk enrollment, company-level access controls, and separate invoicing built for how corporate buyers actually work.",
  },
  {
    title: "Consistent delivery across every coach",
    description:
      "Shared programme templates and standardised onboarding flows mean every client gets the same premium experience regardless of which coach delivers it or how many cohorts are running.",
  },
  {
    title: "ROI reporting that renews contracts for you",
    description:
      "Company-level dashboards showing utilisation, programme completion, and engagement scores across every employee generated automatically, ready to present to any L&D director without your team touching a report.",
  },
];

export const Firms_FEATURES2 = [
   {
    title: "Automation that runs the operation",
    description:
      "Connect every process in your firm onboarding, invoicing, session reminders, renewal flows into workflows that run permanently. Built once, running forever, no recurring manual tasks across your team.",
  },
  {
    title: "Powered by Modeller Agents",
    description:
      "The Modeller runs financial scenarios in plain language. The Analyst scans firm-wide data and flags what needs attention. The Planner delivers clear recommendations based on live numbers so your leadership team focuses on decisions, not on finding information.",
  },
  {
    title: "Completely and permanently yours",
    description:
      "Four fully white-label portals Admin, Coach, Team, and Client all on your custom domain, carrying your firm's brand on every touchpoint. Owned outright under a lifetime licence. No Supreme Coach branding. No monthly fee to keep it running.",
  },
];

export const reviewsContent: ReviewItem[] = [
  {
    id: 1,
    quote:
      "This was a goal I have wanted to accomplish further my knowledge and understanding as I continue to grow my business and continue my journey as an entrepreneur!",
    name: "Anwar Molette",
    role: "Executive Chef",
    avatar:
      "/external-images/img-166f6f59.webp",
  },
  {
    id: 2,
    quote:
      "Supreme Coach is the future of learning for business-minded people looking to gain real, practical knowledge about starting a business and developing in a successful way.",
    name: "Simon Lee Maryiah",
    role: "Founder",
    avatar:
      "/external-images/img-a0cd922d.webp",
  },
  {
    id: 3,
    quote:
      "I think Supreme Coach is a game changer. It's a brilliant concept and the contents, program and interface are just great. As soon as you start a module it becomes hard to stop. Also there is a human contact and great support from the orientation to graduation.",
    name: "Ivan Nappo",
    role: "Financial Regulation Specialist",
    avatar:
      "/external-images/img-f76f6529.webp",
  },
  {
    id: 4,
    quote:
      "This was the most enjoyable program I have completed. I could feel the impact of their perspectives and enjoy how the course allows you to continue learning as part of the community.",
    name: "Heather D. Whelan",
    role: "Business Coach",
    avatar:
      "/external-images/img-8da14f0a.webp",
  },
  {
    id: 5,
    quote:
      "The instructors incorporating their own experiences in the lesson made learning very easy on my part as it kept my interest level high. I wish Supreme Coach will continue adding more lectures as these are all gold!",
    name: "Delise Mutuc",
    role: "Sales & Marketing Strategist",
    avatar:
      "/external-images/img-7984e069.webp",
  },
  {
    id: 6,
    quote:
      "I found the course really straightforward, a positive experience! The micro units are suited around busy lifestyles and meant I could jump on as a break or even sitting in the coffee shop!",
    name: "Johabh Muldoogh",
    role: "Managing Director",
    avatar:
      "/external-images/img-3e9e34da.webp",
  },
  {
    id: 7,
    quote:
      "A valuable content that is accessible as a self-passed format. Beloved entrepreneurs and equally famous and highly respected creators and CEOs share their personal insights and journeys.",
    name: "Iloha Z.",
    role: "Self Employed",
    avatar:
      "/external-images/img-392a53b6.webp",
  },
  {
    id: 8,
    quote:
      "The content was very professionally presented and engaging. I also loved having the handbook takeaways for each model to be able to reference and refresh when needed.",
    name: "Matt Marsh",
    role: "Business Owner",
    avatar:
      "/external-images/img-c621b6fc.webp",
  },
  {
    id: 9,
    quote:
      "Flexibility, incredible resources, and inspiring live classes, I loved the Supreme Coach MBA Program. It taught me so much about the industry, helped me understand key things I’d never considered, and gave me the freedom to learn on my own time.",
    name: "Daisy White",
    role: "Senior Talent Manager",
    avatar:
      "/external-images/img-7496287f.webp",
  },
  {
    id: 10,
    quote:
      "This has been the most life-changing business course I’ve taken. Great lessons from people with real experience. There is support from staff but knowledge is the biggest touch that it works.",
    name: "Arthur Shaba",
    role: "Finance",
    avatar:
      "/external-images/img-ae7148aa.webp",
  },
  {
    id: 11,
    quote:
      "When I started this course, I got asked the question ‘how are you going to fit it in?’ However, what I’ve found is that it’s easy to fit the learning into my life.",
    name: "Hester Scotton",
    role: "Strategic CFO",
    avatar:
      "/external-images/img-84ab76b5.webp",
  },
  {
    id: 12,
    quote:
      "I’ve learned so much here that it feels like I could’ve spent 4 years in college and still not retained as much.",
    name: "Donavon Flegeance",
    role: "Business Consultant",
    avatar:
      "/external-images/img-426d4eea.webp",
  },
  {
    id: 13,
    quote:
      "The idea behind Supreme Coach is one I truly stand for. I LOVED this course and its structure. I’ll definitely keep coming back to its content because it’s that valuable.",
    name: "Mikhail Sieni",
    role: "Sales Director",
    avatar:
      "/external-images/img-3d2aa84a.webp",
  },
  {
    id: 14,
    quote:
      "The course touches on a lot of key areas most classes don't discuss that are paramount to success in business. I found the Supreme Coach program very accommodating to busy schedules.",
    name: "June Burton",
    role: "Financial Services Advisor",
    avatar:
      "/external-images/img-e208a441.webp",
  },
  {
    id: 15,
    quote:
      "Supreme Coach is not just another program; it’s built by founders, for founders, designed to give entrepreneurs the practical insights, network, and mindset they need to scale.",
    name: "Oren Broshi",
    role: "Entrepreneur | Founder of Stealth Mode Startup",
    avatar:
      "/external-images/img-6c29657f.webp",
  },
  {
    id: 16,
    quote:
      "From developing a deep understanding of emerging technologies to exploring new business models, the program equipped me with the skills and knowledge necessary to take on new challenges in the industry.",
    name: "Gary Lamach II",
    role: "Director @ AICPA",
    avatar:
      "/external-images/img-4d213539.webp",
  },
  {
    id: 17,
    quote:
      "In a world where traditional MBA teachings often revolve around academic research, Supreme Coach offers a modern and innovative approach to business education.",
    name: "Mubarak AlBahar",
    role: "Trade Relations Officer at The C Holding",
    avatar:
      "/external-images/img-b5ff7663.webp",
  },
  {
    id: 18,
    quote:
      "Last year, I decided to give Supreme Coach MBA a try. It's a new way of learning at your own pace and at an affordable price.",
    name: "Shkumbin Mustafa",
    role: "Branding & Digital Marketing",
    avatar:
      "/external-images/img-06a08520.webp",
  },
  {
    id: 19,
    quote:
      "What happens when you take the advice of a marketing and personal branding expert? The insights I gained were invaluable.",
    name: "Patricia Paisis-Oakwell",
    role: "Certified Health Coach",
    avatar:
      "/external-images/img-c0f7bc22.webp",
  },
  {
    id: 20,
    quote:
      "Supreme Coach is democratizing access to education against the traditional school systems that are for profit.",
    name: "Jamaal Bethea",
    role: "Business Owner",
    avatar:
      "/external-images/img-c673b5ce.webp",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Heather D. Whelan",
    role: "Business Coach",
    avatar: "/external-images/img-8da14f0a.webp",
    text: "This was the most enjoyable online educational program that I have ever completed. I could feel the impact of their experiences on their perspectives and enjoyed the quality of the content. I love how the program allows you to continue to be a part of the community and have access to new modules and materials as they are developed. I am very excited about what I learned through the program and looking forward to the continuing education component. Thank you! The quality and execution of the content.",
  },
  {
    id: 2,
    name: "Simon Lee Maryan",
    role: "Founder",
    avatar: "/external-images/img-a0cd922d.webp",
    text: "This program is so different from typical MBA's, and although it is still growing content, what it currently provides is so practical, realistic and valuable. I can't wait to see what comes next. It is online, self paced and great",
  },
  {
    id: 3,
    name: "Janene Nadolny-Jimenez",
    role: "Business Owner",
    avatar: "/external-images/img-fc706fca.webp",
    text: "My experience with Supreme Coach completely changed how I approach my business, my work, and my rest. It gave me a fresh perspective on old ideas and pushed me to face the hard parts instead of avoiding them. One chapter in particular made me realize I had to ‘fire’ the old version of myself, to stop playing small and start running a real, scalable company. The teachers were authentic, the content was current and practical, and the course was worth every penny.",
  },
  {
    id: 4,
    name: "Ivan Nappo",
    role: "Financial Regulation Specialist",
    avatar: "/external-images/img-f76f6529.webp",
    text: "I think Supreme Coach is a game changer. It's a brilliant concept and the contents, program and interface are just great. As soon as you start a module it becomes hard to stop. Also there is a human contact and great support from the orientation to graduation. I highly recommend it.",
  },
  {
    id: 5,
    name: "Hester Scotton",
    role: "Strategic CFO",
    avatar: "/external-images/img-84ab76b5.webp",
    text: "When I started this course, I got asked the question ‘how are you going to fit it in? You have a full time job as a CFO, you have two children, you are training for a marathon…’. The truthful answer was that I wasn’t sure. However, what I’ve found is that it’s easy to fit the learning into my life. The modules are all short and easy to digest. The content is enjoyable and engaging so I often do some of it as my lunch break or first thing in the morning. If you want to learn more about business but are worried you don’t have the time then I would highly recommend you look at Supreme Coach.",
    linkedin: true,
  },
  {
    id: 6,
    name: "Donavon Flegeance",
    role: "Business Consultant",
    avatar: "/external-images/img-426d4eea.webp",
    text: "I’ve learned so much here that it feels like I could’ve spent 4 years in college and still not retained as much. I love being able to move at my own pace and hear from people who’ve actually done it, not just professors who’ve never built anything.",
  },
  {
    id: 7,
    name: "Daisy White",
    role: "Senior Talent Manager",
    avatar: "/external-images/img-7496287f.webp",
    text: "Flexibility, incredible resources, and inspiring live classes, I loved the Supreme Coach MBA Program. It taught me so much about the industry, helped me understand key things I’d never considered, and gave me the freedom to learn on my own time. The support from the network was invaluable, and I couldn’t be more grateful or proud of what I’ve achieved.",
  },
  {
    id: 8,
    name: "Mikhail Sieni",
    role: "Sales Director",
    avatar: "/external-images/img-3d2aa84a.webp",
    text: "The idea behind Supreme Coach is one I truly stand for. I LOVED this course and its structure. I’ll definitely keep coming back to its content because it’s that valuable.",
  },
  {
    id: 9,
    name: "June Burton",
    role: "Financial Services Advisor",
    avatar: "/external-images/img-e208a441.webp",
    text: "The course touches on a lot of key areas most classes don't discuss that are paramount to success in business. I found the Supreme Coach program very accommodating to busy schedules.",
  },
  {
    id: 10,
    name: "Oren Broshi",
    role: "Entrepreneur | Founder of Stealth Mode Startup",
    avatar: "/external-images/img-6c29657f.webp",
    text: "Supreme Coach is not just another program; it’s built by founders, for founders, designed to give entrepreneurs the practical insights, network, and mindset they need to scale. Grateful to be part of it and highly recommend it to every entrepreneur who’s serious about leveling up",
    linkedin: true,
  },
  {
    id: 11,
    name: "Gary Lamach II",
    role: "Director @ AICPA",
    avatar: "/external-images/img-4d213539.webp",
    text: "From developing a deep understanding of emerging technologies to exploring new business models, the program equipped me with the skills and knowledge necessary to take on new challenges in the industry. Thank you, Supreme Coach , for this amazing opportunity!",
    linkedin: true,
  },
  {
    id: 12,
    name: "Mubarak AlBahar",
    role: "Trade Relations Officer at The C Holding",
    avatar: "/external-images/img-b5ff7663.webp",
    text: "In a world where traditional MBA teachings often revolve around academic research, Supreme Coach offers a modern and innovative approach to business education, emphasizing real-world insights directly from renowned entrepreneurial leaders. Supreme Coach's curriculum, characterized by its practical, founder-driven approach, has enriched my understanding of contemporary business practices grounded in genuine experiences.",
    linkedin: true,
  },
  {
    id: 13,
    name: "Shkumbin Mustafa",
    role: "Branding & Digital Marketing",
    avatar: "/external-images/img-06a08520.webp",
    text: "Last year, I decided to give Supreme Coach.org MBA a try. It's a new way of learning at your own pace and at an affordable price. The program offers direct advice from some of the smartest people in business, including the founders of Wikipedia, Waze, Shazam, and Lime. It’s a straightforward, fast, and affordable way to gain the skills and confidence needed to succeed in business. If you’re looking to learn how the best in the business made it and you want to start your own venture, I highly recommend giving Supreme Coach MBA a try.",
    linkedin: true,
  },
  {
    id: 14,
    name: "Patricia Paisis-Oakwell",
    role: "Certified Health Coach",
    avatar: "/external-images/img-c0f7bc22.webp",
    text: "What happens when you take the advice of a marketing and personal branding expert? On Thursday, I had the pleasure of attending an inspiring masterclass led by Tobi Oluwole on Marketing and Personal Branding, hosted by Ariel Renous and Elyssa Goldberg from Supreme Coach.org . The insights I gained were invaluable! Tonight, while reviewing my stats, I was excited to see that my post impressions increased by 90% in just one day. It’s amazing to see how quickly effective strategies can make an impact!",
    linkedin: true,
  },
  {
    id: 15,
    name: "Arthur Shaba",
    role: "Finance",
    avatar: "/external-images/img-ae7148aa.webp",
    text: "This has been the most life-changing program I’ve ever done. Great lessons from people who have the experience. No textbook staff but knowledge straight from those who’ve lived it and can vouch that it works.",
  },
  {
    id: 16,
    name: "Jamaal Bethea",
    role: "Business Owner",
    avatar: "/external-images/img-c673b5ce.webp",
    text: "Supreme Coach is democratizing access to education against the traditional school systems that are for profit. These systems are archaic and don’t represent the needs of many communities that don’t have access to economic resources or connections.",
  },
  {
    id: 17,
    name: "Momchil Tsonev",
    role: "Commodity Trader",
    avatar: "/external-images/img-c9743e4a.webp",
    text: "Program is structured in very unique and intuitive way. It gives exposure to diverse perspectives and practical wisdom that make business and everyday concepts more tangible and easy to understand. But most important it could inspire more people to approach challenges with a creative and entrepreneurial mindset and help them set up their own business ventures. The program goes beyond the conventional by integrating real-world insights from practitioners, entrepreneurs, and business founders.",
  },
  {
    id: 18,
    name: "Anwar Molette",
    role: "Executive Chef",
    avatar: "/external-images/img-166f6f59.webp",
    text: "This was a goal I have wanted to accomplish to further my knowledge and understanding as I continue to grow my business and continue my journey as an entrepreneur! It taught me many useful things I needed to know in order to be successful, the baffling things that I had questions for, that went unanswered in my mind, gave me a different look at how to handle myself as a business owner and leader of my company",
  },
  {
    id: 19,
    name: "Swaroop Rath",
    role: "Software Engineer",
    avatar: "/external-images/img-6c8e428f.webp",
    text: "Love it! And I learnt a lot. What I like the most is the content, format, summaries, knowledge and the fact that it’s always available and growing. Also the community, social media channels and the support group are great",
  },
  {
    id: 20,
    name: "Kenneth Maynard",
    role: "Business Owner",
    avatar: "/external-images/img-4f05bfe0.webp",
    text: "It is priceless to have such esteemed and successful faculty, they teach business concepts that are immediately applicable for entrepreneurs, not to mention the most outstanding value for money!",
  },
  {
    id: 21,
    name: "Jason Doubt",
    role: "Co-Founder",
    avatar: "/external-images/img-6e294497.webp",
    text: "Supreme Coach is the future of learning for business-minded people looking to gain real, practical knowledge about starting a business and developing in a successful way.",
  },
  {
    id: 22,
    name: "Muzammil Kamran",
    role: "Writer",
    avatar: "/external-images/img-8cce212e.webp",
    text: "This is the best entrepreneurship course out there which distinguishes itself from traditional business education which teaches ages old theories and frameworks leaving you in no place to start your own venture. Supreme Coach not only teaches practical concepts but a comprehensive understanding which enables you to start your own venture. When do you get a chance to learn from founders of Youtube, Shazam, Waze and Wikipedia etc? The course gave me an insight into the mindset of people who made the magic happen and changed the world.",
  },
  {
    id: 23,
    name: "Denise Mutuc",
    role: "Sales & Marketing Strategist",
    avatar: "/external-images/img-7984e069.webp",
    text: "The instructors incorporating their own experiences in the lesson made learning very easy on my part as it kept my interest level high.I'm happy to have access to the lessons along with the downloadable PDF files as I would love to come back and revisit every now and then. I wish Supreme Coach will continue adding more lectures as these are all gold!",
  },
  {
    id: 24,
    name: "Johann Muldoon",
    role: "Managing Director",
    avatar: "/external-images/img-3e9e34da.webp",
    text: "I found the course really straightforward, a positive experience! The micro units are suited around busy lifestyles and meant I could jump on as a break or even sitting in the coffee shop!",
  },
  {
    id: 25,
    name: "Iliona Zablockaja",
    role: "Self Employed",
    avatar: "/external-images/img-392a53b6.webp",
    text: "A valuable content that is accessible as a self-passed format. Beloved entrepreneurs and equally famous and highly respected creators and CEOs share their personal insights and journeys. That's a valuable resource to gain knowledge about the business world, especially for those, who never had a chance to familiarize with this part of the professionals in the business society.",
  },
  {
    id: 26,
    name: "Matt Marsh",
    role: "Business Owner",
    avatar: "/external-images/img-c621b6fc.webp",
    text: "The content was very professionally presented and engaging. I also loved having the handbook takeaways for each model to be able to reference and refresh when needed.",
  },
  {
    id: 27,
    name: "Victory Oluwagbemiga",
    role: "Business Owner",
    avatar: "/external-images/img-8cce212e.webp",
    text: "I still remember my first Supreme Coach trial with Ann Hiatt, I thought, ‘There’s no way I’m going to let this go.’ I felt like I found gold!. Joining Supreme Coach to get coached by some of the best minds in the world has been a major milestone in my professional career. Meeting the Supreme Coach team in London was amazing and I will never forget it, thank you for such a powerful experience!",
  },
  {
    id: 28,
    name: "Amit Bhundhoo, CPA",
    role: "Cloud Accounting | Tax | Strategy | Financial Management  Tax Planning | Fractional SMB Support",
    avatar: "/external-images/img-b0f0e276.webp",
    text: "I’ve officially graduated from the Supreme Coach.org MBA. A new-age program built for entrepreneurs, innovators, and modern business leaders. Unlike traditional MBAs, Supreme Coach is practical, immersive, and refreshingly honest about what it takes to grow a sustainable business today. It has sharpened how I think strategically about business, finance, and leadership; lessons I’m already applying in my own work.",
    linkedin: true,
  },
  {
    id: 29,
    name: "Mohit Patel",
    role: "Founder of TruText | Building a Better Way to Connect | Ex-Mathnasium Owner",
    avatar: "/external-images/img-f9efaa4d.webp",
    text: "Last week, I officially completed the Supreme Coach Business School MBA course—but the real learning is just beginning. Supreme Coach Business School is not a normal MBA course. You get real advice from real entrepreneurs who have been through every struggle you can think of. It’s not just theory—it’s real-world strategies, lessons from failures, and insights you won’t find in a textbook. One of the biggest takeaways? You don’t have to figure it all out alone. Building a business can feel isolating, but surrounding yourself with the right people changes everything. Hearing from founders who have been in the same trenches—solving the same problems—gave me perspectives I never would’ve considered on my own. I also love how Supreme Coach is always adding new material and new resources for students. Can't wait to see what 2025 has in store! 📌 Lesson learned: The best investment you can make is in learning from others. A huge thanks to the Supreme Coach team and the incredible entrepreneurs in the program. Now, it’s time to apply what I’ve learned! For all the business owners out there—what’s the best piece of advice you’ve ever received? Drop it in the comments!",
    linkedin: true,
  },
  {
    id: 30,
    name: "Christopher Mensah",
    role: "Solution Consultant Digital Assets, Web3, Board Advisor, Digital Assets Educator: Bridging the gap from web2 to web3",
    avatar: "/external-images/img-11462a2c.webp",
    text: "When you decide to upgrade your knowledge, I recommend studying business. Supreme Coach's alternative MBA was invaluable in its content and its insights were exactly what I was looking for, I was able to apply the principles immediately. Entrepreneurship, intrapreneurship or solopreneurship is accessible to all when you understand the principles and applications of business. If you were thinking of a course to upgrade your knowledge, check Supreme Coach.org",
    linkedin: true,
  },
  {
    id: 31,
    name: "Gilles Chetelat",
    role: "CEO at mediarithmics",
    avatar: "/external-images/img-e3128b05.webp",
    text: "This is in fact my 3rd master's degree after Georgia Institute of Technology and ESC Clermont Business School but this experience was invaluable: 👉 Taught by the best tech entrepreneurs from the Silicon Valley including founders from Shazam, Youtube, Wikipedia, Waze and Lime... ⛵️ Fully Remote and 20 times less expensive than a full time MBA, ⛳️ Graduated >20 years after my last degree (Was worth the update), ♻️ No travel needed.",
    linkedin: true,
  },
  {
    id: 32,
    name: "Aidan Kaye",
    role: "Servant Leader | Entrepreneur",
    avatar: "/external-images/img-7d5fb164.webp",
    text: "Happy to have completed the Supreme Coach MBA program. I loved the course, as it filled gaps in my knowledge of my business skills, including leadership, business strategy, entrepreneurship, and financial accounting. I'm excited to put these skills to use!",
    linkedin: true,
  },
  {
    id: 33,
    name: "Gregory T. Lande",
    role: "Award-Winning Sales Leader",
    avatar: "/external-images/img-d2ef96df.webp",
    text: "I recently completed my MBA program with The #Supreme Coach Business School; it was an incredibly educational and rewarding experience. The support and guidance from #Supreme Coach's faculty was invaluable...from Joaquim Berryer convincing me that at this stage of my career #Supreme Coach was undoubtedly the right choice, to Joceline Perrot continually communicating with me ensuring that the modules. I couldn't be happier with the choice I made with #Supreme Coach...you have added to my life in multiple ways, and I couldn't be more grateful.",
    linkedin: true,
  },
  {
    id: 34,
    name: "Grace Randall",
    role: "Project Manager at StrategiQ",
    avatar: "/external-images/img-f610b6db.webp",
    text: "This course has given me actionable insights from the world's most successful founders and top executives, supporting me to progress my professional career. It's especially helped to elevate my thinking which will be invaluable when delivering projects and working with our brilliant clients.",
    linkedin: true,
  },
  {
    id: 35,
    name: "Kelvin Alaneme",
    role: "CEO Mindhelpa",
    avatar: "/external-images/img-85a5b5a2.webp",
    text: "If you are a startup founder and there is just one book to read, I will recommend Uri Levine’s masterpiece - 'Fall in Love with the Problem, Not the Solution'. Uri is the Co-Founder of Waze and Moovit - 2 unicorns (private companies valued at over $1 billion). I encountered him during my Supreme Coach.org MBA program and he spits gems after gems.",
    linkedin: true,
  },
  {
    id: 36,
    name: "Carl Morris",
    role: "Experienced EdTech Founder",
    avatar: "/external-images/img-ce2d9435.webp",
    text: "Huge thanks for the mention in the latest Supreme Coach.org community update. 🙏 Calling all aspiring entrepreneurs! If you're looking to level up your skills, this course is a game-changer. Packed with invaluable insights and advice from seasoned innovators. 💡💪",
    linkedin: true,
  },
  {
    id: 37,
    name: "Kevin Creery",
    role: "Planning Analyst @ Resort Municipality Of Whistler | Community Planning | Policy Planning | Bylaw Enforcement",
    avatar: "/external-images/img-355eaaee.webp",
    text: "Supreme Coach offers great insights from tech founders and CEOs about how they started their businesses. Supreme Coach fits my needs to grow my business and tech expertise with real-world examples from successful tech founders. Supreme Coach enables me to learn the modules as I go and handbooks provide more background and context. As a lifelong learner who embraces innovation, Supreme Coach provides me with many skills and the knowledge necessary to advance my career and enhance opportunities.",
    linkedin: true,
  },
  {
    id: 38,
    name: "Azam Khan",
    role: "ASM Software Manager | Driving Quality and Efficiency",
    avatar: "/external-images/img-8cce212e.webp",
    text: "What an MBA ⭐️⭐️⭐️⭐️⭐️",
    linkedin: true,
  },
  {
    id: 39,
    name: "Tamzidul Matin",
    role: "Cloud DevOps Engineer",
    avatar: "/external-images/img-cb9966eb.webp",
    text: "This revolutionary program, taught by some of the world's most accomplished founders, has been an incredible journey of learning and growth. The knowledge and insights I've gained throughout this program are invaluable. I've had the opportunity to delve deep into the world of business, learning from the best in the field, and applying these learnings to real-world scenarios.",
    linkedin: true,
  },
  {
    id: 40,
    name: "Jean Boutros",
    role: "Data Engineering and Analytics Lead at PwC UK",
    avatar: "/external-images/img-7e6d3717.webp",
    text: "I have studied at 6 different universities, some of which I graduated with a degree, others I didn't. While I still have a special place for academia in my life, and while I'm still planning to pursue my PhD in social sciences, there's a reality that keeps striking me every time I think back about my academic journeys. I can describe my academic journeys as enriching and eye-opening, but also economically straining and socially exclusionist. I can also confidently say that classic education still got a long way before it becomes aligned with real-life and market skills. I am delighted to share that I’ve started my Master of Business Administration - MBA at Supreme Coach. Supreme Coach's mission is to democratise business education, enabling access to a wider audience, away from systemic selectivism that is strengthened by socio-economic factors. Supreme Coach's objective is also to form people with market-ready skills and a growth make-it-happen mindset. #business #education #mba #growth #Supreme Coachmba Voir la traduction",
    linkedin: true,
  },
];

export const traditionalMbaItems: ComparisonItem[] = [
  { text: "Monthly subscriptions forever, for tools you never fully own" },
  { text: "Five platforms stitched together and hoping they sync" },
  { text: "DIY setup you're handed software and a help centre" },
  { text: "Generic tools adapted for coaching as an afterthought" },
  { text: "A new developer needed every time something breaks" },
  { text: "Your business stops the moment you stop" },
  { text: "Paying more every year for the same broken infrastructure" },
];

export const augmentMbaItems: ComparisonItem[] = [
  { text: "One investment. Own it for life under your personal licence" },
  { text: "One complete ecosystem built, configured, and handed over" },
  { text: "Done-for-you we build it, you run it" },
  { text: "Built exclusively for coaches and coaching firms. Nothing else." },
  { text: "Lifetime website admin updates handled by our team, forever" },
  { text: "A system that runs whether you show up this week or not" },
  { text: "Payment plans available spread the investment, own the result" },
];

export const navLinks: NavLink[] = [
  { label: "Faculty", href: "/faculty" },
  { label: "Community", href: "/students" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const highlights: string[] = [
  "Online",
  "Bite-sized Lessons",
  "Certificate",
];

export const logos: string[] = [
  "Forbes",
  "Entrepreneur",
  "TechCrunch",
  "Fast Company",
  "Business Insider",
];

export const whyCards: WhyCard[] = [
  {
    title: "Learn from iconic operators",
    text: "Practical business lessons from founders and executives who have built category-defining companies.",
  },
  {
    title: "Built for modern entrepreneurs",
    text: "A flexible alternative to traditional business school focused on real decisions, growth, and execution.",
  },
  {
    title: "Actionable and self-paced",
    text: "Short lessons, practical frameworks, and a format that fits around work and life.",
  },
];

export const comparisonRows: ComparisonRow[] = [
  ["Format", "Online, flexible", "Campus-based"],
  ["Speed", "Bite-sized learning", "Semester structure"],
  ["Focus", "Practical entrepreneurship", "Academic curriculum"],
  ["Outcome", "Immediate application", "Longer-term theory"],
];

export type SecurityItem = {
  name: string;
  src: string;
  width: number;
  height: number;
};

export const securityItems: SecurityItem[] = [
  {
    name: "SOC 2",
    src: "/security (1).svg",
    width: 56,
    height: 56,
  },
  {
    name: "GDPR",
    src: "/security (3).svg",
    width: 56,
    height: 56,
  },
  {
    name: "PCI DSS",
    src: "/security (2).svg",
    width: 56,
    height: 56,
  },
  {
    name: "CCPA",
    src: "/security (4).svg",
    width: 56,
    height: 56,
  },
  {
    name: "AICPA",
    src: "/external-images/img-278521d2.webp",
    width: 56,
    height: 56,
  },
];

export type FAQItem = {
  question: string;
  answer: string;
};


export const homeFaqs: FAQItem[] = [
  {
    question: "What exactly do you deliver at the end of a project?",
    answer:
      "We deliver a fully functional, fully deployed coaching business infrastructure running on your own server or hosting account. This includes your website, your lead generation system, your client portal and CRM, your programme delivery system, and all configured integrations — depending on your plan. You receive full admin access, complete documentation, and a training session. After delivery, you own and control everything.",
  },
  {
    question: "Do I need to have my own server or hosting?",
    answer:
      "We assist with server setup and configuration as part of the project. If you do not have existing hosting, we will recommend suitable options for your build and help you set up the account. The hosting remains in your name and under your payment — we do not resell hosting.",
  },
  {
    question: "What does the NDA actually protect?",
    answer:
      "The mutual non-disclosure agreement protects the specific architecture, configuration, and proprietary components of your coaching infrastructure. We commit to never sharing, replicating, or disclosing the specifics of your build to other coaching businesses, particularly competitors in your niche. The agreement is signed before project completion and remains in effect permanently.",
  },
  {
    question: "How long does a build take?",
    answer:
      "Basic builds typically complete in 10–14 business days from onboarding. Growth builds take 14–21 business days. Business builds are scoped individually but typically run 3–5 weeks from onboarding. Timeline depends on the speed of asset provision from your side — copy, branding assets, photography.",
  },
  {
    question: "What if I want to change something after delivery?",
    answer:
      "You have full admin access to your infrastructure and can make most changes independently. For more significant changes — new features, additional integrations, or expansion builds — our team is available for ongoing project work. There is no mandatory support retainer.",
  },
  {
    question:
      "Is Supreme Coach's infrastructure based on existing technology, or built from scratch?",
    answer:
      "We use proven, industry-standard open technology — no proprietary languages or frameworks that would create future dependency. What is proprietary is our architecture logic, our coaching-specific configurations, and our build methodology. The underlying technologies are widely supported and maintainable by any competent development team.",
  },
];

export const contactFaqs: FAQItem[] = [
  {
    question: "What should I prepare before the strategy call?",
    answer:
      "Nothing formal. If you can briefly describe your coaching model, your ideal client, and what you want your coaching business to accomplish — that is enough to have a productive first call. We will ask the right questions to get to a clear project scope.",
  },
  {
    question: "What if I am not sure which build level I need?",
    answer:
      "That is exactly what the strategy call resolves. We will assess your situation honestly — including recommending a smaller build if that is what your current stage needs — and give you a clear recommendation with our reasoning.",
  },
  {
    question: "Is there a non-disclosure agreement for the strategy call itself?",
    answer:
      "If you have concerns about sharing your coaching methodology or business details before a formal NDA is in place, let us know when you request the call. We are happy to sign a call-level NDA before the session begins.",
  },
  {
    question: "How long from strategy call to delivery?",
    answer:
      "Basic builds: 10–14 business days. Growth builds: 14–21 business days. Business builds: 3–5 weeks, scoped individually. All timelines assume timely provision of required assets from your side — brand guidelines, copy brief, photography.",
  },
  {
    question: "Do you work with coaches and firms outside the UK?",
    answer:
      "Yes. We work with coaching professionals globally. Project pricing is in GBP. Calls are conducted via Zoom across all time zones. Data residency for server deployment can be configured to your jurisdiction's requirements.",
  },
];

export const pricingFaqs: FAQItem[] = [
  {
    question: "These look expensive. How do I justify this to myself?",
    answer:
      "Run the numbers for your coaching business. If you currently spend £200/month on tools — website, CRM, email, booking, course platform — you spend £2,400 every year, indefinitely. Supreme Coach Basic at £7,000 breaks even in under 3 years on tool savings alone. After that, every year costs you nothing in platform fees. And unlike subscription tools, your investment produces an asset you own — a professional coaching business infrastructure that compounds in value as your reputation and client base grow.",
  },
  {
    question: "Are payment plans available?",
    answer:
      "Yes. We can structure the project investment across instalments. Speak to our team to arrange a payment schedule that works for your cash flow. Typically we agree a build commencement payment and a completion payment, with flexibility on timelines.",
  },
  {
    question: "What is the difference between 'Build' and a subscription plan?",
    answer:
      "A subscription plan gives you access to someone else's platform for as long as you keep paying. A Supreme Coach Build is a custom project — we design, build, and deploy infrastructure on your servers, and it belongs to you permanently. There is no ongoing access fee because you are not accessing our platform. You are running your own.",
  },
  {
    question: "Can I start with Basic and expand later?",
    answer:
      "Yes. Coaches typically start with Basic, build their client base, and then commission a Growth build when they are ready to systematise client management and programme delivery. You pay the project fee for each build phase — there is no penalty for staging your investment.",
  },
  {
    question: "What are my hosting costs after the build?",
    answer:
      "Hosting costs depend on the infrastructure scale of your build. For most individual coaches, quality managed hosting runs £15–40/month. For firm-level builds, hosting requirements vary. We recommend specific hosting configurations for each build and help you set up the account — the cost is transparent before we begin.",
  },
  {
    question: "Do you take a percentage of my coaching revenue?",
    answer:
      "No. Zero. What you earn from your coaching business is entirely yours. Supreme Coach's compensation ends at project delivery.",
  },
];

export const productFaqs: FAQItem[] = [
  {
    question: "Are these 'ready-made' solutions or truly custom?",
    answer:
      "Both, in a specific way. We use proven frameworks — infrastructure patterns we have developed and tested across many coaching businesses — as the foundation for every build. These frameworks eliminate the inefficiency of starting from scratch and incorporate years of refinement. On top of these foundations, we customise every component to your brand, your methodology, your programmes, and your audience. The result looks and functions as a fully custom build because, from your perspective and your clients' perspective, it is.",
  },
  {
    question: "What technology is the infrastructure built on?",
    answer:
      "We use industry-standard, widely supported web technologies — not proprietary frameworks that create dependency on our team. After delivery, any competent web development professional can maintain and extend your infrastructure. We will discuss the specific technology stack in detail during your strategy call — we are transparent about every component.",
  },
  {
    question: "Can I extend the build later?",
    answer:
      "Yes. Your infrastructure is designed to be extensible. Future projects can add new components, new integrations, or expanded capability. Because everything runs on your servers, there is no platform restriction on what can be added.",
  },
  {
    question: "What if something breaks after delivery?",
    answer:
      "We provide structured handover documentation and admin training so your team can handle routine maintenance independently. For anything beyond routine maintenance, our team is available for ongoing support as a separate project or retainer arrangement.",
  },
];

export const aboutFaqs: FAQItem[] = [
  {
    question: "Why was Supreme Coach created?",
    answer:
      "Supreme Coach was created to make high-quality business education more practical, flexible, and accessible for entrepreneurs and professionals.",
  },
  {
    question: "Who teaches at Supreme Coach?",
    answer:
      "Supreme Coach courses are taught by experienced founders, executives, and business leaders who have built and scaled real companies.",
  },
  {
    question: "Is Supreme Coach an accredited university?",
    answer:
      "Supreme Coach is not a traditional university. It is built to provide practical business learning outside the limitations of traditional academic programs.",
  },
  {
    question: "What makes Supreme Coach trusted?",
    answer:
      "Supreme Coach focuses on real business experience, practical frameworks, and learning from people who have worked at a high level in business.",
  },
];

export const communityFaqs: FAQItem[] = [
  {
    question: "What is included in the Supreme Coach community?",
    answer:
      "The community gives members a place to connect with entrepreneurs, professionals, and learners who are also building and growing businesses.",
  },
  {
    question: "Can I network with other founders?",
    answer:
      "Yes. Supreme Coach gives you opportunities to connect with like-minded founders, operators, and professionals from different backgrounds.",
  },
  {
    question: "Are there live sessions or meetups?",
    answer:
      "Depending on your program, Supreme Coach may include live Q&A sessions, networking events, and selected in-person meetups.",
  },
  {
    question: "Is the community useful after completing the course?",
    answer:
      "Yes. The community can help you keep learning, ask questions, share progress, and build long-term professional connections.",
  },
];

export const integrationsFaqs: FAQItem[] = [
  {
    question: "Can I access Supreme Coach from different devices?",
    answer:
      "Yes. You can access Supreme Coach online from your laptop, tablet, or mobile device depending on the platform access available.",
  },
  {
    question: "Does Supreme Coach work with my existing workflow?",
    answer:
      "Yes. Supreme Coach is designed for busy professionals, so you can learn alongside your work, business, or team responsibilities.",
  },
  {
    question: "Can teams use Supreme Coach together?",
    answer:
      "Yes. Teams can use Supreme Coach to build shared business knowledge, improve leadership skills, and create a common learning system.",
  },
  {
    question: "Do I need any special software?",
    answer:
      "No special setup is usually required. You only need internet access and the login details provided after enrollment.",
  },
];

export const teamFaqs: FAQItem[] = [
  {
    question:
      "We have 15 coaches in our team. Can the infrastructure handle this scale?",
    answer:
      "Yes. The Business build is engineered for multi-coach firm operations. Role-based access controls, team assignment management, and aggregated reporting are all configured specifically for your team size and structure.",
  },
  {
    question:
      "Our corporate clients require GDPR-compliant data handling. How does this work?",
    answer:
      "When your infrastructure is deployed on your own servers, you have complete control over data handling. We configure the build to GDPR standards — data residency, encryption, consent management, data subject rights — and provide documentation for your compliance officer.",
  },
  {
    question:
      "We currently use a mix of platforms. How disruptive is the migration?",
    answer:
      "We manage migration as a structured project workstream, not an afterthought. Client data, programme content, and email lists are migrated with full validation before the old infrastructure is decommissioned. Your clients typically experience no disruption — they simply find a significantly improved environment.",
  },
  {
    question:
      "We have proprietary coaching frameworks and methodology. How is this protected?",
    answer:
      "Your methodology, programme architecture, and proprietary frameworks are covered by the NDA we sign before delivery. Beyond the legal protection, because your infrastructure is deployed on your servers, there is no third-party access to your content — unlike SaaS platforms where your content sits on their servers.",
  },
  {
    question:
      "Can we commission additional development after the initial build?",
    answer:
      "Yes. As your firm grows and requirements change, our team is available for additional development projects — new programme types, additional integrations, expanded features, or entirely new infrastructure components. There is no lock-in to using Supreme Coach for maintenance, but most firms continue working with us because we understand their infrastructure intimately.",
  },
];

export const solutionsFaqs: FAQItem[] = [
  {
    question: "What business problems does Supreme Coach help solve?",
    answer:
      "Supreme Coach helps with business strategy, leadership, growth, decision-making, entrepreneurship, and building stronger business skills.",
  },
  {
    question: "Is Supreme Coach useful for startup founders?",
    answer:
      "Yes. Startup founders can learn practical lessons about scaling, fundraising, leadership, product thinking, and business growth.",
  },
  {
    question: "Can Supreme Coach help experienced professionals?",
    answer:
      "Yes. Supreme Coach is not only for beginners. It is also useful for experienced professionals who want sharper business thinking.",
  },
  {
    question: "How fast can I start learning?",
    answer:
      "You can start learning after enrollment and access setup. The lessons are flexible, so you can begin at your own pace.",
  },
];


export const coachesFaqs: FAQItem[] = [
  {
    question: "I am a solo coach — is this too much infrastructure for my stage?",
    answer:
      "Our Basic build is specifically sized for solo coaches at any stage. It gives you everything you need to operate as a professional coaching business — website, lead generation, email, booking, and payment infrastructure — without the complexity of enterprise features you do not need yet. As your practice grows, you can commission Growth or Business builds.",
  },
  {
    question: "Do I need to find my own hosting before we start?",
    answer:
      "No. We help you set up appropriate hosting as part of the project. We will recommend options that match your technical comfort level — from managed hosting that requires very little technical knowledge to maintain, through to more developer-friendly infrastructure for coaches who want full technical control. The hosting is in your name and under your payment from day one.",
  },
  {
    question: "What happens to my existing website and client base?",
    answer:
      "We coordinate migration of your existing content, client contact lists, and email subscribers as part of the project handover. Your existing clients experience minimal disruption, and in most cases the transition is invisible to them — they simply find their portal and programmes in a significantly better environment than before.",
  },
  {
    question: "Can I manage the website content myself after delivery?",
    answer:
      "Yes. Your website is built with a content management system that allows you to update copy, add blog posts, change images, and edit page content without technical skills. We provide training on the CMS as part of the handover.",
  },
  {
    question: "Will this work if I serve clients internationally?",
    answer:
      "Yes. Your infrastructure can be configured for international delivery — Stripe supports 135+ currencies, your portal and website are accessible globally, and your email marketing can be segmented by geography. The only consideration for some coaches is data sovereignty — if your clients are in the EU, we can ensure your server infrastructure meets GDPR requirements.",
  },
];

export const footerLinks: NavLink[] = [
  { label: "Faculty", href: "/faculty" },
  { label: "Community", href: "/students" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];