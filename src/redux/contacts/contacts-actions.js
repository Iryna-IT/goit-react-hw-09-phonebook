import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('items/fetchContactsRequest');
export const fetchContactsSuccess = createAction('items/fetchContactsSuccess');
export const fetchContactsError = createAction('items/fetchContactsError');

export const addContactRequest = createAction('items/addContactRequest');
export const addContactSuccess = createAction('items/addContactSuccess');
export const addContactError = createAction('items/addContactError');

export const deleteContactRequest = createAction('items/deleteContactRequest');
export const deleteContactSuccess = createAction('items/deleteContactSuccess');
export const deleteContactError = createAction('items/deleteContactError');
