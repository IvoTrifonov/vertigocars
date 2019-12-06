/* eslint-disable no-undef */
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import styles from "../../shared/css/carOffersForms.module.css";
import carService from "../../../services/car-service";

const CreateOffer = ({ history }) => {
  const [imageURL, setImageURL] = useState("image");

  const handleSubmit = data => {
    data.ownerId = localStorage.getItem("userId");
    data.owner = localStorage.getItem("username");
    data.imageUrl = imageURL;
    carService.createCar(data).then(res => {
      history.push("/caroffers/findoffers");
    });
  };

  const myWidget = cloudinary.createUploadWidget({
      cloudName: "dzrvyaqbs",
      apiKey: "462616233243679",
      uploadPreset: "vertigo"
    }, (error, result) => {
      if (!error && result && result.event === "success") {
        setImageURL(result.info.url);
      }
    }
  );

  return (
    <div>
      <h2 className={styles.title}>Create Your Offer</h2>
      <Formik
        initialValues={{
          make: "",
          model: "",
          year: "",
          mileage: "",
          engine: "",
          horsepower: "",
          cubicCapacity: "",
          category: "",
          euroStandard: "",
          price: ""
        }}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
          return (
            <form onSubmit={handleSubmit} className={styles.form}>
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
                <span>{errors.make}</span>
              </div>

              <div className={styles.model}>
                <label htmlFor="model">Model</label>
                <input
                  placeholder="Type car model..."
                  type="text"
                  name="model"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.model}
                />
                <span>{errors.model}</span>
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
                <span>{errors.mileage}</span>
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
                <span>{errors.category}</span>
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
                <span>{errors.engine}</span>
              </div>

              <div className={styles.horsepower}>
                <label htmlFor="horsepower">Horsepower</label>
                <input
                  placeholder="Engine horsepower..."
                  type="text"
                  name="horsepower"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.horsepower}
                />
                <span>{errors.horsepower}</span>
              </div>

              <div className={styles.cubicCapacity}>
                <label htmlFor="cubiccapacity">Cubic capacity</label>
                <input
                  placeholder="Engine cubic capacity..."
                  type="text"
                  name="cubicCapacity"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.cubicCapacity}
                />
                <span>{errors.cubicCapacity}</span>
              </div>

              <div className={styles.euroStandard}>
                <label htmlFor="euroStandard">Euro Standard</label>
                <select
                  type="number"
                  name="euroStandard"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.euroStandard}
                >
                  <option value="" label="No matter" />
                  <option value="1" label="Euro 1" />
                  <option value="2" label="Euro 2" />
                  <option value="3" label="Euro 3" />
                  <option value="4" label="Euro 4" />
                  <option value="5" label="Euro 5" />
                  <option value="6" label="Euro 6" />
                </select>
                <span>{errors.euroStandard}</span>
              </div>

              <div className={styles.price}>
                <label htmlFor="price">Price</label>
                <input
                  placeholder="$ 1000"
                  type="text"
                  name="price"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.price}
                />
                <span>{errors.price}</span>
              </div>

              <div className={styles.description}>
                <label htmlFor="price">Description</label>
                <textarea
                  placeholder="Car problems and features..."
                  type="text"
                  name="description"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.description}
                ></textarea>
              </div>

              <input type="button" value="Upload image" id="upload_widget" onClick={() => myWidget.open()}/>
              <button type="submit" onSubmit={handleSubmit}>Create</button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

const Schema = Yup.object({
  make: Yup.string().required("Make is required!"),

  model: Yup.string().required("Model is required!"),

  year: Yup.number()
    .typeError("Year must be a number!")
    .positive("Year must be positive!")
    .integer("Horsepower can't include a decimal point!")
    .required("Horsepower is required!"),

  mileage: Yup.string().required("Mileage is required!"),

  engine: Yup.string().required("Engine type is required!"),

  category: Yup.string().required("Category is required!"),

  horsepower: Yup.number()
    .typeError("Horsepower must must be a number!")
    .positive("Horsepower must be positive!")
    .integer("Horsepower can't include a decimal point!")
    .required("Horsepower is required!"),

  cubicCapacity: Yup.number()
    .typeError("Cubic Capacity must must be a number!")
    .positive("Cubic Capacity must be positive!")
    .integer("Cubic Capacity can't include a decimal point!")
    .required("Cubic Cpacity is required!"),

  euroStandard: Yup.string().required("Euro Standard is required!"),

  price: Yup.number()
    .typeError("Price must must be a number!")
    .positive("Price must be positive!")
    .required("Price is required!")
});

export default CreateOffer;
