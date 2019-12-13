import * as Yup from "yup";

export default Yup.object({
  make: Yup.string().required("Make is required!"),

  model: Yup.string().required("Model is required!"),

  year: Yup.number()
    .typeError("Year must be a number!")
    .positive("Year must be positive!")
    .integer("Horsepower can't include a decimal point!")
    .required("Horsepower is required!"),

  imageUrl: Yup.string()
    .trim()
    .matches(/(http[s]?:\/\/.*.(?:png|jpg|gif|svg|jpeg))/i , 'Incorrect image url!')
    .required(),
  
  description: Yup.string()
    .required('Description is reqired!')
});