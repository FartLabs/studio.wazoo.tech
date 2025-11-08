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
  title: "Wazoo Web Design Studio",
  description:
    "A data-driven web studio for artists and creative professionals. We build portfolios that get you more clients and sell more art. Portfolio optimizations in 48 hours. Metrics-driven design focused on real outcomes.",
  icons: {
    icon: [
      { url: "/wazoo-logo.png", sizes: "32x32", type: "image/png" },
      { url: "/wazoo-logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/wazoo-logo.png",
    apple: [{ url: "/wazoo-logo.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Wazoo — Web Design for Artists & Creative Professionals",
    description:
      "A data-driven web studio for artists and creative professionals. Portfolios that get more clients and sell more art. Portfolio optimizations in 48 hours.",
    type: "website",
    images: [
      {
        url: "/wazoo-logo.png",
        width: 1200,
        height: 630,
        alt: "Wazoo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wazoo — Web Design for Artists & Creative Professionals",
    description:
      "A data-driven web studio for artists and creative professionals. Portfolios that get more clients and sell more art. Portfolio optimizations in 48 hours.",
    images: ["/wazoo-logo.png"],
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
