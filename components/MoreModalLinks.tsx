import Image from 'next/image';
import React from 'react'

interface modalLinkProps {
  label: string;
  image: string;
  roundedTop?: string;
}
const MoreModalLinks = ({label, image, roundedTop}: modalLinkProps) => {
  return (
    <div className={`flex gap-3 hover:bg-slate-600 px-6 py-4 cursor-pointer transitioning ${roundedTop}`}>
      <Image 
        src={image}
        alt='icon'
        width={20}
        height={20}
      />
      <p>{label}</p>
    </div>
  )
}

export default MoreModalLinks
