import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST({ req }) {
    const cookieStore=cookies()
            cookieStore.delete("jwt");
  return NextResponse.json(
    { message: "Logged out successfully" },
    {
      status: 200,
      headers: {
        "Set-Cookie": `jwt=""; HttpOnly; Expires=${new Date(0)}`,
      },
    }
  );
}
