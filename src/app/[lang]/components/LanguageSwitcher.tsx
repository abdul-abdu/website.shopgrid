"use client";

import { usePathname, useRouter } from "next/navigation";
import linguiConfig from "../../../../lingui.config";
import { useMemo } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const locales = linguiConfig.locales;

  const currentLocale = useMemo(() => {
    const segments = pathname.split("/").filter(Boolean);
    const defaultLocale = (linguiConfig as any).sourceLocale || "en";
    return segments[0] ?? defaultLocale;
  }, [pathname]);

  const onChange = (nextLocale: string) => {
    if (!nextLocale || nextLocale === currentLocale) return;
    const segments = pathname.split("/");
    // Ensure leading slash remains
    const leadingSlash = segments[0] === "" ? "" : "/";
    const nonEmpty = segments.filter(Boolean);
    if (nonEmpty.length === 0) {
      router.replace(`/${nextLocale}`);
      return;
    }
    nonEmpty[0] = nextLocale;
    const nextPath = `/${nonEmpty.join("/")}`;
    router.replace(nextPath);
  };

  return (
    <label className="inline-flex items-center gap-2 text-sm">
      <span className="sr-only">Language</span>
      <select
        className="bg-background border border-border rounded-md px-2 py-1 text-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        value={currentLocale}
        onChange={(e) => onChange(e.target.value)}
      >
        {locales.map((loc) => (
          <option key={loc} value={loc}>
            {loc.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}
