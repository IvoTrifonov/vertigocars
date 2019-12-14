import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './latestReviewsStyles.module.css'; 
import reviewService from '../../../services/review-service';

const LatestReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewService.getAllReviews()
      .then(receivedReviews => {
        receivedReviews = receivedReviews.slice(0, 3);
        setReviews(receivedReviews);
      })
  }, [])

  return (
      <div className={styles.wrapper}>
        <div className={styles.header_section}>
          <h3>Latest car reviews</h3>
          <Link to="/carreviews">More reviews</Link>
        </div>
        
        <ul className={styles.menu}>

          { reviews && reviews.map((review, i) => {
            return (
              <li>
                <img src={review.imageUrl} alt="img"></img>
                <div className={styles.info}>
                  <h4>{review.make} {review.model}</h4>
                  <p className={styles.price}>{review.year}</p>
                  <p className={styles.description}>{review.description.substring(0,25) + '...'}</p>
                </div>
                <Link className={styles.readMore} to='/carreviews'>READ MORE</Link>
              </li>
            )
          }) }
        </ul>
      </div>
    )
}

export default LatestReviews;