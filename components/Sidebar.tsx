'use client'

import Image from 'next/image';
import Link from 'next/link';
import SidebarLinks from './SidebarLinks';
import { useState } from 'react';
import NotificationSugg from './NotificationSugg';
import MoreModal from './MoreModal';

const Sidebar = () => {

  const [showNotifications, setShowNotifications] = useState(false);
  const [moreModal, setMoreModal] = useState(false);
  const [createModal, setCreateModal] = useState(false)

  return (
    <section className='fixed left-0 top-0 bottom-0 flex h-screen flex-col justify-between bg-dark-2 px-1 text-white  border-r-2 border-gray-600 left-sidebar py-6 z-20'>

      <div className='mb-5 flex items-center justify-start max-lg:justify-center'>
        <Link
          href='/root/home'
        >
          <Image
            src='/icons/instalogo.png'
            alt='logo'
            width={150}
            height={150}
            className='svg fill-current max-lg:hidden'
          />

          <Image
            src='/icons/instalogo-white.svg'
            alt='logo'
            width={30}
            height={30}
            className='svg fill-current lg:hidden'
          />
        </Link>
      </div>

      {/* Navbar Links......................................................... */}
      <div className="flex flex-col gap-[3px] max-lg:gap-[12px]">
        <div>
          <SidebarLinks
            href='/root/home'
            source='/icons/home.svg'
            alt='Home'
            title='Home'
          />
        </div>
        <div>
          <SidebarLinks
            href=''
            source='/icons/search.svg'
            alt='Search'
            title='Search'
          />
        </div>
        <div>
          <SidebarLinks
            href='/root/home/explore'
            source='/icons/compass.svg'
            alt='Explore'
            title='Explore'
          />
        </div>
        <div>
          <SidebarLinks
            href='/root/home/reels'
            source='/icons/reels.png'
            alt='Reels'
            title='Reels'
          />
        </div>
        <div>
          <SidebarLinks
            href='/root/home/messages'
            source='/icons/send.svg'
            alt='Messages'
            title='Messages'
          />
        </div>
          
        {/* Notifications */}
        <div className='flex gap-4 items-center p-3 rounded-lg justify-start w-full max-lg:justify-center min-w-7 hover:bg-gray-700 lg:mr-20 cursor-pointer max-lg:mr-4' 
        onClick={() => setShowNotifications(!showNotifications)}
        >
          <Image
            src='/icons/heart.svg'
            alt='Notifications'
            width={24}
            height={24}
            className='svg fill-current'
          />
          <p className="text-lg font-semibold max-lg:hidden">
            Notifications
          </p>
        </div>

        {/* Create */}
        <div className='flex gap-4 items-center p-3 rounded-lg justify-start w-full max-lg:justify-center min-w-7 hover:bg-gray-700 lg:mr-20 cursor-pointer max-lg:mr-4' 
        onClick={() => setCreateModal(true)}
        >
          <Image
            src='/icons/plus.svg'
            alt='create'
            width={24}
            height={24}
            className='svg fill-current'
          />
          <p className="text-lg font-semibold max-lg:hidden">
            Create
          </p>
        </div>

        <div>
          <SidebarLinks
            href='/root/home/profiles'
            source='/icons/profile1.svg'
            alt='Profiles'
            title='Profiles'
          />
        </div>
      </div>

      {/* More.................................................*/}
      <div className='flex gap-4 items-center p-3 rounded-lg justify-start w-full max-lg:justify-center min-w-7 lg:mr-20 max-lg:mr-4 cursor-pointer' 
      onClick={() => {
        setMoreModal(!moreModal)
      }}
      >
        <Image
          src='/icons/hamburger.svg'
          alt='hamburger'
          width={25}
          height={25}
          className='svg fill-current'
        />
        <p className="text-lg font-semibold max-lg:hidden">
          More
        </p>
      </div>

      {/* more modal */}
      {
        moreModal && (
          <MoreModal />
        )
      }

      {/* Create modal */}
      {
        createModal && (
          <div className='absolute bg-black w-screen h-screen top-0 flex items-center justify-center bg-opacity-70 text-sm'>
            <div className=' bg-gray-800 flex flex-col rounded-lg w-[400px] h-[460px]'>
              <div className=' border-b-2 border-gray-600 rounded-t-lg flex justify-center py-2'>
                Create new Post
              </div>

              <div className='flex flex-col justify-center items-center gap-3 h-full'>
                <div>
                  <Image 
                    src='/icons/image-gallery.svg'
                    alt='image'
                    height={50}
                    width={50}
                  />
                </div>
                <p>Drag Photos and videos here</p>
                <button className='bg-blue-600 text-white text-xs p-2 rounded-lg'>Select from computer</button>
              </div>
            </div>
      
            <div className='absolute top-3 bg-white rounded-full flex items-center justify-center p-1 h-7 right-10 cursor-pointer'
            onClick={() => setCreateModal(false)}
            >
              <Image
                src='/icons/xmark-solid.svg'
                alt='cancel'
                height={20}
                width={20}
              />
            </div>
          </div>
        )
      }
    </section>
  )
}

export default Sidebar
