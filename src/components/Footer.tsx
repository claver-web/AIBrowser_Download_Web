'use client';

import { Zap, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] bg-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-black" />
              </div>
              <span className="text-sm font-semibold text-white tracking-tight">
                AgentForge
              </span>
            </a>
            <p className="text-zinc-600 text-sm leading-relaxed max-w-sm">
              The AI-powered browser automation agent that turns your natural language commands into executed browser tasks.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Features', href: '#features' },
                { label: 'How it Works', href: '#how-it-works' },
                { label: 'Downloads', href: '#downloads' },
                { label: 'Documentation', href: '#', soon: true },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-zinc-600 hover:text-zinc-300 transition-colors text-sm flex items-center gap-2">
                    {l.label}
                    {l.soon && (
                      <span className="text-[10px] bg-white/[0.04] border border-white/[0.06] px-1.5 py-0.5 rounded text-zinc-600">
                        Soon
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-xs font-medium text-zinc-400 uppercase tracking-wider mb-4">Community</h4>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-600 hover:text-white hover:bg-white/[0.06] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-600 hover:text-white hover:bg-white/[0.06] transition-all">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-600 hover:text-white hover:bg-white/[0.06] transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-700 text-xs">
            &copy; {new Date().getFullYear()} AgentForge. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-700">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
