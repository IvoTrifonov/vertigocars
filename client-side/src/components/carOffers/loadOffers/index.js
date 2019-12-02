import React from 'react';
import styles from './loadOffersStyles.module.css';

const LoadOffers = ({ cars }) => {
  const loadCars = () => {
    return (
      <ul>
        {cars.map((car, i) => {
          return (
            <li key={i}>
              <p><span>Make:</span> {car.make}</p>
              <p><span>Model:</span> {car.model}</p>
              <p><span>Mileage:</span> {car.mileage}</p>
              <p><span>Engine:</span> {car.engine}</p>
              <p><span>Horsepower:</span> {car.horsepower}</p>
              <p><span>Cubic Capacity:</span> {car.cubicCapacity}</p>
              <p><span>Category:</span> {car.category}</p>
              <p><span>Price:</span> {car.price}</p>
              <p><span>Description:</span>{car.description}</p>
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className={styles.wrapper}>
      {loadCars()}
    </div>
  )
}

export default LoadOffers;