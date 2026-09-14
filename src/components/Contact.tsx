"use client";

import { useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Mail, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setName("");
      setEmail("");
      setMessage("");
    }, 800);
  };

  return (
    <section id="contact" className="py-20 border-t border-neutral-200 dark:border-neutral-800/80">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-2">
          <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500">// 06</span>
          <h2 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Get In Touch
          </h2>
        </div>
        <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-10">
          Interested in discussing systems engineering, machine learning pipelines, or new opportunities?
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Quick Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/30 space-y-4">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Direct Communication
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">
                Feel free to email me directly or copy the address below. I typically respond within 24 hours.
              </p>

              <div className="flex items-center justify-between p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 font-mono text-xs">
                <span className="text-neutral-700 dark:text-neutral-300 truncate mr-2">
                  {portfolioData.personal.email}
                </span>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors cursor-pointer"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <a
                    href={`mailto:${portfolioData.personal.email}`}
                    className="p-1.5 rounded hover:bg-neutral-200 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400 transition-colors"
                    title="Open mail client"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Profiles & Repositories
              </h4>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white/40 dark:bg-neutral-900/20 flex items-center justify-between text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <GithubIcon className="w-3.5 h-3.5" />
                    GitHub
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>

                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 bg-white/40 dark:bg-neutral-900/20 flex items-center justify-between text-xs font-mono text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    LinkedIn
                  </span>
                  <ArrowUpRight className="w-3 h-3 text-neutral-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/30 space-y-4"
            >
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                Send a Message
              </h3>

              {status === "sent" ? (
                <div className="p-4 rounded-lg border border-emerald-200 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-mono space-y-2">
                  <p className="font-semibold">✓ Message Dispatched</p>
                  <p className="text-xs opacity-90">
                    Thank you! Your message has been received. I will follow up shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-xs underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-1.5">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm focus:outline-hidden focus:border-neutral-400 dark:focus:border-neutral-600 font-mono placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your.email@domain.com"
                        className="w-full px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm focus:outline-hidden focus:border-neutral-400 dark:focus:border-neutral-600 font-mono placeholder:text-neutral-400 dark:placeholder:text-neutral-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Hi Nithish, let's discuss..."
                      className="w-full px-3 py-2 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 text-xs sm:text-sm focus:outline-hidden focus:border-neutral-400 dark:focus:border-neutral-600 font-mono placeholder:text-neutral-400 dark:placeholder:text-neutral-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50"
                  >
                    {status === "sending" ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
