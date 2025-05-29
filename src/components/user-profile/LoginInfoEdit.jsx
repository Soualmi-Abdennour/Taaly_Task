import Image from "next/image";
import React from "react";
import Form from "../Form";


function LoginInfoEdit({user}) {
  const {profile_img}=user
  return (
    <aside className="flex flex-col items-center rounded-16 bg-primary p-10 gap-8">
      <h2 className="text-heading-2 font-semibold text-body">
        Your Login Informations
      </h2>
      <Image
        src={profile_img}
        width={200}
        height={200}
        className="rounded-full border-4 border-primary"
      ></Image>
      <Form formType="UPDATE_LOGIN_DATA_FORM"></Form>
    </aside>
  );
}

export default LoginInfoEdit;
