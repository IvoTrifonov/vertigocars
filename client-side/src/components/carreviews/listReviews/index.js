import React from 'react';
import styles from './listReviewsStyles.module.css';

const ListReviews = ({ reviews }) => {
  return (
    <div className={styles.wrapper}>
      {reviews.length > 0 ? 
        <ul>
        { reviews.map((review, i) => {
          return (
            <li key={i} className={styles.review}>
              <div className={styles.imgBox}><img alt='' src={review.imageUrl}/></div>
              <div className={styles.reviewInfo}>
                <p><span>Make:</span> {review.make}</p>
                <p><span>Model:</span> {review.model}</p>
                <p><span>Year:</span> {review.year}</p>
              </div>
              <div className={styles.description}><p>{review.description}</p></div>
            </li>
          )
        }) }
      </ul>
      : <p className={styles.noReviews}>No reviews availabele</p> }
    </div>
  )
}

export default ListReviews