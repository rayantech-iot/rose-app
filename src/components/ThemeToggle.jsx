import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle, title = 'Changer de thème' }) {
  const isLight = theme === 'light';
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      title={title}
      aria-label={isLight ? 'Passer en mode sombre' : 'Passer en mode clair'}
    >
      {isLight
        ? <Moon size={17} strokeWidth={2} />
        : <Sun  size={17} strokeWidth={2} />}
    </button>
  );
}
