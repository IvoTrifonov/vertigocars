import React, { useState, useEffect } from 'react';
import userService from '../../../services/user-service';
import carService from '../../../services/car-service';
import loadOffers from '../loadOffers';

const SavedOffers = ({ history }) => {
  const userId = localStorage.getItem('userId');
  const [savedOffers, setSavedOffers] = useState([]);
  
  useEffect(() => {
    userService.getUser(userId)
      .then(user => {
        carService.getSavedCars(user.savedCars)
        .then(receivedCars => {
          setSavedOffers(receivedCars);
        });
      })
  }, [userId]);

  const handleDelete = (carId) => {
    userService.deleteSavedCar(userId, { carId })
      .then(user => {
        user.savedCars = user.savedCars.filter(c => c !== carId);
        carService.getSavedCars(user.savedCars)
        .then(receivedCars => {
          setSavedOffers(receivedCars);
        });
      })
  }

  return (
    <div>
      {loadOffers(savedOffers, handleDelete)}
    </div>
  )
}

export default SavedOffers;