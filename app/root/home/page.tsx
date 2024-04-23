'use client'

import React from 'react'
import { rightSidebarLinks, statusPics } from '@/constants'
import Suggestions from '@/components/Suggestions'
import StatusGallery from '@/components/StatusGallery'
import Image from 'next/image'
import PostCard from '@/components/PostCard'
import SmallHeader from '@/components/SmallHeader'
import NotificationSugg from '@/components/NotificationSugg'

const page = () => {

  const scroll = (direction : string) => {
    const slider = document.getElementsByClassName('sliderDiv')[0];

    if(direction === 'left'){
      slider.scrollBy(-75, 0);
    }else {
      slider.scrollBy(78, 0);
    }
  }


  return (
    <section className='flex gap-10'>
      <div className='flex-col flex-1 justify-center marginTop-down'>
        <SmallHeader />
        

        <div className='flex items-center justify-center relative py-3 w-[600px] z-0'>
          <div className='flex items-center overflow-x-scroll no-scrollbar gap-3 stat-transition scroll-smooth sliderDiv'>
            {
              statusPics.map((pic) => (
                <StatusGallery 
                  key={pic.name}
                  name={pic.name}
                  src={pic.imgURL}
                />
              ))
            }
          </div>

          <div className='flex absolute justify-between items-center w-full px-2 bottom-[56px] max-sm:hidden'>
            <div className='bg-white rounded-full'>
              <Image
                src='/icons/arrow-left.svg'
                alt='arrow-left'
                height={20}
                width={20}
                onClick={() => scroll('left')}
                className=' cursor-pointer'
              />
            </div>
            <div className='bg-white rounded-full'>
              <Image
                src='/icons/arrow-right.svg'
                alt='arrow-right'
                height={20}
                width={20}
                onClick={() => scroll('right')}
                className=' cursor-pointer'
              />
            </div>
          </div>
        </div>

        {/* ......................................... */}
        <section className='flex flex-col items-center'>
          <PostCard />
        </section>
      </div>

      {/* Right sidebar................... */}
      <div className='flex flex-col h-screen items-start bg-dark-2 text-white w-[350px] right-sidebar mt-2' >

          <Suggestions 
            name='mohlawal'
            imgUrl='/images/r3.jpg'
            status='Lawal'
            action='Switch'
          />
        
        <div className='w-full mb-3 mt-5'>
          <div className='flex justify-between text-sm font-semibold'>
            <p className=' text-gray-300'>Suggested for you</p>
            <p>See All</p>
          </div>

          <div>
            {rightSidebarLinks.map((link) => (
              <Suggestions 
                key={link.name}
                blueTick={link.blueTick}
                name={link.name}
                imgUrl={link.imgURL}
                status={link.status}
                action={link.action}
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col text-gray-500 text-xs gap-4 w-full mt-8'>
          <p>About.Help.Press.API.Jobs.Privacy.Terms.Locations.Language.Meta Verified</p>
          
          <p>&copy; 2024 INSTAGRAM FROM META</p>
        </div>
      </div>
    </section>
  )
}

export default page
