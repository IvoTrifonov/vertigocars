import React, { Component } from 'react';
import { Formik } from "formik";
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import styles from '../shared/css/authFormStyles.module.css';


class Login extends Component {
  submitHandler = (data) => {
    // to implement userService registration
    this.props.history.push('/');
  }

  render() {
    return (
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={Schema}
        onSubmit={this.submitHandler}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
          return (
            <form onSubmit={handleSubmit} className={styles.form}>
              <label htmlFor="username">Username</label>
              <input
                placeholder="Type username..."
                type="text"
                name="username"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
              />
              <span>
                {errors.username}
              </span>

              <label htmlFor="passowrd">Password</label>
              <input
                placeholder="Type password..."
                type="password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
              />
              <span>
                {errors.password}
              </span>

              <button type='submit'>Login</button>

              <p>Don't have an account? <Link to="/register">Register here!</Link> </p>
            </form>
          );
        }}
      </Formik>
    );
  }
}

const Schema = Yup.object({
  username: Yup.string()
    .required("Username field is required!")
    .min(4, 'Username must be at least 4 symbols long!')
    .max(19, 'Username must be less than 18 symbols long!'),

  password: Yup.string()
    .required("Password field is required!")
    .min(4, 'Password must be at least 6 symbols long!')
    .max(19, 'Password must be less than 18 symbols long!'),
});

export default Login;