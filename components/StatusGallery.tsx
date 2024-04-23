import Image from 'next/image';
import React from 'react'

interface SGProps {
    name: string;
    src: string;
}

const StatusGallery = ({ name, src }: SGProps) => {
  return (
    <div className='text-white flex flex-col items-center justify-center gap-2 min-w-16'>
      <div className='bg-white rounded-full p-[3px] sliderImagesDiv'>
        <Image 
          src={src}
          alt='Profile Pic'
          width={60}
          height={60}
          className='rounded-full'
        />
      </div>

      <p className='text-xs'>{name}</p>
    </div>
  )
}

export default StatusGallery
