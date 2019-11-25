import React from 'react';
import styles from './stepStyles.module.css';

const Steps = () => {
  return (
    <div className={styles.steps}>
      <h3>Let us help you choose your next car</h3>
      <ul className={styles.list}>
        <li>
          <img className={styles.stepImage} src='/choosecar1.png' alt="img"></img>
          <h5>1. CHOOSE YOUR PERFECT CAR</h5>
          <p>Build and order a brand new car just the way you want it, or research any model</p>
        </li>
        <li>
          <img className={styles.stepImage} src='/choosecar2.png' alt="img"></img>
          <h5>2. COMPARE YOUR OFFERS</h5>
          <p>Get offers from approved local and national dealers and compare price, location and dealer rating – no hidden costs.</p>
        </li>
        <li>
          <img className={styles.stepImage} src='/choosecar3.png' alt="img"></img>
          <h5>3. BUY WITH CONFIDENCE</h5>
          <p>Simply contact your preferred dealer to book a test drive. You can discuss all the details, then buy direct with a full UK warranty.</p>
        </li>
      </ul>
    </div>
   )
}

export default Steps;