import type React from "react";
import type { Metadata } from "next";
// import { Geist_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Font configurations (currently unused but available for future use)
// const instrumentSerif = Instrument_Serif({
//   subsets: ["latin"],
//   weight: ["400"],
// });
// const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wazoo — Web Design Studio",
  description:
    "Crafting exceptional digital experiences with precision and creativity",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
