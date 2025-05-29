import { db } from "@/firebase/config"
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore"
import { NextResponse } from "next/server"

// these routes are used by the  admin 


// delete does not consumed 
export async function DELETE(req, { params }) {
  const {userId}=params
  const userDocRef=doc(db,"users",userId) 
  const storedUser =(await getDoc(userDocRef)).data()
  if(storedUser){
    await deleteDoc(userDocRef)
    return NextResponse.json({message:"User removed successfully."})
  }
  else {
    return NextResponse.json({message:"User not found."},{status:404})
  }
}

// update does not consumed 
export  async function PUT(req,{params}) {
  const {userId}=params
  const {  email } = await req.json();
  const userDocRef = doc(db, "users", userId);
  const storedUser = (await getDoc(userDocRef)).data();
  if (storedUser) {
    await updateDoc(userDocRef, {
      email: email ? email : storedUser.email,
    });
    const updatedUser = (await getDoc(userDocRef)).data();
    delete updatedUser.password;
    return NextResponse.json(updatedUser);
  }
  return NextResponse.json({ message: "User not found." }, { status: 404 });
}


export async function GET( req ,{params}) {  
  const { userId } = params;
  const userDocRef = doc(db, "users", userId);
  const storedUser = (await getDoc(userDocRef)).data();
  if(storedUser){
    delete storedUser.password
    return NextResponse.json(storedUser)
  }
  return NextResponse.json({message:"User not found."},{status:404})
}