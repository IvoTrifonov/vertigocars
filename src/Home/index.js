import React, { Component } from 'react';
import styles from './homeStyles.module.css';
import Bmwbanner from './Bmwbanner';
import Steps from './Steps';
import LatestReviews from './LatestReviews';

class Home extends Component {
  render() {
    return(
      <div className={styles.wrapper}> 
        <Bmwbanner/>
        <Steps/>
        <LatestReviews/>
      </div>
    )
  }
}

export default Home;