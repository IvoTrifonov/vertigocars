import React, { Component } from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../Home';
import Usedcars from '../Usedcars';
import Newcars from '../Newcars';
import Carreviews from '../Carreviews';
import Login from '../Login';
import Register from '../Register';
import styles from './mainStyles.module.css';

class Main extends Component {
  render() {
    return (
      <main className={styles.main}>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/newcars" component={Newcars}/>
          <Route path="/usedcars" component={Usedcars}/>
          <Route path="/carreviews" component={Carreviews}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </main>
    ) 
  }
}

export default Main;