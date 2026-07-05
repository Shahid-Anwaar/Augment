import PrivacySectionsList from "@/components/privacy/PrivacySectionList";
import { pricingMetadata } from "@/lib/seo";

const privacySections = [
  {
    title: "WHO WE ARE",
    content: [
      `Simply.Coach is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.`,
      `By using our service, you agree to the collection and use of information in accordance with this Privacy Policy.`,
    ],
  },
  {
    title: "DEFINITIONS",
    content: [
      `For the purpose of this Privacy Policy, the terms used in this document shall have the meanings defined under the Terms of Service.`,
    ],
  },
  {
    title: "1. WHOM DOES THIS NOTICE APPLY TO?",
    content: [
      `This notice applies to individuals who interact with Simply.Coach, including website visitors, users, coaches, clients, customers, partners, and people who contact us for support or information.`,
    ],
    bullets: [
      "Visit our website",
      "Use our services",
      "Register for an account",
      "Contact us or interact with our platform",
    ],
  },
  {
    title: "2. WHAT PERSONAL DATA DOES SIMPLY.COACH COLLECT?",
    content: [
      `We may collect personal data such as your name, email address, contact details, company information, login details, usage data, device information, billing information, and communication preferences.`,
      `We may also collect information through cookies, analytics tools, forms, support requests, and interactions with our website or services.`,
    ],
  },
  {
    title: "3. WHY DO WE PROCESS PERSONAL DATA AND WHAT ARE THE LEGAL BASES WE RELY ON?",
    content: [
      `We process personal data to provide our services, manage accounts, improve platform performance, communicate with users, ensure security, comply with legal obligations, and support business operations.`,
    ],
  },
  {
    title: "4. WITH WHOM DO WE SHARE PERSONAL DATA?",
    content: [
      `We may share personal data with trusted service providers, payment processors, hosting partners, analytics providers, legal authorities, or business partners where required to deliver our services or comply with legal obligations.`,
    ],
  },
  {
    title: "5. HOW DOES SIMPLY.COACH KEEP PERSONAL DATA SECURE?",
    content: [
      `We use reasonable technical and organizational measures to protect personal data from unauthorized access, loss, misuse, alteration, or disclosure.`,
    ],
  },
  {
    title: "6. YOUR RIGHTS",
    content: [
      `Depending on your location, you may have rights to access, correct, delete, restrict, object to processing, or request a copy of your personal data.`,
    ],
  },
  {
    title: "7. RIGHTS UNDER HEALTH INSURANCE PORTABILITY AND ACCOUNTABILITY ACT",
    content: [
      `Where applicable, Simply.Coach may process certain information in accordance with relevant health information privacy and data protection obligations.`,
    ],
  },
  {
    title: "8. OPTING OUT PROCEDURE",
    content: [
      `You may opt out of certain marketing communications by following the unsubscribe instructions included in our emails or by contacting us directly.`,
    ],
  },
  {
    title: "9. OTHER COMMUNICATIONS",
    content: [
      `We may send important service-related communications such as account notices, security alerts, billing updates, or changes to our terms and policies.`,
    ],
  },
  {
    title: "10. RETENTION OF PERSONAL DATA",
    content: [
      `We retain personal data only for as long as necessary to provide our services, meet legal obligations, resolve disputes, and enforce agreements.`,
    ],
  },
  {
    title: "11. LINKS TO THIRD PARTY SITES",
    content: [
      `Our website may contain links to third-party websites. We are not responsible for the privacy practices, content, or security of those external websites.`,
    ],
  },
  {
    title: "12. GOOGLE API DISCLOSURE",
    content: [
      `Simply.Coach may use Google API services where required. Any use of Google user data will comply with applicable Google API Services User Data Policy requirements.`,
    ],
  },
  {
    title: "13. MICROSOFT API DISCLOSURE",
    content: [
      `Simply.Coach may use Microsoft API services where required. Any access to Microsoft user data is handled only for the intended service purpose.`,
    ],
  },
  {
    title: "14. ZOOM API DISCLOSURE",
    content: [
      `Simply.Coach may connect with Zoom services where required for scheduling, meetings, or coaching sessions. Zoom-related information is handled only for service-related purposes.`,
    ],
  },
  {
    title: "15. NOTICE TO END-USER AND OTHER EXCLUSIONS",
    content: [
      `Where Simply.Coach is used by an organization, that organization may control certain data and account settings. End users should contact their organization for privacy requests related to such data.`,
    ],
  },
  {
    title: "16. CHILDREN’S PERSONAL DATA",
    content: [
      `Our services are not intended for children under the applicable legal age. We do not knowingly collect personal data from children without proper consent.`,
    ],
  },
  {
    title: "17. AMENDMENTS",
    content: [
      `We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.`,
    ],
  },
  {
    title: "18. EFFECT OF MERGER OR ACQUISITION",
    content: [
      `If Simply.Coach is involved in a merger, acquisition, restructuring, or sale of assets, personal data may be transferred as part of that transaction.`,
    ],
  },
  {
    title: "19. CONTACTING SIMPLY.COACH",
    content: [
      `For questions about this Privacy Policy or your personal data, you may contact Simply.Coach through the contact details provided on our website.`,
    ],
  },
];

export const metadata = pricingMetadata;
export default function PrivacyPolicySection() {
  return (
    <section className="bg-white text-black">
      <div className="section-container py-16 sm:py-20 lg:py-24 lg:pt-32">
        <div className="mx-auto ">
          <div className="mb-8">
            <h1 className="section-title mb-2 text-[30px] font-semibold tracking-[-0.04em] text-black sm:text-[36px] lg:text-[42px]">
              Privacy Policy
            </h1>

            <p className="text-[13px] leading-relaxed text-[#6f6f6f]">
              1st September 2021
            </p>
          </div>

          <div className="divider mb-8 bg-black/10" />

          <PrivacySectionsList sections={privacySections} />
        </div>
      </div>
    </section>
  );
}