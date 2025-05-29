import { ADMINS_URL } from "@/constants/routes";
import axios from "axios";
import { toast } from "react-toastify";
import z from "zod";

// this schema is a based and standard not a really production schema
const ADMIN_FORM_SCHEMA = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email field is required." })
    .email({ message: "Not valid email." }),
  password: z.string().trim().min(1, { message: "Password field is required." }),
});

const adminOnSubmit = async (data, login,router) => {
  await axios
    .post(`${ADMINS_URL}`, data)
    .then((response) => {
      login(response.data);
      toast.success("Admin login successfully.");
      router.replace("/dashboard")
    }
  )
  .catch((error) => 
    toast.error(
      error.response?.data?.message ||
      "Something went wrong, please try again."
    )
  );
};

export const  ADMIN_FORM= {
  buttonText: "Login",
  formFields: [
    {
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Enter Admin Email",
      label: "Admin Email",
    },
    {
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Enter Admin Password",
      label: "Admin Password",
    },
  ],
  validationSchema: ADMIN_FORM_SCHEMA,
  onSubmit: async (data, login,router) => await adminOnSubmit(data, login,router),
};
