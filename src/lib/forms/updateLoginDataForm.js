import { USERS_URL } from "@/constants/routes";
import axios from "axios";
import { toast } from "react-toastify";
import z from "zod"

// this schema is a based and standard not a really production schema
const UPDATE_LOGIN_DATA_SCHEMAL = z
  .object({
    username: z.string().trim().optional(),
    email: z
      .string()
      .trim()
      .min(1, { message: "Can not submit an empty field." })
      .email({ message: "Invalide email." }),
    password: z
      .string()
      .trim()
      .min(6, { message: "Password must contain at least 6 characters." }).optional(),
    confirm_password: z
      .string()
      .trim()
      .min(6, { message: "Password must contain at least 6 characters." }).optional()
      .optional(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match.",
    path: ["confirm_password"],
  });

const updateLoginDataOnSumit= async (data,login,router)=>{  
  
   await axios.put(`${USERS_URL}/profile`,data).then((response) => {
        login(response.data)
        toast.success("Profile updated successfully.");
        router.push("/profile/preview")
        })
        .catch((error) =>{
          toast.error(
            error.response?.data?.message ||
              "Something went wrong, please try again."
        )}
        );
}
export const UPDATE_LOGIN_DATA_FORM = {
        buttonText: "Save Updates",
        formFields: [
          {
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Username",
            label: "Username",
          },
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
            type: "passwrod",
            placeholder: "6+ strong characters",
            label: "New Password",
          },
          {
            id: "confirm-password",
            name: "confirm_password",
            type: "passwrod",
            placeholder: "Confirm password",
            label: "Confirm Password",
          },
        ],
  validationSchema: UPDATE_LOGIN_DATA_SCHEMAL,
  onSubmit: async (data, login,router) => await updateLoginDataOnSumit(data, login,router),
};
