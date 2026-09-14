"use client";

import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-neutral-200 dark:border-neutral-850 text-xs font-mono text-neutral-500 dark:text-neutral-400">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-neutral-800 dark:text-neutral-200">
            {portfolioData.personal.name}
          </span>
          <span>© {new Date().getFullYear()}</span>
          <span className="text-neutral-300 dark:text-neutral-700">•</span>
          <span className="hidden sm:inline">Systems & Machine Learning</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-[11px] text-neutral-400 dark:text-neutral-500">
            Next.js 16 • Tailwind CSS • App Router
          </span>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
