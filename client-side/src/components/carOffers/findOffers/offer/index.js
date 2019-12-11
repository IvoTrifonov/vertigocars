import React, { useState, useEffect, useContext } from 'react';
import carService from '../../../../services/car-service';
import userService from '../../../../services/user-service';
import styles from './offerStyles.module.css';
import { AuthContext } from '../../../contextWrapper';

const Offer = () => {
  const carId = window.location.pathname.split('/')[3];
  const userId = localStorage.getItem("userId");
  const { isAuth } = useContext(AuthContext);
  const [car, setData] = useState({});
  const [likes, setLikes] = useState(0);
  const [isLiked, seIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);


  useEffect(() => {
    carService.findCar(carId)
      .then(receivedCar => {
        setData(receivedCar);
        setLikes(receivedCar.likedBy.length);
        receivedCar.likedBy.includes(userId) ? seIsLiked(true) : seIsLiked(false);
      });

    userService.getUser(userId)
      .then(receivedUser => {
        receivedUser.savedCars.includes(carId) ? setIsSaved(true) : setIsSaved(false);
      });
  }, []); 

  const handleSave = () => {
    userService.getUser(userId)
    .then(receivedUser => {
      userService.updateUser(userId, { carId, collection: 'savedCars' })
        .then(res => {
          setIsSaved(true);
        })
    })
  }

  const handleLike = () => {
    carService.updateCar(carId, { userId })
      .then(updatedCar => {
        setData(updatedCar);
        setLikes(updatedCar.likedBy.length + 1);
        seIsLiked(true);
    })
  }
 
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
      <div className={styles.moreInfo}>
        { isAuth && <p onClick={!isSaved ? handleSave : undefined} className={styles.saveOffer}>{isSaved ? 'Saved' : 'Save'}</p> }
        <p className={styles.price}>${Number(car.price).toFixed(2)}</p>
        { isAuth && <p onClick={!isLiked ? handleLike : undefined} className={styles.likeOffer}>{isLiked ? 'Liked' : 'Like'}</p> }
      </div>
      <div className={styles.likesContainer}><span>{likes}</span> likes</div>
    </div>
  )
}

export default Offer;
