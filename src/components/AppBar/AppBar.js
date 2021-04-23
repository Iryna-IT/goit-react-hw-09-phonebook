import { useSelector } from 'react-redux';

import AuthNav from '../AuthNav';
// import Navigation from '../Navigation';
import UserMenu from '../UserMenu';

import { authSelectors } from '../../redux/auth';

import styles from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);
  return (
    <header className={styles.header}>
      {/* <Navigation /> */}
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
