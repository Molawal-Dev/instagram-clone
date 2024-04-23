import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface SideLinkProps { 
    href: string;
    source: string;
    alt: string;
    title: string;
}

const SidebarLinks = ({ href, source, alt, title}: SideLinkProps) => {
  return (
      <Link 
        href={href}       
      >
        <div className='flex gap-4 items-center p-3 rounded-lg justify-start w-full max-lg:justify-center min-w-7 hover:bg-gray-700 lg:mr-20 max-lg:mr-4 transitioning'>
            <Image
              src={source}
              alt={alt}
              width={24}
              height={24}
              className='svg fill-current'
            />
            <p className="text-lg font-semibold max-lg:hidden">
              {title}
            </p>
        </div>
      </Link>
  )
}

export default SidebarLinks
