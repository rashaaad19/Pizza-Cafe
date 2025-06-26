import * as Yup from "yup";

 export const addItemSchema = Yup.object({
    name: Yup.string()
      .min(3, "Must be 3 characters or more")
      .required("Required"),
    price: Yup.number()
      .positive("Price must be positive")
      .required("Required"),
    img: Yup.string().url("Invalid URL format").required("Required"),
  });
