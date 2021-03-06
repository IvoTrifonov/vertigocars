import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import styles from "../shared/css/authFormStyles.module.css";
import userService from "../../services/user-service";

const Register = ({ history }) => {
  const [errorMessage, setMessage] = useState(undefined);

  const submitHandler = data => {
    userService.register(data).then(() => {
      history.push("/login", { username: data.username });
    }).catch(err => {
      setMessage(err);
    });
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        rePassword: ""
      }}
      validationSchema={Schema}
      onSubmit={submitHandler}
    >
      {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
        return (
          <form onSubmit={handleSubmit} className={styles.form}>
            <span>{errorMessage}</span>
            <label htmlFor="username">Username</label>
            <input
              placeholder="Type username..."
              type="text"
              name="username"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.username}
            />
            <span>{errors.username}</span>

            <label htmlFor="passowrd">Password</label>
            <input
              placeholder="Type password..."
              type="password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
            <span>{errors.password}</span>

            <label htmlFor="rePassword">Confirm Password</label>
            <input
              placeholder="Retype password..."
              type="password"
              name="rePassword"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.rePassword}
            />
            <span>{errors.rePassword}</span>

            <button type="submit">Register</button>
            <p>
              Already have an account? <Link to="/login">Log in here!</Link>{" "}
            </p>
          </form>
        );
      }}
    </Formik>
  );
};

const Schema = Yup.object({
  username: Yup.string()
    .required("Username field is required!")
    .min(4, "Username must be at least 4 symbols long!")
    .max(19, "Username must be less than 18 symbols long!"),

  password: Yup.string()
    .required("Password field is required!")
    .min(6, "Password must be at least 6 symbols long!")
    .max(19, "Password must be less than 18 symbols long!"),

  rePassword: Yup.string()
    .required("Confirm Password is required!")
    .oneOf([Yup.ref("password"), null], "Both Passwords must match!")
});

export default Register;
