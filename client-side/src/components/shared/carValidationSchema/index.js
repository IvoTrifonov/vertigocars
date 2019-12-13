import * as Yup from "yup";

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

export default Schema;