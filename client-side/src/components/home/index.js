import React, { Component } from 'react';
import styles from './homeStyles.module.css';
import Bmwbanner from './bmwbanner';
import Steps from './steps';
import LatestReviews from './latestReviews';

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