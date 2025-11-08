import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClickAutomate | Digital Marketing & AI Automation Studio",
  description:
    "ClickAutomate delivers data-driven digital marketing, SEO excellence, and AI automation to accelerate growth for ambitious brands.",
  metadataBase: new URL("https://agentic-82f4e1a6.vercel.app"),
  openGraph: {
    title: "ClickAutomate | Digital Marketing & AI Automation Studio",
    description:
      "ClickAutomate blends performance marketing, SEO mastery, and AI workflows to help brands scale smarter.",
    url: "https://agentic-82f4e1a6.vercel.app",
    siteName: "ClickAutomate",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClickAutomate | Digital Marketing & AI Automation Studio",
    description:
      "Performance marketing, SEO, and AI automations built to convert browsers into buyers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
