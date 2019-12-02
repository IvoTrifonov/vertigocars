import React from 'react';
import { Link } from 'react-router-dom';
import styles from './bmwbannerStyles.module.css';

const Bmwbanner = () => {
  return (
    <Link to='/newcars/bmw'>
      <div className={styles.banner}>
        <p>Nobody is perfect, but if you drive the new BMW you're pretty close.</p>
      </div>
    </Link>
  )
}

export default Bmwbanner;