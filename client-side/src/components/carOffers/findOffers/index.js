import React, { useState } from "react";
import { Formik } from "formik";
import Schema from '../../shared/filterSchema';
import styles from "../../shared/css/carOffersForms.module.css";
import LoadOffers from '../loadOffers';
import carService from "../../../services/car-service";

const FindOffers = ({ history }) => {
  const [isShowed, toggleShow] = useState(true);
  const [cars, getCars] = useState([]);
  const [searchValues, getValues] = useState({});

  const loadSearchValues = () => {
    return (
      <div className={styles.loadSearchWrapper}>
        {Object.keys(searchValues).length === 0 ? (
          <p>You're not using any filters.</p>
        ) : (
          <ul className={styles.searchValuesUl}>
            {Object.keys(searchValues).map((key, i) => {
              return (
                <li key={i}>
                  <span className={styles.searchKey}>{key}:</span>
                  {key === 'maxPrice' ? Number(searchValues[key]).toFixed(2)  : searchValues[key]}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  };

  const fillSearchValues = data => {
    Object.keys(data).forEach(key => {
      if (!data[key]) {
        delete data[key];
      }
    });

    getValues(data);
  };

  const changeShow = () => {
    toggleShow(!isShowed);
    getCars([]);
  };

  const handleSubmit = data => {
    fillSearchValues({ ...data });
    carService.findCars(data).then(receivedCars => {
      getCars(receivedCars);
    });

    changeShow();
  };

  return (
    <div>
      <h2 className={styles.title}>Fill-in Your Filters</h2>
      <Formik
        initialValues={{
          make: "",
          model: "",
          mileage: "",
          year: "",
          engine: "",
          horsepower: "",
          category: "",
          maxPrice: ""
        }}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
          return (
            <React.Fragment>
              <form onSubmit={handleSubmit} className={styles.form}>
                {isShowed ? (
                  <div>
                    <div className={styles.make}>
                      <label htmlFor="make">Make</label>
                      <input
                        placeholder="Type car make..."
                        type="text"
                        name="make"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.make}
                      />
                    </div>

                    <div className={styles.model}>
                      <label htmlFor="make">Model</label>
                      <input
                        placeholder="Type car model..."
                        type="text"
                        name="model"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.model}
                      />
                    </div>

                    <div className={styles.year}>
                      <label htmlFor="year">Year</label>
                      <input
                        placeholder="Type car make..."
                        type="text"
                        name="year"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.year}
                      />
                      <span>{errors.year}</span>
                    </div>

                    <div className={styles.mileage}>
                      <label htmlFor="mileage">Mileage</label>
                      <select
                        type="text"
                        name="mileage"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.mileage}
                      >
                        <option value="0" label="Select mileage" />
                        <option value="10000" label="Up to 10000" />
                        <option value="30000" label="Up to 30000" />
                        <option value="50000" label="Up to 50000" />
                        <option value="70000" label="Up to 70000" />
                        <option value="90000" label="Up to 90000" />
                        <option value="100000" label="Over 100000" />
                      </select>
                    </div>

                    <div className={styles.horsepower}>
                      <label htmlFor="make">Horsepower</label>
                      <input
                        placeholder="Type car horsepower..."
                        type="text"
                        name="horsepower"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.horsepower}
                      />
                      <span>{errors.horsepower}</span>
                    </div>

                    <div className={styles.engine}>
                      <label htmlFor="engine">Engine</label>
                      <select
                        name="engine"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.engine}
                      >
                        <option value="" label="Select engine" />
                        <option value="electric" label="electric" />
                        <option value="diesel" label="diesel" />
                        <option value="gasoine" label="gasoline" />
                      </select>
                    </div>

                    <div className={styles.category}>
                      <label htmlFor="category">Category</label>
                      <select
                        name="category"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.category}
                      >
                        <option value="" label="Select category" />
                        <option value="sedan" label="Sedan" />
                        <option value="suv" label="Suv" />
                        <option value="van" label="Van" />
                        <option value="coupe" label="Coupe" />
                        <option value="cabriolet" label="Cabriolet" />
                        <option value="hatchback" label="Hatchback" />
                      </select>
                    </div>

                    <div className={styles.maxPrice}>
                      <label htmlFor="price">Max Price</label>
                      <input
                        placeholder="$ 1000"
                        type="text"
                        name="maxPrice"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.maxPrice}
                      />
                      <span>{errors.maxPrice}</span>
                    </div>

                    <button
                      type="submit"
                      className={styles.searchBtn}
                      onSubmit={handleSubmit}
                    >Search
                    </button>
                  </div>
                ) : (
                  <React.Fragment>
                    {loadSearchValues()}
                    <button type="submit" onClick={changeShow}>
                      Change Search
                    </button>
                  </React.Fragment>
                )}
              </form>
            </React.Fragment>
          );
        }}
      </Formik>

      <LoadOffers cars={cars}/>
    </div>
  );
};

export default FindOffers;
