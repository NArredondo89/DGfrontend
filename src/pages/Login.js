import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import '../App.css';

import AuthModel from '../models/auth';
import UserModel from '../models/user';

import { userState } from '../recoil/atoms';
import { useSetRecoilState } from 'recoil';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const setUser = useSetRecoilState(userState);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const credientials = { email, password };

    AuthModel.login(credientials).then((json) => {
      console.log(json);

      if (json.status === 400) {
        setError(json.message);
      }
      if (json.status === 200) {
        localStorage.setItem('uid', json.token);

        UserModel.show().then((json) => {
          console.log(json);
          setUser(json.data);
        });
        navigate('/');
      }
    });
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
