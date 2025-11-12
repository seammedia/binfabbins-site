import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Binfab Bins - Waste Bin Manufacturers | Australian Made",
  description: "Quality waste bin manufacturers serving Australia. Hooklift bins, Marrell bins, forklift bins and more. Over 20 years experience. Locally sourced and manufactured.",
  keywords: ["waste bins", "hooklift bins", "marrell bins", "forklift bins", "australian made bins", "waste bin manufacturers"],
  authors: [{ name: "Binfab Bins" }],
  openGraph: {
    title: "Binfab Bins - Waste Bin Manufacturers",
    description: "Quality waste bins designed and manufactured in Australia. Strong, reliable and Australian made.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
