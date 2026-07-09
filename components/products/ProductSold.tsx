import Link from "next/link";
import CustomLink from "../custom/CustomLink";


export default function ProductSold() {
    return (
        <section className="overflow-hidden section-container py-0  ">
            <div className="mx-auto bg-[#1c4774] section-spacing rounded-lg ">
                <div className="relative text-center">
                    <h2 className="section-title mx-auto mt-5 text-white">
                        30M+ products have been sold using Supreme Coach
                    </h2>
                    <CustomLink
                        href="/"
                        text="Start for free"
                        variant="contained"
                        className="mt-8 sm:mt-10"
                    />
                </div>
            </div>
        </section>
    )
}
