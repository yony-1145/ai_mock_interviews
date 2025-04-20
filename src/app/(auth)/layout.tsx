import React from 'react'

function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='auth-layout'>
      {children}
      {/* <Toaster /> */}
    </div>
  )
}

export default AuthLayout