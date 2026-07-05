
import ContactClientSection from "@/components/contact/ContactClient";
import FAQSection from "@/components/home/FaqSection";
import { contactFaqs } from "@/data/data";
import { contactSalesMetadata } from "@/lib/seo";

export const metadata = contactSalesMetadata;
export default function CoachesPage() {
    return (
        <main className="bg-white text-black relative">
            <ContactClientSection />
            <FAQSection faqs={contactFaqs} />
        </main>
    );
}
