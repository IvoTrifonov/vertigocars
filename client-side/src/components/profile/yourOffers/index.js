import React, { useState, useEffect } from 'react';
import carService from '../../../services/car-service';
import loadOffers from '../loadOffers';

const YourOffers = ({ history }) => {
  const userId = localStorage.getItem('userId');
  const [yourOffers, setOffers] = useState([]);
  
  useEffect(() => {
    carService.getCarsByUserId(userId)
      .then(receivedCars => {
        setOffers(receivedCars);
      });
  }, [])

  const handleDelete = (id) => {
    carService.delete(id)
      .then(removed => {
        carService.getCarsByUserId(userId)
          .then(receivedCars => {
            setOffers(receivedCars);
        });
      })
  }

  const handleEdit = (offer) => {
    
  }

  return (
    <div>
      {loadOffers(yourOffers, handleDelete, true)}
    </div>
  )
}

export default YourOffers;