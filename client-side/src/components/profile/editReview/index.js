import React, { useState, useEffect } from "react";
import styles from "../../shared/css/carOffersForms.module.css";  
import Schema from '../../shared/reviewValidationSchema';
import reviewService from '../../../services/review-service';
import { Formik } from "formik";

const EditOffer = ({ history }) => {
  const reviewId = window.location.pathname.split("/")[3];
  const [review, setReview] = useState(null);

  useEffect(() => {
    reviewService.getReview(reviewId).then(recivedReview => {
      setReview(recivedReview);
    });
  }, [reviewId]);

  const handleSubmit = data => {
    reviewService.update(reviewId, data)
      .then(updatedReview => { 
        history.push('/profile/yourReviews');
      })
  }

  return (
   <div>
      { review && (
        <React.Fragment>
          <h2 className={styles.title}>Edit Your Offer</h2>
          <Formik
            initialValues={{
              make: review.make,
              model: review.model,
              year: review.year,
              imageUrl: review.imageUrl,
              description: review.description
            }}
            validationSchema={Schema}
            onSubmit={handleSubmit}
          >
            {({ values, errors, handleSubmit, handleBlur, handleChange }) => {
              return (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.make}>
                    <label htmlFor="make">Make</label>
                    <input
                      placeholder="Type car make..."
                      type="text"
                      name="make"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.make}
                    />
                    <span>{errors.make}</span>
                  </div>

                  <div className={styles.model}>
                    <label htmlFor="model">Model</label>
                    <input
                      placeholder="Type car model..."
                      type="text"
                      name="model"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.model}
                    />
                    <span>{errors.model}</span>
                  </div>

                  <div className={styles.year}>
                    <label htmlFor="year">Year</label>
                    <input
                      placeholder="Type car make..."
                      type="text"
                      name="year"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.year}
                    />
                    <span>{errors.year}</span>
                  </div>

                  <div className={styles.imageUrl}>
                    <label htmlFor="model">ImageUrl</label>
                    <input
                      placeholder="Type image url..."
                      type="text"
                      name="imageUrl"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.imageUrl}
                    />
                    <span>{errors.imageUrl}</span>
                  </div>

                  <div className={styles.description}>
                    <label htmlFor="price">Description</label>
                    <textarea
                      placeholder="Car problems and features..."
                      type="text"
                      name="description"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.description}
                    ></textarea>
                  </div>
                  
                  <button type="submit" onSubmit={handleSubmit}>
                    Edit
                  </button>
                </form>
              );
            }}
          </Formik>
        </React.Fragment>
      )}
    </div>
  )
}

export default EditOffer;