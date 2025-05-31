import { adminsCollection } from "@/firebase/config";
import generateToken from "@/lib/utils/generateToken";
import bcrypt from "bcryptjs";
import { getDocs } from "firebase/firestore";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const dynamic = 'force-dynamic';


export async function POST(req) {
  const { email: submitedEmail, password: submitedPassword } = await req.json();
  if (!submitedEmail || !submitedPassword)
    return NextResponse.json(
      { message: "Missing required fields." },
      {
        status: 400,
      }
    );
  const admin =  (await getDocs(adminsCollection)).docs[0]

  if (admin?.exists()) {
    const { password: storedPassword } = admin.data();
    const isPasswordCorrect = await bcrypt.compare(
      submitedPassword,
      storedPassword
    );
    if (isPasswordCorrect) {
      const { email, username, created_At, updated_At,  } =admin.data();      
      const token =await generateToken({admin_id:admin.id});
      const cookieStore = cookies();
      cookieStore.set("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 30 * 24 * 60 * 60,
      });
      return NextResponse.json(
        {
          admin_id: admin.id,
          email,
          username,
          created_At: created_At.toDate(),
          updated_At: updated_At.toDate(),
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
    return NextResponse.json({ message: "Admin not found." }, { status: 404 });
  }
}
