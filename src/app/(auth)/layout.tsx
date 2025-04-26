import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import React from 'react'
import { Toaster } from 'sonner'

function AuthLayout({children}: {children: React.ReactNode}) {
  const isUserAuthenticated = isAuthenticated();

  if(!isUserAuthenticated) redirect('/');

  return (
    <div className='auth-layout'>
      {children}
      <Toaster />
    </div>
  )
}

export default AuthLayout