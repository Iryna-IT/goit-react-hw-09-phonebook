import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import styles from './Views.module.css';

export default function LoginView() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.warn('Nothing enter into form');
    }
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const user = {
        email,
        password,
      };

      dispatch(authOperations.logIn(user));

      setEmail('');
      setPassword('');
    },
    [email, password, dispatch],
  );

  return (
    <div className={styles.container}>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          <span className={styles.headline}> email</span>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          <span className={styles.headline}> login</span>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={styles.btn}>
          Enter
        </button>
      </form>
    </div>
  );
}
