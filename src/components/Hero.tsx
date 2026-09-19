"use client";

import { useState } from "react";
import { ArrowDown, Copy, Check, Terminal, ShieldCheck, Cpu } from "lucide-react";
import { RustIcon, CIcon, RaylibIcon } from "./Icons";
import { portfolioData } from "@/data/portfolio";

export function Hero({ onOpenTerminal }: { onOpenTerminal?: () => void }) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="max-w-5xl mx-auto px-6">
        {/* Status indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/60 dark:bg-neutral-900/60 text-xs text-neutral-600 dark:text-neutral-400 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono">{portfolioData.personal.status}</span>
        </div>

        {/* Main Name & Title */}
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50">
            {portfolioData.personal.name}
          </h1>
          <p className="text-xl sm:text-2xl font-normal text-neutral-600 dark:text-neutral-400 tracking-tight leading-snug">
            {portfolioData.personal.role}
          </p>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed pt-2">
            Focused on building high-performance CLI tools in{" "}
            <span className="text-neutral-900 dark:text-neutral-100 font-medium inline-flex items-center gap-1">
              <RustIcon className="w-4 h-4 text-amber-600 dark:text-amber-500 inline" />
              Rust
            </span>
            , exploring low-level mechanics in{" "}
            <span className="text-neutral-900 dark:text-neutral-100 font-medium inline-flex items-center gap-1">
              <CIcon className="w-4 h-4 text-sky-600 dark:text-sky-400 inline" />
              C with Raylib
            </span>{" "}
            as a hobby, and researching network defense & vulnerability assessments at the{" "}
            <span className="text-neutral-900 dark:text-neutral-100 font-medium">
              Internet Society of India
            </span>
            .
          </p>
        </div>

        {/* Core Pillars / 4 Tech Callouts with Rust and C Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-10 max-w-5xl">
          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                01 · SYSTEMS
              </span>
              <RustIcon className="w-4 h-4 text-amber-600 dark:text-amber-500" />
            </div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Rust CLI Utilities
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Zero-cost abstractions, Rayon work-stealing & memory safety
            </div>
          </div>

          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                02 · SYSTEMS HOBBY
              </span>
              <CIcon className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            </div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              C & Raylib Project
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Hobby exploration of fixed-timestep loops, custom physics & zero leaks
            </div>
          </div>

          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                03 · SECURITY
              </span>
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Internet Society of India
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Cybersecurity intern (Jan–May 2026), threat modeling & audits
            </div>
          </div>

          <div className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/50 dark:bg-neutral-900/30">
            <div className="flex items-center justify-between mb-1">
              <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">
                04 · CORE CS
              </span>
              <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
              Low-Level & Algorithms
            </div>
            <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              Memory allocation hygiene, POSIX, concurrency & ML pipelines
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <span>Explore Projects</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent text-neutral-800 dark:text-neutral-200 font-mono text-sm hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors cursor-pointer"
            >
              <Terminal className="w-4 h-4" />
              <span>Interactive CLI</span>
            </button>
          )}

          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 text-neutral-600 dark:text-neutral-300 text-sm hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors cursor-pointer"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-500" />
                <span className="text-emerald-600 dark:text-emerald-400 text-xs font-mono">
                  Copied to clipboard
                </span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span className="font-mono text-xs">{portfolioData.personal.email}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
