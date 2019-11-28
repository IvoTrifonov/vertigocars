import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import CarOffers from '../carOffers';
import CreateOffer from '../carOffers/createOffer';
import Carreviews from '../carreviews';
import Login from '../login';
import Register from '../register';
import styles from './mainStyles.module.css';

class Main extends Component {
  render() {
    return (
      <main className={styles.main}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/caroffers" exact component={CarOffers}/>
          <Route path="/caroffers/createoffer" component={CreateOffer}/>
          <Route path="/carreviews" exact component={Carreviews}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
        </Switch>
      </main>
    ) 
  }
}

export default Main;