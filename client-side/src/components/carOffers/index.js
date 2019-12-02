import React, {  } from 'react';
import { Link } from 'react-router-dom';
import styles from './carOffersStyles.module.css';

const CarOffers = ({ isLogged }) => {
  return (
    <div className={styles.wrapper}>
      <Link to='/caroffers/findoffers'>
        <div className={styles.box1}>
          <h2>Find Offers</h2> 
        </div>
      </Link>
      
      { isLogged && 
        <Link to='/caroffers/createoffer'>
          <div className={styles.box2}>
            <h2>Create Offer</h2>
          </div>
        </Link>
      }
    </div>
  )
}

export default CarOffers;