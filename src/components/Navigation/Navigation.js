import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { authSelectors } from '../../redux/auth';

import styles from '../AppBar/AppBar.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <nav className={styles.nav}>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
