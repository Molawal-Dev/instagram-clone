import Image from 'next/image'
import React from 'react'
import SidebarLinks from './SidebarLinks'

const SmallHeader = () => {
  return (
    <section className='fixed bottom-0 left-0 justify-between hidden show items-center border-t-2 border-gray-600 px-3 bg-dark-2 w-full z-10'>
          <SidebarLinks
            href='/root/home'
            source='/icons/home.svg'
            alt='Home'
            title='Home'
          />
          <SidebarLinks
            href='/root/home/explore'
            source='/icons/compass.svg'
            alt='Explore'
            title='Explore'
          />
          <SidebarLinks
            href='/root/home/reels'
            source='/icons/reels.png'
            alt='Reels'
            title='Reels'
          />
          <SidebarLinks
            href='/root/home/messages'
            source='/icons/send.svg'
            alt='Messages'
            title='Messages'
          />
          <SidebarLinks
            href=''
            source='/icons/plus.svg'
            alt='Create'
            title='Create'
          />
          <SidebarLinks
            href='/root/home/profiles'
            source='/icons/profile1.svg'
            alt='Profiles'
            title='Profiles'
          />
    </section>
  )
}

export default SmallHeader
