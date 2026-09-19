"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface HistoryEntry {
  command: string;
  output: string | React.ReactNode;
}

export function TerminalWidget({
  isOpen,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-xs sm:text-sm text-neutral-300">
          <p className="text-emerald-400 font-semibold">
            ● Nithish System Shell v1.0.0 [x86_64-apple-darwin]
          </p>
          <p className="text-neutral-400">
            Type <span className="text-neutral-100 font-semibold">help</span> or click any quick command below to query background & architecture details.
          </p>
        </div>
      ),
    },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const command = trimmed.toLowerCase();
    let response: React.ReactNode;

    switch (command) {
      case "help":
        response = (
          <div className="space-y-1 text-xs sm:text-sm">
            <p className="text-neutral-400">Available commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 mt-2 font-mono">
              {portfolioData.terminalCommands.map((item) => (
                <div key={item.cmd} className="flex items-baseline gap-2">
                  <span className="text-emerald-400 font-semibold w-20 shrink-0">
                    {item.cmd}
                  </span>
                  <span className="text-neutral-400 text-xs">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "about":
        response = (
          <div className="space-y-2 text-xs sm:text-sm text-neutral-300">
            <p className="font-semibold text-neutral-100">
              {portfolioData.personal.name} — {portfolioData.personal.role}
            </p>
            <p className="text-neutral-400 leading-relaxed">
              {portfolioData.personal.bio.join(" ")}
            </p>
          </div>
        );
        break;

      case "rust":
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono">
            <p className="text-amber-400 font-semibold">$ cargo run --release -- --benchmark</p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Target:</span> High-Throughput Concurrent CLI Tool
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Ecosystem:</span> Rust (2021 edition), Rayon, Clap, Tokio
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Concurrency:</span> Multi-core work-stealing thread pools
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Memory:</span> Zero-copy streaming buffers, zero memory leaks
            </p>
            <p className="text-emerald-400">
              ✓ Benchmark: 4.8x speedup over standard shell implementations
            </p>
          </div>
        );
        break;

      case "c-game":
      case "game":
      case "c":
      case "raylib":
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono">
            <p className="text-sky-400 font-semibold">$ gcc -O3 main.c -lraylib -lGL -lm -lpthread -ldl</p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Project:</span> 2D Arcade Game in Pure C & Raylib
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Standard:</span> C99 + Raylib (OpenGL hardware accelerated 2D/3D)
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Physics Loop:</span> Deterministic 60+ FPS delta-time accumulator
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Collision:</span> Axis-aligned bounding box (AABB) with velocity response
            </p>
            <p className="text-emerald-400">
              ✓ Memory: Zero runtime memory leaks, verified with Valgrind
            </p>
          </div>
        );
        break;

      case "internship":
      case "security":
      case "isoc":
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono">
            <p className="text-cyan-400 font-semibold">$ isoc --report security-internship-2026</p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Organization:</span> Internet Society of India (ISOC)
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Role:</span> Cybersecurity Intern (Jan 2026 – May 2026)
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Domain:</span> Vulnerability assessment & threat defense
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Protocols:</span> Network auditing, cryptographic analysis & system hardening
            </p>
            <p className="text-emerald-400">
              ✓ Status: 5-month internship successfully completed
            </p>
          </div>
        );
        break;

      case "sih":
      case "ml":
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono">
            <p className="text-purple-400 font-semibold">$ python -m sih_engine.evaluate --model xgboost</p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Event:</span> Smart India Hackathon (SIH)
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Task:</span> Predictive Outcome Modeling on complex real-world datasets
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Pipeline:</span> Custom outlier filters, iterative imputation & normalization
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Model:</span> Cross-validated Gradient Boosted Trees (XGBoost)
            </p>
            <p className="text-emerald-400">
              ✓ Result: High F1 accuracy under intense 36-hour competitive hackathon evaluation
            </p>
          </div>
        );
        break;

      case "projects":
        response = (
          <div className="space-y-2 text-xs sm:text-sm">
            <p className="text-neutral-400 font-mono">Featured Projects:</p>
            <div className="space-y-2 font-mono">
              {portfolioData.projects.map((p) => (
                <div key={p.id} className="border-l-2 border-neutral-700 pl-3">
                  <div className="text-neutral-200 font-semibold">
                    {p.title} <span className="text-xs text-neutral-500">[{p.category}]</span>
                  </div>
                  <div className="text-xs text-neutral-400">{p.subtitle}</div>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "skills":
        response = (
          <div className="space-y-3 text-xs sm:text-sm font-mono">
            {portfolioData.skillCategories.map((cat) => (
              <div key={cat.title}>
                <p className="text-neutral-400 font-semibold mb-1">{cat.title}:</p>
                <p className="text-neutral-300 pl-2">
                  {cat.skills.map((s) => s.name).join(" • ")}
                </p>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        response = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono">
            <p className="text-neutral-300">
              <span className="text-neutral-500">Email:</span> {portfolioData.personal.email}
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">GitHub:</span> {portfolioData.personal.github}
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">LinkedIn:</span> {portfolioData.personal.linkedin}
            </p>
            <p className="text-neutral-300">
              <span className="text-neutral-500">Status:</span> {portfolioData.personal.status}
            </p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      default:
        response = (
          <p className="text-rose-400 text-xs sm:text-sm font-mono">
            zsh: command not found: {trimmed}. Type <span className="text-neutral-200 underline">help</span> for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: trimmed, output: response }]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInput(commandHistory[nextIdx] || "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= commandHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(nextIdx);
        setInput(commandHistory[nextIdx] || "");
      }
    }
  };

  const quickCommands = ["help", "rust", "c-game", "internship", "projects", "skills", "sih", "contact", "clear"];

  const content = (
    <div className="bg-neutral-950 text-neutral-200 rounded-xl border border-neutral-800 shadow-2xl overflow-hidden font-mono flex flex-col">
      {/* Terminal Title Bar */}
      <div className="h-10 px-4 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <span className="text-xs text-neutral-400 ml-2 font-mono flex items-center gap-1.5">
            <TerminalIcon className="w-3 h-3 text-neutral-500" />
            nithish@system:~ (zsh)
          </span>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            aria-label="Close terminal"
            className="text-neutral-500 hover:text-neutral-300 p-1 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Terminal Body */}
      <div
        className="p-4 sm:p-5 overflow-y-auto max-h-[380px] sm:max-h-[440px] space-y-4 text-xs sm:text-sm"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-neutral-400 font-mono">
              <span className="text-emerald-400">nithish@system:~$</span>
              <span className="text-neutral-100 font-semibold">{entry.command}</span>
            </div>
            <div className="pl-4 border-l border-neutral-800/80">{entry.output}</div>
          </div>
        ))}

        {/* Input prompt */}
        <div className="flex items-center gap-2 pt-1 font-mono">
          <span className="text-emerald-400 shrink-0">nithish@system:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="type 'help' or click pills below..."
            className="flex-1 bg-transparent text-neutral-100 focus:outline-hidden text-xs sm:text-sm font-mono placeholder:text-neutral-600"
            autoFocus
          />
          <button
            onClick={() => runCommand(input)}
            className="text-neutral-500 hover:text-neutral-300"
            title="Execute command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
        <div ref={bottomRef} />
      </div>

      {/* Quick Command Pills */}
      <div className="px-4 py-2.5 bg-neutral-900/60 border-t border-neutral-800 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
        <span className="text-neutral-500 mr-1 flex items-center gap-1 shrink-0">
          <Sparkles className="w-3 h-3 text-neutral-500" />
          quick:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => runCommand(cmd)}
            className="px-2 py-0.5 rounded bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-neutral-100 transition-colors shrink-0 cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );

  // If used as a standalone section or embedded modal
  if (isOpen !== undefined) {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
        <div className="w-full max-w-2xl max-h-[90vh]">
          {content}
        </div>
      </div>
    );
  }

  // Embedded inline
  return (
    <section id="terminal" className="py-16 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">04</span>
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Interactive Systems Shell
          </h2>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
          Query architecture, benchmarks, and project breakdowns directly via the terminal interface below.
        </p>
        <div className="max-w-3xl">{content}</div>
      </div>
    </section>
  );
}
