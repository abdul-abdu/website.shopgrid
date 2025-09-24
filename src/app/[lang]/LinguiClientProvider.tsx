"use client";

import { I18nProvider } from "@lingui/react";
import { setupI18n, type Messages } from "@lingui/core";
import { useEffect, useState } from "react";

export function LinguiClientProvider({
  children,
  initialLocale,
  initialMessages,
}: {
  children: React.ReactNode;
  initialLocale: string;
  initialMessages: Messages;
}) {
  const [i18n] = useState(() => {
    const instance = setupI18n({
      locale: initialLocale,
      messages: { [initialLocale]: initialMessages },
    });
    // Activate synchronously to avoid race on first render
    try {
      instance.load({ [initialLocale]: initialMessages });
      instance.activate(initialLocale);
    } catch {}
    return instance;
  });

  useEffect(() => {
    i18n.load({ [initialLocale]: initialMessages });
    i18n.activate(initialLocale);
  }, [i18n, initialLocale, initialMessages]);

  return <I18nProvider i18n={i18n}>{children}</I18nProvider>;
}
