import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Font configurations
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Wazoo — Web Design for Artists & Creative Professionals",
  description: "Custom portfolio websites and ecommerce stores for artists, photographers, and creative brands. Beautiful design, fast performance, delivered in 2-4 weeks.",
  openGraph: {
    title: "Wazoo — Web Design for Artists & Creative Professionals",
    description: "Custom portfolio websites and ecommerce stores for artists, photographers, and creative brands.",
    type: "website",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-body antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
