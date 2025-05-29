"use client"
import { USER_INFO_FIELDS } from "@/constants/constants";
import { USERS_URL } from "@/constants/routes";
import { useUser } from "@/providers/UserContextProvider";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { LuArrowLeft } from "react-icons/lu";

function UserInfoSideBar({user}) {
  const { user: ContextUser, logout } = useUser();
  const router = useRouter();

  const {
    profile_img,
    bio,
    full_name,
    email,
    phone_number,
    location,
    highest_education,
    latest_work_experience,
  } = user;
  // create array so we can map every field label from USER_INFO_FIELDS to the correspond db value based on index
  //  the following array elements must be this order
  const details = [
    email,
    phone_number,
    location,
    highest_education,
    latest_work_experience,
  ];

  const handleLogout = async () => {
    await axios.post(`${USERS_URL}/logout`);
    logout();
    router.push("/login");
  };

  return (
    <aside className="bg-primary w-full rounded-16 pt-12 px-8 pb-8">
      <div className="mb-4 flex items-center gap-10 -ml-4 ">
        {/* show the back to dashboard button for the admin  */}
        {ContextUser?.admin_id && (
          <Link href={"/dashboard"}>
            <LuArrowLeft size={32} color="#04001A"></LuArrowLeft>
          </Link>
        )}
        <h2 className="text-heading-1 font-medium text-body">{full_name}</h2>
      </div>
      <Image
        src={profile_img}
        className="mb-4 mx-auto border-4 border- border-secondary-color rounded-full"
        width={130}
        height={130}
      ></Image>
      <div className="text-center mb-5">
        <h2 className="text-heading-4 font-medium text-black">Bio</h2>
        <p className="text-heading-6 font-medium text-black">“{bio}”</p>
      </div>
      <div className="flex flex-col gap-3.5 items-start mb-10">
        {USER_INFO_FIELDS.map((field, index) => (
          <div key={field.label} className="flex flex-col items-start gap-2">
            <h2 className="flex items-center justify-center gap-5 ">
              {field.icon}
              <span className="text-heading-4 text-body font-medium">
                {field.label}
              </span>
            </h2>
            <p className="text-heading-6 font-semibold text-neutrals">
              {details[index]}
            </p>
          </div>
        ))}
      </div>
      {/* display the logout and edit buttons for the user  */}
      {ContextUser?.user_id && (
        <div className="flex items-center justify-between w-full">
          <Link
            href={"/profile/edit"}
            className="text-white font-semibold text-heading-6 rounded-14 py-4 text-center w-24 bg-secondary"
          >
            Edit
          </Link>
          <button
            onClick={handleLogout}
            className="text-white  text-heading-6 py-4 font-semibold text-center w-24 bg-secondary rounded-14"
          >
            Logout
          </button>
        </div>
      )}
    </aside>
  );
}

export default UserInfoSideBar;
