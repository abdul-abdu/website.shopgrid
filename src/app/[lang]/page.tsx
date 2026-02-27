import Link from "next/link";
import { Trans } from "@lingui/react/macro";
import { initLingui } from "../initLingui";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = (await params).lang;
  initLingui(lang);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 hero-gradient overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-accent/60 text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/10">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <Trans>Telegram Mini App</Trans>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.1]">
                <Trans>
                  Sell Products Directly from{" "}
                  <span className="gradient-text">Telegram</span>
                </Trans>
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                {/* prettier-ignore */}
                <Trans>
                  Turn your Telegram channel into a full online store. Accept payments with Payme & Click, manage orders, and grow your business — all inside Telegram.
                </Trans>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://t.me/Shopgrid_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 inline-flex items-center justify-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  <Trans>Create Your Store</Trans>
                </Link>
                <Link
                  href={`/${lang}/features`}
                  className="border border-border text-foreground px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-accent transition-all inline-flex items-center justify-center"
                >
                  <Trans>Learn More</Trans>
                </Link>
              </div>

              {/* Social proof */}
              <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {["bg-blue-400", "bg-emerald-400", "bg-violet-400", "bg-amber-400"].map((c, i) => (
                    <div key={i} className={`w-8 h-8 rounded-full ${c} border-2 border-background`} />
                  ))}
                </div>
                <span>
                  <Trans>
                    Trusted by <strong className="text-foreground">500+</strong>{" "}
                    businesses
                  </Trans>
                </span>
              </div>
            </div>

            {/* Right — phone mockup with app preview */}
            <div className="relative flex justify-center animate-fade-in-up animation-delay-200">
              <div className="animate-float">
                <PhoneMockup>
                  <ProductCatalogPreview />
                </PhoneMockup>
              </div>
              {/* Decorative blobs */}
              <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-accent/40 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-border bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500+", label: "Active Stores" },
              { value: "15K+", label: "Products Listed" },
              { value: "50K+", label: "Orders Processed" },
              { value: "3", label: "Languages Supported" },
            ].map((stat, i) => (
              <div key={i} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 100}ms` }}>
                <div className="text-3xl sm:text-4xl font-extrabold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <Trans>Everything you need to sell on Telegram</Trans>
            </h2>
            <p className="text-lg text-muted-foreground">
              <Trans>
                Powerful features for businesses using Telegram&apos;s ecosystem
              </Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
                title: "AI Product Upload",
                description:
                  "Upload product photos and let AI automatically generate descriptions, categories, and pricing suggestions.",
              },
              {
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                title: "Invoice Generation",
                description:
                  "Automatically generate professional invoices for every sale with your branding and payment details.",
              },
              {
                icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                title: "Payme & Click Payments",
                description:
                  "Accept payments with Payme, Click, and cash on delivery. Integrated with local Uzbek payment providers.",
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Real-time Analytics",
                description:
                  "Track orders, revenue, average order value, and top products with a live analytics dashboard.",
              },
              {
                icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                title: "Smart Shopping Cart",
                description:
                  "Automatic tax calculation, shipping costs, quantity management, and real-time total updates.",
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Instant Setup",
                description:
                  "Get your store running in minutes. No coding, no technical knowledge — just connect and start selling.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group relative bg-background p-6 rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
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
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <Trans>See Shopgrid in Action</Trans>
            </h2>
            <p className="text-lg text-muted-foreground">
              <Trans>
                Beautiful, native Telegram experience for your customers and a
                powerful dashboard for you
              </Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Customer store view */}
            <div className="flex flex-col items-center">
              <PhoneMockup>
                <ProductCatalogPreview />
              </PhoneMockup>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                <Trans>Product Catalog</Trans>
              </h3>
              <p className="text-sm text-muted-foreground text-center mt-1 max-w-xs">
                <Trans>
                  Customers browse products with images, prices, and add to cart
                  — all inside Telegram
                </Trans>
              </p>
            </div>

            {/* Cart & Checkout */}
            <div className="flex flex-col items-center lg:mt-12">
              <PhoneMockup>
                <CartPreview />
              </PhoneMockup>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                <Trans>Smart Cart & Checkout</Trans>
              </h3>
              <p className="text-sm text-muted-foreground text-center mt-1 max-w-xs">
                <Trans>
                  Automatic totals with tax & shipping. Pay with Payme, Click,
                  or cash on delivery
                </Trans>
              </p>
            </div>

            {/* Admin dashboard */}
            <div className="flex flex-col items-center">
              <PhoneMockup>
                <DashboardPreview />
              </PhoneMockup>
              <h3 className="mt-6 text-lg font-semibold text-foreground">
                <Trans>Admin Dashboard</Trans>
              </h3>
              <p className="text-sm text-muted-foreground text-center mt-1 max-w-xs">
                <Trans>
                  Track revenue, manage orders, and monitor your store
                  performance in real-time
                </Trans>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <Trans>How it Works</Trans>
            </h2>
            <p className="text-lg text-muted-foreground">
              <Trans>
                Get your Telegram store up and running in 3 simple steps
              </Trans>
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

            {[
              {
                step: "01",
                title: "Connect Your Channel",
                description:
                  "Open @Shopgrid_bot in Telegram and link your channel or group to set up your store.",
              },
              {
                step: "02",
                title: "Add Your Products",
                description:
                  "Upload product photos and details. Our AI helps generate descriptions and pricing.",
              },
              {
                step: "03",
                title: "Start Selling",
                description:
                  "Share your store link with customers. Accept orders and payments instantly.",
              },
            ].map((step, i) => (
              <div key={i} className="relative text-center">
                <div className="w-20 h-20 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg shadow-primary/20 animate-pulse-glow">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <Trans>What Our Users Say</Trans>
            </h2>
            <p className="text-lg text-muted-foreground">
              <Trans>
                Real businesses growing with Shopgrid on Telegram
              </Trans>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Aziza Karimova",
                business: "Fashion Boutique — Tashkent",
                testimonial:
                  "Shopgrid bilan Telegram kanalimni do'konga aylantirdim. Payme va Click to'lovlari juda qulay, mijozlarim mamnun!",
                avatar: "AK",
              },
              {
                name: "Marcus Rodriguez",
                business: "Electronics Store",
                testimonial:
                  "The built-in payment system with Payme and Click is perfect for Uzbekistan market. My sales increased by 300%!",
                avatar: "MR",
              },
              {
                name: "Dilshod Abdullayev",
                business: "Home Goods — Samarkand",
                testimonial:
                  "Do'konimni 10 daqiqada ochib yubordim. Statistika va buyurtmalarni boshqarish juda oson va qulay.",
                avatar: "DA",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-background p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  &ldquo;{t.testimonial}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold flex items-center justify-center text-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="text-muted-foreground text-xs">
                      {t.business}
                    </p>
                  </div>
                </div>
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
            <Trans>Ready to Start Selling on Telegram?</Trans>
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {/* prettier-ignore */}
            <Trans>
              Join hundreds of businesses already using Shopgrid to sell products directly through Telegram.
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
            <Trans>Create Your Store Now</Trans>
          </Link>
        </div>
      </section>
    </div>
  );
}

/* ─── Phone Mockup Shell ─── */
function PhoneMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-[260px] sm:w-[280px]">
      <div className="rounded-[2.5rem] border-[6px] border-foreground/10 bg-background shadow-2xl overflow-hidden">
        {/* Notch */}
        <div className="mx-auto mt-2 mb-1 w-24 h-5 bg-foreground/10 rounded-full" />
        {/* Screen content */}
        <div className="px-3 pb-4">{children}</div>
        {/* Home indicator */}
        <div className="mx-auto mb-2 w-28 h-1 bg-foreground/10 rounded-full" />
      </div>
    </div>
  );
}

/* ─── Product Catalog Preview (CSS-only mockup) ─── */
function ProductCatalogPreview() {
  const products = [
    { name: "Classic T-Shirt", price: "89 000", color: "bg-blue-100" },
    { name: "Leather Bag", price: "259 000", color: "bg-amber-100" },
    { name: "Running Shoes", price: "349 000", color: "bg-emerald-100" },
    { name: "Sunglasses", price: "129 000", color: "bg-rose-100" },
  ];
  return (
    <div className="space-y-3">
      <div className="text-center">
        <p className="font-bold text-sm text-foreground">Fashion Store</p>
        <p className="text-[10px] text-muted-foreground">4 products</p>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {products.map((p, i) => (
          <div
            key={i}
            className="rounded-xl border border-border overflow-hidden"
          >
            <div
              className={`${p.color} h-20 flex items-center justify-center`}
            >
              <svg
                className="w-8 h-8 text-foreground/20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div className="p-1.5">
              <p className="text-[10px] font-medium text-foreground truncate">
                {p.name}
              </p>
              <p className="text-[10px] text-primary font-semibold">
                {p.price} <span className="text-[8px]">UZS</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-primary text-primary-foreground text-xs font-medium py-2 rounded-lg text-center">
        View Cart (2)
      </div>
    </div>
  );
}

/* ─── Cart Preview ─── */
function CartPreview() {
  return (
    <div className="space-y-3">
      <p className="font-bold text-sm text-foreground text-center">
        Your Cart
      </p>

      <div className="space-y-2">
        {[
          { name: "Classic T-Shirt", qty: 2, price: "178 000" },
          { name: "Leather Bag", qty: 1, price: "259 000" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 p-2 rounded-lg border border-border"
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex-shrink-0 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-muted-foreground"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-medium text-foreground truncate">
                {item.name}
              </p>
              <p className="text-[10px] text-muted-foreground">
                Qty: {item.qty}
              </p>
            </div>
            <p className="text-[10px] font-semibold text-foreground whitespace-nowrap">
              {item.price}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-border pt-2 space-y-1">
        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>Subtotal</span>
          <span>437 000</span>
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>Tax (15%)</span>
          <span>65 550</span>
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>Shipping</span>
          <span>15 000</span>
        </div>
        <div className="flex justify-between text-xs font-bold text-foreground pt-1 border-t border-border">
          <span>Total</span>
          <span>517 550 UZS</span>
        </div>
      </div>

      <div className="space-y-1.5">
        <div className="bg-primary text-primary-foreground text-xs font-medium py-2 rounded-lg text-center">
          Pay with Payme
        </div>
        <div className="border border-border text-foreground text-xs font-medium py-2 rounded-lg text-center">
          Pay with Click
        </div>
      </div>
    </div>
  );
}

/* ─── Dashboard Preview ─── */
function DashboardPreview() {
  return (
    <div className="space-y-3">
      <p className="font-bold text-sm text-foreground text-center">
        Dashboard
      </p>

      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Revenue", value: "4.2M", sub: "UZS" },
          { label: "Orders", value: "128", sub: "this month" },
          { label: "Avg Order", value: "32K", sub: "UZS" },
          { label: "Pending", value: "5", sub: "orders" },
        ].map((s, i) => (
          <div key={i} className="bg-accent/50 rounded-lg p-2 text-center">
            <p className="text-sm font-bold text-foreground">{s.value}</p>
            <p className="text-[9px] text-muted-foreground">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-[10px] font-semibold text-foreground mb-1.5">
          Recent Orders
        </p>
        <div className="space-y-1.5">
          {[
            {
              id: "#A3F1",
              status: "Paid",
              amount: "89 000",
              color: "text-emerald-600 bg-emerald-50",
            },
            {
              id: "#B7C2",
              status: "Pending",
              amount: "259 000",
              color: "text-amber-600 bg-amber-50",
            },
            {
              id: "#D4E9",
              status: "Shipped",
              amount: "178 000",
              color: "text-blue-600 bg-blue-50",
            },
          ].map((o, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-1.5 rounded-lg border border-border"
            >
              <div>
                <p className="text-[10px] font-medium text-foreground">
                  Order {o.id}
                </p>
                <span
                  className={`text-[8px] px-1.5 py-0.5 rounded-full font-medium ${o.color}`}
                >
                  {o.status}
                </span>
              </div>
              <p className="text-[10px] font-semibold text-foreground">
                {o.amount}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mini chart bars */}
      <div>
        <p className="text-[10px] font-semibold text-foreground mb-1.5">
          Weekly Revenue
        </p>
        <div className="flex items-end gap-1 h-12">
          {[40, 65, 50, 80, 70, 90, 60].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-primary/20 rounded-t"
              style={{ height: `${h}%` }}
            >
              <div
                className="w-full bg-primary rounded-t"
                style={{ height: `${h}%` }}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between text-[7px] text-muted-foreground mt-0.5">
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
}
