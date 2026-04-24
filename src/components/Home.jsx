import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Globe, BrainCircuit, Scale, BookMarked, Network, Shuffle, RotateCcw, ChevronRight, Trash2 } from 'lucide-react';
import { themes, questions } from '../data/questions';
import ThemeToggle from './ThemeToggle';

const THEME_META = {
  fundamentals:   { color: 'var(--theme-fundamentals)',   cssClass: 'theme-fundamentals' },
  material:       { color: 'var(--theme-material)',        cssClass: 'theme-material' },
  psychological:  { color: 'var(--theme-psychological)',   cssClass: 'theme-psychological' },
  jurisprudence:  { color: 'var(--theme-jurisprudence)',   cssClass: 'theme-jurisprudence' },
  doctrine:       { color: 'var(--theme-doctrine)',        cssClass: 'theme-doctrine' },
  transversal:    { color: 'var(--theme-transversal)',     cssClass: 'theme-transversal' },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } }
};
const itemVariants = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.4, 0, 0.2, 1] } }
};

export default function Home({ onStart, theme, onToggleTheme }) {
  const [revisionCount, setRevisionCount] = useState(() => {
    try { return JSON.parse(localStorage.getItem('revisionQuestions') || '[]').length; }
    catch { return 0; }
  });

  const handleResetRevision = (e) => {
    e.stopPropagation();
    localStorage.setItem('revisionQuestions', JSON.stringify([]));
    setRevisionCount(0);
  };

  const themeQuestionCount = (id) => questions.filter(q => q.theme === id).length;

  return (
    <div className="page-wrapper">
      {/* ── HERO ── */}
      <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem 1.25rem' }}>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </header>

      <motion.div
        className="home-hero container"
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{ paddingTop: '1.5rem' }}
      >
        <div className="home-hero__logo">
          <Scale size={38} strokeWidth={1.5} />
        </div>
        <h1 className="home-hero__title gold-gradient-text">Juris Rose</h1>
        <div className="divider" />
        <p className="home-hero__subtitle">
          120 questions de droit international coutumier pour l'excellence de Rose&nbsp;
          <span className="home-hero__rose">♥</span>
        </p>
      </motion.div>

      {/* ── MAIN GRID ── */}
      <div className="container">
        <motion.div
          className="home-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* LEFT : Quick Modes */}
          <motion.div variants={itemVariants}>
            <p className="home-section-title">Modes de jeu</p>

            <button className="mode-card" onClick={() => onStart('random')}>
              <div className="mode-card__icon mode-card__icon--random">
                <Shuffle size={20} strokeWidth={2} />
              </div>
              <div>
                <div className="mode-card__title">Mode Aléatoire</div>
                <div className="mode-card__desc">50 questions mélangées — test complet</div>
              </div>
              <ChevronRight size={16} style={{ color: 'var(--text-muted)', marginLeft: 'auto', flexShrink: 0 }} />
            </button>

            <button
              className="mode-card"
              onClick={() => onStart('revision')}
              style={revisionCount === 0 ? { opacity: 0.45, cursor: 'not-allowed' } : {}}
              disabled={revisionCount === 0}
            >
              <div className="mode-card__icon mode-card__icon--revision">
                <RotateCcw size={20} strokeWidth={2} />
              </div>
              <div>
                <div className="mode-card__title">Mode Révision</div>
                <div className="mode-card__desc">
                  {revisionCount > 0
                    ? `${revisionCount} question${revisionCount > 1 ? 's' : ''} à retravailler`
                    : 'Aucune erreur enregistrée'}
                </div>
              </div>
              <ChevronRight size={16} style={{ color: 'var(--text-muted)', marginLeft: 'auto', flexShrink: 0 }} />
            </button>

            {/* Stats panel */}
            <div style={{
              marginTop: '1.5rem',
              padding: '1.125rem 1.375rem',
              background: 'var(--bg-surface-1)',
              border: '1px solid var(--gold-border)',
              borderRadius: 'var(--radius-md)',
            }}>
              <p style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.875rem' }}>
                Vue d'ensemble
              </p>
              <div style={{ display: 'flex', gap: '2.25rem' }}>
                {[
                  { val: '120', lbl: 'Questions' },
                  { val: '6',   lbl: 'Thèmes' },
                ].map(({ val, lbl }) => (
                  <div key={lbl}>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '1.375rem', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>{val}</div>
                    <div style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)', marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{lbl}</div>
                  </div>
                ))}

                {/* À revoir — with reset button */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: '1.375rem', fontWeight: 700, color: revisionCount > 0 ? 'var(--wrong-text)' : 'var(--text-muted)', lineHeight: 1 }}>
                      {revisionCount}
                    </div>
                    {revisionCount > 0 && (
                      <motion.button
                        onClick={handleResetRevision}
                        title="Réinitialiser la liste de révision"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.9 }}
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '2px',
                          color: 'var(--text-muted)',
                          display: 'flex',
                          alignItems: 'center',
                          borderRadius: '4px',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--wrong-text)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                      >
                        <Trash2 size={13} strokeWidth={2} />
                      </motion.button>
                    )}
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)', marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>À revoir</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT : Themes */}
          <motion.div variants={itemVariants}>
            <p className="home-section-title">Par thématique</p>
            {themes.map((t) => {
              const meta = THEME_META[t.id] || {};
              const count = themeQuestionCount(t.id);
              return (
                <motion.button
                  key={t.id}
                  className={`theme-card ${meta.cssClass || ''}`}
                  onClick={() => onStart('theme', t.id)}
                  variants={itemVariants}
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="theme-card__dot" style={{ background: meta.color }} />
                  <span className="theme-card__name">{t.name}</span>
                  <span className="theme-card__count">{count} q.</span>
                </motion.button>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      <footer className="home-footer container">
        Dédié à Rose · Rigueur Juridique & Excellence Académique
      </footer>
    </div>
  );
}
