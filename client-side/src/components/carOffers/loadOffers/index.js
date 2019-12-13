import React from 'react';
import styles from './loadOffersStyles.module.css';
import { Link } from 'react-router-dom';
 
const LoadOffers = ({ cars }) => {
  const loadCars = () => {
    return (
      <React.Fragment>
        { cars.length > 0 ? <ul>
          {cars.map((car, i) => {
            return (
              <li key={i} className={styles.offer}>
                <Link to={`/caroffers/findoffers/${car._id}`}>
                  <div className={styles.imgBox}><img alt="" src={car.imageUrl}/></div>
                </Link>
                <p><span>Make:</span> {car.make}</p>
                <p><span>Model:</span> {car.model}</p>
                <p><span>Mileage:</span> {car.mileage}</p>
                <p><span>Engine:</span> {car.engine}</p>
                <p><span>Horsepower:</span> {car.horsepower}</p>
                <p><span>Cubic Capacity:</span> {car.cubicCapacity}</p>
                <p><span>Category:</span> {car.category}</p>
                <p><span>Price:</span> {Number(car.price).toFixed(2)}</p>
                <p><span>Owner:</span>{car.owner}</p>
                <p><span>Description:</span>{car.description.length > 60   ? car.description.substring(0, 60) + '...' : car.description}</p>
              </li>
            )
          })} </ul> : <p className={styles.noRecordsMsg}>No records are available for your criteria.</p>}
      </React.Fragment>
    )
  }

  return (
    <div className={styles.wrapper}>
      {loadCars() || <p>loading...</p>}
    </div>
  )
}

export default LoadOffers;