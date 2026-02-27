import Link from "next/link";
import { Trans } from "@lingui/react/macro";
import { initLingui } from "../../initLingui";

export default async function FeaturesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  initLingui(lang);
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 hero-gradient">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight">
              <Trans>
                Powerful Features for{" "}
                <span className="gradient-text">Telegram Commerce</span>
              </Trans>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              <Trans>
                Everything you need to turn your Telegram channel into a
                thriving online store. Built for the Telegram ecosystem with
                modern tools and AI-powered features.
              </Trans>
            </p>
          </div>
        </div>
      </section>

      {/* Telegram-First UX */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                <Trans>Telegram-First User Experience</Trans>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                <Trans>
                  Shopgrid uses Telegram Web App SDK for native integration with
                  features like main button controls, settings button, back
                  button handling, and theme synchronization.
                </Trans>
              </p>
              <ul className="space-y-4">
                {[
                  "Native Telegram Web App components and hooks",
                  "Main button integration for checkout actions",
                  "Settings button and back button native handling",
                  "Automatic theme synchronization with Telegram",
                  "Responsive navigation optimized for mobile",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg
                        className="w-3.5 h-3.5 text-primary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-foreground">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative w-[260px]">
                <div className="rounded-[2.5rem] border-[6px] border-foreground/10 bg-background shadow-2xl overflow-hidden">
                  <div className="mx-auto mt-2 mb-1 w-24 h-5 bg-foreground/10 rounded-full" />
                  <div className="px-3 pb-4 space-y-3">
                    <p className="font-bold text-sm text-foreground text-center">
                      Fashion Store
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { name: "T-Shirt", price: "89K", bg: "bg-blue-50" },
                        { name: "Bag", price: "259K", bg: "bg-amber-50" },
                        { name: "Shoes", price: "349K", bg: "bg-emerald-50" },
                        { name: "Watch", price: "429K", bg: "bg-violet-50" },
                      ].map((p, i) => (
                        <div
                          key={i}
                          className="rounded-xl border border-border overflow-hidden"
                        >
                          <div
                            className={`${p.bg} h-16 flex items-center justify-center`}
                          >
                            <div className="w-6 h-6 rounded bg-foreground/5" />
                          </div>
                          <div className="p-1.5">
                            <p className="text-[9px] font-medium text-foreground">
                              {p.name}
                            </p>
                            <p className="text-[9px] text-primary font-semibold">
                              {p.price} UZS
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-primary text-primary-foreground text-[10px] font-medium py-2 rounded-lg text-center">
                      View Cart
                    </div>
                  </div>
                  <div className="mx-auto mb-2 w-28 h-1 bg-foreground/10 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Dashboard */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-secondary rounded-2xl border border-border p-6 shadow-lg">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs text-muted-foreground ml-2">
                    Admin Dashboard
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Revenue", val: "4.2M UZS", color: "text-emerald-600" },
                    { label: "Orders", val: "128", color: "text-primary" },
                    { label: "Avg. Order", val: "32K UZS", color: "text-violet-600" },
                    { label: "Pending", val: "5", color: "text-amber-600" },
                  ].map((s, i) => (
                    <div key={i} className="bg-background rounded-xl p-3 border border-border">
                      <p className="text-xs text-muted-foreground">{s.label}</p>
                      <p className={`text-lg font-bold ${s.color}`}>{s.val}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-end gap-1.5 h-24 bg-background rounded-xl p-3 border border-border">
                  {[35, 55, 40, 70, 60, 85, 50].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end">
                      <div
                        className="bg-primary/80 rounded-t"
                        style={{ height: `${h}%` }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                <Trans>Comprehensive Admin Dashboard</Trans>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                <Trans>
                  Manage your entire business from one powerful dashboard. Track
                  sales, manage inventory, and analyze performance with real-time
                  data.
                </Trans>
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Order Management",
                    desc: "Process orders, update status, track pending/paid/shipped orders",
                  },
                  {
                    title: "Revenue Analytics",
                    desc: "Track total revenue, average order value, and trends",
                  },
                  {
                    title: "Customer Database",
                    desc: "Manage customer info and purchase history",
                  },
                  {
                    title: "Product Performance",
                    desc: "View top-performing products and inventory insights",
                  },
                ].map((item, i) => (
                  <div key={i} className="bg-secondary p-4 rounded-xl">
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Product Tools */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <Trans>AI-Powered Product Tools</Trans>
            </h2>
            <p className="text-lg text-muted-foreground">
              <Trans>
                Let artificial intelligence handle the heavy lifting of product
                management
              </Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                title: "Smart Image Analysis",
                description:
                  "Upload product photos with automatic image optimization and CDN delivery for fast loading.",
              },
              {
                icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129",
                title: "Multilingual Support",
                description:
                  "Product listings in Uzbek, Russian, and English with automatic language detection.",
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Intelligent Pricing",
                description:
                  "AI-powered pricing recommendations based on market analysis and product features.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-background p-8 rounded-2xl border border-border text-center hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="w-14 h-14 mx-auto bg-accent rounded-2xl flex items-center justify-center mb-5">
                  <svg
                    className="w-7 h-7 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment & Invoice System */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <Trans>Complete Payment & Invoice System</Trans>
            </h2>
            <p className="text-lg text-muted-foreground">
              <Trans>
                Handle payments, generate invoices, and manage finances in one
                place
              </Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Payme & Click",
                description:
                  "Accept payments with Uzbekistan's most popular payment providers — Payme and Click.",
                icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
              },
              {
                title: "Telegram Invoices",
                description:
                  "Generate and send invoices directly through Telegram with automatic processing.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
              },
              {
                title: "Cash on Delivery",
                description:
                  "Offer cash on delivery for customers who prefer traditional payment methods.",
                icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-secondary p-6 rounded-2xl border border-border hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={feature.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/80 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDgpIi8+PC9zdmc+')] opacity-50" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            <Trans>Ready to Experience These Features?</Trans>
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            <Trans>
              Start your free trial today and see how Shopgrid can transform
              your Telegram business.
            </Trans>
          </p>
          <Link
            href="https://t.me/Shopgrid_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white/90 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <Trans>Start Free Trial</Trans>
          </Link>
        </div>
      </section>
    </div>
  );
}
