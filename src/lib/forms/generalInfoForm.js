import { USERS_URL } from "@/constants/routes";
import axios from "axios";
import { toast } from "react-toastify";
import z from "zod";

// this schema is a based and standard not a really production schema
const GENERAL_INFO_SCHEMAL = z.object({
    full_name: z.string().trim().min(1,{message:"Full name field is required."}),
    phone_number:z.string().min(15,{message:"Invalide phone number."}).max(15,{message:"Invalid phone number."}),
    location: z.string().trim().min(1,{message:"Location field is required."}),
    highest_education: z.string().trim().min(1,{message:"Highest Education field is required."}),
    latest_work_experience: z.string().trim().min(1,{message:"Latest work experience field is required."}),
    bio:z.string().trim().min(100,{message:"min 100 char"}).max(200,{message:"max 200 char"})
  })

const generalInfoOnSumit = async (data, login,router) => {    
   await axios
    .put(`${USERS_URL}/profile`, data,)
    .then((response) => {
      login(response.data)
      toast.success("Profile updated successfully.");
      router.push("/profile/preview")
    })
    .catch((error) =>
      toast.error(
        error.response?.data?.message ||
          "Something went wrong, please try again."
      )
    );
};
export const GENERAL_INFO_FORM = {
  buttonText: "Save and Continue",
  formFields: [
    {
      id: "full-name",
      name: "full_name",
      type: "text",
      placeholder: "Your Full Name",
      label: "Full Name",
    },
    {
      id: "phone-number",
      name: "phone_number",
      type: "text",
      placeholder: "+216 696 560 775",
      label: "Phone Number",
    },
    {
      id: "location",
      name: "location",
      type: "text",
      placeholder: "Type a city, state, or country",
      label: "Location",
    },
    {
      id: "highest-education",
      name: "highest_education",
      type: "text",
      placeholder: "e.g. Bachelor's degree",
      label: "Highest Education",
    },
    {
      id: "latest-work-experience",
      name: "latest_work_experience",
      type: "text",
      placeholder: "e.g. Marketing Coordinator",
      label: "Latest work experience",
    },
  ],
  validationSchema: GENERAL_INFO_SCHEMAL,
  onSubmit: async (data, login,router) => await generalInfoOnSumit(data, login,router),
};
