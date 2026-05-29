'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { ArrowRight, Loader2, Mail } from 'lucide-react';

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FormData = z.infer<typeof schema>;

export default function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setSubmitted(true);
        toast.success('You\'re on the list! 🎉');
        reset();
      } else {
        const json = await res.json();
        toast.error(json.error || 'Something went wrong');
      }
    } catch {
      toast.error('Network error. Please try again.');
    }
  };

  return (
    <section id="waitlist" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] mb-8">
            <Mail className="w-3.5 h-3.5 text-zinc-500" />
            <span className="text-xs font-medium text-zinc-400">
              Limited spots available
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Get Early Access</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-md mx-auto mb-10">
            Join the waitlist to be among the first to experience the future of browser automation.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-8 inline-block"
            >
              <div className="text-2xl mb-2">🎉</div>
              <p className="text-white font-medium">You&apos;re on the list!</p>
              <p className="text-sm text-zinc-500 mt-1">We&apos;ll be in touch soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="you@company.com"
                    className="w-full bg-white/[0.03] border border-white/[0.08] rounded-full px-5 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto justify-center py-3 px-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      Join
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              {errors.email && (
                <p className="text-xs text-red-400 mt-2 text-left pl-5">{errors.email.message}</p>
              )}
              <p className="text-[11px] text-zinc-600 mt-4">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
