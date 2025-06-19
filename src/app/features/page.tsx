import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Powerful Features for{' '}
              <span className="text-primary">Telegram Commerce</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Everything you need to turn your Telegram channel into a thriving online store. 
              Built specifically for the Telegram ecosystem with modern tools and AI-powered features.
            </p>
          </div>
        </div>
      </section>

      {/* Telegram-First UX */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Telegram-First User Experience
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                ShopGrid is designed from the ground up for Telegram's unique interface and user behavior. 
                Your customers get a seamless shopping experience that feels native to the platform.
              </p>
              <ul className="space-y-4">
                {[
                  'Native Telegram UI components and interactions',
                  'Optimized for mobile-first Telegram users',
                  'Seamless integration with Telegram channels and groups',
                  'Instant notifications and order updates',
                  'Built-in chat support for customer inquiries'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Telegram Interface Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Dashboard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Admin Dashboard Preview</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Comprehensive Admin Dashboard
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Manage your entire business from one powerful dashboard. Track sales, manage inventory, 
                and analyze performance with real-time data and insights.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Order Management', desc: 'Process orders, update status, and manage fulfillment' },
                  { title: 'Inventory Control', desc: 'Track stock levels and set up automatic alerts' },
                  { title: 'Customer Database', desc: 'Manage customer information and purchase history' },
                  { title: 'Sales Analytics', desc: 'Detailed reports on revenue, products, and trends' }
                ].map((item, index) => (
                  <div key={index} className="bg-secondary p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Product Tools */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              AI-Powered Product Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let artificial intelligence handle the heavy lifting of product management
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Smart Image Analysis',
                description: 'Upload product photos and AI automatically identifies products, extracts features, and suggests optimal pricing.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                ),
                title: 'Auto Description Generation',
                description: 'Generate compelling product descriptions, bullet points, and SEO-optimized content in seconds.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Intelligent Pricing',
                description: 'Get AI-powered pricing recommendations based on market analysis, competition, and product features.'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-primary mb-6 mx-auto">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instant Telegram Integration */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Instant Telegram Integration
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Connect your existing Telegram channel or group in seconds. No coding required, 
                no complex setup - just link and start selling immediately.
              </p>
              <div className="space-y-4">
                {[
                  'One-click channel connection',
                  'Automatic bot setup and configuration',
                  'Customizable store appearance',
                  'Real-time synchronization',
                  'Multi-channel support'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-foreground font-medium">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="https://t.me/shopgrid_bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                  Connect Your Channel
                </Link>
              </div>
            </div>
            <div className="bg-background p-8 rounded-lg border border-border">
              <div className="bg-muted h-64 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Integration Setup Preview</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment and Invoice System */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Complete Payment & Invoice System
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handle payments, generate invoices, and manage your finances all in one place
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Multiple Payment Methods',
                description: 'Accept credit cards, digital wallets, and local payment options'
              },
              {
                title: 'Automatic Invoicing',
                description: 'Generate professional invoices with your branding automatically'
              },
              {
                title: 'Secure Transactions',
                description: 'Bank-level security with encryption and fraud protection'
              },
              {
                title: 'Financial Reports',
                description: 'Track revenue, expenses, and profit margins with detailed reports'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border text-center">
                <h3 className="text-lg font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how ShopGrid can transform your Telegram business.
          </p>
          <Link
            href="https://t.me/shopgrid_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/90 transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
} 