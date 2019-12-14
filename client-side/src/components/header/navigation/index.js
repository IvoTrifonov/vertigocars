import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./navStyles.module.css";
import { AuthContext } from "../../contextWrapper";

const Navigation = () => {
  const { isAuth, username } = useContext(AuthContext);

  return (
    <nav className={styles.navigation}>
      <ul className={styles.menu}>
        <div className={styles.wrapper}>
          <li>
            <NavLink className={styles.logoLink} exact to="/">
              <div className={styles.logo}><img src='vertigo_logo.png' alt=''/></div>
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
          {isAuth && (
            <li className={styles.profile}>
              <NavLink to="/profile" activeClassName={styles.active}>
                | {username}'s Profile |
              </NavLink>
            </li>
          )}
        </div>

        {!isAuth ? (
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
