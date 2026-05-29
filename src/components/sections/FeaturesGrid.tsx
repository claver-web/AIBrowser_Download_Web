'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import { Search, Database, LogIn, FileText, Camera, Workflow } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Smart Web Search',
    description: 'Automated multi-site search with intelligent result parsing and structured data extraction.',
  },
  {
    icon: Database,
    title: 'Intelligent Scraping',
    description: 'Extract structured data from any website with AI-powered selectors that adapt to changes.',
  },
  {
    icon: LogIn,
    title: 'Auto Login',
    description: 'Secure automated login with encrypted credential storage across any platform.',
  },
  {
    icon: FileText,
    title: 'Form Filling',
    description: 'Database-driven auto-fill for any web form using saved profiles and custom mappings.',
  },
  {
    icon: Camera,
    title: 'Screenshot Capture',
    description: 'Full page or element-level screenshots with PDF export and batch capture.',
  },
  {
    icon: Workflow,
    title: 'Custom Workflows',
    description: 'Chain multiple actions into powerful automated pipelines with conditional logic.',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function FeaturesGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="features" className="relative section-padding">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[350px] bg-white/[0.015] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4">
            Capabilities
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Everything You Need</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-lg mx-auto">
            A complete toolkit for browser automation, powered by AI that understands context.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="glass-card p-6 sm:p-8 group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-5 group-hover:bg-white/[0.08] transition-colors">
                <feature.icon className="w-5 h-5 text-zinc-300" />
              </div>
              <h3 className="text-[15px] font-semibold text-white mb-2 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
