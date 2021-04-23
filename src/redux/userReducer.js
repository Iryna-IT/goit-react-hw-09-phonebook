import { combineReducers } from 'redux';

import { authReducers } from '../redux/auth';

export default combineReducers({
  user: authReducers.user,
  isAuthenticated: authReducers.isAuthenticated,
  token: authReducers.token,
  error: authReducers.error,
});
