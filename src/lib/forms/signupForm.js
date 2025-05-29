import z from "zod";
import { USERS_URL } from "@/constants/routes";
import axios from "axios";
import { toast } from "react-toastify";

// this schema is a based and standard not a really production schema
const SIGNUP_SCHEMA = z
  .object({
    email: z
      .string()
      .trim()
      .min(1, { message: "Email field is required." })
      .email({ message: "Not valid email." }),
    password: z
      .string()
      .trim()
      .min(6, { message: "Password must contain at least 6 characters." }),
    confirm_password: z
      .string()
      .trim()
      .min(6, { message: "Password must contain at least 6 characters." }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match.",
    path: ["confirm_password"],
  });

const signupOnSubmit = async (data, login,router) => {  
  await axios
    .post(`${USERS_URL}/signup`, data)
    .then((response) => {
      login(response.data);
      toast.success("User sign up successfully.");
      router.replace("profile/edit")
    })
    .catch((error) =>{      
      toast.error(
        error.response?.data?.message ||
          "Something went wrong, please try again."
      )
    });
};

export const SIGNUP_FORM = {
  buttonText: "Create account",
  formFields: [
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Example@mail.com",
      label: "Email",
    },
    {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "6+ strong characters",
      label: "Password",
    },
    {
      id: "confirm-password",
      name: "confirm_password",
      type: "password",
      placeholder: "Confirm password",
      label: "Confirm Password",
    },
  ],
  validationSchema: SIGNUP_SCHEMA,
  onSubmit: async (data, login,router) => await signupOnSubmit(data, login,router),
};
