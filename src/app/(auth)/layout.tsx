import React from 'react'

function AuthLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='auth-layout'>{children}</div>
  )
}

export default AuthLayout