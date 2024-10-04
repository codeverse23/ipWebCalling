import * as yup from "yup";

export const loginValidation = yup.object().shape({
    email:yup.string().email("Please Enter Valid Email").matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,40}))$/,
        "Please enter valid email"
      )
      .required("Email is required"),
    password: yup
      .string()
      .trim()
      .required("Password is required")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol")
      .matches(/^\S*$/, "Space not allowed")
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password cannot exceed 20 characters."),
})