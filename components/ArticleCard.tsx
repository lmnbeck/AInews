import Link from "next/link";
import { Article } from "@/lib/data";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  if (featured) {
    return (
      <Link
        href={`/article/${article.slug}`}
        className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl group"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${article.image})` }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Category badge */}
        <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium text-white bg-white/20 backdrop-blur-md rounded-full z-10">
          {article.category}
        </span>

        {/* Text content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="text-2xl font-bold text-white mb-2">{article.title}</h3>
          <p className="text-sm text-white/80 mb-3 line-clamp-2">{article.summary}</p>
          <div className="flex items-center text-xs text-white/60 gap-3">
            <span>{article.date}</span>
            <span>{article.author}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/article/${article.slug}`}
      className="group block bg-apple-card rounded-2xl overflow-hidden border border-apple-border/30 hover:shadow-md transition-all duration-300"
    >
      {/* Image with 16:10 aspect ratio */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${article.image})` }}
        />

        {/* Category badge */}
        <span className="absolute top-3 left-3 px-2.5 py-0.5 text-xs font-medium text-white bg-white/20 backdrop-blur-md rounded-full">
          {article.category}
        </span>
      </div>

      {/* Text content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-apple-text mb-1.5 group-hover:text-apple-accent transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-apple-secondary mb-3 line-clamp-2">{article.summary}</p>
        <div className="flex items-center text-xs text-apple-secondary/70 gap-3">
          <span>{article.date}</span>
          <span>{article.author}</span>
        </div>
      </div>
    </Link>
  );
}
