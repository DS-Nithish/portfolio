import { portfolioData, SkillCategory } from "@/data/portfolio";
import { Terminal, Cpu, Database, ShieldCheck } from "lucide-react";
import { RustIcon, CIcon, RaylibIcon } from "./Icons";

export function Skills() {
  const categoryIcons = [Cpu, Database, Terminal];

  return (
    <section id="skills" className="py-20 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">// 04</span>
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Skills & Technical Stack
          </h2>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
          Core competencies developed across systems programming, machine learning, and web engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.skillCategories.map((cat: SkillCategory, idx: number) => {
            const Icon = categoryIcons[idx % categoryIcons.length];

            return (
              <div
                key={cat.title}
                className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-neutral-900/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-7 h-7 rounded-md border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-neutral-900 dark:text-neutral-100">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="space-y-3">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-2.5 rounded-lg border border-neutral-100 dark:border-neutral-800/60 bg-neutral-50/50 dark:bg-neutral-900/40"
                      >
                        <div className="font-mono font-medium text-xs text-neutral-800 dark:text-neutral-200 flex items-center gap-1.5">
                          {skill.name.includes("Rust") && (
                            <RustIcon className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500 shrink-0" />
                          )}
                          {(skill.name.startsWith("C (") || skill.name === "C") && (
                            <CIcon className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 shrink-0" />
                          )}
                          {skill.name.includes("Raylib") && (
                            <RaylibIcon className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 shrink-0" />
                          )}
                          <span>{skill.name}</span>
                        </div>
                        {skill.description && (
                          <div className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5 leading-snug">
                            {skill.description}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
