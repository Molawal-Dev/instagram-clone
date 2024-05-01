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
  const [searchModal, setSearchModal] = useState(false)

  return (
    <section className='fixed left-0 top-0 bottom-0 flex h-screen flex-col justify-between bg-dark-2 pl-2 pr-2 text-white  border-r-2 border-gray-600 left-sidebar py-6 z-20'>

      <div className='mb-5 flex items-center justify-start max-lg:justify-center pl-1'>
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

        {/* Search */}
        <div className='flex gap-4 items-center p-3 rounded-lg justify-start w-full max-lg:justify-center min-w-7 hover:bg-gray-700 lg:mr-20 cursor-pointer max-lg:mr-4' 
        onClick={() => setSearchModal(!searchModal)}
        >
          <Image
            src='/icons/search.svg'
            alt='Search'
            width={24}
            height={24}
            className='svg fill-current'
          />
          <p className="text-lg font-semibold max-lg:hidden">
            Search
          </p>
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
      onClick={() => {setMoreModal(!moreModal)}}
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

      {/* Search modal............................*/}
      {
        searchModal && (
          <section className=' bg-dark-2 flex flex-col fixed w-[380px] left-16 top-0 bottom-0 lg:left-14'>

            <div className='border-b border-gray-700 pb-6 p-5'>
              <h1 className=' font-bold text-lg text-white mb-8 ml-1'>Search</h1>

              <div className=' bg-gray-600 rounded-md flex justify-between items-center py-2 px-3'>
                <input 
                  type="text" 
                  placeholder='Search'
                  className=' bg-transparent border-0 outline-none'
                />

                <div className='bg-white rounded-full px-[2px] py-[1px] cursor-pointer'>
                  <Image
                    src='/icons/xmark-solid.svg'
                    alt='cancel'
                    height={9}
                    width={9}
                    className='h-3'
                  />
                </div>
              </div>
            </div>

            <div className='flex flex-col h-full'>
              <p className='font-semibold text-xs text-white ml-6 mt-4'>Recent</p>

              <div className='flex justify-center items-center h-full'>
                <p className='font-semibold text-xs text-gray-500'>No recent searches</p>
              </div>
            </div>
            

          </section>
        )
      }

      {/* more modal */}
      {
        moreModal && (
          <MoreModal />
        )
      }

      {/* Create modal.............. */}
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
      
            <div className='absolute top-3 bg-white rounded-full flex items-center justify-center py-1 px-[6px] h-7 right-10 cursor-pointer'
            onClick={() => setCreateModal(false)}
            >
              <Image
                src='/icons/xmark-solid.svg'
                alt='cancel'
                height={15}
                width={15}
                className=''
              />
            </div>
          </div>
        )
      }

      {/* Notifications modal */}
      {
        showNotifications && (
          <section className=' bg-dark-2 overflow-y-scroll flex flex-col fixed w-[380px] left-16 top-0 bottom-0 p-5 lg:left-14'>
            <h1 className=' font-bold text-lg text-white'>Notifications</h1>

            <div className='text-center text-gray-400 flex justify-center flex-col p-4 gap-4 mt-12 mb-6 text-sm'>
              <p>Activity on Your Posts</p>
              <p className=' leading-5'>When someone likes or comment on one of your posts, youll see it here.</p>
            </div>

            <p>Suggested for you</p>

            <div className='flex-col flex'>
              <NotificationSugg/>
            </div>

          </section>
        )
      }

      
    </section>
  )
}

export default Sidebar
