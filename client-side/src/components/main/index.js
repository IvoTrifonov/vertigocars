import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../home';
import CarOffers from '../carOffers';
import CreateOffer from '../carOffers/createOffer';
import FindOffers from '../carOffers/findOffers';
import Carreviews from '../carreviews';
import Profile from '../profile';
import Login from '../login';
import Logout from '../logout';
import Register from '../register';
import ProtectedRoute from '../protectedRoute';
import styles from './mainStyles.module.css';


function render(Cmp, otherProps) {
  return function (props) {
    return <Cmp {...props} {...otherProps} />
  };
}

const Main = ({ isLogged, changeLogin }) => {
  return (
      <main className={styles.main}>
        <Switch>
          <Route path="/" exact render={render(Home)}/>
          <Route path="/caroffers" exact render={render(CarOffers, { isLogged })}/>
          <ProtectedRoute isLogged={isLogged} redirectTo="/login" path="/caroffers/createoffer" exact render={render(CreateOffer)}/>
          <Route path="/caroffers/findoffers" render={render(FindOffers)}/>
          <Route path="/carreviews" exact render={render(Carreviews)}/>
          <ProtectedRoute isLogged={!isLogged} redirectTo="/" path="/login" exact render={render(Login, { changeLogin })}/>
          <ProtectedRoute isLogged={isLogged} redirectTo="/" path="/logout" exact render={render(Logout, { changeLogin })}/>
          <ProtectedRoute isLogged={!isLogged} redirectTo="/" path="/register" exact render={render(Register)}/>
          <ProtectedRoute isLogged={isLogged} redirectTo="/login" path="/profile" exact render={render(Profile)}/>
        </Switch>
      </main>
    ) 
}

export default Main;