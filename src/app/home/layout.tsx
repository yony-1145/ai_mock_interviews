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
            <div className="">
              <Link
              href="/sign-in"
              className="inline-block px-8 py-4 text-gray-300"
              >
              Sign In
              </Link>
              <Link
              href="/"
              className="inline-block px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
              Get Started
              </Link>
            </div>
        </nav>
      {children}
    </div>
  )
}

export default HomeLayout