import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import React from 'react'
import { Toaster } from 'sonner'
import GoogleSignInButton from '../components/GoogleSignInButton';

const AuthLayout = async ({children}: {children: React.ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated();

  if(isUserAuthenticated) redirect('/');

  return (
    <div className='auth-layout'>
      {children}
      <GoogleSignInButton />
      <Toaster />
    </div>
  )
}

export default AuthLayout