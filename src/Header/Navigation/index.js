import React from 'react';
import { Link, NavLink } from "react-router-dom";
import styles from './navStyles.module.css';
import isLoggedIn from '../../helpers/isLoggedIn';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.menu}>
        <div className={styles.wrapper}>
          <li>
            <NavLink exact activeClassName={styles.active} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/newcars" activeClassName={styles.active}>New Cars</NavLink>
          </li>
          <li>
            <NavLink to="/usedcars" activeClassName={styles.active}>Used Cars</NavLink>
          </li>
          <li>
            <NavLink to="/carreviews" activeClassName={styles.active}>Car Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/dealers" activeClassName={styles.active}>Dealers</NavLink>
          </li>
        </div>
        <li className={styles.login}>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;