"use client";

import { motion } from "framer-motion";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto text-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] mb-8">
          <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <span className="text-xs font-medium text-[var(--color-text-muted)] uppercase tracking-wider">
            2 minutos &middot; 5 perguntas
          </span>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
      >
        Em que{" "}
        <span className="text-[var(--color-accent)]">Zona</span>{" "}
        voce esta?
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg md:text-xl text-[var(--color-text-muted)] mb-4 max-w-lg mx-auto leading-relaxed"
      >
        Descubra se voce esta na Zona de Competencia, Excelencia ou Genialidade
        — e o que isso significa para o seu proximo passo profissional.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="text-sm text-[var(--color-text-muted)]/60 mb-10"
      >
        Baseado no framework de Gay Hendricks &mdash; The Big Leap
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <button
          onClick={onStart}
          className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-[var(--color-accent)] text-[var(--color-bg)] font-semibold text-lg transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_0_40px_rgba(245,158,11,0.3)] cursor-pointer"
        >
          Comecar diagnostico
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-20 grid grid-cols-3 gap-6 max-w-md mx-auto"
      >
        {[
          { zone: "Competencia", color: "var(--color-zone-competencia)", icon: "🌱" },
          { zone: "Excelencia", color: "var(--color-zone-excelencia)", icon: "🔒" },
          { zone: "Genialidade", color: "var(--color-zone-genialidade)", icon: "✨" },
        ].map((z) => (
          <div key={z.zone} className="text-center">
            <div className="text-2xl mb-1">{z.icon}</div>
            <div className="text-xs font-medium" style={{ color: z.color }}>
              {z.zone}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
