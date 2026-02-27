export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
}

export const categories = [
  "All",
  "Getting Started",
  "Tips & Tricks",
  "Success Stories",
  "Product Updates",
];

export const blogPosts: BlogPost[] = [
  {
    id: "how-to-start-selling-on-telegram",
    title: "How to Start Selling on Telegram in 2025",
    excerpt:
      "A complete guide to setting up your first Telegram store with Shopgrid — from connecting your channel to processing your first order.",
    content: `
      <h2>Why Telegram for E-commerce?</h2>
      <p>Telegram has grown to over 900 million active users worldwide, making it one of the largest messaging platforms. In Uzbekistan and Central Asia, Telegram is the dominant communication app, with millions using it daily for business and personal use.</p>
      <p>With Telegram Mini Apps, businesses can create native shopping experiences right inside the app — no separate downloads needed. Customers browse, add to cart, and pay without ever leaving Telegram.</p>
      <h2>Step 1: Create Your Store</h2>
      <p>Open <strong>@Shopgrid_bot</strong> in Telegram and tap "Start". Follow the guided setup to name your store, add a description, and connect your Telegram channel or group.</p>
      <h2>Step 2: Add Products</h2>
      <p>Upload product photos and fill in details like name, price, and description. Shopgrid supports multiple images per product, variants (sizes, colors), and multilingual descriptions in Uzbek, Russian, and English.</p>
      <h2>Step 3: Configure Payments</h2>
      <p>Connect your Payme or Click account to start accepting payments. You can also offer cash on delivery for customers who prefer it.</p>
      <h2>Step 4: Share & Sell</h2>
      <p>Share your store link in your Telegram channel. Customers open the Mini App, browse products, and checkout — all inside Telegram. You get instant notifications for every new order.</p>
    `,
    category: "Getting Started",
    tags: ["telegram", "ecommerce", "guide", "beginners"],
    author: "Shopgrid Team",
    date: "2025-09-15",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: "5-tips-increase-telegram-sales",
    title: "5 Tips to Increase Your Telegram Store Sales",
    excerpt:
      "Proven strategies from successful Shopgrid sellers to boost your revenue and grow your customer base on Telegram.",
    content: `
      <h2>1. Use High-Quality Product Photos</h2>
      <p>Products with clear, well-lit photos sell 3x more than those without. Take photos from multiple angles and use a clean background.</p>
      <h2>2. Write Multilingual Descriptions</h2>
      <p>Reach more customers by writing product descriptions in Uzbek, Russian, and English. Shopgrid makes it easy to manage multilingual content.</p>
      <h2>3. Offer Multiple Payment Options</h2>
      <p>Not everyone prefers the same payment method. Offering Payme, Click, and cash on delivery increases your conversion rate significantly.</p>
      <h2>4. Post Regular Updates in Your Channel</h2>
      <p>Keep your audience engaged with new product announcements, special offers, and behind-the-scenes content.</p>
      <h2>5. Respond to Orders Quickly</h2>
      <p>Fast order processing builds trust. Use Shopgrid's admin dashboard to manage orders efficiently and keep customers informed about their order status.</p>
    `,
    category: "Tips & Tricks",
    tags: ["sales", "tips", "marketing", "growth"],
    author: "Shopgrid Team",
    date: "2025-09-10",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: "aziza-fashion-boutique-success-story",
    title: "How Aziza Grew Her Fashion Boutique 300% with Shopgrid",
    excerpt:
      "From a small Telegram channel to a thriving online fashion business — Aziza shares her journey with Shopgrid.",
    content: `
      <h2>The Beginning</h2>
      <p>Aziza Karimova started her fashion boutique as a hobby, posting photos of clothing in her Telegram channel with 200 subscribers. Managing orders through DMs was chaotic — she often lost track of orders and payments.</p>
      <h2>Discovering Shopgrid</h2>
      <p>"When I found Shopgrid, everything changed. I set up my store in 10 minutes and immediately started receiving proper orders with payment tracking," says Aziza.</p>
      <h2>The Results</h2>
      <p>Within three months, Aziza's sales grew 300%. The professional product catalog and integrated Payme/Click payments gave her customers confidence to buy. Her channel grew from 200 to over 2,000 subscribers.</p>
      <h2>Key Takeaways</h2>
      <p>"The biggest difference was having a real storefront instead of just photos in a channel. Customers can browse, add to cart, and pay — it feels professional and trustworthy."</p>
    `,
    category: "Success Stories",
    tags: ["success-story", "fashion", "growth", "uzbekistan"],
    author: "Shopgrid Team",
    date: "2025-09-05",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: "understanding-shopgrid-analytics",
    title: "Understanding Your Shopgrid Analytics Dashboard",
    excerpt:
      "Learn how to read your analytics dashboard and use data to make smarter decisions for your Telegram store.",
    content: `
      <h2>Key Metrics Overview</h2>
      <p>Your Shopgrid dashboard shows four key metrics: Total Revenue, Total Orders, Average Order Value, and Pending Orders. Together they give you a complete picture of your store's health.</p>
      <h2>Revenue Tracking</h2>
      <p>Track your daily, weekly, and monthly revenue trends. Look for patterns — which days have the highest sales? Use this data to time your promotions.</p>
      <h2>Top Products</h2>
      <p>The top products section shows which items are selling best. Stock up on these items and consider creating similar products.</p>
      <h2>Order Management</h2>
      <p>Keep an eye on pending orders and process them quickly. Customers who receive fast service are more likely to order again.</p>
    `,
    category: "Tips & Tricks",
    tags: ["analytics", "dashboard", "data", "business"],
    author: "Shopgrid Team",
    date: "2025-08-28",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: "payme-click-payment-setup",
    title: "Setting Up Payme & Click Payments for Your Store",
    excerpt:
      "Step-by-step guide to connecting Payme and Click payment providers to your Shopgrid store.",
    content: `
      <h2>Why Offer Local Payment Methods?</h2>
      <p>In Uzbekistan, Payme and Click are the most trusted digital payment methods. Offering both significantly increases your conversion rate as customers can choose their preferred option.</p>
      <h2>Setting Up Payme</h2>
      <p>Navigate to your store settings in the admin dashboard. Under "Payment Methods", click "Connect Payme" and follow the verification steps. You'll need your Payme merchant credentials.</p>
      <h2>Setting Up Click</h2>
      <p>Similarly, click "Connect Click" in your payment settings. Enter your Click merchant ID and secret key. The integration takes just a few minutes.</p>
      <h2>Cash on Delivery</h2>
      <p>Cash on delivery is enabled by default and requires no setup. It's a great option for customers who aren't comfortable with digital payments yet.</p>
    `,
    category: "Getting Started",
    tags: ["payments", "payme", "click", "setup"],
    author: "Shopgrid Team",
    date: "2025-08-20",
    readTime: "3 min read",
    featured: false,
  },
  {
    id: "shopgrid-multilingual-support",
    title: "Reaching More Customers with Multilingual Support",
    excerpt:
      "How to use Shopgrid's multilingual features to sell to Uzbek, Russian, and English-speaking customers.",
    content: `
      <h2>Why Multilingual Matters</h2>
      <p>Uzbekistan is a multilingual market. Many customers prefer browsing in Uzbek, while others are more comfortable with Russian. International customers may need English. Supporting all three languages significantly expands your reach.</p>
      <h2>Product Descriptions</h2>
      <p>When creating products in Shopgrid, you can add descriptions in all three languages. The store automatically shows the right language based on the customer's Telegram settings.</p>
      <h2>Store Interface</h2>
      <p>The entire shopping experience — navigation, cart, checkout, and order tracking — is fully translated in Uzbek, Russian, and English.</p>
      <h2>Best Practices</h2>
      <p>Always fill in descriptions for all three languages. If a translation is missing, Shopgrid will fall back to the default language, but native-language descriptions always perform better.</p>
    `,
    category: "Tips & Tricks",
    tags: ["multilingual", "uzbek", "russian", "localization"],
    author: "Shopgrid Team",
    date: "2025-08-15",
    readTime: "3 min read",
    featured: false,
  },
];

export function getBlogPostById(id: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === id);
}

export function getRelatedBlogPosts(
  currentId: string,
  category: string,
  limit = 3
): BlogPost[] {
  return blogPosts
    .filter((post) => post.id !== currentId)
    .sort((a, b) =>
      a.category === category ? -1 : b.category === category ? 1 : 0
    )
    .slice(0, limit);
}
