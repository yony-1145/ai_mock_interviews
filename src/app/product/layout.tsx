import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'
import Footer from '../components/Footer'
import ChatBot from '../components/ChatBot'

const HomeLayout:any = async({ children }:{ children: ReactNode} ) => {
  return (
    <div className='home-layout'>
        <nav className="w-full flex items-center justify-between">
          <Link href="/product" className="flex items-center gap-2">
            <Image src="/logo.svg" alt="Logo" width={38} height={32}/>
            <h2 className="text-primary-100">Prepwise</h2>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/sign-in" className="hover:underline">
              <span className='text-primary-100'>Sign In</span>
            </Link>
            <Link href="/" className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              <span className='text-primary-100'>Get Started</span>
            </Link>
          </div>
        </nav>
      {children}
      <ChatBot />
      <Footer/>
    </div>
  )
}

export default HomeLayout