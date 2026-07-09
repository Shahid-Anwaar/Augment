import CustomLink from "../custom/CustomLink";
import CustomProductCard from "./CustomSingleCard";

const HOST_ITEMS = [
    "Unlimited students",
    "Unlimited videos",
    "Embedded media",
    "Downloadable files",
    "Videos",
    "Audio",
    "Text",
];

const CREATE_ITEMS = [
    "Courses",
    "Digital Downloads",
    "Coaching",
    "Community",
    "Code examples",
    "Live sessions",
    "Bonus lessons",
    "Quizzes",
    "Product detail page",
    "Sales page",
    "iOS App",
    "AI curriculum",
    "AI lessons",
    "AI lesson summaries",
    "AI sales pages",
    "AI subtitles",
    "AI translations",
    "AI quizzes",
];

const MANAGE_ITEMS = [
    "Drip content",
    "Course compliance",
    "Email marketing",
    "Custom domain",
    "Sales analytics",
    "Progress reports",
    "External integrations",
    "Public API",
    "Webhooks",
    "Zapier",
];

const SELL_ITEMS = [
    "Memberships",
    "Bundles",
    "Subscriptions",
    "Payment options",
    "Sales tax handling",
    "VAT/GST handling",
    "Upsells",
    "Order bumps",
    "Coupons",
    "Affiliate marketing",
    "Student referrals",
    "Abandoned cart",
    "Tax-inclusive pricing",
    "Wordpress plugin",
    "External embeds",
    "Fraud protection",
];



// export default function ProductTools() {
//     return (
//         <section className="overflow-hidden relative bg-gray-100 ">
//             <div className="mx-auto section-container section-spacing px-4 sm:px-6 lg:px-8">
//                 {/* Mobile / Tablet */}
//                 <div className="lg:hidden">
//                     <div className="text-center">
//                         <h2 className="section-title mx-auto mt-5 max-w-[16ch] text-black">
//                             The tools that power growth
//                         </h2>
//                     </div>

//                     <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
//                         <CustomProductCard
//                             title="Create"
//                             icon="mdi:image-plus-outline"
//                             bg="bg-white"
//                             items={CREATE_ITEMS}
//                         />

//                         <CustomProductCard
//                             title="Host"
//                             icon="mdi:server"
//                             bg="bg-white"
//                             items={HOST_ITEMS}
//                         />

//                         <CustomProductCard
//                             title="Manage"
//                             icon="mdi:cog-outline"
//                             bg="bg-white"
//                             items={MANAGE_ITEMS}
//                         />

//                         <CustomProductCard
//                             title="Sell"
//                             icon="mdi:arrow-top-right"
//                             bg="bg-[#ffd800]"
//                             items={SELL_ITEMS}
//                             isBlack={true}
//                         />
//                     </div>
//                 </div>

//                 {/* Desktop */}
//                 <div className="relative hidden lg:block min-h-[980px] xl:min-h-[1240px]">
//                     {/* Center title */}
//                     <div className="absolute left-1/2 top-10 z-10 w-[360px] -translate-x-1/2 text-center xl:w-[420px]">
//                         <h2 className="section-title text-black">
//                             The tools that power growth
//                         </h2>
//                     </div>

//                     {/* Create */}
//                     <div className="absolute z-1 left-0 top-0 w-[26%] xl:w-[24%]">
//                         <CustomProductCard
//                             title="Create"
//                             icon="mdi:image-plus-outline"
//                             bg="bg-white"
//                             items={CREATE_ITEMS}
//                         />
//                         <CustomLine isBlack={true} wrapperClass="w-50 -z-1 absolute top-24 left-[calc(100%-4px)]" />
//                     </div>

//                     {/* Host */}
//                     <div className="absolute z-1 left-[24%] top-[345px] w-[24%] xl:left-[25%] xl:top-[380px] xl:w-[22%]">
//                         <CustomProductCard
//                             title="Host"
//                             icon="mdi:server"
//                             bg="bg-white"
//                             items={HOST_ITEMS}
//                         />
//                         <CustomLine isBlack={true} wrapperClass="w-60 -z-1 rotate-270 absolute -top-[120px] left-36" />
//                     </div>

//                     {/* Manage */}
//                     <div className="absolute z-1 left-[48%] top-[250px] w-[24%] xl:left-[50%] xl:top-[290px] xl:w-[22%]">
//                         <CustomProductCard
//                             title="Manage"
//                             icon="mdi:cog-outline"
//                             bg="bg-white"
//                             items={MANAGE_ITEMS}
//                         />
//                         <CustomLine isBlack={true} wrapperClass="w-40 -z-1 rotate-270 absolute -top-[80px] left-0" />
//                     </div>

//                     {/* Sell */}
//                     <div className="absolute z-1 right-0 top-10 w-[25%] xl:w-[24%]">
//                         <CustomProductCard
//                             title="Sell"
//                             icon="mdi:arrow-top-right"
//                             bg="bg-[#ffd800]"
//                             items={SELL_ITEMS}
//                             isBlack={true}
//                         />
//                         <CustomLine isBlack={false} wrapperClass="w-50 -z-1 rotate-180 absolute top-14 right-[calc(100%-4px)]" />
//                     </div>






//                     {/* Dashed connector lines */}
//                     {/* <div className="pointer-events-none absolute left-[22%] top-[86px] w-[11%] border-t border-dashed border-black xl:left-[21.5%] xl:w-[15%]" />
//                     <div className="pointer-events-none z-0 absolute left-[21%] top-[80px] w-3 h-3 bg-black xl:left-[21.4%] rounded-full" /> */}

