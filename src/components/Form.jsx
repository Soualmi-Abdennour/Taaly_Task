"use client";
import { ADMIN_FORM } from "@/lib/forms/adminForm";
import { FORGET_PASSWORD_FORM } from "@/lib/forms/fogetPasswordForm";
import { LOGIN_FORM } from "@/lib/forms/loginForm";
import { SIGNUP_FORM } from "@/lib/forms/signupForm";
import { UPDATE_LOGIN_DATA_FORM } from "@/lib/forms/updateLoginDataForm";
import { useUser } from "@/providers/UserContextProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import InputField from "./InputField";


const getCorrespondForm=(formType)=>{  
  switch (formType) {
    case "SIGNUP_FORM":
      return SIGNUP_FORM;
    case "LOGIN_FORM":
      return LOGIN_FORM;
    case "FORGET_PASSWORD_FORM":
      return FORGET_PASSWORD_FORM;
    case "UPDATE_LOGIN_DATA_FORM":
      return UPDATE_LOGIN_DATA_FORM;
    case "ADMIN_FORM":
      return ADMIN_FORM
  }
}
function Form({formType}) {
  const { validationSchema,onSubmit, formFields, buttonText } =getCorrespondForm(formType);
  const {
    register,
    handleSubmit,
    formState: { errors ,isValid},
  } = useForm({ mode: "onChange", resolver: zodResolver(validationSchema) });
  const { login , user } = useUser();
  const router=useRouter()
  

  return (
    <form
      onSubmit={handleSubmit((data) =>
        // user.user_id will be null in case of login or signup form but not null in case of update form 
        onSubmit({ ...data, user_id:user?.user_id }, login,router)
      )}
      className="flex flex-col items-center w-full"
    >
      {formFields.map((field) => (
        <InputField
          key={field.id}
          {...field}
          register={register}
          errors={errors}
        ></InputField>
      ))}
      {formType === "LOGIN_FORM" && (
        <Link
          href="/forget-password"
          className="my-4 font-medium text-[14px] text-[#B1B0B8] hover:underline"
        >
          Forget Password?
        </Link>
      )}
      <button
        type="submit"
        disabled={!isValid}
        className="h-14 w-52 text-white font-semibold text-heading-5 rounded-7 block bg-secondary"
      >
        {buttonText}
      </button>
    </form>
  );
}

export default Form;
