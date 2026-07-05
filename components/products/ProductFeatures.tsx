import Image from "next/image";
import Link from "next/link";

type ProductFeatureItem = {
    title: string;
    description: string;
};

type ProductFeaturesSectionProps = {
    title: string;
    description: string;
    imgShown?: "left" | "right";
    imgSrc: string;
    imgAlt?: string;
    features: ProductFeatureItem[];
    wrapperClassName?: string;
    btnText?: string;
};

export default function ProductFeaturesSection({
    wrapperClassName = "",
    title,
    description,
    imgShown = "left",
    imgSrc,
    imgAlt = "Product feature image",
    features,
    btnText= "Talk to Our Team",
}: ProductFeaturesSectionProps) {
    const imageOrderClass = imgShown === "left" ? "order-2 lg:order-1" : "order-2";
    const contentOrderClass = imgShown === "left" ? "order-1 lg:order-2" : "order-1";

    return (
        <section className={`section-container py-10 sm:py-12 md:py-18 lg:py-24 bg-[#efefef] ${wrapperClassName}`}>
            <div className="">
                <div className="text-center">
                    <h2 className="section-title mx-auto text-black">
                        {title}
                    </h2>

                    <p className="section-description mx-auto text-black">
                        {description}
                    </p>
                </div>

                <div
                    className={`mt-4 grid grid-cols-1 items-center gap-8 sm:mt-6 lg:mt-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.92fr)] lg:gap-12 xl:gap-16`}
                >
                    <div className={imageOrderClass}>
                        <div className="overflow-hidden rounded-[12px] sm:rounded-[16px] lg:rounded-[18px]">
                            <div className="relative overflow-hidden rounded-[10px]">
                                <Image
                                    src={imgSrc}
                                    alt={imgAlt}
                                    width={1000}
                                    height={720}
                                    className="h-auto w-full object-cover"
                                    unoptimized
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className={`${contentOrderClass} max-w-[640px]`}>
                        <div className="space-y-7 sm:space-y-8 md:space-y-10 lg:space-y-12">
                            {features.map((item, index) => (
                                <div key={`${item.title}-${index}`}>
                                    <h3 className="stylish-family section-title text-[22px] text-black sm:text-[28px] md:text-[32px] lg:text-[36px]">
                                        {item.title}
                                    </h3>

                                    <p className="section-description mt-3 text-black/85">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <Link
                            href="/"
                            className="contained-btn mt-8 px-8 py-3 sm:mt-10 capitalize!"
                        >
                           {btnText}
                        </Link>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}