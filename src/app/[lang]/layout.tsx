import { t } from "@lingui/core/macro";
import { LinguiClientProvider } from "./LinguiClientProvider";
import { allMessages, getI18nInstance } from "../appRouterI18n";
import { initLingui, PageLangParam } from "../initLingui";
import type { Metadata } from "next";
import linguiConfig from "../../../lingui.config";
import Footer from "@/app/[lang]/components/Footer";
import FloatingTelegramButton from "@/app/[lang]/components/FloatingTelegramButton";
import Navigation from "@/app/[lang]/components/Navigation";
import "../globals.css";

export async function generateMetadata({
  params,
}: PageLangParam): Promise<Metadata> {
  const { lang } = await params;
  const i18n = getI18nInstance(lang);

  return {
    title: i18n._("Shopgrid - Sell Products Directly from Telegram"),
    description: i18n._(
      "Shopgrid is a Telegram Mini App that lets small businesses sell products directly from their Telegram channels or groups. AI-powered product listings, invoice generation, and built-in payment support."
    ),
    keywords: [
      "Telegram",
      "e-commerce",
      "mini app",
      "business",
      "selling",
      "products",
    ],
    authors: [{ name: i18n._("Shopgrid Team") }],
    openGraph: {
      title: i18n._("Shopgrid - Sell Products Directly from Telegram"),
      description: i18n._(
        "Turn your Telegram channel into a store with AI-powered product listings and built-in payments."
      ),
      type: "website",
      locale: lang === "ru" ? "ru_RU" : lang === "uz" ? "uz_UZ" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: i18n._("Shopgrid - Sell Products Directly from Telegram"),
      description: i18n._(
        "Turn your Telegram channel into a store with AI-powered product listings and built-in payments."
      ),
    },
  };
}

export async function generateStaticParams() {
  return linguiConfig.locales.map((lang) => ({ lang }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: "en" | "uz" | "ru" }>;
}>) {
  const { lang } = await params;
  initLingui(lang);

  return (
    <html lang={lang}>
      <body>
        <LinguiClientProvider
          initialLocale={lang}
          initialMessages={allMessages[lang]!}
        >
          <Navigation />
          {children}
          <Footer />
          <FloatingTelegramButton />
        </LinguiClientProvider>
      </body>
    </html>
  );
}
