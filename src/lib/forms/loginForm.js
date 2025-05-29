import z from "zod";
import { USERS_URL } from "@/constants/routes";
import axios from "axios";
import { toast } from "react-toastify";

// this schema is a based and standard not a really production schema
const LOGIN_SCHEMA = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email field is required." })
    .email({ message: "Not valid email." }),
  password: z
    .string()
    .trim()
    .min(6, { message: "Password must contain at least 6 characters." }),
});

const loginOnSubmit = async (data, login,router) => {
  await axios
    .post(`${USERS_URL}/auth`, data)
    .then((response) => {
      
      login(response.data);
      toast.success("User login successfully.");
      router.replace("/profile/preview")
    })
    .catch((error) =>
      toast.error(
        error.response?.data?.message ||
          "Something went wrong, please try again."
      )
    );
};

export const LOGIN_FORM = {
  buttonText: "Login",
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
  ],
  validationSchema: LOGIN_SCHEMA,
  onSubmit: async (data, login,router) => await loginOnSubmit(data, login,router),
};
