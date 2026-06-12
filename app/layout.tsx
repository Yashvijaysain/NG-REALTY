import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import PageTransition from "./components/PageTransition";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nextgenrealtydevelopers.com"),
  title: "",
  description:
    "",
  keywords: [
    "NEXT GEN REALTY DEVELOPERS",
    "luxury real estate",
    "premium residences",
    "commercial spaces",
    "smart homes",
    "property development",
  ],
  openGraph: {
    title: "NEXT GEN REALTY DEVELOPERS",
    description: "Brokering premium properties for buyers and investors across Noida and Gurugram.",
    images: ["/optimized/centercourt-upscale.webp"],
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081014",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
