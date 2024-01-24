import { Link } from 'gatsby';
import React, {useContext} from 'react';
import { AuthContext } from '../../context/AuthProvider';
import * as styles from './AccountNav.module.css';

const AccountNav = (props) => {
  const ctx = useContext(AuthContext);
  const handleLogout = () => {
    ctx.logout();
    //window.localStorage.removeItem('key');
    //navigate('/');
  };

  return (
    <div className={styles.root}>
      <div className={styles.webRoot}>
        <Link
          activeClassName={styles.activeLink}
          to={'/account/orders/'}
          className={styles.webLink}
        >
          Orders
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/account/address/'}
          className={styles.webLink}
        >
          Addresses
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/account/settings/'}
          className={styles.webLink}
        >
          Settings
        </Link>
        <Link
          activeClassName={styles.activeLink}
          to={'/account/viewed/'}
          className={styles.webLink}
        >
          Recently Viewed
        </Link>
        <span
          role={'presentation'}
          onClick={handleLogout}
          className={styles.webLink}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default AccountNav;
