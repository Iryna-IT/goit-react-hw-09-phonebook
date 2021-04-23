import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.loading;
const getExistContacts = state => state.contacts.contacts;
const getFilter = state => state.contacts.filter;
const getContactsListToShow = createSelector(
  [getExistContacts, getFilter],
  (contacts, filter) => {
    if (filter === '') {
      return contacts;
    } else {
      return contacts.filter(contact =>
        contact.name.toUpperCase().includes(filter.toUpperCase()),
      );
    }
  },
);

export default { getLoading, getExistContacts, getContactsListToShow };
