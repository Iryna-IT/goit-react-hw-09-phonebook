import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import isUnique from '../../functions/isUnique';

import styles from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const existContacts = useSelector(contactsSelectors.getExistContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.warn('Nothing enter into contact form');
    }
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const reset = () => {
        setName('');
        setNumber('');
      };

      if (!isUnique(existContacts, name)) {
        return alert(`${name} is already in contacts!`);
      } else {
        dispatch(contactsOperations.addContact({ name, number }));

        reset();
      }
    },
    [name, number, existContacts, dispatch],
  );

  return (
    <form className={styles.form_contact} onSubmit={handleSubmit}>
      <div className={styles.container_contact}>
        <label htmlFor="name" className={styles.label_contact}>
          <span className={styles.headline_contact}>Name</span>
          <input
            type="text"
            className={styles.input_contact}
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={handleChange}
            required
          ></input>
        </label>
      </div>
      <div className={styles.container_contact}>
        <label htmlFor="phone" className={styles.label_contact}>
          <span className={styles.headline_contact}>Phone</span>
          <input
            type="tel"
            className={styles.input_contact}
            name="number"
            value={number}
            placeholder="Enter phone XXX-XX-XX"
            pattern="^(\d{3})-\d{2}-\d{2}$"
            onChange={handleChange}
            required
          ></input>
        </label>
      </div>
      <button type="submit" className={styles.btn_add} onSubmit={handleSubmit}>
        Add contact
      </button>
    </form>
  );
}
