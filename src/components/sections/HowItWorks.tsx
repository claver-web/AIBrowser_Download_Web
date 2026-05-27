'use client';

import { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Terminal, Cpu, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Terminal,
    number: '01',
    title: 'Write a Command',
    description: 'Use natural language to describe the browser task you want to automate. No programming needed.',
    example: '$ agentforge search amazon "mechanical keyboard"',
  },
  {
    icon: Cpu,
    number: '02',
    title: 'AI Processes',
    description: 'AgentForge\'s AI engine interprets your intent, plans the execution steps, and handles edge cases.',
    example: 'Planning → Navigating → Extracting → Done',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Get Results',
    description: 'Receive structured data, screenshots, or confirmation that the task has been completed successfully.',
    example: '✓ Found 24 results → exported to results.json',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="how-it-works" className="relative section-padding">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Three Simple Steps</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-lg mx-auto">
            From command to result in seconds. No configuration, no boilerplate.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="glass-card p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
            >
              {/* Number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                <span className="text-sm font-bold text-zinc-300">{step.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">{step.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{step.description}</p>
                <div className="bg-black/50 border border-white/[0.06] rounded-lg px-4 py-3 font-mono text-xs text-zinc-400">
                  {step.example}
                </div>
              </div>

              {/* Icon */}
              <div className="hidden sm:flex flex-shrink-0 w-10 h-10 rounded-full bg-white/[0.03] items-center justify-center">
                <step.icon className="w-5 h-5 text-zinc-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
