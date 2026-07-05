import PrivacySectionsList from "@/components/privacy/PrivacySectionList";
import { termsOfServiceMetadata } from "@/lib/seo";


const termsSections = [
  {
    title: "READ THE TERMS",
    content: [
      `Please read these Terms of Service carefully before using Simply.Coach. By accessing or using our website, platform, or services, you agree to follow these terms and all related policies.`,
      `If you do not agree with these terms, you should not use the service.`,
    ],
  },
  {
    title: "1. RESPONSIBILITIES OF CUSTOMER",
    content: [
      `The customer is responsible for maintaining accurate account information, protecting login credentials, and ensuring that all users follow these terms while using the service.`,
      `The customer must not use the service for unlawful, harmful, abusive, or unauthorized purposes.`,
    ],
  },
  {
    title: "2. TAXES",
    content: [
      `All fees are exclusive of applicable taxes unless clearly stated otherwise. The customer is responsible for paying any taxes, duties, or government charges related to the use of the service.`,
    ],
  },
  {
    title: "3. ACCESS",
    content: [
      `Simply.Coach grants the customer limited, non-exclusive, non-transferable access to use the service according to the selected plan and these terms.`,
      `Access may be restricted, suspended, or terminated if the customer violates these terms or fails to meet payment obligations.`,
    ],
  },
  {
    title: "4. CHANGES TO THE SERVICE",
    content: [
      `Simply.Coach may update, improve, modify, or discontinue parts of the service from time to time to improve performance, security, or user experience.`,
    ],
  },
  {
    title: "5. OWNERSHIP OF IPR",
    content: [
      `All intellectual property rights related to Simply.Coach, including software, design, features, branding, content, and technology, remain the property of Simply.Coach or its licensors.`,
      `Customers retain ownership of their own data and content uploaded to the platform.`,
    ],
  },
  {
    title: "6. OTHER SERVICES",
    content: [
      `The service may include integrations or links to third-party tools and services. Simply.Coach is not responsible for the availability, performance, or policies of third-party services.`,
    ],
  },
  {
    title: "7. BILLING, PLAN MODIFICATION AND PAYMENT",
    content: [
      `Customers agree to pay all fees according to the selected subscription plan, billing cycle, and payment terms.`,
      `Plan changes, upgrades, downgrades, renewals, and cancellations will be handled according to the billing terms shown at the time of purchase or subscription.`,
    ],
  },
  {
    title: "8. TERM, TERMINATION AND SUSPENSION",
    content: [
      `These terms remain effective while the customer uses the service. Simply.Coach may suspend or terminate access if the customer violates these terms, fails to pay fees, or misuses the platform.`,
      `Customers may stop using the service or cancel their subscription according to the cancellation process provided by Simply.Coach.`,
    ],
  },
  {
    title: "9. CONFIDENTIALITY",
    content: [
      `Both parties agree to protect confidential information shared during the use of the service and not disclose it to unauthorized parties, except where required by law.`,
    ],
  },
  {
    title: "10. DATA EXPORT",
    content: [
      `Customers may request or export their data where supported by the service. Simply.Coach may provide data export options according to the plan, technical limitations, and applicable policies.`,
    ],
  },
  {
    title: "11. DISCLAIMER OF WARRANTIES",
    content: [
      `The service is provided on an “as is” and “as available” basis. Simply.Coach does not guarantee that the service will always be error-free, uninterrupted, or suitable for every specific business need.`,
    ],
  },
  {
    title: "12. LIMITATION OF LIABILITY",
    content: [
      `To the maximum extent permitted by law, Simply.Coach shall not be liable for indirect, incidental, special, consequential, or loss-of-profit damages arising from the use of the service.`,
    ],
  },
  {
    title: "13. INDEMNIFICATION",
    content: [
      `The customer agrees to defend and indemnify Simply.Coach against claims, losses, damages, liabilities, and expenses arising from misuse of the service, violation of these terms, or infringement of third-party rights.`,
    ],
  },
  {
    title: "14. MISCELLANEOUS",
    content: [
      `These terms represent the complete agreement between the customer and Simply.Coach regarding the use of the service.`,
      `If any part of these terms is found unenforceable, the remaining terms will continue to remain valid and enforceable.`,
    ],
  },
  {
    title: "15. DEFINITIONS",
    content: [
      `Certain words used in these Terms of Service may have specific meanings. These definitions apply throughout the terms unless the context clearly requires otherwise.`,
    ],
  },
  {
    title: "16. SUPPORT",
    content: [
      `Simply.Coach may provide customer support through available support channels. Support availability, response time, and scope may depend on the customer’s selected plan.`,
    ],
  },
  {
    title: "17. CONTACT",
    content: [
      `For questions about these Terms of Service, customers may contact Simply.Coach through the contact details available on the website.`,
    ],
  },
];

export const metadata = termsOfServiceMetadata;
export default function TermsOfServiceSection() {
  return (
    <section className="bg-white text-black">
      <div className="section-container py-10 sm:py-12 lg:py-14 lg:pt-32">
        <div className="mx-auto">
          <div className="mb-8">
            <h1 className="section-title mb-2 text-[30px] font-semibold tracking-[-0.04em] text-black sm:text-[36px] lg:text-[42px]">
              Terms of Service
            </h1>

            <p className="text-[13px] leading-relaxed text-[#6f6f6f]">
              25th January 2025
            </p>
          </div>

          <div className="divider mb-8 bg-black/10" />

          <PrivacySectionsList sections={termsSections} />
        </div>
      </div>
    </section>
  );
}