import React from 'react';
import Navigation from './Navigation';
import styles from './headerStyles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navigation/>
    </header>
  )
};

export default Header;
