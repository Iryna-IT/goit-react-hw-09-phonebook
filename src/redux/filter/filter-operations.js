import filterActions from './filter-actions';

const filterContacts = filter => dispatch => {
  dispatch(filterActions.filterContacts(filter));
};

export default { filterContacts };
