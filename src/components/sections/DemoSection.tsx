'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function DemoSection() {
  return (
    <section id="demo" className="relative section-padding">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4">
            See It In Action
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Watch AgentForge Work</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-lg mx-auto">
            From a simple command to a fully automated browser task in real time.
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow effect behind */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />

          <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-zinc-950">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.02] border-b border-white/[0.06]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
              <div className="flex-1 ml-3">
                <div className="max-w-xs mx-auto bg-white/[0.04] rounded-md px-3 py-1 text-[11px] text-zinc-500 text-center">
                  agentforge://demo
                </div>
              </div>
            </div>

            {/* Video area */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px',
                }}
              />

              {/* Play button */}
              <button className="group relative z-10 flex items-center justify-center">
                <div className="absolute w-20 h-20 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-110" />
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center relative">
                  <Play className="w-5 h-5 text-black ml-0.5" />
                </div>
              </button>

              {/* Decorative text */}
              <div className="absolute bottom-6 left-6 text-xs text-zinc-600 font-mono">
                demo_recording.mp4 — 2:34
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
