import type { Metadata } from "next";
import "./globals.css";
import { faqs } from "@/data/content";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL("https://dricareexpertz.in"),
  title: "Dr I Care Expertz | Apple Repair Bangalore – iPhone, MacBook, iPad Service",
  description:
    "Dr I Care Expertz is Bangalore's trusted Apple device service center in Frazer Town. Expert iPhone repair, MacBook repair, iPad repair, battery and display replacement with genuine parts.",
  keywords: [
    "Apple Repair Bangalore",
    "iPhone Repair Bangalore",
    "MacBook Repair Bangalore",
    "iPad Repair Bangalore",
    "Apple Service Center Frazer Town",
    "Apple Display Replacement Bangalore",
    "Battery Replacement Bangalore"
  ],
  openGraph: {
    title: "Dr I Care Expertz | Apple Device Repair Specialists in Bangalore",
    description:
      "Professional Repairs. Genuine Parts. Trusted Service. Visit Dr I Care Expertz in Frazer Town, Bangalore for iPhone, iPad, MacBook, iMac and Apple Watch repairs.",
    url: "https://dricareexpertz.in",
    siteName: "Dr I Care Expertz",
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr I Care Expertz | Apple Device Repair Specialists in Bangalore",
    description: "Professional Repairs. Genuine Parts. Trusted Service."
  }
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ElectronicsStore",
  name: SITE.name,
  image: "https://dricareexpertz.in/og-image.jpg",
  "@id": "https://dricareexpertz.in",
  url: "https://dricareexpertz.in",
  telephone: SITE.phone,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "03, 2nd Floor, Kenchappa Road, Frazer Town",
    addressLocality: "Bangalore",
    postalCode: "560005",
    addressCountry: "IN"
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    opens: "10:00",
    closes: "22:00"
  },
  founder: SITE.owners.map((name) => ({ "@type": "Person", name }))
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer }
  }))
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
