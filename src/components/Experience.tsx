import { portfolioData, ExperienceItem } from "@/data/portfolio";
import { ShieldCheck, Trophy, Calendar, CheckCircle2, Building2 } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">03</span>
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Experience & Milestones
          </h2>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
          Professional cybersecurity internship and competitive hackathon achievements.
        </p>

        <div className="space-y-6">
          {portfolioData.experiences.map((item: ExperienceItem, idx: number) => {
            const isInternship = idx === 0;
            const Icon = isInternship ? ShieldCheck : Trophy;

            return (
              <div
                key={item.title}
                className="p-6 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/30 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
              >
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-800 dark:text-neutral-200 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-neutral-900 dark:text-neutral-100">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400">
                        <Building2 className="w-3 h-3" />
                        <span>{item.organization}</span>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-800/70 font-mono text-xs text-neutral-600 dark:text-neutral-300 self-start sm:self-center">
                    <Calendar className="w-3 h-3 text-neutral-400" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Key Bullet Points */}
                {item.keyPoints && item.keyPoints.length > 0 && (
                  <div className="space-y-2 mb-6 pt-2 border-t border-neutral-100 dark:border-neutral-800/60">
                    <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold mb-2">
                      Key Contributions
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {item.keyPoints.map((point, pIdx) => (
                        <li
                          key={pIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 mt-0.5 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.badges.map((badge) => (
                    <span
                      key={badge}
                      className="px-2.5 py-0.5 rounded text-xs font-mono bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-700/60"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
