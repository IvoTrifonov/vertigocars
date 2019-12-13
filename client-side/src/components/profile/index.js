import React from "react";
import { NavLink } from "react-router-dom";
import { Switch, Route } from 'react-router-dom';
import render from '../../helpers/render';
import styles from "./profileStyles.module.css";
import YourOffers from './yourOffers';
import SavedOffers from './savedOffers';
import YourReviews from './yourReviews';
import UserInfo from './userInfo';
import EditOffer from './editOffer';
import EditReview from './editReview';
import ErrorPage from '../404';

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.profile}>
        <aside>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/profile/yourOffers" activeClassName={styles.active}>
                  Your Offers
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/profile/savedOffers" activeClassName={styles.active}>
                  Saved Offers
                </NavLink>
              </li>

              <li>
                <NavLink exact to="/profile/yourReviews" activeClassName={styles.active}>
                  Your Reviews
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>

        <div className={styles.profileContent}>
          <Switch>
            <Route exact path="/profile" component={UserInfo}></Route>
            <Route exact path="/profile/yourOffers" render={render(YourOffers)}></Route>
            <Route exact path="/profile/yourOffers/editOffer/:id" render={render(EditOffer)}></Route>
            <Route exact path="/profile/savedOffers" render={render(SavedOffers)}></Route>
            <Route exact path="/profile/yourReviews" render={render(YourReviews)}></Route>
            <Route exact path="/profile/yourReviews/:id" render={render(EditReview)}></Route>
            <Route path="*" render={render(ErrorPage)}></Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Profile;
