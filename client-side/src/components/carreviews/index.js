import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import styles from './carReviewsStyles.module.css';
import CarReviewsForm from './carReviewsForm';
import ListReviews from './listReviews';
import reviewService from '../../services/review-service';
import { AuthContext } from '../contextWrapper';

const Newcars = () => {
  const {isAuth} = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewService.getAllReviews()
      .then(receivedRevews => {
        setReviews(receivedRevews);
      })
  }, [])

  return (
      <div className={styles.wrapper}>
        { isAuth && 
          <div className={styles.carReviewsForm}>
            <CarReviewsForm setReviews={setReviews}/>
          </div>}

        <div className={styles.reviewsContainer}>
          { !isAuth && <h2 className={styles.loginMsg}>To create car review you must <Link to='/login'>login</Link> </h2> }
          <ListReviews reviews={reviews}/>
        </div>
      </div>
    )
}

export default Newcars;