"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/data";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 apple-blur border-b border-apple-border/30">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-apple-text">Auto</span>
            <span className="text-apple-accent">News</span>
          </Link>

          {/* Desktop category links */}
          <div className="hidden md:flex items-center gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/?cat=${cat.id}`}
                className="px-3 py-1.5 text-sm text-apple-secondary hover:text-apple-text transition-colors rounded-lg hover:bg-black/5"
              >
                {cat.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 text-apple-text hover:bg-black/5 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileMenuOpen ? (
                <>
                  <path d="M6 18L18 6" />
                  <path d="M6 6l12 12" />
                </>
              ) : (
                <>
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden apple-blur border-t border-apple-border/30">
          <div className="max-w-8xl mx-auto px-4 py-3 space-y-1">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/?cat=${cat.id}`}
                className="block px-3 py-2 text-sm text-apple-secondary hover:text-apple-text hover:bg-black/5 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
