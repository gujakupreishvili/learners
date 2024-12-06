import * as Yup from "yup";

export const validation = Yup.object({
  parentname: Yup.string()
    .min(2, "Parent name must be at least 2 characters")
    .required("Parent name cannot be empty"),
  phonenumber: Yup.string()
    .min(2, "Phone number must be at least 2 characters")
    .required("Phone number cannot be empty"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email cannot be empty"),
  studentname: Yup.string()
    .min(2, "Student name must be at least 2 characters")
    .required("Student name cannot be empty"),
  studentage: Yup.string()
    .min(1, "Student age must be at least 1 character")
    .required("Student age cannot be empty"),
})

