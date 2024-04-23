import Image from 'next/image'
import React from 'react'
import MoreModalLinks from './MoreModalLinks'

const MoreModal = () => {
  return (
    <div className='flex flex-col bg-slate-800 rounded-xl absolute bottom-20 left-5 max-lg:mr-0 w-72'>
      <div className='flex flex-col'>
        <MoreModalLinks 
          label='Settings'
          image='/icons/Settings.svg'
          roundedTop='rounded-t-xl'
        />
        <MoreModalLinks 
          label='Activity'
          image='/icons/activity.png'
        />
        <MoreModalLinks 
          label='Saved'
          image='/icons/save.svg'
        />
        <MoreModalLinks 
          label='Switch Appearance'
          image='/icons/Moon.svg'
        />
        <MoreModalLinks 
          label='Report a problem'
          image='/icons/warning.svg'
        />
      </div>

      <div className='bg-gray-700 h-[6px]'></div>

      <MoreModalLinks 
        label='Threads'
        image='/icons/threads.svg'
      />

      <div className='bg-gray-700 h-[4px]'></div>

      <div className='p-6 py-4 hover:bg-slate-600 cursor-pointer transitioning'>
        <p>Switch account</p>
      </div>

      <div className='bg-gray-700 h-[2px]'></div>

      <div className='p-6 py-4 hover:bg-slate-600 rounded-b-xl cursor-pointer transitioning'>
        <p>Log out</p>
      </div>
    </div>
  )
}

export default MoreModal
