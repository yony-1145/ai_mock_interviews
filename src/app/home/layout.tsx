import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

const HomeLayout = async({ children }:{ children: ReactNode} ) => {
  return (
    <div className='home-layout'>
        <nav className="w-full flex justify-between items-center">
            <Link href="/home" className='flex items-center gap-2'>
                <Image src="/logo.svg" alt="Logo" width={38} height={32}/>
                <h2 className='text-primary-100'>Prepwise</h2>
            </Link>
            <div className="space-x-4">
                <Link href="/sign-in" className='text-primary-100 text-2xl font-semibold'>
                    Sign in
                </Link>
                <Link href="/sign-up" className='text-primary-100 text-2xl font-semibold'>
                    Sign up
                </Link>
            </div>
        </nav>
      {children}
    </div>
  )
}

export default HomeLayout