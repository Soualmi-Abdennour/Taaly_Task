import { IMPACT_MEASURMENTS, USER_SCHEMA } from "@/constants/constants";
import { usersCollection } from "@/firebase/config";
import generateToken from "@/lib/utils/generateToken";
import hashPassword from "@/lib/utils/hashPassword";
import { addDoc, getDoc, getDocs, query, where } from "firebase/firestore";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email: submitedEmail, password: submitedPassword } = await req.json();
  if (!submitedEmail || !submitedPassword)
    return NextResponse.json(
      { message: "Missing required fields." },
      {
        status: 400,
      }
    );

  const userExists = (
    await getDocs(query(usersCollection, where("email", "==", submitedEmail)))
  ).empty;
  if (!userExists)
    return NextResponse.json(
      { message: "User already exists." },
      {
        status: 400,
      }
    );
  const hashedPassword = await hashPassword(submitedPassword);

  try {
    const userRef = await addDoc(usersCollection, {
      ...USER_SCHEMA,email:submitedEmail,password:hashedPassword,created_At:new Date(),updated_At:new Date()
    });

    const { email, username, created_At, updated_At, is_new_user } = (
      await getDoc(userRef)
    ).data();    
    const token =await generateToken({user_id:userRef.id});
    const cookieStore=cookies()
          cookieStore.set("jwt", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite:"strict",
            maxAge:30*24*60*60
          });

    return NextResponse.json(
      {
        user_id: userRef.id,
        email,
        username,
        created_At: created_At.toDate(),
        updated_At: updated_At.toDate(),
        is_new_user,
      },
      {
        status: 201,
      }
    );
  } catch (error) {    
    // for security consideration I don't return the actual  error message instead just a basic message
    return NextResponse.json(
      { message: "Something went wrong, please try again." },
      {
        status: 500,
      }
    );
  }
}
