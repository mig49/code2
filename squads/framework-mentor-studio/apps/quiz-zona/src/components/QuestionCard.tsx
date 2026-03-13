"use client";

import { motion } from "framer-motion";
import type { Question } from "@/lib/questions";

interface QuestionCardProps {
  question: Question;
  selectedAnswer: string | null;
  onSelect: (optionId: string) => void;
  direction: number;
}

export default function QuestionCard({
  question,
  selectedAnswer,
  onSelect,
  direction,
}: QuestionCardProps) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: direction * 80 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -80 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
        {question.text}
      </h2>
      <p className="text-[var(--color-text-muted)] mb-8 text-base">
        {question.subtext}
      </p>

      <div className="space-y-3">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === option.id;
          return (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              onClick={() => onSelect(option.id)}
              className={`w-full text-left p-4 md:p-5 rounded-xl border transition-all duration-200 cursor-pointer group ${
                isSelected
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)]/10"
                  : "border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-text-muted)]/30 hover:bg-[var(--color-bg-hover)]"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isSelected
                      ? "border-[var(--color-accent)] bg-[var(--color-accent)]"
                      : "border-[var(--color-border)] group-hover:border-[var(--color-text-muted)]/50"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 rounded-full bg-[var(--color-bg)]"
                    />
                  )}
                </div>
                <span
                  className={`text-base leading-relaxed ${
                    isSelected
                      ? "text-[var(--color-text)]"
                      : "text-[var(--color-text-muted)] group-hover:text-[var(--color-text)]"
                  }`}
                >
                  {option.text}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}
