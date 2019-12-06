import React, { useState, useContext } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import styles from '../shared/css/authFormStyles.module.css';
import userService from '../../services/user-service';
import { AuthContext } from '../contextWrapper';

const Login = ({ history }) => {
  const {setAuth, setUsername} = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState(undefined); // to find better way

  const submitHandler = (data) => {
      userService.login(data)
      .then((res) => { 
        if (res === 'Invalid credentials') {
          setErrorMessage('Invalid credentials');
        } else {
          localStorage.setItem("userId", res._id);
          localStorage.setItem("username", res.username);
          setAuth(true);
          setUsername(data.username);
          history.push('/');
        }
      })
    }

  return (
    <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={Schema}
        onSubmit={submitHandler}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
          return (
            <form onSubmit={handleSubmit} className={styles.form}>
              {errorMessage ? <span>{errorMessage}</span> : undefined }
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
  )
}

const Schema = Yup.object({
  username: Yup.string()
    .required("Username field is required!")
    .min(4, 'Username must be at least 4 symbols long!')
    .max(19, 'Username must be less than 18 symbols long!'),

  password: Yup.string()
    .required("Password field is required!")
    .min(6, 'Password must be at least 6 symbols long!')
    .max(19, 'Password must be less than 18 symbols long!'),
});

export default Login;