import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { contactsOperations, contactsSelectors } from '../../redux/contacts';

import styles from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const existContacts = useSelector(contactsSelectors.getContactsListToShow);

  const onDelete = useCallback(
    contactId => dispatch(contactsOperations.deleteContact(contactId)),
    [dispatch],
  );

  if (existContacts.length === 0) {
    return <div>There are no contacts</div>;
  } else {
    return (
      <ul className={styles.contact_list}>
        {existContacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        ))}
      </ul>
    );
  }
}

function Contact({ id, name, number, onDelete }) {
  const handleDelete = e => {
    const contactId = e.target.parentNode.id;
    onDelete(contactId);
  };

  return (
    <li className={styles.contact_item} id={id}>
      {' '}
      {name} : {number}
      <button
        type="button"
        className={styles.btn_delete}
        onClick={handleDelete}
      >
        Delete
      </button>
    </li>
  );
}
