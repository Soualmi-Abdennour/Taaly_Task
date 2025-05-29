"use client";
import { INTERESTS, LANGUAGES } from "@/constants/constants";
import { GENERAL_INFO_FORM } from "@/lib/forms/generalInfoForm";
import { useUser } from "@/providers/UserContextProvider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import LangField from "../LangField";
import { useRouter } from "next/navigation";

function GeneralInfoEdit({user}) {
  // destructing data coming from the DB 
  const {
    latest_work_experience,
    full_name,
    highest_education,
    phone_number,
    bio,
    location,
    mother_language,
    other_languages,
    interests:storedInterests
  } = user;

  const { formFields, buttonText, validationSchema, onSubmit ,redirectURL} =GENERAL_INFO_FORM;
  
  // setting-up default data stored in the db 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange",defaultValues:{
    latest_work_experience,
    full_name,
    highest_education,
    phone_number,
    bio,
    location
  }, resolver: zodResolver(validationSchema) });

  const [motherLanguage, setMotherLanguage] = useState(mother_language[0]);
  const [otherLanguages, setOtherLanguages] = useState(other_languages);
  const [interests, setInterests] = useState(storedInterests);
  
  
  
  const router=useRouter()
  const { login, user:ContextUser } = useUser();


  const handleMotherLangSelection = ({ currentTarget: { value } }) => {
    // remove the selected lang 
    if (motherLanguage === value) {
      setMotherLanguage(null);
    } else {
      setMotherLanguage(value);
    }
  };
  const handleOtherLangSelection = ({ currentTarget: { value } }) => {
    // remove a selected lang 
    if (otherLanguages.includes(value)) {
      setOtherLanguages(otherLanguages.filter((lang) => lang !== value));
    } else {
      // limit the user to 3 langs 
      if (otherLanguages.length !== 3) {
        setOtherLanguages((prev) => [...prev, value]);
      }
    }
  };
  const handleInterestsSelection = ({ currentTarget: { value } }) => {
    // remove a selected interest
    if (interests.includes(value)) {
      setInterests(interests.filter((inter) => inter !== value));
    } else {
      // limit the user to 3 interests
      if (interests.length !== 3) {
        setInterests((prev) => [...prev, value]);
      }
    }
  };

  // prepare and format data 
  const collectData = (data, motherLanguage, otherLanguages, interests) => {
    return {
      user_id:ContextUser.user_id,
      ...data,
      interests: interests.length > 0 ? interests : null,
      other_languages: otherLanguages.length > 0 ? otherLanguages : null,
      // store the motherLanguage as array so I can render it using the map function in the UserLangsInof component
      mother_language: motherLanguage && [motherLanguage],
    };
  };



  return (
    <div>
      <h1 className="text-heading-1 text-body font-bold mb-10">
        Please take some time to setup your profile
      </h1>
      <h2 className="text-heading-2 text-body font-semibold mb-7">
        Your General Informations
      </h2>
      <form
        onSubmit={handleSubmit((data) =>
          onSubmit(collectData(data, motherLanguage, otherLanguages, interests),login,router)
        )}
        className="flex flex-col gap-16"
      >
        <div className="grid grid-cols-2 gap-3">
          {formFields.map((field) => (
            <InputField
              key={field.id}
              {...field}
              register={register}
              errors={errors}
            ></InputField>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <label
            htmlFor="bio"
            className="font-semibold text-heading-5 text-black"
          >
            Share a brief description about yourself (max 200 char)
          </label>
          <textarea
            id="bio"
            rows={6}
            {...register("bio")}
            className="resize-none placeholder:font-medium text-heading-5 text-neutrals w-full border-1 border-neutrals rounded-lg py-[14px] px-5"
            placeholder="Tell us about yourself..."
          ></textarea>
          {errors.bio && (
            <span className="text-red-500 text-base font-medium">
              {errors.bio.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <label
            htmlFor="mother-language"
            className="font-semibold text-heading-5 text-black"
          >
            Select Your Mother Language
          </label>
          <div id="mother-language" className="flex gap-5 flex-wrap">
            {LANGUAGES.map((lang) => (
              <button
                type="button"
                value={lang.label}
                key={lang.label}
                onClick={handleMotherLangSelection}
              >
                <LangField
                  {...lang}
                  bgColor={motherLanguage === lang.label && "bg-secondary"}
                  textColor={motherLanguage === lang.label && "text-white"}
                ></LangField>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label
            htmlFor="mother-language"
            className="font-semibold text-heading-5 text-black"
          >
            Select Other Languages You Know (max 3)
          </label>
          <div id="mother-language" className="flex gap-5 flex-wrap">
            {LANGUAGES.map((lang) => (
              <button
                type="button"
                value={lang.label}
                key={lang.label}
                onClick={handleOtherLangSelection}
              >
                <LangField
                  key={lang.label}
                  {...lang}
                  bgColor={
                    otherLanguages.includes(lang.label) && "bg-secondary"
                  }
                  textColor={
                    otherLanguages.includes(lang.label) && "text-white"
                  }
                ></LangField>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <label
            htmlFor="mother-language"
            className="font-semibold text-heading-5 text-black"
          >
            Select Your interests (max 3)
          </label>
          <div id="mother-language" className="flex gap-5 flex-wrap">
            {INTERESTS.map((inter) => (
              <button
                type="button"
                value={inter.label}
                key={inter.label}
                onClick={handleInterestsSelection}
              >
                <LangField
                  key={inter.label}
                  {...inter}
                  bgColor={interests.includes(inter.label) && "bg-secondary"}
                  textColor={interests.includes(inter.label) && "text-white"}
                ></LangField>
              </button>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="ml-auto h-14 w-52 text-white font-semibold text-heading-5 rounded-7 block bg-secondary"
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default GeneralInfoEdit;
