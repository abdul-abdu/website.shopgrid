'use client';

import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { useState } from 'react';

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for getting started',
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        'Up to 10 products',
        'Basic analytics',
        'Telegram integration',
        'Standard support',
        'Basic invoice generation'
      ],
      notIncluded: [
        'AI product tools',
        'Advanced analytics',
        'Priority support',
        'Custom branding',
        'Bulk operations'
      ],
      cta: 'Get Started Free',
      popular: false
    },
    {
      name: 'Starter',
      description: 'Great for growing businesses',
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        'Up to 100 products',
        'Advanced analytics',
        'AI product tools',
        'Priority support',
        'Custom branding',
        'Bulk operations',
        'Email notifications'
      ],
      notIncluded: [
        'Unlimited products',
        'Advanced reporting',
        'API access',
        'White-label solution'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Pro',
      description: 'For established businesses',
      monthlyPrice: 49,
      yearlyPrice: 490,
      features: [
        'Unlimited products',
        'Advanced reporting',
        'API access',
        'White-label solution',
        'Dedicated support',
        'Custom integrations',
        'Multi-store management',
        'Advanced security'
      ],
      notIncluded: [],
      cta: 'Start Free Trial',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Simple, Transparent{' '}
              <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. Start free and upgrade as you grow. 
              All plans include our core features with no hidden fees.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-sm font-medium transition-colors ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/20 ${
                  isYearly ? 'bg-primary shadow-lg' : 'bg-muted hover:bg-red'
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-md transition-all duration-300 ease-in-out ${
                    isYearly ? 'translate-x-8' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium transition-colors ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
                Yearly
                <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full font-medium">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-background rounded-lg border-2 p-8 ${
                  plan.popular 
                    ? 'border-primary shadow-lg scale-105' 
                    : 'border-border hover:border-primary/50 transition-colors'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    {plan.monthlyPrice > 0 && (
                      <span className="text-muted-foreground">
                        /{isYearly ? 'year' : 'month'}
                      </span>
                    )}
                  </div>
                  
                  <Link
                    href="https://t.me/shopgrid_lab_bot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'bg-secondary text-foreground hover:bg-secondary/80'
                    }`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                    {plan.cta}
                  </Link>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">What's included:</h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {plan.notIncluded.length > 0 && (
                    <>
                      <h4 className="font-semibold text-foreground mt-6">Not included:</h4>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-muted-foreground mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Compare All Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See exactly what's included in each plan to make the best choice for your business
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-background rounded-lg border border-border">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-6 font-semibold text-foreground">Feature</th>
                  <th className="text-center p-6 font-semibold text-foreground">Free</th>
                  <th className="text-center p-6 font-semibold text-foreground">Starter</th>
                  <th className="text-center p-6 font-semibold text-foreground">Pro</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Products', free: '10', starter: '100', pro: 'Unlimited' },
                  { feature: 'AI Product Tools', free: '❌', starter: '✅', pro: '✅' },
                  { feature: 'Advanced Analytics', free: '❌', starter: '✅', pro: '✅' },
                  { feature: 'Priority Support', free: '❌', starter: '✅', pro: '✅' },
                  { feature: 'Custom Branding', free: '❌', starter: '✅', pro: '✅' },
                  { feature: 'Bulk Operations', free: '❌', starter: '✅', pro: '✅' },
                  { feature: 'API Access', free: '❌', starter: '❌', pro: '✅' },
                  { feature: 'White-label Solution', free: '❌', starter: '❌', pro: '✅' },
                  { feature: 'Multi-store Management', free: '❌', starter: '❌', pro: '✅' },
                  { feature: 'Dedicated Support', free: '❌', starter: '❌', pro: '✅' }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-border last:border-b-0">
                    <td className="p-6 font-medium text-foreground">{row.feature}</td>
                    <td className="p-6 text-center text-muted-foreground">{row.free}</td>
                    <td className="p-6 text-center text-muted-foreground">{row.starter}</td>
                    <td className="p-6 text-center text-muted-foreground">{row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about our pricing and plans
            </p>
          </div>
          
          <div className="space-y-8">
            {[
              {
                question: 'Can I change my plan at any time?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any billing adjustments.'
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes! Both Starter and Pro plans come with a 14-day free trial. No credit card required to start.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and various local payment methods depending on your region.'
              },
              {
                question: 'Can I cancel my subscription?',
                answer: 'Absolutely. You can cancel your subscription at any time from your account settings. No long-term contracts or cancellation fees.'
              },
              {
                question: 'Do you offer refunds?',
                answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with ShopGrid, we\'ll refund your payment in full.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-secondary p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
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
            Join thousands of businesses already using ShopGrid. Start your free trial today.
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
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
} 