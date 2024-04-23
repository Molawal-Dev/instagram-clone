import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SmallHeader = () => {
  return (
    <section className='fixed top-0 left-0 justify-between hidden show items-center border-b-2 border-gray-600 px-3 bg-dark-2 w-full z-10'>
      <div className='py-2'>
        <Image
          src='/icons/instalogo.png'
          alt='logo'
          width={120}
          height={120}
          className='svg fill-current'
        />
      </div>
      

      <div className='flex gap-4'>
        <input 
          type="text"
          className=' bg-gray-800 rounded-md p-1 outline-none border-none placeholder:text-gray-500 px-3'
          placeholder='Search'
        />

        <Link href='/root/home/notifications'>
          <Image
            src='/icons/heart.svg'
            alt='heart'
            width={26}
            height={26}
          />
        </Link>
        
      </div>
    </section>
  )
}

export default SmallHeader
