import { db, usersCollection } from "@/firebase/config";
import hashPassword from "@/lib/utils/hashPassword";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("user_id");
    const userDocRef = doc(db, "users", userId);
    const storedUser = (await getDoc(userDocRef)).data();
    if (storedUser) {
      return NextResponse.json(storedUser);
    }
    return NextResponse.json({ message: "User not found." }, { status: 404 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong, Please try again." },
      { status: 500 }
    );
  }
}








export async function PUT(req) {
  try {
    const {
      user_id,
      email: submitedEmail,
      password: submitedPassword,
      username: submitedUsername,
      phone_number,
      full_name,
      location,
      highest_education,
      latest_work_experience,
      mother_language,
      other_languages,
      interests,
      bio
    } = await req.json();

    const userDocRef = doc(db, "users", user_id);
    const storedUser = (await getDoc(userDocRef)).data();
    if (storedUser) {
      // we can't not just make ...req.body since the body can include any custom fields (in case it come from external source) and firebase will not handle them 
      await updateDoc(userDocRef, {
        updated_At: new Date(),
        email: submitedEmail ? submitedEmail : storedUser.email,
        password: submitedEmail
          ? await hashPassword(submitedPassword)
          : storedUser.password,
        username: submitedUsername ? submitedUsername : storedUser.username,
        phone_number: phone_number ? phone_number : storedUser.phone_number,
        full_name: full_name ? full_name : storedUser.full_name,
        is_new_user: false,
        location: location ? location : storedUser.location,
        highest_education: highest_education
          ? highest_education
          : storedUser.highest_education,
        latest_work_experience: latest_work_experience
          ? latest_work_experience
          : storedUser.latest_work_experience,
        mother_language: mother_language
          ? mother_language
          : storedUser.mother_language,
        other_languages: other_languages
          ? other_languages
          : storedUser.other_languages,
        interests: interests ? interests : storedUser.interests,
        bio:bio?bio:storedUser.bio
      });
      const { email, username, created_At, updated_At, is_new_user } = (
        await getDoc(userDocRef)
      ).data();
      return NextResponse.json({
        user_id: userDocRef.id,
        email,
        username,
        created_At,
        updated_At,
        is_new_user,
      });
    }
    return NextResponse.json({ message: "User not found." }, { status: 404 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong,Please try again." },
      { status: 500 }
    );
  }
}
