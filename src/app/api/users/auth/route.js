import { usersCollection } from "@/firebase/config";
import generateToken from "@/lib/utils/generateToken";
import { getDocs, limit, query, where } from "firebase/firestore";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";


export async function POST(req) {
  const { email:submitedEmail, password:submitedPassword } = await req.json();
  if (!submitedEmail || !submitedPassword)
    return NextResponse.json(
      { message: "Missing required fields." },
      {
        status: 400,
      }
    );
  const userExists = (
    await getDocs(
      query(usersCollection, where("email", "==", submitedEmail), limit(1))
    )
  ).docs[0];
  
  if (userExists?.exists()) {
    const {password: storedPassword} = userExists.data();
    const isPasswordCorrect = await bcrypt.compare(
      submitedPassword,
      storedPassword
    );
    if (isPasswordCorrect) {
      const { email, username, created_At, updated_At, is_new_user } =
        userExists.data();
      const token =await generateToken({user_id:userExists.id});
      const cookieStore=cookies()
      cookieStore.set("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite:"strict",
        maxAge:30*24*60*60
      });
      return NextResponse.json(
        {
          user_id: userExists.id,
          email,
          username,
          created_At:created_At.toDate(),
          updated_At: updated_At.toDate(),
          is_new_user,
        },
        {
          status: 201,
        }
      );
    } else {
      return NextResponse.json(
        { message: "Incorrect Password." },
        { status: 401 }
      );
    }
  } else {
    return NextResponse.json({ message: "User not found." }, { status: 404 });
  }
}
