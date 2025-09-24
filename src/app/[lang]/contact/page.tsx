"use client";

import Navigation from "@/app/[lang]/components/Navigation";
import Link from "next/link";
import { Trans } from "@lingui/react/macro";
import { useLingui } from "@lingui/react";
import { useState } from "react";
import { t } from "@lingui/core/macro";

export default function ContactPage() {
  const { i18n } = useLingui();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);

    // In a real app, you would send the form data to your backend
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              <Trans>Get in</Trans>{" "}
              <span className="text-primary">
                <Trans>Touch</Trans>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              <Trans>
                Have questions about Shopgrid? Need help setting up your store?
                We're here to help you succeed with your Telegram business.
              </Trans>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-background p-8 rounded-lg border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                <Trans>Send us a Message</Trans>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      <Trans>Name *</Trans>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={t(i18n)`Your name`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      <Trans>Email *</Trans>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder={t(i18n)`your@email.com`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    <Trans>Subject *</Trans>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">{t(i18n)`Select a subject`}</option>
                    <option value="general">{t(i18n)`General Inquiry`}</option>
                    <option value="support">{t(i18n)`Technical Support`}</option>
                    <option value="billing">{t(i18n)`Billing Question`}</option>
                    <option value="partnership">{t(i18n)`Partnership`}</option>
                    <option value="feature-request">{t(i18n)`Feature Request`}</option>
                    <option value="other">{t(i18n)`Other`}</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    <Trans>Message *</Trans>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-vertical"
                    placeholder={t(i18n)`Tell us how we can help you...`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Trans>Sending...</Trans>
                  ) : (
                    <Trans>Send Message</Trans>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  <Trans>Contact Information</Trans>
                </h2>
                <p className="text-muted-foreground mb-8">
                  <Trans>
                    We're here to help you succeed with your Telegram business.
                    Reach out to us through any of these channels.
                  </Trans>
                </p>
              </div>

              {/* Email */}
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      <Trans>Email Support</Trans>
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      <Trans>
                        Get help with technical issues, billing questions, or
                        general inquiries.
                      </Trans>
                    </p>
                    <a
                      href="mailto:support@Shopgrid.com"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      support@Shopgrid.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Telegram Support */}
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      <Trans>Telegram Support</Trans>
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      <Trans>
                        Join our Telegram group for instant support and
                        community discussions.
                      </Trans>
                    </p>
                    <Link
                      href="https://t.me/Shopgrid_support"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      <Trans>Join Support Group</Trans>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Community */}
              <div className="bg-secondary p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary text-primary-foreground rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      <Trans>Community</Trans>
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      <Trans>
                        Connect with other Shopgrid users, share tips, and get
                        inspired.
                      </Trans>
                    </p>
                    <Link
                      href="https://t.me/Shopgrid_community"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      <Trans>Join Community</Trans>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-accent p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent-foreground text-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      <Trans>Response Time</Trans>
                    </h3>
                    <p className="text-muted-foreground">
                      <Trans>
                        We typically respond within 24 hours for email inquiries
                        and within 2 hours for Telegram messages.
                      </Trans>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              <Trans>Frequently Asked Questions</Trans>
            </h2>
            <p className="text-xl text-muted-foreground">
              <Trans>Quick answers to common questions</Trans>
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: <Trans>How do I get started with Shopgrid?</Trans>,
                answer: (
                  <Trans>
                    Simply visit our Telegram bot at @Shopgrid_bot and follow
                    the setup instructions. You can have your store running in
                    minutes!
                  </Trans>
                ),
              },
              {
                question: <Trans>What payment methods do you support?</Trans>,
                answer: (
                  <Trans>
                    We support all major credit cards, PayPal, and various local
                    payment methods depending on your region.
                  </Trans>
                ),
              },
              {
                question: (
                  <Trans>
                    Can I use Shopgrid with multiple Telegram channels?
                  </Trans>
                ),
                answer: (
                  <Trans>
                    Yes! Pro users can manage multiple stores from a single
                    dashboard. Each channel can have its own product catalog and
                    settings.
                  </Trans>
                ),
              },
              {
                question: (
                  <Trans>
                    Is there a limit on the number of products I can sell?
                  </Trans>
                ),
                answer: (
                  <Trans>
                    Free users can list up to 10 products, Starter users up to
                    100, and Pro users have unlimited products.
                  </Trans>
                ),
              },
              {
                question: <Trans>Do you offer refunds?</Trans>,
                answer: (
                  <Trans>
                    Yes, we offer a 30-day money-back guarantee. If you're not
                    satisfied with Shopgrid, we'll refund your payment in full.
                  </Trans>
                ),
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg border border-border"
              >
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            <Trans>Ready to Start Your Telegram Business?</Trans>
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            <Trans>
              Join thousands of businesses already using Shopgrid to sell on
              Telegram.
            </Trans>
          </p>
          <Link
            href="https://t.me/Shopgrid_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/90 transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            <Trans>Get Started Now</Trans>
          </Link>
        </div>
      </section>
    </div>
  );
}
