import Image from "next/image";
import Link from "next/link";
import CustomLink from "../custom/CustomLink";

type SalesHubFeatureItem = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    objClass?: string;
};

const SALES_HUB_FEATURES: SalesHubFeatureItem[] = [
    {
        title: "Payments",
        description:
            "One-time, instalment, or subscription attach any payment structure to any programme or offer. Stripe, PayPal, Google Pay, and Apple Pay all native. Clients pay their way. You get paid on time, automatically.",
        image:
            "/external-images/img-f04c8b1e.webp",
        imageAlt: "Payments preview",
        objClass: "",
    },
    {
        title: "Tax-compliant",
        description:
            "Every invoice generated, formatted, and sent without you touching it. VAT applied correctly per client location. Corporate clients get one company-level invoice regardless of how many employees are enrolled.",
        image:
            "/external-images/img-a96842b1.webp",
        imageAlt: "Tax-compliant invoicing preview",
        objClass: "lg:-translate-y-28",
    },
    {
        title: "BFM Dashboard",
        description:
            "MRR, lifetime client value, pipeline revenue, outstanding invoices, and revenue per programme every number in one real-time view. No spreadsheet. No accountant is required to understand it.",
        image:
            "/external-images/img-ae29ee70.webp",
        imageAlt: "BFM dashboard preview",
        objClass: "lg:-translate-y-14",
    },
];

function SalesHubCard({ item, }: { item: SalesHubFeatureItem; }) {
    return (
        <div className={`min-w-0 ${item.objClass}`}>
            <div className="rounded-lg bg-linear-to-b from-[#f0f0f0] to-[#c0c0c0] sm:rounded-[14px] lg:rounded-xl">
                <Image
                    src={item.image}
                    alt={item.imageAlt}
                    width={1200}
                    height={1000}
                    className="h-auto w-full "
                    unoptimized
                />
            </div>

            <h3 className="stylish-family mt-5 text-[24px] font-normal leading-[1.04] tracking-[-0.04em] text-black sm:mt-6 sm:text-[30px] md:text-[36px] lg:text-[40px]">
                {item.title}
            </h3>

            <p className="mt-3 max-w-[30rem] text-[16px] font-normal leading-[1.45] tracking-[-0.02em] text-black sm:text-[18px] md:text-[19px] lg:text-[20px]">
                {item.description}
            </p>
        </div>
    );
}

export default function ProductSalesHubSection(
    {
        btnText = "Talk to Our Team",
        features = SALES_HUB_FEATURES,
        classes = "grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:gap-7",
        title = "Your course platform and your sales hub",
        subtitle = "Our selling and payment features are designed to meet the needs of advanced creators and business owners. Sell in 120 different currencies in more than 200 countries and regions."
    }
        : { btnText?: string; title?: string; subtitle?: string; classes?: string; features?: SalesHubFeatureItem[] }) {
    return (
        <section className="bg-primary-300">
            <div className="section-container max-w-[1360px] py-10 sm:py-12 md:py-14 lg:py-18">
                <div className="grid grid-cols-1 gap-y-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <div>
                        <h2 className="section-title max-w-lg text-black">
                            {title}
                        </h2>
                    </div>

                    <div className="">
                        <p className="max-w-full text-[18px] font-normal leading-[1.45] tracking-[-0.02em] text-black sm:text-[20px] md:text-[22px] lg:text-[21px]">
                            {subtitle}
                        </p>
                    </div>
                </div>

                <div className={`mt-12 sm:mt-16 lg:mt-48 grid ${classes} `}>
                    {features.map((item, index) => (
                        <SalesHubCard key={item.title} item={item} />
                    ))}
                </div>

                <div className="flex justify-center">
                    <CustomLink
                        href="/"
                        text={btnText}
                        variant="contained"
                        className="mt-3 sm:mt-10"
                    />
                </div>
            </div>
        </section>
    );
}