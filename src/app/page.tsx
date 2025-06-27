import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Sell Products Directly from{' '}
              <span className="text-primary">Telegram</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              ShopGrid is a Telegram Mini App that lets small businesses sell products directly from their Telegram channels or groups. 
              AI-powered product listings, invoice generation, and built-in payment support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://t.me/shopgrid_lab_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Create Your Store
              </Link>
              <Link
                href="/features"
                className="border border-border text-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything you need to sell on Telegram
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed specifically for Telegram's ecosystem
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'AI Product Upload',
                description: 'Upload product photos and let AI automatically generate descriptions, categories, and pricing suggestions.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
                title: 'Invoice Generation',
                description: 'Automatically generate professional invoices for every sale with your branding and payment details.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                ),
                title: 'Built-in Payments',
                description: 'Accept payments directly through Telegram with support for multiple payment methods and currencies.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'Analytics Dashboard',
                description: 'Track your sales, customer behavior, and product performance with detailed analytics and insights.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
                title: 'Mobile-First Design',
                description: 'Optimized for Telegram\'s mobile interface with intuitive navigation and touch-friendly controls.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: 'Instant Setup',
                description: 'Get started in minutes with our simple setup process. No technical knowledge required.'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-background p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              How it Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get your Telegram store up and running in just 3 simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Connect Your Channel',
                description: 'Link your Telegram channel or group to ShopGrid and set up your store preferences.'
              },
              {
                step: '02',
                title: 'Add Your Products',
                description: 'Upload product photos and let AI generate descriptions, or add them manually.'
              },
              {
                step: '03',
                title: 'Start Selling',
                description: 'Share your store link with customers and start accepting orders and payments.'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              See ShopGrid in Action
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Beautiful, intuitive interface designed for Telegram users
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Product Catalog</h3>
                <p className="text-muted-foreground mb-4">
                  Customers can browse your products with beautiful images, detailed descriptions, and real-time pricing.
                </p>
                <div className="bg-muted h-48 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Product Catalog Screenshot</span>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Admin Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Manage your store, track orders, and view analytics from our comprehensive admin panel.
                </p>
                <div className="bg-muted h-48 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Admin Dashboard Screenshot</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Order Management</h3>
                <p className="text-muted-foreground mb-4">
                  Process orders, generate invoices, and manage customer communications all in one place.
                </p>
                <div className="bg-muted h-48 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Order Management Screenshot</span>
                </div>
              </div>
              
              <div className="bg-background p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold text-foreground mb-3">Payment Processing</h3>
                <p className="text-muted-foreground mb-4">
                  Secure payment processing with support for multiple payment methods and automatic invoice generation.
                </p>
                <div className="bg-muted h-48 rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">Payment Processing Screenshot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of businesses already selling on Telegram
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                business: 'Handmade Jewelry',
                testimonial: 'ShopGrid transformed my Telegram channel into a thriving store. The AI product upload feature saves me hours every week!',
                rating: 5
              },
              {
                name: 'Marcus Rodriguez',
                business: 'Tech Gadgets',
                testimonial: 'The built-in payment system is seamless. My customers love the convenience of buying directly through Telegram.',
                rating: 5
              },
              {
                name: 'Emma Thompson',
                business: 'Organic Skincare',
                testimonial: 'Setting up my store took less than 10 minutes. The analytics help me understand what products my customers love most.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-secondary p-6 rounded-lg border border-border">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground mb-4 italic">"{testimonial.testimonial}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.business}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Selling on Telegram?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using ShopGrid to sell their products directly through Telegram.
          </p>
          <Link
            href="https://t.me/shopgrid_lab_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/90 transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Create Your Store Now
          </Link>
        </div>
      </section>
    </div>
  );
}
