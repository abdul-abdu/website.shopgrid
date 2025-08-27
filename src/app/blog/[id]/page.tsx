import Navigation from '@/components/Navigation';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostById, getRelatedBlogPosts } from '@/data/blogPosts';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = params;
  const post = getBlogPostById(id);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.id, post.category);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-muted-foreground text-sm">{post.readTime}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}</span>
            </div>
          </div>
          
          {/* Featured Image Placeholder */}
          <div className="bg-muted h-64 sm:h-80 lg:h-96 rounded-lg flex items-center justify-center mb-12">
            <span className="text-muted-foreground">Featured Article Image</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-lg font-semibold text-foreground mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-secondary text-foreground px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link
                href="/blog"
                className="text-primary hover:text-primary/80 font-medium transition-colors flex items-center gap-2"
              >
                ← Back to Blog
              </Link>
              <div className="flex gap-4">
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Share on Telegram
                </button>
                <button className="text-muted-foreground hover:text-foreground transition-colors">
                  Copy Link
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Related Articles</h2>
            <p className="text-xl text-muted-foreground">
              More insights to help grow your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <article key={relatedPost.id} className="bg-background rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-muted h-48 flex items-center justify-center">
                  <span className="text-muted-foreground">Blog Post Image</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="bg-secondary text-foreground px-2 py-1 rounded text-xs font-medium">
                      {relatedPost.category}
                    </span>
                    <span className="text-muted-foreground text-xs">{relatedPost.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {relatedPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(relatedPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </span>
                    <Link
                      href={`/blog/${relatedPost.id}`}
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
    </div>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { id } = params;
  const post = getBlogPostById(id);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${post.title} | ShopGrid Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}