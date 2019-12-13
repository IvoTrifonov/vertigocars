import React, { useState, useEffect } from "react";
import styles from "./reviewsStyles.module.css";
import { Link } from 'react-router-dom';
import reviewService from "../../../services/review-service";

const YourReviews = ({ history }) => {
  const userId = localStorage.getItem("userId");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewService.getReviewsByUserId(userId).then(receivedReviews => {
      setReviews(receivedReviews);
    });
  }, [userId]);

  const handleDelete = id => {
    reviewService.delete(id)
      .then(deleted => {
        reviewService.getReviewsByUserId(userId).then(receivedReviews => {
          setReviews(receivedReviews);
        });
      })
  }

  const loadReviews = () => {
    return <ul>{reviews.map((review, i) => {
      return <li key={i} className={styles.review}>
        <div className={styles.imgBox}><img alt='' src={review.imageUrl}/></div>
        <div className={styles.info}>
          <h3>{review.make} {review.model} {review.year}</h3>
          <p>{review.description}</p>
          <div className={styles.buttons}>
            <Link to={`/profile/yourReviews/${review._id}`}>Edit</Link>
            <p className={styles.delBtn} onClick={() => {handleDelete(review._id)}}>Delete</p>
        </div>
        </div>
      </li>
    })}</ul>;
  };

  return (
    <div className={styles.wrapper}>
      {reviews.length > 0 ? (
        loadReviews()
      ) : (
        <h3>You dont have any created reviews!</h3>
      )}
    </div>
  );
};

export default YourReviews;
