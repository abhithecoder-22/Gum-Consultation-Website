import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
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
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
