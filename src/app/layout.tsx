import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keza Concierge | Private Risk Management & Concierge Services",
  description:
    "Keza delivers precise, discreet and accountable concierge and risk management solutions — trust, execution, verification and peace of mind. Serving diaspora Kenyans, executives, and families.",
  keywords:
    "concierge services Kenya, diaspora concierge, private risk management, property verification Kenya, on-ground assistance, Keza concierge",
  openGraph: {
    title: "Keza Concierge | Private Risk Management & Concierge",
    description:
      "Not errands. Not luxury. We sell trust, execution, verification and peace of mind.",
    type: "website",
    locale: "en_KE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Keza Concierge Global",
              description:
                "Private concierge and risk management company delivering discreet, precise, and accountable solutions.",
              telephone: "+254768512338",
              email: "kezaconciergeglobal@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressCountry: "KE",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
