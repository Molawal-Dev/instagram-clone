import { posts } from '@/constants'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface postCardProps {
  name: string;
  profilePic: string;
  bluetick: boolean;
  duration: string;
  bigImage: string;
  likes: string;
  more: boolean;
  comments: string;
  description: string;
}

const Card = ({name, profilePic, bluetick, duration, bigImage, likes, more, comments, description }: postCardProps) => {
  return(
    <div className='flex flex-col mt-2 border-b-2 border-b-gray-700 gap-3 py-3 max-w-[470px]'>
      <div className='flex justify-between'>
        <div className='flex gap-2 justify-center items-center'>
          <Image
            src={profilePic}
            alt='profilepic'
            height={32}
            width={32}
            className='rounded-full'
          />

          <p className='text-sm flex text-white gap-1 justify-center items-center'>{name}
            {bluetick && (
              <Image 
                src='/icons/checked.svg'
                alt=""
                height={12}
                width={12}
              />
            )}

            <p className='mx-[4px] text-lg font-bold'>&middot;</p>
            
            <span className=' text-gray-500 text-xs'>{duration}</span>
          </p> 
        </div>
        
        <Link href='' className='flex items-center gap-[0.6px]'>
          <Image
            src='/icons/more-horizontal.svg'
            alt=''
            height={14}
            width={14}
          />
        </Link>
      </div>
      
      {/* .................................................. */}
      <div className='flex justify-center items-center object-contain rounded-md'>
        <Image
          src={bigImage}
          alt='image'
          width={400}
          height={400}
          className='rounded-md'
        />
      </div>
      {/* .................................................... */}

      <div className='flex flex-col gap-[6px]'>
        <div className='flex justify-between'>
          <div className='flex gap-3'>
            <Image
              src='/icons/heart.svg'
              alt=''
              height={22}
              width={22}
            />
            <Image
              src='/icons/message-circle.svg'
              alt=''
              height={22}
              width={22}
              className=''
            />
            <Image
              src='/icons/send.svg'
              alt=''
              height={22}
              width={22}
            />
          </div>

          <div>
            <Image
              src='/icons/save.svg'
              alt=''
              height={24}
              width={24}
            />
          </div>
        </div>

        <div className='flex text-white justify-start gap-2 text-sm items-center '>
          <Image
            src={profilePic}
            alt=''
            height={14}
            width={14}
            className='rounded-full'
          />
          <p>{likes} likes</p>
        </div>

        <div>
          <p className='text-sm flex text-white gap-1 justify-start items-center'>{name}
            {bluetick && (
              <Image 
                src='/icons/checked.svg'
                alt=""
                height={12}
                width={12}
              />
            )}
            Hey, dont forget to hydrate!
          </p>
          {more && (
            <p className=' text-gray-400'>...more</p>
          )}
        </div>

        <p className='text-sm text-gray-400 gap-1'>View all {comments} comments</p>

        <div className='text-sm text-gray-400 flex justify-between items-center'>
          <p>Add a comment...</p>

          <Image 
            src='/icons/smile.svg'
            alt=""
            height={12}
            width={12}
          />
        </div>
      </div>

    </div>
  )
}

const PostCard = () => {
  return (
    <>
      {posts.map((post) => (
        <Card 
          key={post.name}
          name={post.name}
          profilePic={post.profilePic}
          bluetick={post.bluetick}
          duration={post.duration}
          bigImage={post.bigImage}
          likes={post.likes}
          more={post.more}
          comments={post.comments}
          description={post.description}
        />
      ))}
    </>
  )
}

export default PostCard
