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
  avatar: string;
  text: string;
  linkedin?: boolean;
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
      "https://images.pexels.com/photos/12616223/pexels-photo-12616223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:music-circle",
  },
  {
    id: 4,
    name: "Rend Stephan",
    role: "Managing Director at BCG",
    company: "BCG",
    image:
      "https://images.pexels.com/photos/36934779/pexels-photo-36934779/free-photo-of-business-portrait-in-formal-suit-on-black-background.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:briefcase-variant",
  },
  {
    id: 5,
    name: "Caen Contee",
    role: "Founding Team at Lime",
    company: "Lime",
    image:
      "https://images.pexels.com/photos/28186654/pexels-photo-28186654/free-photo-of-business-meeting.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:leaf-circle",
  },
  {
    id: 6,
    name: "Morin Oluwole",
    role: "Ex-Director at Meta",
    company: "Meta",
    image:
      "https://images.pexels.com/photos/10375939/pexels-photo-10375939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
      "https://images.pexels.com/photos/7710091/pexels-photo-7710091.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:tree",
  },
  {
    id: 9,
    name: "Jeffrey Gitomer",
    role: "Best-Selling Sales Author",
    company: "The New York Times",
    image:
      "https://images.pexels.com/photos/12616223/pexels-photo-12616223.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:newspaper-variant",
  },
  {
    id: 10,
    name: "Tobi Oluwole",
    role: "LinkedIn Creator & Entrepreneur",
    company: "LinkedIn",
    image:
      "https://images.pexels.com/photos/5717304/pexels-photo-5717304.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:linkedin",
  },
  {
    id: 11,
    name: "Uri Levine",
    role: "Founder of Waze",
    company: "Waze",
    image:
      "https://images.pexels.com/photos/8424520/pexels-photo-8424520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:car",
  },
  {
    id: 12,
    name: "Ann Hiatt",
    role: "First Chief of Staff at Google",
    company: "Google",
    image:
      "https://images.pexels.com/photos/7710091/pexels-photo-7710091.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:google",
  },
  {
    id: 13,
    name: "Kelly Richmond Pope",
    role: "Best-Selling Finance Author",
    company: "",
    image:
      "https://images.pexels.com/photos/7394350/pexels-photo-7394350.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
      "https://images.pexels.com/photos/8424520/pexels-photo-8424520.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
      "https://images.pexels.com/photos/10375939/pexels-photo-10375939.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:microsoft-windows",
  },
  {
    id: 20,
    name: "Harry Stebbings",
    role: "Founder of 20VC",
    company: "20VC",
    image:
      "https://images.pexels.com/photos/5717304/pexels-photo-5717304.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:numeric-20-circle",
  },
  {
    id: 21,
    name: "Adam Cheyer",
    role: "Founder of Siri",
    company: "Apple",
    image:
      "https://images.pexels.com/photos/756484/pexels-photo-756484.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    logoIcon: "mdi:apple",
  },
];

