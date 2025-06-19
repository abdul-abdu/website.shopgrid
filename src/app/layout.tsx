import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FloatingTelegramButton from "@/components/FloatingTelegramButton";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShopGrid - Sell Products Directly from Telegram",
  description: "ShopGrid is a Telegram Mini App that lets small businesses sell products directly from their Telegram channels or groups. AI-powered product listings, invoice generation, and built-in payment support.",
  keywords: ["Telegram", "e-commerce", "mini app", "business", "selling", "products"],
  authors: [{ name: "ShopGrid Team" }],
  openGraph: {
    title: "ShopGrid - Sell Products Directly from Telegram",
    description: "Turn your Telegram channel into a store with AI-powered product listings and built-in payments.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopGrid - Sell Products Directly from Telegram",
    description: "Turn your Telegram channel into a store with AI-powered product listings and built-in payments.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Footer />
        <FloatingTelegramButton />
      </body>
    </html>
  );
}
