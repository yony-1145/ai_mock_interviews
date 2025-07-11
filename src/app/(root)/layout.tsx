import { isAuthenticated } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import Footer from '../components/Footer'
import { Button } from '@/components/ui/button'
import LogoutButton from '../components/LogoutButton'
import { Toaster } from 'sonner'
import ChatBot from '../components/ChatBot'

const RootLayout = async({ children }:{ children: ReactNode} ) => {
  const isUserAuthenticated = await isAuthenticated();

  if(!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className='root-layout'>
      <nav className="flex justify-between items-center px-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Logo" width={38} height={32}/>
          <h2 className='text-primary-100'>Prepwise</h2>
        </Link>
        <LogoutButton />
      </nav>
      {children}
      <Footer/>
      <Toaster />
      <ChatBot />
    </div>
  )
}

export default RootLayout