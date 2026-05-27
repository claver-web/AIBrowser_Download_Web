'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { value: 50000, suffix: '+', label: 'Downloads' },
  { value: 12000, suffix: '+', label: 'Active Users' },
  { value: 99, suffix: '%', label: 'Uptime' },
  { value: 4, suffix: '.9', label: 'Avg. Rating' },
];

const testimonials = [
  {
    quote: "AgentForge replaced our entire scraping pipeline. What took us 3 engineers now takes one command.",
    name: 'Sarah Chen',
    role: 'CTO, DataFlow Inc.',
  },
  {
    quote: "The auto-login feature alone saves us 20+ hours per week. This tool is genuinely magical.",
    name: 'Marcus Rivera',
    role: 'Lead Developer, Nexus Labs',
  },
  {
    quote: "We went from manual QA testing to fully automated browser workflows in a single afternoon.",
    name: 'Aisha Patel',
    role: 'VP Engineering, CloudShift',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative section-padding">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-1">
                <AnimatedCounter target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4">
            Testimonials
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Loved by Developers</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="glass-card p-6 sm:p-8 flex flex-col"
            >
              <Quote className="w-5 h-5 text-zinc-700 mb-4" />
              <p className="text-sm text-zinc-300 leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t border-white/[0.04] pt-4">
                <p className="text-sm font-medium text-white">{t.name}</p>
                <p className="text-xs text-zinc-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
