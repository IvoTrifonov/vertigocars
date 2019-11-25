import React from 'react';
import styles from './footerStyles.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <ul className={styles.menu}>
          <li>About Us</li>
          <li>Our Mission</li>
          <li>Best Dealers</li>
          <li>Careers</li>
          <li>Contact us</li>
        </ul>

        <ul className={styles.menu}>
          <li>Electric cars</li>
          <li>Blog</li>
          <li>For Dealers</li>
          <li>Rent a car</li>
          <li>News</li>
        </ul> 
      </div>

      <p className={styles.copyrigts}>&copy; 2019 Vertigo Cars Ltd. All rights reserved.</p>
    </footer>
  )
};

export default Footer;