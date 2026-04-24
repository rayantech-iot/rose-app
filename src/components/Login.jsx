import React, { useState } from 'react';
import { Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';

const AUTHORIZED_USERS = {
  'Victoire': '123456789',
  'rose': '123456789',
  'sarah': '123456789',
  'shella': '123456789'
};

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate a bit of loading for premium feel
    setTimeout(() => {
      const normalizedUsername = username.trim();
      const expectedPassword = AUTHORIZED_USERS[normalizedUsername];

      if (expectedPassword && password === expectedPassword) {
        onLogin(normalizedUsername);
      } else {
        setError('Identifiants incorrects. Veuillez réessayer.');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="login-logo">
            <Lock size={32} />
          </div>
          <h1>Juris Rose</h1>
          <p>Accès restreint aux membres autorisés</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Prénom</label>
            <div className="input-wrapper">
              <User size={18} className="input-icon" />
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ex: Victoire"
                required
                autoComplete="off"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <div className="input-wrapper">
              <Lock size={18} className="input-icon" />
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Votre mot de passe"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {error && <div className="login-error">{error}</div>}

          <button type="submit" className="btn btn-primary btn-lg w-full" disabled={isLoading}>
            {isLoading ? (
              <span className="loader-dots">Connexion...</span>
            ) : (
              <>
                Se connecter <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>

        <div className="login-footer">
          <p>© 2024 Juris Rose — Excellence Académique</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
