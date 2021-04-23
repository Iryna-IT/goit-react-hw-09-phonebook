import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import styles from './Views.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        console.warn('Nothing enter into registration form');
    }
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const user = {
        name,
        email,
        password,
      };

      dispatch(authOperations.register(user));

      setName('');
      setEmail('');
      setPassword('');
    },
    [name, email, password, dispatch],
  );

  return (
    <div className={styles.container}>
      <h1>Registration Page</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          <span className={styles.headline}>Name</span>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            placeholder="Jon Howard"
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          <span className={styles.headline}>email</span>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            placeholder="jhovard@gmail.com"
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          <span className={styles.headline}>login</span>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            pattern=".{7,}"
            title="Must contain at least 7 or more characters"
            onChange={handleChange}
          />
        </label>

        <button type="submit" className={styles.btn}>
          Sign up
        </button>
      </form>
    </div>
  );
}