//                     {/* <div className="pointer-events-none absolute right-[22%] top-[150px] w-[11%] border-t border-dashed border-[#d4b600] xl:right-[21.5%] xl:w-[12%]" />
//                     <div className="pointer-events-none absolute left-[38.5%] top-[210px] h-[160px] border-l border-dashed border-black/60 xl:left-[39%] xl:h-[185px]" />
//                     <div className="pointer-events-none absolute left-1/2 top-[210px] h-[90px] -translate-x-1/2 border-l border-dashed border-black/60 xl:h-[110px]" /> */}

//                     {/* Button */}
//                    

//                 </div>
//             </div>
//             <div className="bg-white h-50 w-full absolute bottom-0 left-0" />


//         </section>
//     );
// }

// function CustomLine({ isBlack, wrapperClass }: { isBlack: boolean, wrapperClass?: string }) {
//     return <div className={`pointer-events-none flex justify-center items-center ${wrapperClass}`} >
//         <div className={`pointer-events-none w-full order-2 border-t border-dashed ${isBlack ? "border-black" : "border-[#ffd800]"}`} />
//         <div className={`pointer-events-none order-1 w-3 h-3 ${isBlack ? "bg-black" : "bg-[#ffd800]"}  rounded-full`} />
//     </div>
// }


import Link from "next/link";

export default function ProductTools() {
    return (
        <section className="relative overflow-hidden bg-[#f3f3f0]">
            {/* bottom white area */}
            <div className="absolute bottom-0 left-0 h-60 w-full bg-white" />

            <div className="relative z-10 mx-auto section-container section-spacing">
                {/* Mobile / Tablet */}
                <div className="lg:hidden">
                    <div className="text-center">
                        <h2 className="section-title mx-auto max-w-[16ch] text-black">
                            The tools that power growth
                        </h2>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <CustomProductCard
                            title="Create"
                            icon="mdi:image-plus-outline"
                            bg="bg-white"
                            items={CREATE_ITEMS}
                        />

                        <CustomProductCard
                            title="Host"
                            icon="mdi:server"
                            bg="bg-white"
                            items={HOST_ITEMS}
                        />

                        <CustomProductCard
                            title="Manage"
                            icon="mdi:cog-outline"
                            bg="bg-white"
                            items={MANAGE_ITEMS}
                        />

                        <CustomProductCard
                            title="Sell"
                            icon="mdi:arrow-top-right"
                            bg="bg-[#ffd800]"
                            items={SELL_ITEMS}
                            isBlack={true}
                        />
                    </div>

                    <div className="mt-8 flex justify-center">
                        <CustomLink
                            href="/"
                            text="Start for free"
                            variant="contained"
                        />
                    </div>
                </div>

                {/* Desktop */}
                <div className="relative hidden lg:block">
                    {/* Center title */}
                    <div className="absolute left-1/2 top-[70px] z-20 w-[420px] -translate-x-1/2 text-center xl:top-[82px] xl:w-[470px]">
                        <h2 className="section-title text-black">
                            The tools that power growth
                        </h2>
                    </div>

                    {/* top cards */}
                    <div className="flex items-end justify-between gap-3">
                        <div className="relative w-full">
                            <CustomProductCard
                                title="Create"
                                icon="mdi:image-plus-outline"
                                bg="bg-white"
                                items={CREATE_ITEMS}
                            />

                            {/* line to title */}
                            <div className="pointer-events-none absolute left-full top-36 flex w-20 items-center xl:w-28">
                                <div className="h-3 w-3 shrink-0 rounded-full bg-black" />
                                <div className="w-full border-t border-dashed border-black/70" />
                            </div>
                        </div>
                        <div className="relative w-full">
                            <CustomProductCard
                                title="Host"
                                icon="mdi:server"
                                bg="bg-white"
                                items={HOST_ITEMS}
                            />

                            {/* vertical line */}
                            <div className="pointer-events-none absolute bottom-full left-24 flex h-40 flex-col items-center xl:left-38 xl:h-55">
                                <div className="h-full border-l border-dashed border-black/70" />
                                <div className="h-3 w-3 rounded-full bg-black" />
                            </div>
                        </div>

                        <div className="relative w-full">
                            <CustomProductCard
                                title="Manage"
                                icon="mdi:cog-outline"
                                bg="bg-white"
                                items={MANAGE_ITEMS}
                            />

                            {/* vertical line */}
                            <div className="pointer-events-none absolute bottom-full left-1/3 flex h-24 -translate-x-1/3 flex-col items-center xl:h-36">
                                <div className="h-full border-l border-dashed border-black/70" />
                                <div className="h-3 w-3 rounded-full bg-black" />
                            </div>
                        </div>

                        <div className="relative w-full">
                            <CustomProductCard
                                title="Sell"
                                icon="mdi:arrow-top-right"
                                bg="bg-[#ffd800]"
                                items={SELL_ITEMS}
                                isBlack={true}
                            />

                            {/* line to title */}
                            <div className="pointer-events-none absolute right-full top-20 flex w-20 flex-row-reverse items-center xl:w-36">
                                <div className="h-3 w-3 shrink-0 rounded-full bg-[#e0c500]" />
                                <div className="w-full border-t border-dashed border-[#e0c500]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}