import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './latestReviewsStyles.module.css'; 

class LatestReviews extends Component {
  render() {
    return(
      <div className={styles.wrapper}>
        <div className={styles.header_section}>
          <h3>Latest car reviews</h3>
          <Link to="/carreviews">More reviews</Link>
        </div>
        
        <ul className={styles.menu}>

          <li>
            <img src="/skoda-product.jpg" alt="img"></img>
            <div className={styles.info}>
              <h4>Skoda Kamiq</h4>
              <p className={styles.price}>£17,500 - £29,970</p>
              <p className={styles.description}>Small, economical family SUV that’s comfortable to drive.</p>
            </div>
            <Link className={styles.readMore} to='/carreviews/:id'>READ MORE</Link>
          </li>

          <li>
            <img src="/hyndai-product.jpg" alt="img"></img>
            <div className={styles.info}>
              <h4>Hyndai I30</h4>
              <p className={styles.price}>£23,500 - £27,970</p>
              <p className={styles.description}>A sharp-looking small car that's also fun to drive.</p>
            </div>
            <Link className={styles.readMore} to='/carreviews/:id'>READ MORE</Link>
          </li>

          <li>
            <img src="/vw-product.jpg" alt="img"></img>
            <div className={styles.info}>
              <h4>VW Tuareg</h4>
              <p className={styles.price}>£59,500 - £70,970</p>
              <p className={styles.description}>Powerful family SUV full with cool features. An absoulute leader in the SUV sector.</p>
            </div>
            <Link className={styles.readMore} to='/carreviews/:id'>READ MORE</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default LatestReviews;