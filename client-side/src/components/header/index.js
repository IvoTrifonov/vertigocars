import React, { useState, useEffect } from 'react';
import Navigation from './navigation';
import styles from './headerStyles.module.css';
// import isLoggedIn from '../../helpers/isLoggedIn';

const Header = ({ isLogged, username }) => {
  return (
    <header className={styles.header}>
      <Navigation username={username} isLogged={isLogged}/>
    </header>
  )
};

export default Header;
