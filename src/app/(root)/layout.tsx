import { isAuthenticated } from '@/lib/actions/auth.action'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import Footer from '../components/Footer'

const RootLayout = async({ children }:{ children: ReactNode} ) => {
  const isUserAuthenticated = await isAuthenticated();

  if(!isUserAuthenticated) redirect('/sign-in');
  return (
    <div className='root-layout'>
      <nav>
        <Link href="/" className='flex items-center gap-2'>
          <Image src="/logo.svg" alt="Logo" width={38} height={32}/>
          <h2 className='text-primary-100'>Prepwise</h2>
        </Link>
      </nav>
      {children}
      <Footer/>
    </div>
  )
}

export default RootLayout