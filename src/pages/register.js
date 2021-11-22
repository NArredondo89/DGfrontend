import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import AuthModel from '../models/auth';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    const user = { username, email, password };

    AuthModel.register(user).then((json) => {
      if (json.status === 400 && json.status === 500) {
        setError(json.message);
      }
      if (json.status === 201) {
        console.log(json);
      }
      navigate('/login');
    });
  }

  return (
    <div className="form-container">
      <h2>Register for an Account!</h2>
      {error && <h3 style={{ color: 'red' }}>{error}</h3>}
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label" htmlFor="username">
            Username
          </label>
          <input
            className="input"
            placeholder="Jasper Smith"
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            className="input"
            placeholder="email@email.com"
            type="text"
            name="email"
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
            placeholder="********"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <input className="button is-link" type="submit" value="Register" />
      </form>
    </div>
  );
}
