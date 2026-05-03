import { siteMetadata } from "@/lib/data";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteMetadata.url}/sitemap.xml`,
  };
}