export const whyAugmentSlides: WhyAugmentSlide[] = [
  {
    id: 1,
    eyebrow: "Why Augment?",
    title: "Real-World Startup\nInsights",
    description:
      "Gain hands-on experience and actionable skills. Augment provides real-world tactics and frameworks, taught by business legends.",
    buttonLabel: "Explore Courses",
    buttonHref: "/courses",
    image: "/step1.webp",
    imageAlt: "Course module preview collage",
    layout: "right-composite",
  },
  {
    id: 2,
    eyebrow: "Why Augment?",
    title: "Learn On Your Own\nTime",
    description:
      "Flexible, self-paced education for entrepreneurs. Access the best alternative MBA—anywhere, anytime, on any device.",
    buttonLabel: "Explore Courses",
    buttonHref: "/courses",
    image: "/step2.webp",
    imageAlt: "Augment dashboard preview",
    layout: "left-dashboard",
  },
  {
    id: 3,
    eyebrow: "Why Augment?",
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

export const reviews: ReviewItem[] = [
  // {
  //   id: 1,
  //   quote:
  //     "This was a goal I have wanted to accomplish to further my knowledge and understanding as I continue to grow my business and continue my journey as an entrepreneur!",
  //   name: "Anwar Molette",
  //   role: "Executive Chef",
  //   avatar:
  //     "https://cdn.senja.io/public/media/19579b7f-13ac-4b0f-84b9-c8345980ad33_a054ae06-e274-4f49-92c0-ec2e5ee931bc_c-AnwarMolette__62CAAD5443E64C7D86B1E9C108EDDCFD_1663889156012.jpeg?width=63&height=63&format=webp",
  // },
  // {
  //   id: 2,
  //   quote:
  //     "Augment is the future of learning for business-minded people looking to gain real, practical knowledge about starting a business and developing in a successful way.",
  //   name: "Simon Lee Maryiah",
  //   role: "Founder",
  //   avatar:
  //     "https://cdn.senja.io/public/media/d4461c1b-ef42-4846-9e34-78a7e716e50d_634b1196-1666-478d-991c-e0878299b2f1_1708357355889.jpeg?width=63&height=63&format=webp",
  // },
  // {
  //   id: 3,
  //   quote:
  //     "I think Augment is a game changer. It's a brilliant concept and the contents, program and interface are just great. As soon as you start a module it becomes hard to stop. Also there is a human contact and great support from the orientation to graduation.",
  //   name: "Ivan Nappo",
  //   role: "Financial Regulation Specialist",
  //   avatar:
  //     "https://cdn.senja.io/public/media/1e94f3b8-6b05-4c30-bba2-18b801d2f71b_35706b17-b7fb-459c-95e1-7a7df87795e9_1721121911975.jpeg?width=63&height=63&format=webp",
  // },
  // {
  //   id: 4,
  //   quote:
  //     "This was the most enjoyable program I have completed. I could feel the impact of their perspectives and enjoy how the course allows you to continue learning as part of the community.",
  //   name: "Heather D. Whelan",
  //   role: "Business Coach",
  //   avatar:
  //     "https://cdn.senja.io/public/media/638a23de-6410-44cd-a303-082ca0626542_590cd49f-9b96-478b-9c4c-e4dd6e53f7e3_1759273290357.jpeg?width=63&height=63&format=webp",
  // },
  // {
  //   id: 5,
  //   quote:
  //     "The instructors incorporating their own experiences in the lesson made learning very easy on my part as it kept my interest level high. I wish Augment will continue adding more lectures as these are all gold!",
  //   name: "Delise Mutuc",
  //   role: "Sales & Marketing Strategist",
  //   avatar:
  //     "https://cdn.senja.io/public/media/6302d82b-4d1e-405d-9e5a-7e2e5a7db96e_e761f846-19ea-40f6-95bc-15593eb0758c_1645047645371.jpeg?width=63&height=63&format=webp",
  // },
  // {
  //   id: 6,
  //   quote:
  //     "I found the course really straightforward, a positive experience! The micro units are suited around busy lifestyles and meant I could jump on as a break or even sitting in the coffee shop!",
  //   name: "Johabh Muldoogh",
  //   role: "Managing Director",
  //   avatar:
  //     "https://cdn.senja.io/public/media/e643a944-708a-4b21-9fd0-f43f6951d1a5_2c2b3852-2f50-4d1a-a848-f0d7903d9651_1727294476692.jpeg?width=63&height=63&format=webp",
  // },
  // {
  //   id: 7,
  //   quote:
  //     "A valuable content that is accessible as a self-passed format. Beloved entrepreneurs and equally famous and highly respected creators and CEOs share their personal insights and journeys.",
  //   name: "Iloha Z.",
  //   role: "Self Employed",
  //   avatar:
  //     "https://cdn.senja.io/public/media/b4d547ec-8818-42b9-9a5e-3360170e5ec5_7609080a-0e9d-4e58-93dd-31ea2ad62e05_1700770061020.jpeg?width=63&height=63&format=webp",
  // },
  // {
  //   id: 8,
  //   quote:
  //     "The content was very professionally presented and engaging. I also loved having the handbook takeaways for each model to be able to reference and refresh when needed.",
  //   name: "Matt Marsh",
  //   role: "Business Owner",
  //   avatar:
  //     "https://cdn.senja.io/public/media/1c647c47-6181-4ae7-bb07-2c2905def07d_fd7e0340-9629-435d-98a9-07bffb44b0ea_1638380870191.jpeg?width=63&height=63&format=webp",
  // },
  // {
  //   id: 9,
  //   quote:
  //     "Flexibility, incredible resources, and inspiring live classes, I loved the Augment MBA Program. It taught me so much about the industry, helped me understand key things I’d never considered, and gave me the freedom to learn on my own time.",
  //   name: "Daisy White",
  //   role: "Senior Talent Manager",
  //   avatar:
  //     "https://cdn.senja.io/public/media/ec11df5f-a26f-4bf0-8e0d-20899d34aa1b_c736df24-6a01-49b5-bb1a-d4e184c44de5_1719262805462.jpeg?width=63&height=63&format=webp",
  // },
  // {
  //   id: 10,
  //   quote:
  //     "This has been the most life-changing business course I’ve taken. Great lessons from people with real experience. There is support from staff but knowledge is the biggest touch that it works.",
  //   name: "Arthur Shaba",
  //   role: "Finance",
  //   avatar:
  //     "https://cdn.senja.io/public/media/4267d4da-6c01-4a9f-98a2-526f45f27fee_fbdcd35a-844f-457c-a338-db41ae5e8e5e_1655971000970.jpeg?width=63&height=63&format=webp",
  // },
  // {
  //   id: 11,
  //   quote:
  //     "When I started this course, I got asked the question ‘how are you going to fit it in?’ However, what I’ve found is that it’s easy to fit the learning into my life.",
  //   name: "Hester Scotton",
  //   role: "Strategic CFO",
  //   avatar:
  //     "https://cdn.senja.io/public/media/3a33864d-9dc8-4424-a092-c7614df9e489_avatar.png?width=63&height=63&format=webp",
  // },
  // {
  //   id: 12,
  //   quote:
  //     "I’ve learned so much here that it feels like I could’ve spent 4 years in college and still not retained as much.",
  //   name: "Donavon Flegeance",
  //   role: "Business Consultant",
  //   avatar:
  //     "https://cdn.senja.io/public/media/00ea40b3-588e-421b-95e2-f8d0e3678612_71e63fc0-c30e-4bbf-8172-15224a0a317b_1525798117586.jpeg?width=63&height=63&format=webp",
  // },
  // {
  //   id: 13,
  //   quote:
  //     "The idea behind Augment is one I truly stand for. I LOVED this course and its structure. I’ll definitely keep coming back to its content because it’s that valuable.",
  //   name: "Mikhail Sieni",
  //   role: "Sales Director",
  //   avatar:
  //     "https://cdn.senja.io/public/media/4a407c0b-0a42-471e-a997-3ed9aaa8bbd3_8de82ba6-2e69-47b7-8586-7296435440e2_1756214871399.jpeg?width=63&height=63&format=webp",
  // },
  // {
  //   id: 14,
  //   quote:
  //     "The course touches on a lot of key areas most classes don't discuss that are paramount to success in business. I found the Augment program very accommodating to busy schedules.",
  //   name: "June Burton",
  //   role: "Financial Services Advisor",
  //   avatar:
  //     "https://cdn.senja.io/public/media/e06ce752-5618-4418-b7ea-bd9d705d455d_85ef1206-d9a6-4445-93fe-e4d051b9fcbf_1707946558049.jpeg?width=63&height=63&format=webp",
  // },
  // {
  //   id: 15,
  //   quote:
  //     "Augment is not just another program; it’s built by founders, for founders, designed to give entrepreneurs the practical insights, network, and mindset they need to scale.",
  //   name: "Oren Broshi",
  //   role: "Entrepreneur | Founder of Stealth Mode Startup",
  //   avatar:
  //     "https://cdn.senja.io/public/media/KpWRnRxiS7skl0e6yOfcO0VV.jpeg?width=63&height=63&format=webp",
  // },
  // {
  //   id: 16,
  //   quote:
  //     "From developing a deep understanding of emerging technologies to exploring new business models, the program equipped me with the skills and knowledge necessary to take on new challenges in the industry.",
  //   name: "Gary Lamach II",
  //   role: "Director @ AICPA",
  //   avatar:
  //     "https://cdn.senja.io/public/media/37691754-9e62-4885-a7d8-c2d13dbfd448_640eb926-bfce-4154-9728-837745e75c68_Screenshot%202023-11-20%20at%2012.27.48.png?width=63&height=63&format=webp",
  // },
  // {
  //   id: 17,
  //   quote:
  //     "In a world where traditional MBA teachings often revolve around academic research, Augment.org offers a modern and innovative approach to business education.",
  //   name: "Mubarak AlBahar",
  //   role: "Trade Relations Officer at The C Holding",
  //   avatar:
  //     "https://cdn.senja.io/public/media/lNTQ2RuqGaYj2tw98bAM0TAz.jpeg?width=63&height=63&format=webp",
  // },
  {
    id: 18,
    quote:
      "Last year, I decided to give Augment.org MBA a try. It's a new way of learning at your own pace and at an affordable price.",
    name: "Shkumbin Mustafa",
    role: "Branding & Digital Marketing",
    avatar:
      "https://cdn.senja.io/public/media/zmwDBMlEeR6ME5ZNVqx6HfnQ.jpeg?width=63&height=63&format=webp",
  },
  {
    id: 19,
    quote:
      "What happens when you take the advice of a marketing and personal branding expert? The insights I gained were invaluable.",
    name: "Patricia Paisis-Oakwell",
    role: "Certified Health Coach",
    avatar:
      "https://cdn.senja.io/public/media/afdccf8f-2d59-4ea5-87c2-b1bef06b2141_avatar.png?width=63&height=63&format=webp",
  },
  {
    id: 20,
    quote:
      "Augment is democratizing access to education against the traditional school systems that are for profit.",
    name: "Jamaal Bethea",
    role: "Business Owner",
    avatar:
      "https://cdn.senja.io/public/media/db143e9b-0cc1-4ae7-af3a-7124a4491063_2d6fc2a4-ee81-4cc9-8a1e-e1f13ddcf46e_e3b213ae-8bec-4fdb-af91-8eacb9f32aa6_ab2bc69e-ef2a-4d0e-8b40-82ce701c04a9_1732653211541.webp?width=63&height=63&format=webp",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Heather D. Whelan",
    role: "Business Coach",
    avatar: "https://cdn.senja.io/public/media/638a23de-6410-44cd-a303-082ca0626542_590cd49f-9b96-478b-9c4c-e4dd6e53f7e3_1759273290357.jpeg?width=63&height=63&format=webp",
    text: "This was the most enjoyable online educational program that I have ever completed. I could feel the impact of their experiences on their perspectives and enjoyed the quality of the content. I love how the program allows you to continue to be a part of the community and have access to new modules and materials as they are developed. I am very excited about what I learned through the program and looking forward to the continuing education component. Thank you! The quality and execution of the content.",
  },
  {
    id: 2,
    name: "Simon Lee Maryan",
    role: "Founder",
    avatar: "https://cdn.senja.io/public/media/d4461c1b-ef42-4846-9e34-78a7e716e50d_634b1196-1666-478d-991c-e0878299b2f1_1708357355889.jpeg?width=63&height=63&format=webp",
    text: "This program is so different from typical MBA's, and although it is still growing content, what it currently provides is so practical, realistic and valuable. I can't wait to see what comes next. It is online, self paced and great",
  },
  {
    id: 3,
    name: "Janene Nadolny-Jimenez",
    role: "Business Owner",
    avatar: "https://cdn.senja.io/public/media/727b3e2e-aab0-4a17-9e76-8fdccbc42f87_08553bdc-a032-487e-95b7-71b41efe2dc9_1756077942174.jpeg?width=63&height=63&format=webp",
    text: "My experience with Augment completely changed how I approach my business, my work, and my rest. It gave me a fresh perspective on old ideas and pushed me to face the hard parts instead of avoiding them. One chapter in particular made me realize I had to ‘fire’ the old version of myself, to stop playing small and start running a real, scalable company. The teachers were authentic, the content was current and practical, and the course was worth every penny.",
  },
  {
    id: 4,
    name: "Ivan Nappo",
    role: "Financial Regulation Specialist",
    avatar: "https://cdn.senja.io/public/media/1e94f3b8-6b05-4c30-bba2-18b801d2f71b_35706b17-b7fb-459c-95e1-7a7df87795e9_1721121911975.jpeg?width=63&height=63&format=webp",
    text: "I think Augment is a game changer. It's a brilliant concept and the contents, program and interface are just great. As soon as you start a module it becomes hard to stop. Also there is a human contact and great support from the orientation to graduation. I highly recommend it.",
  },
  {
    id: 5,
    name: "Hester Scotton",
    role: "Strategic CFO",
    avatar: "https://cdn.senja.io/public/media/3a33864d-9dc8-4424-a092-c7614df9e489_avatar.png?width=63&height=63&format=webp",
    text: "When I started this course, I got asked the question ‘how are you going to fit it in? You have a full time job as a CFO, you have two children, you are training for a marathon…’. The truthful answer was that I wasn’t sure. However, what I’ve found is that it’s easy to fit the learning into my life. The modules are all short and easy to digest. The content is enjoyable and engaging so I often do some of it as my lunch break or first thing in the morning. If you want to learn more about business but are worried you don’t have the time then I would highly recommend you look at Augment.",
    linkedin: true,
  },
  {
    id: 6,
    name: "Donavon Flegeance",
    role: "Business Consultant",
    avatar: "https://cdn.senja.io/public/media/00ea40b3-588e-421b-95e2-f8d0e3678612_71e63fc0-c30e-4bbf-8172-15224a0a317b_1525798117586.jpeg?width=63&height=63&format=webp",
    text: "I’ve learned so much here that it feels like I could’ve spent 4 years in college and still not retained as much. I love being able to move at my own pace and hear from people who’ve actually done it, not just professors who’ve never built anything.",
  },
  {
    id: 7,
    name: "Daisy White",
    role: "Senior Talent Manager",
    avatar: "https://cdn.senja.io/public/media/ec11df5f-a26f-4bf0-8e0d-20899d34aa1b_c736df24-6a01-49b5-bb1a-d4e184c44de5_1719262805462.jpeg?width=63&height=63&format=webp",
    text: "Flexibility, incredible resources, and inspiring live classes, I loved the Augment MBA Program. It taught me so much about the industry, helped me understand key things I’d never considered, and gave me the freedom to learn on my own time. The support from the network was invaluable, and I couldn’t be more grateful or proud of what I’ve achieved.",
  },
  {
    id: 8,
    name: "Mikhail Sieni",
    role: "Sales Director",
    avatar: "https://cdn.senja.io/public/media/4a407c0b-0a42-471e-a997-3ed9aaa8bbd3_8de82ba6-2e69-47b7-8586-7296435440e2_1756214871399.jpeg?width=63&height=63&format=webp",
    text: "The idea behind Augment is one I truly stand for. I LOVED this course and its structure. I’ll definitely keep coming back to its content because it’s that valuable.",
  },
  {
    id: 9,
    name: "June Burton",
    role: "Financial Services Advisor",
    avatar: "https://cdn.senja.io/public/media/e06ce752-5618-4418-b7ea-bd9d705d455d_85ef1206-d9a6-4445-93fe-e4d051b9fcbf_1707946558049.jpeg?width=63&height=63&format=webp",
    text: "The course touches on a lot of key areas most classes don't discuss that are paramount to success in business. I found the Augment program very accommodating to busy schedules.",
  },
  {
    id: 10,
    name: "Oren Broshi",
    role: "Entrepreneur | Founder of Stealth Mode Startup",
    avatar: "https://cdn.senja.io/public/media/KpWRnRxiS7skl0e6yOfcO0VV.jpeg?width=63&height=63&format=webp",
    text: "Augment is not just another program; it’s built by founders, for founders, designed to give entrepreneurs the practical insights, network, and mindset they need to scale. Grateful to be part of it and highly recommend it to every entrepreneur who’s serious about leveling up",
    linkedin: true,
  },
  {
    id: 11,
    name: "Gary Lamach II",
    role: "Director @ AICPA",
    avatar: "https://cdn.senja.io/public/media/37691754-9e62-4885-a7d8-c2d13dbfd448_640eb926-bfce-4154-9728-837745e75c68_Screenshot%202023-11-20%20at%2012.27.48.png?width=63&height=63&format=webp",
    text: "From developing a deep understanding of emerging technologies to exploring new business models, the program equipped me with the skills and knowledge necessary to take on new challenges in the industry. Thank you, Augment.org , for this amazing opportunity!",
    linkedin: true,
  },
  {
    id: 12,
    name: "Mubarak AlBahar",
    role: "Trade Relations Officer at The C Holding",
    avatar: "https://cdn.senja.io/public/media/lNTQ2RuqGaYj2tw98bAM0TAz.jpeg?width=63&height=63&format=webp",
    text: "In a world where traditional MBA teachings often revolve around academic research, Augment.org offers a modern and innovative approach to business education, emphasizing real-world insights directly from renowned entrepreneurial leaders. Augment's curriculum, characterized by its practical, founder-driven approach, has enriched my understanding of contemporary business practices grounded in genuine experiences.",
    linkedin: true,
  },
  {
    id: 13,
    name: "Shkumbin Mustafa",
    role: "Branding & Digital Marketing",
    avatar: "https://cdn.senja.io/public/media/zmwDBMlEeR6ME5ZNVqx6HfnQ.jpeg?width=63&height=63&format=webp",
    text: "Last year, I decided to give Augment.org MBA a try. It's a new way of learning at your own pace and at an affordable price. The program offers direct advice from some of the smartest people in business, including the founders of Wikipedia, Waze, Shazam, and Lime. It’s a straightforward, fast, and affordable way to gain the skills and confidence needed to succeed in business. If you’re looking to learn how the best in the business made it and you want to start your own venture, I highly recommend giving Augment MBA a try.",
    linkedin: true,
  },
  {
    id: 14,
    name: "Patricia Paisis-Oakwell",
    role: "Certified Health Coach",
    avatar: "https://cdn.senja.io/public/media/afdccf8f-2d59-4ea5-87c2-b1bef06b2141_avatar.png?width=63&height=63&format=webp",
    text: "What happens when you take the advice of a marketing and personal branding expert? On Thursday, I had the pleasure of attending an inspiring masterclass led by Tobi Oluwole on Marketing and Personal Branding, hosted by Ariel Renous and Elyssa Goldberg from Augment.org . The insights I gained were invaluable! Tonight, while reviewing my stats, I was excited to see that my post impressions increased by 90% in just one day. It’s amazing to see how quickly effective strategies can make an impact!",
    linkedin: true,
  },
  {
    id: 15,
    name: "Arthur Shaba",
    role: "Finance",
    avatar: "https://cdn.senja.io/public/media/4267d4da-6c01-4a9f-98a2-526f45f27fee_fbdcd35a-844f-457c-a338-db41ae5e8e5e_1655971000970.jpeg?width=63&height=63&format=webp",
    text: "This has been the most life-changing program I’ve ever done. Great lessons from people who have the experience. No textbook staff but knowledge straight from those who’ve lived it and can vouch that it works.",
  },
  {
    id: 16,
    name: "Jamaal Bethea",
    role: "Business Owner",
    avatar: "https://cdn.senja.io/public/media/db143e9b-0cc1-4ae7-af3a-7124a4491063_2d6fc2a4-ee81-4cc9-8a1e-e1f13ddcf46e_e3b213ae-8bec-4fdb-af91-8eacb9f32aa6_ab2bc69e-ef2a-4d0e-8b40-82ce701c04a9_1732653211541.webp?width=63&height=63&format=webp",
    text: "Augment is democratizing access to education against the traditional school systems that are for profit. These systems are archaic and don’t represent the needs of many communities that don’t have access to economic resources or connections.",
  },
  {
    id: 17,
    name: "Momchil Tsonev",
    role: "Commodity Trader",
    avatar: "https://cdn.senja.io/public/media/ff125b6c-e92a-4935-984a-a9cd29748376_8d9afcda-124a-4edc-a4ee-7d82c713aa98_1517628067223.jpeg?width=63&height=63&format=webp",
    text: "Program is structured in very unique and intuitive way. It gives exposure to diverse perspectives and practical wisdom that make business and everyday concepts more tangible and easy to understand. But most important it could inspire more people to approach challenges with a creative and entrepreneurial mindset and help them set up their own business ventures. The program goes beyond the conventional by integrating real-world insights from practitioners, entrepreneurs, and business founders.",
  },
  {
    id: 18,
    name: "Anwar Molette",
    role: "Executive Chef",
    avatar: "https://cdn.senja.io/public/media/19579b7f-13ac-4b0f-84b9-c8345980ad33_a054ae06-e274-4f49-92c0-ec2e5ee931bc_c-AnwarMolette__62CAAD5443E64C7D86B1E9C108EDDCFD_1663889156012.jpeg?width=63&height=63&format=webp",
    text: "This was a goal I have wanted to accomplish to further my knowledge and understanding as I continue to grow my business and continue my journey as an entrepreneur! It taught me many useful things I needed to know in order to be successful, the baffling things that I had questions for, that went unanswered in my mind, gave me a different look at how to handle myself as a business owner and leader of my company",
  },
  {
    id: 19,
    name: "Swaroop Rath",
    role: "Software Engineer",
    avatar: "https://cdn.senja.io/public/media/e8e49af0-db9b-4117-994b-1e8fd95c2a4b_d4613783-58db-4912-ab6e-02f7039da1e0_1731644373149.jpeg?width=63&height=63&format=webp",
    text: "Love it! And I learnt a lot. What I like the most is the content, format, summaries, knowledge and the fact that it’s always available and growing. Also the community, social media channels and the support group are great",
  },
  {
    id: 20,
    name: "Kenneth Maynard",
    role: "Business Owner",
    avatar: "https://cdn.senja.io/public/media/79003e85-84e1-4b09-a2df-1014a9ee67e3_ff623dd9-dc9d-49b3-a805-4834507a12e7_1610196548115%20%281%29.jpeg?width=63&height=63&format=webp",
    text: "It is priceless to have such esteemed and successful faculty, they teach business concepts that are immediately applicable for entrepreneurs, not to mention the most outstanding value for money!",
  },
  {
    id: 21,
    name: "Jason Doubt",
    role: "Co-Founder",
    avatar: "https://cdn.senja.io/public/media/ec6125f7-9d10-46de-a317-64f3e96b868c_34b2cbbe-7c3e-46f4-8087-bb72952ed5c7_1744816316399.jpeg?width=63&height=63&format=webp",
    text: "Augment is the future of learning for business-minded people looking to gain real, practical knowledge about starting a business and developing in a successful way.",
  },
  {
    id: 22,
    name: "Muzammil Kamran",
    role: "Writer",
    avatar: "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
    text: "This is the best entrepreneurship course out there which distinguishes itself from traditional business education which teaches ages old theories and frameworks leaving you in no place to start your own venture. Augment not only teaches practical concepts but a comprehensive understanding which enables you to start your own venture. When do you get a chance to learn from founders of Youtube, Shazam, Waze and Wikipedia etc? The course gave me an insight into the mindset of people who made the magic happen and changed the world.",
  },
  {
    id: 23,
    name: "Denise Mutuc",
    role: "Sales & Marketing Strategist",
    avatar: "https://cdn.senja.io/public/media/6302d82b-4d1e-405d-9e5a-7e2e5a7db96e_e761f846-19ea-40f6-95bc-15593eb0758c_1645047645371.jpeg?width=63&height=63&format=webp",
    text: "The instructors incorporating their own experiences in the lesson made learning very easy on my part as it kept my interest level high.I'm happy to have access to the lessons along with the downloadable PDF files as I would love to come back and revisit every now and then. I wish Augment will continue adding more lectures as these are all gold!",
  },
  {
    id: 24,
    name: "Johann Muldoon",
    role: "Managing Director",
    avatar: "https://cdn.senja.io/public/media/e643a944-708a-4b21-9fd0-f43f6951d1a5_2c2b3852-2f50-4d1a-a848-f0d7903d9651_1727294476692.jpeg?width=63&height=63&format=webp",
    text: "I found the course really straightforward, a positive experience! The micro units are suited around busy lifestyles and meant I could jump on as a break or even sitting in the coffee shop!",
  },
  {
    id: 25,
    name: "Iliona Zablockaja",
    role: "Self Employed",
    avatar: "https://cdn.senja.io/public/media/b4d547ec-8818-42b9-9a5e-3360170e5ec5_7609080a-0e9d-4e58-93dd-31ea2ad62e05_1700770061020.jpeg?width=63&height=63&format=webp",
    text: "A valuable content that is accessible as a self-passed format. Beloved entrepreneurs and equally famous and highly respected creators and CEOs share their personal insights and journeys. That's a valuable resource to gain knowledge about the business world, especially for those, who never had a chance to familiarize with this part of the professionals in the business society.",
  },
  {
    id: 26,
    name: "Matt Marsh",
    role: "Business Owner",
    avatar: "https://cdn.senja.io/public/media/1c647c47-6181-4ae7-bb07-2c2905def07d_fd7e0340-9629-435d-98a9-07bffb44b0ea_1638380870191.jpeg?width=63&height=63&format=webp",
    text: "The content was very professionally presented and engaging. I also loved having the handbook takeaways for each model to be able to reference and refresh when needed.",
  },
  {
    id: 27,
    name: "Victory Oluwagbemiga",
    role: "Business Owner",
    avatar: "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
    text: "I still remember my first Augment trial with Ann Hiatt, I thought, ‘There’s no way I’m going to let this go.’ I felt like I found gold!. Joining Augment to get coached by some of the best minds in the world has been a major milestone in my professional career. Meeting the Augment team in London was amazing and I will never forget it, thank you for such a powerful experience!",
  },
  {
    id: 28,
    name: "Amit Bhundhoo, CPA",
    role: "Cloud Accounting | Tax | Strategy | Financial Management  Tax Planning | Fractional SMB Support",
    avatar: "https://cdn.senja.io/public/media/G7vjrwnP4JicDZ8S6OSebuQH.jpeg?width=63&height=63&format=webp",
    text: "I’ve officially graduated from the Augment.org MBA. A new-age program built for entrepreneurs, innovators, and modern business leaders. Unlike traditional MBAs, Augment is practical, immersive, and refreshingly honest about what it takes to grow a sustainable business today. It has sharpened how I think strategically about business, finance, and leadership; lessons I’m already applying in my own work.",
    linkedin: true,
  },
  {
    id: 29,
    name: "Mohit Patel",
    role: "Founder of TruText | Building a Better Way to Connect | Ex-Mathnasium Owner",
    avatar: "https://cdn.senja.io/public/media/jyG5asuSIPH3uhev0YxM0YKq.jpeg?width=63&height=63&format=webp",
    text: "Last week, I officially completed the Augment Business School MBA course—but the real learning is just beginning. Augment Business School is not a normal MBA course. You get real advice from real entrepreneurs who have been through every struggle you can think of. It’s not just theory—it’s real-world strategies, lessons from failures, and insights you won’t find in a textbook. One of the biggest takeaways? You don’t have to figure it all out alone. Building a business can feel isolating, but surrounding yourself with the right people changes everything. Hearing from founders who have been in the same trenches—solving the same problems—gave me perspectives I never would’ve considered on my own. I also love how Augment is always adding new material and new resources for students. Can't wait to see what 2025 has in store! 📌 Lesson learned: The best investment you can make is in learning from others. A huge thanks to the Augment team and the incredible entrepreneurs in the program. Now, it’s time to apply what I’ve learned! For all the business owners out there—what’s the best piece of advice you’ve ever received? Drop it in the comments!",
    linkedin: true,
  },
  {
    id: 30,
    name: "Christopher Mensah",
    role: "Solution Consultant Digital Assets, Web3, Board Advisor, Digital Assets Educator: Bridging the gap from web2 to web3",
    avatar: "https://cdn.senja.io/public/media/6b21fd33-874d-4698-84a9-373d1835b606_57ed6256-060c-4c90-b891-f0aab8b800a7_Christopher%20Mensah.jpeg?width=63&height=63&format=webp",
    text: "When you decide to upgrade your knowledge, I recommend studying business. Augment's alternative MBA was invaluable in its content and its insights were exactly what I was looking for, I was able to apply the principles immediately. Entrepreneurship, intrapreneurship or solopreneurship is accessible to all when you understand the principles and applications of business. If you were thinking of a course to upgrade your knowledge, check Augment.org",
    linkedin: true,
  },
  {
    id: 31,
    name: "Gilles Chetelat",
    role: "CEO at mediarithmics",
    avatar: "https://cdn.senja.io/public/media/KWOdCWqXPsusDFhRHp5O86p7.jpeg?width=63&height=63&format=webp",
    text: "This is in fact my 3rd master's degree after Georgia Institute of Technology and ESC Clermont Business School but this experience was invaluable: 👉 Taught by the best tech entrepreneurs from the Silicon Valley including founders from Shazam, Youtube, Wikipedia, Waze and Lime... ⛵️ Fully Remote and 20 times less expensive than a full time MBA, ⛳️ Graduated >20 years after my last degree (Was worth the update), ♻️ No travel needed.",
    linkedin: true,
  },
  {
    id: 32,
    name: "Aidan Kaye",
    role: "Servant Leader | Entrepreneur",
    avatar: "https://cdn.senja.io/public/media/Xbnj0kZS7jU4j2CMmv7MMuLC.jpeg?width=63&height=63&format=webp",
    text: "Happy to have completed the Augment MBA program. I loved the course, as it filled gaps in my knowledge of my business skills, including leadership, business strategy, entrepreneurship, and financial accounting. I'm excited to put these skills to use!",
    linkedin: true,
  },
  {
    id: 33,
    name: "Gregory T. Lande",
    role: "Award-Winning Sales Leader",
    avatar: "https://cdn.senja.io/public/media/e5a5830a-7aa4-4b37-a7fe-7a245294e745_avatar.png?width=63&height=63&format=webp",
    text: "I recently completed my MBA program with The #Augment Business School; it was an incredibly educational and rewarding experience. The support and guidance from #Augment's faculty was invaluable...from Joaquim Berryer convincing me that at this stage of my career #Augment was undoubtedly the right choice, to Joceline Perrot continually communicating with me ensuring that the modules. I couldn't be happier with the choice I made with #Augment...you have added to my life in multiple ways, and I couldn't be more grateful.",
    linkedin: true,
  },
  {
    id: 34,
    name: "Grace Randall",
    role: "Project Manager at StrategiQ",
    avatar: "https://cdn.senja.io/public/media/iiLW8IfJmSblVPZFGTVCdPyv.jpeg?width=63&height=63&format=webp",
    text: "This course has given me actionable insights from the world's most successful founders and top executives, supporting me to progress my professional career. It's especially helped to elevate my thinking which will be invaluable when delivering projects and working with our brilliant clients.",
    linkedin: true,
  },
  {
    id: 35,
    name: "Kelvin Alaneme",
    role: "CEO Mindhelpa",
    avatar: "https://cdn.senja.io/public/media/SMqW64grLFL5ww0wzuH3hYc3.jpeg?width=63&height=63&format=webp",
    text: "If you are a startup founder and there is just one book to read, I will recommend Uri Levine’s masterpiece - 'Fall in Love with the Problem, Not the Solution'. Uri is the Co-Founder of Waze and Moovit - 2 unicorns (private companies valued at over $1 billion). I encountered him during my Augment.org MBA program and he spits gems after gems.",
    linkedin: true,
  },
  {
    id: 36,
    name: "Carl Morris",
    role: "Experienced EdTech Founder",
    avatar: "https://cdn.senja.io/public/media/7d3d1476-2946-452f-95b9-b776a79702ed_96342f07-3720-4291-af72-a230ab8e69d6_Carl%20Morris.jpeg?width=63&height=63&format=webp",
    text: "Huge thanks for the mention in the latest Augment.org community update. 🙏 Calling all aspiring entrepreneurs! If you're looking to level up your skills, this course is a game-changer. Packed with invaluable insights and advice from seasoned innovators. 💡💪",
    linkedin: true,
  },
  {
    id: 37,
    name: "Kevin Creery",
    role: "Planning Analyst @ Resort Municipality Of Whistler | Community Planning | Policy Planning | Bylaw Enforcement",
    avatar: "https://cdn.senja.io/public/media/05jOlcp3Wzqf6bGHJKw1O2VV.jpeg?width=63&height=63&format=webp",
    text: "Augment offers great insights from tech founders and CEOs about how they started their businesses. Augment fits my needs to grow my business and tech expertise with real-world examples from successful tech founders. Augment enables me to learn the modules as I go and handbooks provide more background and context. As a lifelong learner who embraces innovation, Augment provides me with many skills and the knowledge necessary to advance my career and enhance opportunities.",
    linkedin: true,
  },
  {
    id: 38,
    name: "Azam Khan",
    role: "ASM Software Manager | Driving Quality and Efficiency",
    avatar: "https://ik.imagekit.io/senja/tr:f-jpeg/Avatars/avatar_aOgsMJ-eZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657796891741",
    text: "What an MBA ⭐️⭐️⭐️⭐️⭐️",
    linkedin: true,
  },
  {
    id: 39,
    name: "Tamzidul Matin",
    role: "Cloud DevOps Engineer",
    avatar: "https://cdn.senja.io/public/media/YnUwwlQziXs7Ah1Ud9xlC3TQ.jpeg?width=63&height=63&format=webp",
    text: "This revolutionary program, taught by some of the world's most accomplished founders, has been an incredible journey of learning and growth. The knowledge and insights I've gained throughout this program are invaluable. I've had the opportunity to delve deep into the world of business, learning from the best in the field, and applying these learnings to real-world scenarios.",
    linkedin: true,
  },
  {
    id: 40,
    name: "Jean Boutros",
    role: "Data Engineering and Analytics Lead at PwC UK",
    avatar: "https://cdn.senja.io/public/media/5tD266xB8DBfi0rcpxt0MASg.jpeg?width=63&height=63&format=webp",
    text: "I have studied at 6 different universities, some of which I graduated with a degree, others I didn't. While I still have a special place for academia in my life, and while I'm still planning to pursue my PhD in social sciences, there's a reality that keeps striking me every time I think back about my academic journeys. I can describe my academic journeys as enriching and eye-opening, but also economically straining and socially exclusionist. I can also confidently say that classic education still got a long way before it becomes aligned with real-life and market skills. I am delighted to share that I’ve started my Master of Business Administration - MBA at Augment. Augment's mission is to democratise business education, enabling access to a wider audience, away from systemic selectivism that is strengthened by socio-economic factors. Augment's objective is also to form people with market-ready skills and a growth make-it-happen mindset. #business #education #mba #growth #augmentmba Voir la traduction",
    linkedin: true,
  },
];

export const traditionalMbaItems: ComparisonItem[] = [
  { text: "$100,000 tuition, on average" },
  { text: "Inflexible learning" },
  { text: "No refund policy" },
  { text: "2 year time commitment" },
  { text: "Academic instructors" },
  { text: "Outdated, rigid curriculum" },
  { text: "Tedious admission process" },
];

export const augmentMbaItems: ComparisonItem[] = [
  { text: "$2450, with payment plans available" },
  { text: "Anywhere, anytime, on any device" },
  { text: "15-day money-back guarantee" },
  { text: "15-minute / day" },
  { text: "Taught by recognized founders" },
  { text: "Constantly updated curriculum" },
  { text: "Open education" },
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