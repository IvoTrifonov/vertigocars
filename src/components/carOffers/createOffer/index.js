import React, { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import styles from './createOffersStyles.module.css';
import carService from '../../../services/car-service';


const CreateOffer = ({ history }) => {
  const handleSubmit = (data) => {
    carService.createCar(data)
      .then(res => {
        history.push('/');
      })
    
  }

  return (
    <div>
      <Formik
        initialValues={{
          make: '',
          model: '',
          horsepower: '',
          mileage: '',
        }}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
          return (
              <form onSubmit={handleSubmit} className={styles.form}>

              <label htmlFor="make">Make</label>
              <input
                placeholder="Type car make..."
                type="text"
                name="make"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.make}
              />

              <label htmlFor="make">Model</label>
              <input
                placeholder="Type car model..."
                type="text"
                name="model"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.model}
              />
              
              <label htmlFor="make">Horsepower</label>
              <input
                placeholder="Type car horsepower..."
                type="text"
                name="horsepower"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.horsepower}
              />

              <label htmlFor="make">Mileage</label>
              <input
                placeholder="Type car mileage..."
                type="number"
                name="mileage"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mileage}
              />

              
              {/* <label htmlFor="passowrd">Password</label>
              <input
                placeholder="Type password..."
                type="password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
              />
              

              <label htmlFor="rePassword">Confirm Password</label>
              <input
                placeholder="Retype password..."
                type="password"
                name="rePassword"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.rePassword}
              /> */}
              
              <button type='submit'>Submit</button>
            </form>
          );
        }}
      </Formik>
    </div>
  )
}

const Schema = Yup.object({
  // username: Yup.string()
  //   .required("Username field is required!")
  //   .min(4, 'Username must be at least 4 symbols long!')
  //   .max(19, 'Username must be less than 18 symbols long!'),

  // password: Yup.string()
  //   .required("Password field is required!")
  //   .min(6, 'Password must be at least 6 symbols long!')
  //   .max(19, 'Password must be less than 18 symbols long!'),

  // rePassword: Yup.string()
  //   .required('Confirm Password is required!')
  //   .oneOf([Yup.ref('password'), null], 'Both Passwords must match!')
});

export default CreateOffer;