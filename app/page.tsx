"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import SalesRanking from "@/components/SalesRanking";
import GoogleAd from "@/components/GoogleAd";
import {
  categories,
  getFeaturedArticles,
  getArticlesByCategory,
} from "@/lib/data";

function HomeContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    const cat = searchParams.get("cat");
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const featured = getFeaturedArticles();
  const heroArticle = featured[0];
  const filteredArticles = getArticlesByCategory(activeCategory);
  const displayFeatured =
    activeCategory === "all"
      ? filteredArticles.filter((a) => a.featured)
      : [];
  const regularArticles =
    activeCategory === "all"
      ? filteredArticles
      : filteredArticles;

  return (
    <>
      {heroArticle && activeCategory === "all" && <Hero article={heroArticle} />}

      <div className="max-w-8xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Articles */}
          <div className="flex-1 min-w-0">
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.id
                      ? "bg-apple-text text-white"
                      : "bg-apple-card text-apple-secondary hover:text-apple-text border border-apple-border/30"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Ad Banner */}
            <div className="mb-6">
              <GoogleAd slot="ad-list-top" format="banner" />
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {regularArticles.map((article, index) => (
                <div key={article.slug}>
                  {displayFeatured.find((f) => f.slug === article.slug) ? (
                    <ArticleCard article={article} featured />
                  ) : (
                    <ArticleCard article={article} />
                  )}
                  {/* Insert ad after every 4 articles */}
                  {(index + 1) % 4 === 0 && index < regularArticles.length - 1 && (
                    <div className="my-5">
                      <GoogleAd slot={`ad-inject-${index}`} format="rectangle" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Sales Ranking Sidebar */}
          <aside className="w-full lg:w-[300px] shrink-0">
            <div className="sticky top-24">
              <SalesRanking />
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <HomeContent />
    </Suspense>
  );
}
