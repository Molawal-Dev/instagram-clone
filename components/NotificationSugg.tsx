import { notificationSugg } from '@/constants'
import Image from 'next/image';
import React from 'react'

interface SugProps {
    name: string;
    fullname: string;
    imgUrl: string;
    action: string;
    status: string;
    blueTick?: boolean;
}

const NotificationSuggCard = ({name, imgUrl, action, status, blueTick, fullname } : SugProps) => {
  return (
    <div className="w-full flex justify-between items-center mt-4 ">
      <div className="flex gap-2 items-center">
        <Image
          src={imgUrl}
          alt="profile Photo"
          width={39}
          height={39}
          className=" rounded-full object-cover"
        />

        <div className="flex flex-col">
          <p className="font-bold text-sm flex gap-1">
            {name} {blueTick && (
                <Image 
                  src='/icons/checked.svg'
                  alt="bluetick"
                  height={12}
                  width={12}
                />
            )}
          </p>
          <p className="text-xs text-gray-400">{fullname}</p>

          <p className="text-xs text-gray-400">{status}</p>
        </div>
      </div>

      <button className='bg-blue-500 px-5 py-2 rounded-lg'>
        <p className=" text-white text-xs">{action}</p>
      </button>
    </div>
  )
}


const NotificationSugg = () => {
  return (
    <>
      {notificationSugg.map((item) => (
        <NotificationSuggCard 
          key={item.name}
          name={item.name}
          fullname={item.fullname}
          imgUrl={item.imgURL}
          status={item.status}
          action={item.action}
          blueTick={item.blueTick}
        />
      ))}
    </>
  )
}

export default NotificationSugg
