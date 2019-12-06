import React, { useState, useEffect } from 'react';
import carService from '../../../../services/car-service';
import styles from './offerStyles.module.css';

const Offer = () => {
  const [car, setData] = useState({});
  const id = window.location.pathname.split('/')[3];
  
  useEffect(() => {
    carService.findCar(id)
      .then(receivedCar => {
        console.log(receivedCar);
        setData(receivedCar);
      })
  }, []);

  return (
    <div className={styles.carContainer}>
      <div className={styles.imageBox}><img alt='' src={car.imageUrl}/></div>
      <div className={styles.carInfo}>
        <h2>{car.make} {car.model}</h2>
        <p><span>Year:</span> {car.year}</p>
        <p><span>Mileage:</span> {car.mileage}</p>
        <p><span>Engine:</span> {car.engine}</p>
        <p><span>Horsepower:</span> {car.horsepower} HP</p>
        <p><span>Cubic Capacity:</span> {car.cubicCapacity}</p>
        <p><span>Category:</span> {car.category}</p>
        <p><span>EuroStandard:</span> {car.euroStandard}</p>
        <p><span>Owner:</span> {car.owner}</p>
      </div>
      <div className={styles.carDesc}>
        <h3>Additional information</h3>
        <p>{car.description}</p>
      </div>
    </div>
  )
}

export default Offer;