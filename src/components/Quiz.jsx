import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight, X, Trophy, Scale, Lightbulb } from 'lucide-react';
import ProgressBar from './ProgressBar';
import ThemeToggle from './ThemeToggle';

const THEME_META = {
  fundamentals:   { label: 'Fondamentaux & Définitions',    color: 'var(--theme-fundamentals)',   cssClass: 'theme-fundamentals' },
  material:       { label: "L'Élément Matériel",            color: 'var(--theme-material)',        cssClass: 'theme-material' },
  psychological:  { label: 'Opinio Juris',                  color: 'var(--theme-psychological)',   cssClass: 'theme-psychological' },
  jurisprudence:  { label: 'Jurisprudence CIJ',             color: 'var(--theme-jurisprudence)',   cssClass: 'theme-jurisprudence' },
  doctrine:       { label: 'Doctrine & Auteurs',            color: 'var(--theme-doctrine)',        cssClass: 'theme-doctrine' },
  transversal:    { label: 'Nuances & Transversal',         color: 'var(--theme-transversal)',     cssClass: 'theme-transversal' },
};

const LETTERS = ['A', 'B', 'C', 'D'];

const slideVariants = {
  enter:  (dir) => ({ opacity: 0, x: dir > 0 ? 28 : -28 }),
  center: { opacity: 1, x: 0 },
  exit:   (dir) => ({ opacity: 0, x: dir > 0 ? -28 : 28 }),
};

export default function Quiz({ questions, onFinish, onCancel, theme, onToggleTheme }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [errors, setErrors] = useState([]);
  const [correctIds, setCorrectIds] = useState([]);
  const [themeStats, setThemeStats] = useState({});
  const [direction, setDirection] = useState(1);

  const currentQuestion = questions[currentIndex];
  const themeMeta = THEME_META[currentQuestion?.theme] || {};

  const handleOptionSelect = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQuestion.correctIndex;
    const t = currentQuestion.theme;

    setThemeStats(prev => ({
      ...prev,
      [t]: {
        correct: (prev[t]?.correct || 0) + (isCorrect ? 1 : 0),
        total:   (prev[t]?.total   || 0) + 1,
      }
    }));

    if (isCorrect) {
      setScore(s => s + 1);
      setCorrectIds(prev => [...prev, currentQuestion.id]);
    } else {
      setErrors(prev => [...prev, currentQuestion]);
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setDirection(1);
      setCurrentIndex(i => i + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      onFinish({ score, total: questions.length, errors, correctIds, themeStats });
    }
  };

  const getOptionClass = (idx) => {
    if (!isAnswered) return 'option-btn';
    if (idx === currentQuestion.correctIndex) return 'option-btn option-btn--correct';
    if (idx === selectedOption)               return 'option-btn option-btn--wrong';
    return 'option-btn option-btn--dimmed';
  };

  return (
    <div className="quiz-layout">
      {/* ── TOP BAR ── */}
      <div className="quiz-topbar">
        <button className="btn btn-danger btn-sm" onClick={onCancel}>
          <X size={15} /> Quitter
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <div className="quiz-topbar__counter">
            {currentIndex + 1}<span> / {questions.length}</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div className="quiz-topbar__score">
            <Trophy size={15} />
            <span>{score}</span>
          </div>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>

      {/* ── PROGRESS ── */}
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      {/* ── BODY ── */}
      <div className="quiz-body">
        {/* Theme pill */}
        <div className={`theme-pill ${themeMeta.cssClass || ''}`}>
          <span className="theme-pill__dot" style={{ background: themeMeta.color }} />
          {themeMeta.label || currentQuestion?.theme}
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Question card */}
            <div className="question-card">
              <p className="question-text">{currentQuestion.text}</p>

              <div className="options-list">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    className={getOptionClass(idx)}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={isAnswered}
                  >
                    <span className="option-letter">{LETTERS[idx]}</span>
                    <span style={{ flex: 1 }}>{option}</span>
                    {isAnswered && idx === currentQuestion.correctIndex && (
                      <CheckCircle2 size={17} className="option-icon" style={{ color: 'var(--correct-text)' }} />
                    )}
                    {isAnswered && idx === selectedOption && idx !== currentQuestion.correctIndex && (
                      <XCircle size={17} className="option-icon" style={{ color: 'var(--wrong-text)' }} />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  className="explanation-card"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: 0.08 }}
                >
                  <div className="explanation-icon">
                    <Lightbulb size={15} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p className="explanation-label">Analyse jurisprudentielle</p>
                    <p className="explanation-text">{currentQuestion.explanation}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <div className="quiz-actions">
          <AnimatePresence>
            {isAnswered && (
              <motion.button
                className="btn btn-primary btn-lg"
                onClick={nextQuestion}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
              >
                {currentIndex === questions.length - 1 ? 'Voir le bilan' : 'Question suivante'}
                <ArrowRight size={17} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
