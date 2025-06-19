import Navigation from '@/components/Navigation';
import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: '10 Telegram Marketing Tips to Boost Your Sales',
      excerpt: 'Discover proven strategies to leverage Telegram\'s unique features for maximum sales growth and customer engagement.',
      category: 'Marketing Tips',
      date: '2024-01-15',
      readTime: '5 min read',
      image: '/blog/telegram-marketing.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'How AI is Revolutionizing Product Management in E-commerce',
      excerpt: 'Learn how artificial intelligence is transforming the way businesses manage their product catalogs and improve customer experience.',
      category: 'Product Updates',
      date: '2024-01-12',
      readTime: '7 min read',
      image: '/blog/ai-revolution.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Success Story: How Sarah Built a $50K Business on Telegram',
      excerpt: 'Follow the journey of Sarah Chen, who turned her handmade jewelry hobby into a thriving business using ShopGrid.',
      category: 'Success Stories',
      date: '2024-01-10',
      readTime: '8 min read',
      image: '/blog/success-story.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'The Complete Guide to Telegram Mini Apps for Business',
      excerpt: 'Everything you need to know about Telegram Mini Apps and how they can transform your business operations.',
      category: 'Guides',
      date: '2024-01-08',
      readTime: '12 min read',
      image: '/blog/mini-apps-guide.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'New Features: Enhanced Analytics and Reporting',
      excerpt: 'Explore the latest updates to ShopGrid\'s analytics dashboard and how they can help you make better business decisions.',
      category: 'Product Updates',
      date: '2024-01-05',
      readTime: '4 min read',
      image: '/blog/analytics-update.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Building Customer Trust in Telegram Commerce',
      excerpt: 'Essential strategies for building trust and credibility when selling products through Telegram channels.',
      category: 'Marketing Tips',
      date: '2024-01-03',
      readTime: '6 min read',
      image: '/blog/customer-trust.jpg',
      featured: false
    }
  ];

  const categories = ['All', 'Marketing Tips', 'Product Updates', 'Success Stories', 'Guides'];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              ShopGrid{' '}
              <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Insights, tips, and success stories to help you grow your Telegram business. 
              Stay updated with the latest features and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Article</h2>
          </div>
          
          {blogPosts.filter(post => post.featured).map((post) => (
            <div key={post.id} className="bg-background rounded-lg border border-border overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="bg-muted h-64 lg:h-full flex items-center justify-center">
                  <span className="text-muted-foreground">Featured Post Image</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{post.title}</h3>
                  <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-muted h-48 flex items-center justify-center">
                  <span className="text-muted-foreground">Blog Post Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-secondary text-foreground px-2 py-1 rounded text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-muted-foreground text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
            Stay Updated with ShopGrid
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Get the latest tips, updates, and success stories delivered to your inbox. 
            No spam, just valuable content to help grow your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground"
            />
            <button className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Popular Topics</h2>
            <p className="text-xl text-muted-foreground">
              Explore our most-read articles and guides
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Telegram Marketing',
                description: 'Strategies and tips for marketing on Telegram',
                postCount: 12
              },
              {
                title: 'Product Management',
                description: 'Best practices for managing your product catalog',
                postCount: 8
              },
              {
                title: 'Success Stories',
                description: 'Real stories from ShopGrid users',
                postCount: 15
              },
              {
                title: 'Technical Guides',
                description: 'Step-by-step tutorials and guides',
                postCount: 6
              }
            ].map((topic, index) => (
              <div key={index} className="bg-secondary p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">{topic.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{topic.description}</p>
                <span className="text-primary text-sm font-medium">{topic.postCount} articles</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 