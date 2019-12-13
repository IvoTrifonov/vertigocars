import React, { useState, useEffect } from 'react';
import { Redirect } from "react-router-dom";
import styles from './errorStyles.module.css';

const ErrorPage = () => {
  const [counter, setCounter] = useState(5);
  
  useEffect(() => {
      const id = window.setInterval(() => {
          setCounter((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(id);
  }, [counter]);

    return counter === 0
        ? (
            <Redirect to="/" />
        )
        : (
            <div className={styles.wrapper}>
                <h1 style={{ borderBottom: "none" }}>Error 404, Page not found.</h1>
                <p>Redirecting after {counter} seconds...</p>
            </div>
        );
}

export default ErrorPage;