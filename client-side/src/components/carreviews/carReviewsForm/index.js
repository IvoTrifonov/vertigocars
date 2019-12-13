import React, { useState } from 'react';
import { Formik } from "formik";
import Schema from '../../shared/reviewValidationSchema';
import styles from '../../shared/css/carOffersForms.module.css';
import reviewService from '../../../services/review-service';

const CarReviewsForm = ({ setReviews }) => {
  
  const handleSubmit = (data, { resetForm }) => {
    data.creatorId = localStorage.getItem('userId');
    reviewService.createReview(data)
      .then(createdReview => {
        reviewService.getAllReviews()
        .then(receivedReviews => {
          setReviews(receivedReviews);
          resetForm({})
        })
      })
  }

  return (
    <div>
      <h2 className={styles.title}>Create Your Review</h2>
      <Formik
        initialValues={{
          make: '',
          model: '',
          year: '',
          imageUrl: '',
          description: '',
        }}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
          return (
            <form style={{maxWidth: "95%"}} onSubmit={handleSubmit} className={styles.form}>
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

              <span>{errors.description}</span>
              </div>
            
              <button type="submit" onSubmit={handleSubmit}>Create</button>
            </form>
          );
        }}
      </Formik>
    </div>
  )
}

export default CarReviewsForm;