'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

/* ───── Terminal typing animation ───── */
const commands = [
  { prompt: '$ agentforge', cmd: ' search amazon "wireless keyboard"', delay: 60 },
  { prompt: '$ agentforge', cmd: ' scrape https://example.com --json', delay: 55 },
  { prompt: '$ agentforge', cmd: ' login instagram @user', delay: 50 },
  { prompt: '$ agentforge', cmd: ' fill-form checkout --profile main', delay: 45 },
];

function TerminalAnimation() {
  const [cmdIndex, setCmdIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pause' | 'erasing'>('typing');

  const current = commands[cmdIndex];

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === 'typing') {
      if (charIndex < current.cmd.length) {
        timer = setTimeout(() => setCharIndex((c) => c + 1), current.delay);
      } else {
        timer = setTimeout(() => setPhase('pause'), 1800);
      }
    } else if (phase === 'pause') {
      timer = setTimeout(() => setPhase('erasing'), 200);
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => setCharIndex((c) => c - 1), 20);
      } else {
        setCmdIndex((i) => (i + 1) % commands.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, phase, current]);

  return (
    <div className="terminal w-full max-w-2xl mx-auto">
      <div className="terminal-header">
        <div className="terminal-dot bg-[#ff5f57]" />
        <div className="terminal-dot bg-[#febc2e]" />
        <div className="terminal-dot bg-[#28c840]" />
        <span className="ml-3 text-xs text-zinc-500 font-medium">terminal</span>
      </div>
      <div className="terminal-body">
        <div className="flex items-center">
          <span className="text-zinc-500 select-none">{current.prompt}</span>
          <span className="text-white">{current.cmd.slice(0, charIndex)}</span>
          <span className="animate-blink text-white/80 ml-[1px]">▊</span>
        </div>
        <div className="text-zinc-600 text-xs mt-3">
          {charIndex === current.cmd.length && phase === 'typing' && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-zinc-400"
            >
              ✓ Task completed successfully
            </motion.span>
          )}
        </div>
      </div>
    </div>
  );
}

/* ───── Hero ───── */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center section-padding pt-32 md:pt-40"
    >
      {/* Ultra-subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-white/[0.015] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-subtle" />
          <span className="text-xs font-medium text-zinc-400">
            Now in Public Beta
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.05] mb-6 tracking-tighter"
        >
          <span className="text-white">Automate Your Browser.</span>
          <br />
          <span className="gradient-text">One Command Away.</span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg text-zinc-500 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          AgentForge turns natural language into browser actions — searching,
          scraping, filling forms, and more. No code required.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a href="#waitlist" className="btn-primary">
            Get Started Free
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="#demo" className="btn-secondary">
            <Play className="w-3.5 h-3.5" />
            Watch Demo
          </a>
        </motion.div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <TerminalAnimation />
        </motion.div>
      </div>
    </section>
  );
}
