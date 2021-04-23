import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { filterOperations } from '../../redux/filter/';

import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();

  const onSearch = useCallback(
    event => {
      dispatch(filterOperations.filterContacts(event.currentTarget.value));
    },
    [dispatch],
  );

  return (
    <form className={styles.form_search}>
      <label htmlFor="filter" className={styles.label_search}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        className={styles.input_search}
        placeholder="Enter the name"
        onChange={onSearch}
      ></input>
    </form>
  );
}
