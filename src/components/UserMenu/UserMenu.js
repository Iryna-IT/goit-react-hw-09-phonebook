import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';

import styles from './UserMenu.module.css';

// const mapStateToProps = state => ({
//   name: authSelectors.getUserEmail(state),
//   avatar: defaultAvatar,
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getUserEmail);

  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <img
          src={defaultAvatar}
          alt="avatar"
          width="32"
          className={styles.avatar}
        />
        <span className={styles.name}>{name}</span>
      </div>
      <button className={styles.btn} type="button" onClick={onLogout}>
        LogOut
      </button>
    </div>
  );
}
