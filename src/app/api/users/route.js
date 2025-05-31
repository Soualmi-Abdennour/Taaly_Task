import { usersCollection } from "@/firebase/config";
import { getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";


export const dynamic = 'force-dynamic';


// this route is used by the admin 

export async function GET( req ) {
  const allDocs=(await getDocs(usersCollection)).docs
  const users=allDocs.map(doc=>{
    const user=doc.data()
    user.user_id=doc.id
    delete user.password
    return user
  }) 
  return NextResponse.json(users)
}
