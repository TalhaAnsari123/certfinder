import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='w-full pl-3 pr-3 h-[60px] bg-gray-300'>
        <nav>
            <div className='flex justify-between items-center'>
                <Image src="/assets/logo.png" alt="GL" width={100} height={100}/>
                <Link href="/" className='text-sm mr-4 '>Login</Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar