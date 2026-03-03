import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MomFitConsult - Postpartum Fitness & Wellness for Mothers",
  description: "Specialized fitness consulting for mothers focusing on postpartum recovery, strength training, and holistic wellness. Transform your health journey with expert guidance.",
  keywords: "postpartum fitness, mothers fitness, women's health, wellness coaching, strength training, pelvic floor, nutrition",
  authors: [{ name: "MomFitConsult" }],
  openGraph: {
    title: "MomFitConsult - Postpartum Fitness & Wellness for Mothers",
    description: "Specialized fitness consulting for mothers focusing on postpartum recovery, strength training, and holistic wellness.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
