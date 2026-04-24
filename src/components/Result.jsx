import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Star, RotateCcw, Home as HomeIcon } from 'lucide-react';
import { themes } from '../data/questions';
import ThemeToggle from './ThemeToggle';

const THEME_META = {
  fundamentals:   { color: 'var(--theme-fundamentals)',  label: 'Fondamentaux' },
  material:       { color: 'var(--theme-material)',       label: 'Pratique' },
  psychological:  { color: 'var(--theme-psychological)',  label: 'Opinio Juris' },
  jurisprudence:  { color: 'var(--theme-jurisprudence)',  label: 'Jurisprudence' },
  doctrine:       { color: 'var(--theme-doctrine)',       label: 'Doctrine' },
  transversal:    { color: 'var(--theme-transversal)',    label: 'Transversal' },
};

const LEVELS = [
  { min: 0,  max: 39,  title: 'Débutant',               color: 'var(--wrong-text)',   Icon: Star,   desc: "Les bases de la coutume ne sont pas encore maîtrisées. Reprends depuis l'article 38 §1 b) du Statut de la CIJ." },
  { min: 40, max: 59,  title: "En cours d'acquisition",  color: '#FB923C',             Icon: Star,   desc: 'Les grands repères sont là, mais les nuances te font encore défaut. Continue !' },
  { min: 60, max: 74,  title: 'Intermédiaire',           color: '#60A5FA',             Icon: Award,  desc: 'Bonne maîtrise du cours. Cible maintenant les détails jurisprudentiels.' },
  { min: 75, max: 89,  title: 'Avancé',                  color: 'var(--gold)',         Icon: Award,  desc: "Niveau solide, digne d'un TD très bien préparé. Reste alerte sur la doctrine !" },
  { min: 90, max: 100, title: 'Expert',                  color: 'var(--correct-text)', Icon: Trophy, desc: 'Maîtrise complète — niveau examen ou concours. Félicitations Rose ! 🌹' },
];

const ADVICE = {
  jurisprudence: "Vos lacunes portent sur la jurisprudence. Relisez notamment Mer du Nord (1969) et Nicaragua (1986) — les deux arrêts incontournables.",
  doctrine:      "La pensée des auteurs n'est pas encore intégrée. Reprenez Pellet, Combacau & Sur, et Abi-Saab sur la formation coutumière.",
  fundamentals:  "L'article 38 §1 b) et les définitions de base doivent être parfaitement maîtrisés — c'est la grille de lecture de tout le reste.",
  material:      "L'élément matériel (pratique) vous échappe encore. Focus sur les critères : généralité, uniformité, constance, durée.",
  psychological: "L'opinio juris est votre point faible. Travaillez la distinction usage / obligation, et la question de la preuve.",
  transversal:   "Les nuances (objecteur persistant, jus cogens, résolutions ONU) font la différence entre un résultat moyen et l'excellence.",
};

function getLevel(pct) {
  return LEVELS.find(l => pct >= l.min && pct <= l.max) || LEVELS[0];
}

