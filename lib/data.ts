import rawArticles from "./articles.json";

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  content: string;
  category: string;
  image: string;
  date: string;
  author: string;
  featured?: boolean;
}

export const categories = [
  { id: "all", label: "全部" },
  { id: "newcar", label: "新车发布" },
  { id: "tech", label: "技术前沿" },
  { id: "review", label: "试驾评测" },
  { id: "ev", label: "新能源" },
  { id: "concept", label: "概念车" },
];

export const articles: Article[] = rawArticles as Article[];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): Article[] {
  return articles.filter((a) => a.featured);
}

export function getArticlesByCategory(category: string): Article[] {
  if (category === "all") return articles;
  return articles.filter((a) => a.category === category);
}

export const siteMetadata = {
  name: "AutoNews",
  title: "AutoNews - 全球汽车资讯",
  description: "全球最新汽车资讯、新车发布、试驾评测、技术前沿、新能源汽车资讯一网打尽",
  url: "https://autonews-zeta.vercel.app",
  siteName: "AutoNews",
  siteLogo: "/logo.png",
  locale: "zh-CN",
  author: "AutoNews Team",
  social: {
    twitter: "@autonews",
  },
};
