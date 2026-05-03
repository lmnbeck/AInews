import Link from "next/link";
import { Article } from "@/lib/data";

interface HeroProps {
  article: Article;
}

export default function Hero({ article }: HeroProps) {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${article.image})` }}
      />

      {/* Gradient overlay with brightness */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent brightness-[0.6]" />

      {/* Content */}
      <div className="absolute inset-0 flex items-end pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 w-full animate-fade-in">
          {/* Category badge */}
          <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-md rounded-full mb-4">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 max-w-4xl">
            {article.title}
          </h1>

          {/* Subtitle */}
          {article.subtitle && (
            <p className="text-lg sm:text-xl text-white/80 mb-4 max-w-2xl">
              {article.subtitle}
            </p>
          )}

          {/* Date */}
          <p className="text-sm text-white/60 mb-6">{article.date}</p>

          {/* CTA Button */}
          <Link
            href={`/article/${article.slug}`}
            className="inline-flex items-center px-6 py-3 bg-apple-accent text-white font-medium rounded-full hover:bg-blue-600 transition-colors text-sm"
          >
            阅读文章
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
