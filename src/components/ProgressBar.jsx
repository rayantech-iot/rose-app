import React from 'react';

export default function ProgressBar({ current, total }) {
  const pct = Math.min((current / total) * 100, 100);
  return (
    <div className="progress-track">
      <div className="progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}
