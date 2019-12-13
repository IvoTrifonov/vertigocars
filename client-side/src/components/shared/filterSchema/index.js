import * as Yup from "yup";

const Schema = Yup.object({
  make: Yup.string(),

  model: Yup.string(),

  year: Yup.number()
    .typeError("Year must be a number!")
    .positive("Year must be positive!")
    .integer("Year can't include a decimal point!"),

  engine: Yup.string(),

  category: Yup.string(),

  horsepower: Yup.number()
    .typeError("Horsepower must must be a number!")
    .positive("Horsepower must be positive!")
    .integer("Horsepower can't include a decimal point!"),

  cubicCapacity: Yup.number()
    .typeError("Cubic Capacity must must be a number!")
    .positive("Cubic Capacity must be positive!")
    .integer("Cubic Capacity can't include a decimal point!"),

  euroStandard: Yup.string(),

  maxPrice: Yup.number()
    .typeError("Price must must be a number!")
    .positive("Price must be positive!"),
});

export default Schema;