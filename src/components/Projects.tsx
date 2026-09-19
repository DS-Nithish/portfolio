"use client";

import { useState } from "react";
import { portfolioData, Project } from "@/data/portfolio";
import { ExternalLink, ChevronDown, ChevronUp, CheckCircle2, Code2 } from "lucide-react";
import { GithubIcon, RustIcon, CIcon } from "./Icons";

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>("rust-cli-tool");

  const categories = ["All", "Systems", "Machine Learning", "Full-Stack"];

  const filteredProjects =
    activeFilter === "All"
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeFilter);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header & Filter Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">02</span>
              <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
                Featured Projects
              </h2>
            </div>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Low-level systems in Rust & C, and predictive machine learning models.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-100/50 dark:bg-neutral-900/40 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 font-medium shadow-2xs"
                    : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-6">
          {filteredProjects.map((project: Project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <article
                key={project.id}
                className={`rounded-xl border transition-all duration-200 ${
                  isExpanded
                    ? "border-neutral-400 dark:border-neutral-600 bg-white dark:bg-neutral-900/40 shadow-xs"
                    : "border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white/40 dark:bg-neutral-900/20"
                }`}
              >
                <div className="p-6">
                  {/* Category & Status */}
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs px-2.5 py-0.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 font-medium">
                        {project.category}
                      </span>
                      {project.featured && (
                        <span className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                          featured
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                          className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                          title="GitHub repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${project.title} Live`}
                          className="p-1.5 rounded-md text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
                          title="Live preview / demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="flex items-center gap-2 mb-1">
                    {project.id === "rust-cli-tool" && (
                      <RustIcon className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0" />
                    )}
                    {project.id === "c-raylib-game" && (
                      <CIcon className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0" />
                    )}
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400 mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Architecture & Implementation Details */}
                  {isExpanded && (
                    <div className="mt-5 pt-5 border-t border-neutral-100 dark:border-neutral-800/80">
                      <div className="flex items-center gap-2 mb-3">
                        <Code2 className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
                        <h4 className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-700 dark:text-neutral-300">
                          Engineering Highlights & Architecture
                        </h4>
                      </div>
                      <ul className="space-y-2.5">
                        {project.keyHighlights.map((highlight, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400"
                          >
                            <CheckCircle2 className="w-4 h-4 text-neutral-400 dark:text-neutral-500 mt-0.5 shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Toggle Button */}
                  <div className="mt-4 pt-2 flex justify-end">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
                    >
                      <span>
                        {isExpanded ? "Collapse Architecture" : "View Architecture Details"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
