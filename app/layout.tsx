import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteMetadata } from "@/lib/data";

export const metadata: Metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    locale: siteMetadata.locale,
    siteName: siteMetadata.name,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-apple-bg text-apple-text antialiased">
        <Navbar />
        <main className="pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
