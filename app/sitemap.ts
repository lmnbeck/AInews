import { articles } from "@/lib/data";
import { siteMetadata } from "@/lib/data";

export default function sitemap() {
  const baseUrl = siteMetadata.url;

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/article/${article.slug}`,
    lastModified: article.date,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    ...articleUrls,
  ];
}
