import dynamic from "next/dynamic";
import { Geist_Mono, Inter } from "next/font/google";

import "./globals.css";
import HeaderSection from "@/components/home/Header";
import CustomLoader from "@/components/custom/CustomLoader";
import { defaultSEO } from "@/lib/seo";

const Footer = dynamic(() => import("@/components/home/Footer"), {
  loading: () => <CustomLoader minHeightClass="min-h-[300px]" />,
});

const supremeFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-supreme",
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = defaultSEO;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistMono.variable} ${supremeFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <HeaderSection />

        <main className="flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}