"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getArticleBySlug, siteMetadata } from "@/lib/data";
import GoogleAd from "@/components/GoogleAd";

const categoryLabel: Record<string, string> = {
  newcar: "新车发布",
  tech: "技术前沿",
  review: "试驾评测",
  ev: "新能源",
  concept: "概念车",
};

export default function ArticlePage() {
  const params = useParams();
  const article = getArticleBySlug(params.slug as string);

  if (!article) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-32 text-center">
        <h1 className="text-2xl font-bold text-apple-text mb-4">文章未找到</h1>
        <Link href="/" className="text-apple-accent hover:underline">
          返回首页
        </Link>
      </div>
    );
  }

  const paragraphs = article.content.split("\n\n");

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: article.title,
            description: article.summary,
            image: article.image,
            datePublished: article.date,
            author: { "@type": "Person", name: article.author },
            publisher: { "@type": "Organization", name: siteMetadata.name },
          }),
        }}
      />

      {/* Hero Image */}
      <div className="relative w-full h-[50vh] min-h-[400px] overflow-hidden -mt-12">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.65)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 -mt-20 relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
          <Link href="/" className="hover:text-white transition-colors">
            首页
          </Link>
          <span>/</span>
          <span className="text-white/90">
            {categoryLabel[article.category] || article.category}
          </span>
          <span>/</span>
          <span className="text-white">{article.title}</span>
        </nav>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <span className="inline-block text-xs font-medium tracking-widest text-apple-accent uppercase mb-3">
              {categoryLabel[article.category] || article.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-3">
              {article.title}
            </h1>
            <p className="text-lg text-white/70 mb-4">{article.subtitle}</p>
            <div className="flex items-center gap-3 text-sm text-white/50">
              <span>{article.date}</span>
              <span className="w-1 h-1 rounded-full bg-white/30" />
              <span>{article.author}</span>
            </div>
          </header>

          {/* Article Body */}
          <div className="bg-apple-card rounded-2xl p-8 md:p-10 shadow-sm -mx-4 md:mx-0">
            <div className="prose prose-lg max-w-none">
              {paragraphs.map((para, i) => (
                <div key={i}>
                  {i > 0 && <br />}
                  <p className="text-apple-text leading-relaxed text-base md:text-lg">
                    {para}
                  </p>
                  {i === 1 && (
                    <div className="my-8 flex justify-center">
                      <GoogleAd
                        slot="ad-article-middle"
                        format="in-article"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Bottom Ad */}
        <div className="my-10 flex justify-center">
          <GoogleAd slot="ad-article-bottom" format="rectangle" />
        </div>

        {/* Back Link */}
        <div className="text-center pb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-apple-accent hover:text-apple-accent/80 transition-colors text-sm"
          >
            ← 返回首页
          </Link>
        </div>
      </div>
    </>
  );
}
