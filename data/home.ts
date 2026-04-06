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

export const testimonials: Testimonial[] = [
  {
    name: "Gellan Watt",
    role: "Serial Entrepreneur",
    text: "These guys and this product are absolutely brilliant. If you're not doing the Augment MBA program, you're missing out on an incredible opportunity.",
  },
  {
    name: "Rachel Rose",
    role: "Product Lead",
    text: "I feel so empowered by the real-life expertise from The Augment MBA. The instructors were amazing and the case studies were incredibly practical.",
  },
  {
    name: "Greg Lande",
    role: "Founder",
    text: "Outstanding content provided by the world’s top CEOs delivered in a digestible, engaging platform.",
  },
];

export const comparisonRows: ComparisonRow[] = [
  ["Format", "Online, flexible", "Campus-based"],
  ["Speed", "Bite-sized learning", "Semester structure"],
  ["Focus", "Practical entrepreneurship", "Academic curriculum"],
  ["Outcome", "Immediate application", "Longer-term theory"],
];

export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "What is Augment?",
    answer:
      "Augment is a Business School for entrepreneurs. We offer practical, real-world courses led by world-class founders & executives. Beyond content, you’ll join a vibrant community and connect with like-minded individuals from around the globe.",
  },
  {
    question: "Will this actually help me grow my business?",
    answer:
      "Yes. Over 2,000 entrepreneurs and executives have used Augment to scale businesses, land investments, and lead with confidence.",
  },
  {
    question: "An MBA for $2,450. What's the catch?",
    answer:
      "Our independence from traditional academic institutions and accreditation bodies means we have much more flexibility than traditional MBA programs. Our mission is to make premium business education accessible by making it as affordable as possible.",
  },
  {
    question: "I don't have time for this.",
    answer:
      "Learn in just 15 minutes a day. No fluff, no wasted hours, on your schedule.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes. Try Augment risk-free for 15 days. If you don’t find value, we’ll refund you. Just send us an email at finance@augment.org.",
  },
  {
    question: "Is this just video lessons?",
    answer:
      "No. You’ll get live Q&A sessions, in-person meetups and private networking.",
  },
  {
    question: "Can I expense this through my company?",
    answer:
      "Yes. Many students expense Augment as professional development. We can provide documentation upon request.",
  },
  {
    question: "What if I already have experience in business?",
    answer:
      "Augment isn’t about basics. It’s about learning the exact strategies billion-dollar founders used to scale and lead at the highest level.",
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