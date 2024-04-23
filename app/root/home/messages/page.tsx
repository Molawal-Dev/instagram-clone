import Image from 'next/image'
import React from 'react'

const MessagesPage = () => {
  return (
    <section className='flex h-screen w-full'>
      {/* left container */}
      <div className='flex flex-col border-r-2 border-gray-500 flex-1 max-w-[370px] left-container'>
        {/* upper div */}
        <div className=' p-5'>
          <div className='flex text-white justify-between items-center mb-16'>
            <p className='flex gap-2 font-bold hide'>muhammedlawal
              <Image 
                src='/icons/down-arrow.svg'
                alt='arrow'
                height={10}
                width={10}
              />
            </p>

            <Image 
              src='/icons/edit.svg'
              alt='edit'
              height={20}
              width={20}
            />
          </div>

          {/* profile image and your note */}
          <div className='flex items-start w-20 hide'>
            <div className='flex flex-col items-center'>
              <div className='relative'>
                <Image
                  src='/icons/profile1.svg'
                  alt='profile'
                  width={60}
                  height={60}
                />

                <div className='py-2 px-1 bg-gray-700 rounded-lg text-[12px] absolute -top-7 text-white'>Note..</div>
                <div className='bg-gray-700 rounded-full absolute -top-[2px] left-2 w-3 h-3'></div>
                <div className='bg-gray-700 rounded-full absolute top-[13px] left-4 w-1 h-1'></div>
              </div>

              <p className='text-xs text-gray-500'>Your note</p>
            </div>
          </div>
          

          <div className='mt-5 flex justify-between hide'>
            <p className='text-white font-bold text-sm'>Messages</p>
            <p className='text-gray-500 text-sm'>Requests</p>
          </div>
        </div>

        {/* Lower div */}
        <div className='flex items-center justify-center text-white overflow-y-scroll h-full'>
          <p className='hide'>No messages found.</p>
        </div>
      </div>

      {/* Right container */}
      <div className='flex flex-col justify-center items-center gap-5 flex-1 overflow-y-scroll'>
        <div className='border-2 border-white rounded-full flex justify-center items-center p-4'>
          <Image
            src='/icons/fb-messenger.svg'
            alt='message'
            width={40}
            height={40}
          />
        </div>

        <div className='flex flex-col justify-center items-center gap-2'>
          <p className='text-white'>Your messages</p>
          <p className='text-white text-center'>Send private photos and messages to a friend or group</p>
          <button className='p-2 bg-blue-500 text-white rounded-lg'>
            Send messsage
          </button>
        </div>
      </div>
    </section>
  )
}

export default MessagesPage
