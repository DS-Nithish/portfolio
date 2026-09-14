import { portfolioData } from "@/data/portfolio";
import { Cpu, Brain, Terminal, ShieldCheck } from "lucide-react";

export function About() {
  const principles = [
    {
      icon: Cpu,
      title: "First Principles & Low-Level Control",
      desc: "Understanding how memory, pointers, and CPU caches interact. Building software in raw C and Rust instills deep discipline around allocation, thread synchronization, and zero-cost abstractions.",
    },
    {
      icon: Brain,
      title: "Practical Machine Learning",
      desc: "ML models are only as good as the domain understanding and feature engineering behind them. Focused on real-world predictability, explainability, and low-latency inference rather than black-box hype.",
    },
    {
      icon: Terminal,
      title: "Developer Experience & Tooling",
      desc: "Belief in lean, lightning-fast developer tools. Terminal utilities should launch in milliseconds, handle errors with clarity, and make concurrent operations effortless.",
    },
    {
      icon: ShieldCheck,
      title: "Type Safety & Reliability",
      desc: "Writing code that fails at compile time, not at 3 AM in production. Leveraging modern type systems and ownership invariants to eliminate memory leaks and race conditions.",
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">// 01</span>
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            About & Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Narrative */}
          <div className="lg:col-span-6 space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm sm:text-base">
            {portfolioData.personal.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
            <p className="pt-2">
              Whether architecting a multi-threaded CLI tool in{" "}
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Rust</strong>,
              crafting 2D game loops in{" "}
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">C & Raylib</strong>,
              evaluating digital defenses in{" "}
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">cybersecurity</strong>,
              or preprocessing noisy datasets in the{" "}
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Smart India Hackathon</strong>
              , I thrive at the convergence of low-level rigor, secure design, and practical software engineering.
            </p>
          </div>

          {/* Core Principles */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/20 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-md border border-neutral-200 dark:border-neutral-800 flex items-center justify-center text-neutral-700 dark:text-neutral-300 mb-3">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-medium text-sm text-neutral-900 dark:text-neutral-100 mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
