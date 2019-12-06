import React, { useContext } from 'react';
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
import Offer from '../carOffers/findOffers/offer';
import styles from './mainStyles.module.css';
import { AuthContext } from '../contextWrapper';

function render(Cmp, otherProps) {
  return function (props) {
    return <Cmp {...props} {...otherProps} />
  };
}

const Main = () => {
  const {isAuth} = useContext(AuthContext);
  return (
      <main className={styles.main}>
        <Switch>
          <Route path="/" exact render={render(Home)}/>
          <Route path="/caroffers" exact render={render(CarOffers)}/>
          <ProtectedRoute isLogged={isAuth} redirectTo="/login" path="/caroffers/createoffer" exact render={render(CreateOffer)}/>
          <Route path="/caroffers/findoffers" exact render={render(FindOffers)}/>
          <Route path="/caroffers/findoffers/:id" exact render={render(Offer)}/>
          <Route path="/carreviews" exact render={render(Carreviews)}/>
          <ProtectedRoute isLogged={!isAuth} redirectTo="/" path="/login" exact render={render(Login)}/>
          <ProtectedRoute isLogged={isAuth} redirectTo="/" path="/logout" exact render={render(Logout)}/>
          <ProtectedRoute isLogged={!isAuth} redirectTo="/" path="/register" exact render={render(Register)}/>
          <ProtectedRoute isLogged={isAuth} redirectTo="/login" path="/profile" exact render={render(Profile)}/>
        </Switch>
      </main>
    ) 
}

export default Main;