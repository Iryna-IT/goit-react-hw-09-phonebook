import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

import { contactsSelectors, contactsOperations } from '../redux/contacts';

import styles from './Views.module.css';
import { useSelector } from 'react-redux';

export default function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoadingContacts && <h1>Loading...</h1>}
      <ContactList />
    </div>
  );
}
