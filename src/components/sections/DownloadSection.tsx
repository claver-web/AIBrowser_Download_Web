'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Apple, Terminal, ChevronDown, Copy, Check, Download } from 'lucide-react';

const platforms = [
  {
    id: 'mac',
    name: 'macOS',
    icon: Apple,
    version: 'v1.2.0 — Apple Silicon & Intel',
    size: '48 MB',
    installCmd: 'brew install agentforge',
    fileName: 'AgentForge-1.2.0-mac.dmg',
    checksum: 'sha256: 9f86d08...c152e',
    downloadUrl: '#',
  },
  {
    id: 'win',
    name: 'Windows',
    icon: Monitor,
    version: 'v1.2.0 — Windows 10/11',
    size: '14.7 MB',
    installCmd: 'winget install AgentForge',
    fileName: 'comet_installer_latest.exe',
    checksum: 'sha256: 8a4c219...b9f1d',
    downloadUrl: '/comet_installer_latest.exe',
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: Terminal,
    version: 'v1.2.0 — Ubuntu, Fedora, Arch',
    size: '44 MB',
    installCmd: 'curl -fsSL https://agentforge.dev/install.sh | sh',
    fileName: 'agentforge-1.2.0-linux-x64.tar.gz',
    checksum: 'sha256: e4d909c...7b3d1',
    downloadUrl: '#',
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-zinc-500 hover:text-white"
      aria-label="Copy"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

export default function DownloadSection() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="downloads" className="relative section-padding">
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-medium tracking-widest uppercase text-zinc-500 mb-4">
            Downloads
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            <span className="gradient-text">Install AgentForge</span>
          </h2>
          <p className="text-base text-zinc-500 max-w-lg mx-auto">
            Available for macOS, Windows, and Linux. Get started in under a minute.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {platforms.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card p-6 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center">
                  <p.icon className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{p.name}</h3>
                  <p className="text-xs text-zinc-500">{p.size}</p>
                </div>
              </div>

              <p className="text-xs text-zinc-500 mb-5">{p.version}</p>

              {/* Download Button */}
              <a 
                href={p.downloadUrl}
                download={p.id === 'win'}
                className="btn-primary w-full justify-center text-sm py-2.5 mb-4"
              >
                <Download className="w-4 h-4" />
                Download
              </a>

              {/* Install command */}
              <div className="flex items-center gap-2 bg-black/40 border border-white/[0.06] rounded-lg px-3 py-2 mb-3">
                <code className="flex-1 text-xs text-zinc-400 truncate font-mono">{p.installCmd}</code>
                <CopyButton text={p.installCmd} />
              </div>

              {/* Expand details */}
              <button
                onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                className="flex items-center gap-1 text-xs text-zinc-600 hover:text-zinc-400 transition-colors mt-auto pt-2"
              >
                Checksum & details
                <ChevronDown className={`w-3 h-3 transition-transform ${expanded === p.id ? 'rotate-180' : ''}`} />
              </button>

              {expanded === p.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-3 pt-3 border-t border-white/[0.04] space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-600">File</span>
                    <span className="text-xs text-zinc-400 font-mono">{p.fileName}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-zinc-600">Checksum</span>
                    <span className="text-[10px] text-zinc-500 font-mono">{p.checksum}</span>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
