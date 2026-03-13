"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className="w-full max-w-xl mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-[var(--color-text-muted)]">
          Pergunta {current} de {total}
        </span>
        <span className="text-sm text-[var(--color-text-muted)]">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: "var(--color-accent)" }}
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}
