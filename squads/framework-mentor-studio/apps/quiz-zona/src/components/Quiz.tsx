"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { questions } from "@/lib/questions";
import { calculateResult, type QuizResult } from "@/lib/scoring";
import StartScreen from "./StartScreen";
import QuestionCard from "./QuestionCard";
import ProgressBar from "./ProgressBar";
import ResultScreen from "./ResultScreen";

type Phase = "start" | "quiz" | "result";

export default function Quiz() {
  const [phase, setPhase] = useState<Phase>("start");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [direction, setDirection] = useState(1);

  const handleStart = useCallback(() => {
    setPhase("quiz");
    setCurrentIndex(0);
    setAnswers([]);
    setResult(null);
  }, []);

  const handleSelect = useCallback(
    (optionId: string) => {
      const newAnswers = [...answers];
      newAnswers[currentIndex] = optionId;
      setAnswers(newAnswers);

      // Auto-advance after short delay
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          setDirection(1);
          setCurrentIndex((prev) => prev + 1);
        } else {
          const quizResult = calculateResult(newAnswers, questions);
          setResult(quizResult);
          setPhase("result");
        }
      }, 400);
    },
    [answers, currentIndex]
  );

  const handleRestart = useCallback(() => {
    setPhase("start");
    setCurrentIndex(0);
    setAnswers([]);
    setResult(null);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5 py-12">
      <AnimatePresence mode="wait">
        {phase === "start" && (
          <motion.div
            key="start"
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            <StartScreen onStart={handleStart} />
          </motion.div>
        )}

        {phase === "quiz" && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-xl"
          >
            <ProgressBar
              current={currentIndex + 1}
              total={questions.length}
            />
            <AnimatePresence mode="wait" custom={direction}>
              <QuestionCard
                key={questions[currentIndex].id}
                question={questions[currentIndex]}
                selectedAnswer={answers[currentIndex] || null}
                onSelect={handleSelect}
                direction={direction}
              />
            </AnimatePresence>

            {currentIndex > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-8 text-center"
              >
                <button
                  onClick={() => {
                    setDirection(-1);
                    setCurrentIndex((prev) => prev - 1);
                  }}
                  className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors cursor-pointer"
                >
                  ← Voltar
                </button>
              </motion.div>
            )}
          </motion.div>
        )}

        {phase === "result" && result && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ResultScreen result={result} onRestart={handleRestart} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
