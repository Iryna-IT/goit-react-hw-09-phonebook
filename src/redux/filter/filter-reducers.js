import { createReducer } from '@reduxjs/toolkit';
import filterActions from './filter-actions';

const filter = createReducer('', {
  [filterActions.filterContacts]: (_, { payload }) => payload,
});

export default filter;
