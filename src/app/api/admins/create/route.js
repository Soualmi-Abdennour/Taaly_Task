import { adminsCollection } from "@/firebase/config";
import generateToken from "@/lib/utils/generateToken";
import hashPassword from "@/lib/utils/hashPassword";
import { addDoc, getDoc, getDocs } from "firebase/firestore";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


// this route is consumed only one from Postman to creat an admin
export async function POST(req) {
  const { email: submitedEmail, password: submitedPassword } = await req.json();
  if (!submitedEmail || !submitedPassword)
    return NextResponse.json(
      { message: "Missing required fields." },
      {
        status: 400,
      }
    );

  const admins = await getDocs(adminsCollection)
  if (admins.empty){
    const hashedPassword = await hashPassword(submitedPassword);
    try {
        const adminRef = await addDoc(adminsCollection, {
          email: submitedEmail,
          username: "admin",
          password: hashedPassword,
          created_At: new Date(),
          updated_At: new Date(),
        });
        const { email, username, created_At, updated_At } = (
          await getDoc(adminRef)
        ).data();
        const token =await generateToken({admin_id:adminRef.id});
        const cookieStore = cookies();
        cookieStore.set("jwt", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          maxAge: 30 * 24 * 60 * 60,
        });
        return NextResponse.json(
            {
              admin_id: adminRef.id,
              email,
              username,
              created_At: created_At.toDate(),
              updated_At: updated_At.toDate(),
            },
            {
              status: 201,
            }
          );
  } catch (error) {
    // for security consideration I don't return the server error message instead just a basic message

    return NextResponse.json(
      { message: "Something went wrong, please try again." },
      {
        status: 500,
      }
    );
  }
}
// we only create one admin to prevent future consuming from external resources (this is non protected route)
return NextResponse.json({message:"Admin Already Created."},{
    status:400
})
}
  

  