const containerVar = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVar = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function Result({ results, onRetry, theme, onToggleTheme }) {
  const { score, total, errors, themeStats } = results;
  const percentage = Math.round((score / total) * 100);
  const level = getLevel(percentage);
  const LevelIcon = level.Icon;

  const statsArray = Object.entries(themeStats)
    .map(([id, stat]) => ({
      id,
      ratio: stat.total > 0 ? stat.correct / stat.total : 0,
      color: THEME_META[id]?.color || 'var(--gold)',
      label: THEME_META[id]?.label || id,
    }))
    .sort((a, b) => b.ratio - a.ratio);

  const worstTheme = [...statsArray].sort((a, b) => a.ratio - b.ratio)[0];
  const adviceText = worstTheme
    ? (ADVICE[worstTheme.id] || "Continuez ainsi, Rose ! Le droit international n'a plus de secrets pour vous.")
    : "Aucune erreur enregistrée. Exécution parfaite !";

  return (
    <>
      {/* ── STICKY HEADER ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.875rem 1.25rem',
        background: 'var(--bg-surface-1)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'sticky',
        top: 0,
        zIndex: 10,
      }}>
        <button className="btn btn-ghost btn-sm" onClick={onRetry}>
          <HomeIcon size={15} /> Accueil
        </button>
        <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 600, color: 'var(--gold)', fontSize: '0.9375rem' }}>
          Bilan de session
        </span>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
      </div>

      {/* ── CONTENT ── */}
      <motion.div
        className="result-page"
        variants={containerVar}
        initial="hidden"
        animate="visible"
      >
        {/* Score hero */}
        <motion.div className="score-hero" variants={itemVar}>
          <div className="score-ring" style={{ '--pct': percentage }}>
            <span className="score-ring__value">{percentage}%</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <LevelIcon size={20} style={{ color: level.color }} />
            <span className="score-level" style={{ color: level.color }}>{level.title}</span>
          </div>

          <p className="score-desc">{level.desc}</p>

          <div className="score-stats">
            <div>
              <div className="score-stat__val" style={{ color: 'var(--gold)' }}>{percentage}%</div>
              <div className="score-stat__lbl">Score</div>
            </div>
            <div>
              <div className="score-stat__val" style={{ color: 'var(--correct-text)' }}>{score}</div>
              <div className="score-stat__lbl">Correctes</div>
            </div>
            <div>
              <div className="score-stat__val" style={{ color: 'var(--wrong-text)' }}>{total - score}</div>
              <div className="score-stat__lbl">Erreurs</div>
            </div>
            <div>
              <div className="score-stat__val" style={{ color: 'var(--text-secondary)' }}>{total}</div>
              <div className="score-stat__lbl">Questions</div>
            </div>
          </div>

          <button className="btn btn-primary btn-lg" onClick={onRetry} style={{ margin: '0 auto' }}>
            <HomeIcon size={17} /> Retour à l'accueil
          </button>
        </motion.div>

        {/* Panels grid */}
        <div className="result-grid">
          {/* Theme performance */}
          <motion.div className="result-panel" variants={itemVar}>
            <p className="result-panel__title">Performance thématique</p>
            {statsArray.map(s => (
              <div className="theme-bar" key={s.id} style={{ '--theme-color': s.color }}>
                <div className="theme-bar__head">
                  <span className="theme-bar__name">{s.label}</span>
                  <span className="theme-bar__pct">{Math.round(s.ratio * 100)}%</span>
                </div>
                <div className="theme-bar__track">
                  <div className="theme-bar__fill" style={{ width: `${Math.round(s.ratio * 100)}%` }} />
                </div>
              </div>
            ))}
          </motion.div>

          {/* Advice */}
          <motion.div className="result-panel" variants={itemVar}>
            <p className="result-panel__title">Conseil personnalisé</p>
            {worstTheme && (
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ width: 9, height: 9, borderRadius: '50%', background: worstTheme.color, display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  À retravailler : <strong style={{ color: 'var(--text-primary)' }}>{worstTheme.label}</strong> ({Math.round(worstTheme.ratio * 100)}%)
                </span>
              </div>
            )}
            <div className="advice-box">{adviceText}</div>

            {errors.length > 0 && (
              <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <RotateCcw size={13} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                  {errors.length} erreur{errors.length > 1 ? 's' : ''} sauvegardée{errors.length > 1 ? 's' : ''} → Mode Révision
                </span>
              </div>
            )}
          </motion.div>
        </div>

        {/* Error review list */}
        {errors.length > 0 && (
          <motion.div className="error-list" variants={itemVar}>
            <p className="error-list__title">Questions manquées — à retravailler</p>
            {errors.slice(0, 6).map((q, idx) => {
              const meta = THEME_META[q.theme] || {};
              return (
                <div className="error-item" key={idx}>
                  <div className="error-item__theme" style={{ color: meta.color }}>{meta.label || q.theme}</div>
                  <div className="error-item__q">{q.text}</div>
                  <div className="error-item__expl">
                    ✓ {q.options[q.correctIndex]} — {q.explanation}
                  </div>
                </div>
              );
            })}
            {errors.length > 6 && (
              <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8125rem', marginTop: '0.875rem' }}>
                + {errors.length - 6} autre{errors.length - 6 > 1 ? 's' : ''} erreur{errors.length - 6 > 1 ? 's' : ''} — utilisez le Mode Révision pour tout revoir.
              </p>
            )}
          </motion.div>
        )}
      </motion.div>
    </>
  );
}
