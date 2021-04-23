import { createAction } from '@reduxjs/toolkit';

const filterContacts = createAction('filter/filterContacts', filter => ({
  payload: filter,
}));

export default { filterContacts };
