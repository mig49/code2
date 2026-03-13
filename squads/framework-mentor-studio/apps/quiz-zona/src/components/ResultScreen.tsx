"use client";

import { motion } from "framer-motion";
import type { QuizResult } from "@/lib/scoring";
import { zoneData } from "@/lib/scoring";
import ZoneChart from "./ZoneChart";

interface ResultScreenProps {
  result: QuizResult;
  onRestart: () => void;
}

export default function ResultScreen({ result, onRestart }: ResultScreenProps) {
  const zone = zoneData[result.primary];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-2xl mx-auto text-center"
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
        className="text-6xl mb-6"
      >
        {zone.emoji}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-sm font-semibold uppercase tracking-widest mb-2"
          style={{ color: zone.color }}>
          Seu resultado
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
          {zone.title}
        </h1>
        <p className="text-xl md:text-2xl font-semibold mb-6" style={{ color: zone.color }}>
          {zone.headline}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mb-10"
      >
        <div className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-6 md:p-8">
          <ZoneChart percentages={result.percentages} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mb-10"
      >
        <p className="text-[var(--color-text-muted)] text-base md:text-lg leading-relaxed max-w-lg mx-auto">
          {zone.description}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0 }}
        className="space-y-4"
      >
        <a
          href={zone.ctaUrl}
          className="inline-block w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            backgroundColor: zone.color,
            color: "#0A0A0F",
          }}
        >
          {zone.cta}
        </a>

        {zone.ctaSecondary && (
          <div>
            <a
              href={zone.ctaSecondaryUrl}
              className="inline-block px-8 py-4 rounded-xl font-semibold text-base border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:border-[var(--color-text-muted)]/50 transition-all duration-200"
            >
              {zone.ctaSecondary}
            </a>
          </div>
        )}

        <div className="pt-6">
          <button
            onClick={onRestart}
            className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer"
          >
            Refazer diagnostico
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-16 pt-8 border-t border-[var(--color-border)]"
      >
        <p className="text-xs text-[var(--color-text-muted)]">
          Mini Diagnostico baseado no framework de 4 Zonas de Gay Hendricks (The Big Leap).
          <br />
          Este quiz e uma ferramenta de reflexao, nao um diagnostico clinico.
        </p>
      </motion.div>
    </motion.div>
  );
}
