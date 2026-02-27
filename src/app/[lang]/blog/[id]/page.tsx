import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogPosts,
  getBlogPostById,
  getRelatedBlogPosts,
} from "@/data/blogPosts";

interface BlogPostPageProps {
  params: Promise<{
    lang: string;
    id: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { lang, id } = await params;
  const post = getBlogPostById(id);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(post.id, post.category);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-muted-foreground text-sm">
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>By {post.author}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent to-muted h-64 sm:h-80 rounded-2xl flex items-center justify-center mb-12">
            <svg
              className="w-16 h-16 text-primary/20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-foreground prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-p:leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-10 pt-8 border-t border-border">
            <div className="flex justify-between items-center">
              <Link
                href={`/${lang}/blog`}
                className="text-primary hover:text-primary/80 font-medium transition-colors flex items-center gap-2"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Related Articles
            </h2>
            <p className="text-muted-foreground">
              More insights to help grow your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <article
                key={relatedPost.id}
                className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all"
              >
                <div className="bg-gradient-to-br from-accent to-muted h-40 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-primary/20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-accent text-accent-foreground px-2 py-0.5 rounded-full text-xs font-medium">
                      {relatedPost.category}
                    </span>
                    <span className="text-muted-foreground text-xs">
                      {relatedPost.readTime}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <Link
                    href={`/${lang}/blog/${relatedPost.id}`}
                    className="text-primary hover:text-primary/80 font-semibold text-sm transition-colors"
                  >
                    Read More →
                  </Link>
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
  const { id } = await params;
  const post = getBlogPostById(id);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Shopgrid Blog`,
    description: post.excerpt,
    keywords: post.tags.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}
