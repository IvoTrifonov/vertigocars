import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./navStyles.module.css";

const Navigation = ({ isLogged, username }) => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.menu}>
        <div className={styles.wrapper}>
          <li>
            <NavLink exact activeClassName={styles.active} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/caroffers" activeClassName={styles.active}>
              Car Offers
            </NavLink>
          </li>
          <li>
            <NavLink to="/carreviews" activeClassName={styles.active}>
              Car Reviews
            </NavLink>
          </li>
          <li>
            <NavLink to="/dealers" activeClassName={styles.active}>
              Dealers
            </NavLink>
          </li>
          { isLogged && 
            <li className={styles.profile}>
              <NavLink to="/profile" activeClassName={styles.active}>
                | {username}'s Profile |
              </NavLink>
            </li> 
          }
        </div>

        { !isLogged ? (
          <li className={styles.login}>
            <Link to="/login">Login</Link>
          </li>
        ) : (
          <li className={styles.login}>
            <Link to="/logout">Logout</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
