import { Metadata } from "next";
import { siteConfig } from "./site";

const websiteUrl = siteConfig.url + "/";

export const defaultSEO = {
    metadataBase: new URL(websiteUrl),
    applicationName: siteConfig.name,
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [
        {
            name: siteConfig.author,
            url: websiteUrl,
        },
    ],
    creator: siteConfig.creator,
    publisher: siteConfig.publisher,
    icons: {
        icon: "/logos/s coach fav 2.svg",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: websiteUrl,
        siteName: siteConfig.name,
        title: siteConfig.title,
        description: siteConfig.description,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} Open Graph image`,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        // site: siteConfig.twitterHandle,
        // creator: siteConfig.twitterHandle,
        title: siteConfig.title,
        description: siteConfig.description,
        images: [siteConfig.ogImage],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    alternates: {
        canonical: "/",
    },
    // verification: {
    //     google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    //     yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    //     yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    // },
};


type CreateMetadataProps = {
    title: string;
    description: string;
    path?: string;
    image?: string;
    noIndex?: boolean;
    keywords?: string[];
};

export function createMetadata({
    title,
    description,
    path = "/",
    image = siteConfig.ogImage,
    noIndex = false,
    keywords,
}: CreateMetadataProps): Metadata {
    const url = new URL(path, websiteUrl).toString();
    const imageUrl = new URL(image, websiteUrl).toString();
    return {
        title,
        description,
        keywords,
        alternates: {
            canonical: url,
        },
        openGraph: {
            type: "website",
            url,
            title,
            description,
            siteName: siteConfig.name,
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [imageUrl],
        },
        robots: {
            index: !noIndex,
            follow: !noIndex,
        },
    };
}

export const homeMetadata = createMetadata({
    title: "Supreme Coach — Custom Coaching Business Infrastructure",
    description:
        "Supreme Coach builds complete coaching business infrastructure for coaches and firms — website, CRM, client portal, programmes, payments, automations, analytics, and integrations.",
    keywords: [
        "custom coaching business infrastructure",
        "done-for-you coaching platform",
        "coaching business setup",
        "coach client portal",
        "coaching CRM system",
        "coaching programme delivery platform",
        "coaching funnel setup",
        "white label coaching platform",
        "coaching automation system",
        "coaching business growth platform",
    ],
    path: "/",
});

export const aboutMetadata = createMetadata({
    title: "About Supreme Coach — Built for Coaches and Business Builders",
    description:
        "Learn about Supreme Coach, the business infrastructure partner helping coaches and coaching firms build practical systems for growth, delivery, community, and long-term ownership.",
    keywords: [
        "about Supreme Coach",
        "coaching business infrastructure company",
        "custom coaching platform agency",
        "coaching business systems",
        "done-for-you coaching platform",
        "coach business growth partner",
        "coaching website and CRM service",
        "coaching client portal development",
        "coaching platform for coaches",
        "owned coaching business platform",
    ],
    path: "/about",
});

export const communityMetadata = createMetadata({
    title: "Community | Supreme Coach Network and Client Engagement",
    description:
        "Explore the Supreme Coach community experience, built for connection, learning, networking, client engagement, live sessions, and long-term professional relationships.",
    keywords: [
        "Supreme Coach community",
        "coaching community platform",
        "client engagement community",
        "online coaching community",
        "professional coaching network",
        "coach and client community",
        "coaching member directory",
        "coaching live sessions",
        "coaching networking platform",
        "community for coaching businesses",
    ],
    path: "/community",
});

export const contactSalesMetadata = createMetadata({
    title: "Contact Supreme Coach | Commission Your Custom Coaching Infrastructure",
    description:
        "Contact the Supreme Coach team to discuss your custom coaching business build. Individual coaches, coaching firms, and enterprise organisations — we will scope the right project for you.",
    keywords: [
        "contact Supreme Coach coaching build",
        "coaching website build enquiry",
        "coaching business setup contact",
        "coaching infrastructure project",
    ],
    path: "/contact-sales",
});

export const forCoachesMetadata = createMetadata({
    title:
        "Custom Coaching Business Infrastructure for Professional Coaches | Supreme Coach",
    description:
        "Supreme Coach builds custom coaching websites, client portals, CRM systems, and programme delivery — deployed on your own servers. For ACC, PCC, and MCC coaches. One-time investment, lifetime ownership.",
    keywords: [
        "done-for-you coaching business setup",
        "coaching website design for coaches",
        "ICF coach website",
        "coaching CRM setup",
        "coaching client portal",
        "professional coach infrastructure",
        "coaching business build",
    ],
    path: "/for-coaches",
});

export const forFirmsMetadata = createMetadata({
    title: "For Coaching Firms | Multi-Coach Business Infrastructure",
    description:
        "Supreme Coach builds infrastructure for coaching firms and organisations — team coordination, corporate client management, coach portals, reporting, automations, and white-label delivery.",
    keywords: [
        "coaching firm platform",
        "multi coach business system",
        "corporate coaching platform",
        "coaching firm CRM",
        "team coaching client portal",
        "white label coaching platform",
        "coaching organisation software",
        "corporate client management coaching",
        "coaching firm automation",
        "coaching business infrastructure for firms",
    ],
    path: "/for-firms",
});

export const pricingMetadata = createMetadata({
    title:
        "Project Investment | Supreme Coach — Custom Coaching Infrastructure. No Monthly Fees.",
    description:
        "Supreme Coach pricing: Basic £7,000 · Growth £10,000 · Business £20,000. One-time custom build project. Deployed on your servers. You own everything. No monthly fees, no subscriptions, ever.",
    keywords: [
        "coaching business setup cost",
        "coaching website design pricing",
        "done-for-you coaching platform cost",
        "coaching infrastructure build price",
        "coaching business setup service UK",
    ],
    path: "/pricing",
});

export const productsMetadata = createMetadata({
    title: "What We Build | Supreme Coach — Custom Coaching Business Infrastructure",
    description: "Supreme Coach builds 8 custom coaching infrastructure components — website, CRM, client portal, programme delivery, funnels, AI, community, and payments — deployed on your own servers, owned by you.",
    keywords: [
        "done-for-you coaching business infrastructure",
        "coaching website design service UK",
        "custom coaching platform build",
        "coaching CRM setup service",
        "coaching business setup",
        "coaching programme delivery system"
    ],
    path: "/products",
});

export const privacyPolicyMetadata = createMetadata({
    title: "Privacy Policy | Supreme Coach",
    description:
        "Read the Supreme Coach Privacy Policy to understand how personal data, account information, usage data, cookies, integrations, and service communications may be handled.",
    keywords: [
        "Supreme Coach privacy policy",
        "coaching platform privacy policy",
        "coaching business data privacy",
        "client portal privacy policy",
        "coach CRM privacy",
        "personal data policy coaching platform",
        "coaching software privacy",
        "data protection coaching platform",
    ],
    path: "/privacy-policy",
});

export const termsOfServiceMetadata = createMetadata({
    title: "Terms of Service | Supreme Coach",
    description:
        "Read the Supreme Coach Terms of Service covering customer responsibilities, access, payments, ownership, confidentiality, data export, service use, and legal terms.",
    keywords: [
        "Supreme Coach terms of service",
        "coaching platform terms",
        "coaching software terms",
        "coach CRM terms",
        "client portal terms of service",
        "coaching business platform agreement",
        "coaching platform legal terms",
        "Supreme Coach customer terms",
    ],
    path: "/terms-of-service",
});

export const thankYouMetadata = createMetadata({
    title: "Thank You | Supreme Coach",
    description:
        "Thank you for contacting Supreme Coach. Our team will review your details and follow up about your coaching business infrastructure, discovery call, or project enquiry.",
    keywords: [
        "Supreme Coach thank you",
        "coaching platform enquiry received",
        "coaching business consultation submitted",
        "discovery call request received",
        "coaching infrastructure enquiry",
        "Supreme Coach contact confirmation",
    ],
    path: "/thank-you",
    noIndex: true,
});
