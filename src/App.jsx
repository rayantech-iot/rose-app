import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Login from './components/Login';
import { questions } from './data/questions';

function App() {
  const [view, setView] = useState('home');
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [results, setResults] = useState(null);
  const [mode, setMode] = useState(null);
  const [selectedThemeId, setSelectedThemeId] = useState(null);
  const [user, setUser] = useState(() => {
    return localStorage.getItem('juris-user') || null;
  });

  // ── THEME ──────────────────────────────────────────
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('juris-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('juris-theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  // ── REVISION LIST ─────────────────────────────────
  useEffect(() => {
    if (!localStorage.getItem('revisionQuestions')) {
      localStorage.setItem('revisionQuestions', JSON.stringify([]));
    }
  }, []);

  // ── QUIZ START ────────────────────────────────────
  const startQuiz = (mode, themeId = null) => {
    let filtered = [];
    setMode(mode);
    setSelectedThemeId(themeId);

    if (mode === 'theme') {
      filtered = questions.filter(q => q.theme === themeId);
    } else if (mode === 'random') {
      filtered = [...questions].sort(() => Math.random() - 0.5).slice(0, 50);
    } else if (mode === 'revision') {
      const revisionIds = JSON.parse(localStorage.getItem('revisionQuestions') || '[]');
      filtered = questions.filter(q => revisionIds.includes(q.id));
    }

    if (filtered.length === 0 && mode === 'revision') {
      return; // Home handles this gracefully (button disabled)
    }

    setCurrentQuestions(filtered);
    setView('quiz');
  };

  // ── FINISH ────────────────────────────────────────
  const handleFinish = (data) => {
    setResults(data);
    setView('result');

    const revisionIds = JSON.parse(localStorage.getItem('revisionQuestions') || '[]');
    const newErrors = data.errors.map(q => q.id);
    const updatedRevision = [...new Set([...revisionIds, ...newErrors])];
    const finalRevision = updatedRevision.filter(id => !data.correctIds.includes(id));
    localStorage.setItem('revisionQuestions', JSON.stringify(finalRevision));
  };

  const backHome = () => {
    setView('home');
    setResults(null);
    setMode(null);
  };

  const handleLogin = (name) => {
    setUser(name);
    localStorage.setItem('juris-user', name);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('juris-user');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      {view === 'home' && (
        <Home
          onStart={startQuiz}
          theme={theme}
          onToggleTheme={toggleTheme}
          user={user}
          onLogout={handleLogout}
        />
      )}
      {view === 'quiz' && (
        <Quiz
          questions={currentQuestions}
          onFinish={handleFinish}
          onCancel={backHome}
          mode={mode}
          themeId={selectedThemeId}
          theme={theme}
          onToggleTheme={toggleTheme}
          user={user}
        />
      )}
      {view === 'result' && (
        <Result
          results={results}
          onRetry={backHome}
          mode={mode}
          theme={theme}
          onToggleTheme={toggleTheme}
          user={user}
        />
      )}
    </div>
  );
}

export default App;
