import React from 'react';
import styles from './yourOffersStyles.module.css';
import { Link } from "react-router-dom";

const loadOffers = (offers, handleDelete, handleEdit) => {
    return (
      <div className={styles.wrapper}>
        <ul> 
          { offers.length > 0 ? offers.map((offer, i) => {
            return (
              <li key={i}>
                <div className={styles.info}>
                  <h3>{offer.make} {offer.model} {offer.year}</h3>
                  <p><span>Mileage:</span> {offer.mileage}</p>
                  <p><span>Engine:</span> {offer.engine}</p>
                  <p><span>Horsepower:</span> {offer.horsepower}</p>
                  <p><span>Cubic Capacity:</span> {offer.cubicCapacity}</p>
                  <p><span>Category:</span> {offer.category}</p>
                  <p><span>Price:</span> {Number(offer.price).toFixed(2)}</p>
                  <p><span>Owner:</span>{offer.owner}</p>
                  <p><span>Description:</span>{offer.description}</p>
                </div>
                <div className={styles.imgBox}>
                  <img alt='' src={offer.imageUrl}/>
                </div>
                <div className={styles.buttonsBox}>
                  {handleEdit ? <Link to={`/profile/yourOffers/editOffer/${offer._id}`}>Edit</Link> : undefined}
                  <p onClick={() => handleDelete(offer._id)}>Delete</p>
                </div>
              </li>
            )
          }) : <h3 className={styles.noOffersMsg}>You don't have any {handleEdit ? 'created' : 'saved'} offers.</h3>}
        </ul>
      </div>

    )
  }

export default loadOffers;