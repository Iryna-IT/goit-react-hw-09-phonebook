import { combineReducers } from 'redux';

import contactsReducers from '../redux/contacts/contacts-reducers';
import filterReducer from '../redux/filter/filter-reducers';

export default combineReducers({
  contacts: contactsReducers.contacts,
  filter: filterReducer,
  loading: contactsReducers.loading,
  error: contactsReducers.error,
});
