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
  title: "ProTrainrAtHome - Professional Home Fitness Training",
  description: "Expert home fitness training programs and personalized training plans. Transform your fitness journey from the comfort of your home with professional guidance.",
  keywords: "home fitness training, personal training, fitness programs, workout plans, home gym, fitness coaching",
  authors: [{ name: "ProTrainrAtHome" }],
  openGraph: {
    title: "ProTrainrAtHome - Professional Home Fitness Training",
    description: "Expert home fitness training programs and personalized training plans. Transform your fitness journey from the comfort of your home with professional guidance.",
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
