import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap"
});
const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap"
});

export const metadata: Metadata = {
  title: "Auren Estates | Exceptional Properties, Thoughtfully Found",
  description:
    "Discover exceptional residences across Dubai with Auren Estates. Explore properties and request a private consultation or viewing.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "Auren Estates — Find a place that feels like yours",
    description: "A more considered way to discover exceptional Dubai properties.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}