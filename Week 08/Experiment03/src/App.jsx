import React, { useState } from 'react';

const PasswordChecker = () => {
  const [password, setPassword] = useState('');

  const rules = [
    { label: 'Minimum 8 characters', test: (pw) => pw.length >= 8 },
    { label: 'At least one uppercase letter', test: (pw) => /[A-Z]/.test(pw) },
    { label: 'At least one number', test: (pw) => /[0-9]/.test(pw) },
    { label: 'At least one special character', test: (pw) => /[^A-Za-z0-9]/.test(pw) },
  ];

  const passedCount = rules.filter(rule => rule.test(password)).length;

  const getStrengthInfo = () => {
    if (password.length === 0) return { label: 'None', color: '#ccc' };
    if (passedCount <= 1) return { label: 'Weak', color: '#e74c3c' };
    if (passedCount <= 3) return { label: 'Medium', color: '#f1c40f' };
    return { label: 'Strong', color: '#2ecc71' };
  };

  const { label, color } = getStrengthInfo();

  return (
    <div className="checker-card">
      <h2>Password Strength Checker</h2>
      
      <div className="input-group">
        <label htmlFor="password">Enter Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Type here..."
          className="password-input"
        />
      </div>

      <div className="status-container">
        <p>Strength: <span style={{ color, fontWeight: 'bold' }}>{label}</span></p>
      </div>

      <ul className="checklist">
        {rules.map((rule, index) => (
          <li key={index} className={rule.test(password) ? 'passed' : 'failed'}>
            {rule.test(password) ? '●' : '○'} {rule.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function App() {
  return (
    <div className="app-container">
      <style>{`
        .app-container {
          font-family: 'Segoe UI', Tahoma, sans-serif;
          background-color: #f0f2f5;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
        }

        .checker-card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 400px;
        }

        h2 {
          margin-top: 0;
          color: #2c3e50;
          font-size: 22px;
          margin-bottom: 20px;
        }

        .input-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          font-size: 14px;
          color: #666;
        }

        .password-input {
          width: 100%;
          padding: 12px;
          border: 2px solid #ddd;
          border-radius: 8px;
          font-size: 16px;
          box-sizing: border-box;
          outline: none;
          transition: border-color 0.3s;
        }

        .password-input:focus {
          border-color: #3498db;
        }

        .status-container {
          margin-bottom: 15px;
        }

        .checklist {
          list-style: none;
          padding: 0;
          margin: 0;
          border-top: 1px solid #eee;
          padding-top: 20px;
        }

        .checklist li {
          font-size: 14px;
          margin-bottom: 8px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .checklist li.passed {
          color: #2ecc71;
        }

        .checklist li.failed {
          color: #95a5a6;
        }
      `}</style>
      <PasswordChecker />
    </div>
  );
}