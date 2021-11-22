import React, { useState } from 'react';

import '../App.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    console.log();
  };

  return (
    <>
      <div className="form-container">
        <h2>Login</h2>
        {error && <h3 style={{ color: 'red' }}>{error}</h3>}
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              type="text"
              name="email"
              placeholder="email@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              type="password"
              name="password"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>

          <input className="button is-link" type="submit" value="Login" />
        </form>
      </div>
    </>
  );
}
