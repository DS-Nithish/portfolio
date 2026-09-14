"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { TerminalWidget } from "@/components/TerminalWidget";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);

  const scrollToTerminal = () => {
    const el = document.getElementById("terminal");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      setTerminalModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-neutral-900 selection:text-white dark:selection:bg-neutral-100 dark:selection:text-black">
      {/* Top Navbar without Hackathon tab, with Experience */}
      <Navbar onOpenTerminal={scrollToTerminal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenTerminal={scrollToTerminal} />
        <About />
        <Projects />
        <Experience />
        <TerminalWidget />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Standalone Terminal Modal if triggered */}
      {terminalModalOpen && (
        <TerminalWidget
          isOpen={terminalModalOpen}
          onClose={() => setTerminalModalOpen(false)}
        />
      )}
    </div>
  );
}
