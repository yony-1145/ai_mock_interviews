import { auth } from "@/app/firebase/admin";
import { cookies } from "next/headers";

const ONE_WEEK = 60 * 60 * 24 * 7;
const ONE_WEEK_MS = 1000 * 60 * 60 * 24 * 7;

export async function setSessionCookies(idToken: string) {
  const cookieStore = await cookies();

  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: ONE_WEEK_MS,
  })

  cookieStore.set('session', sessionCookie, {
    maxAge: ONE_WEEK, 
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    sameSite: 'lax'
  })
}