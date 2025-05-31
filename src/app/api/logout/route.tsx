import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const cookieStore = await cookies();

   cookieStore.set({
    name: "session",
    value: "",
    path: "/",
    maxAge: 0,
  });

  return NextResponse.json({ success: true, message: "Logged out successfully" });
}
