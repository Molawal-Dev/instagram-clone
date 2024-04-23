import { reels } from '@/constants'
import Image from 'next/image';
import SmallFooter from '@/components/SmallFooter'

interface reelCardProps {
  name: string;
  profilePic: string;
  bigImage: string;
  likes: string;
  more: boolean;
  comments: string;
  description: string;
  otherPic: string;
}


const Card = ({name, profilePic, bigImage, likes, more, comments, description, otherPic }: reelCardProps) => {
  return (
    <div className='flex gap-5'>
      <div className='relative h-screen'>
        <Image
          src={bigImage}
          alt='reels'
          width={350}
          height={350}
          className='rounded-md object-cover opacity-50 shadow-orange-300 shadow-lg h-full'
        />

        {/* volume button */}
        <div className='rounded-full bg-gray-50 absolute p-1 top-0 right-0 m-2'>
          <Image
            src='/icons/volume-x.svg'
            alt='volume'
            height={23}
            width={23}
          />
        </div>

        {/* video description */}
        <div className='absolute bottom-0 left-0 m-5'>
          {/* image, name, follow */}
          <div className='flex gap-3 justify-between items-center'>
            <Image
              src={profilePic}
              alt='pic'
              height={30}
              width={30}
              className='rounded-full object-cover'
            />

            <p className='text-white text-sm font-bold'>{name} <span className=' font-extrabold'>&middot;</span></p>

            <button className='text-white text-sm font-bold border-2 border-gray-800 rounded-xl p-1 px-2 border-opacity-50'>
              Follow
            </button>
          </div>

          {/* description */}
          <div>
            <p className='text-gray-300'>
              {description} {more && (
                <span className=' text-gray-400'>...more</span>
              )}
            </p>
          </div>
        </div>
      </div>

      {/* icons by the right */}
      <div className='flex flex-col justify-end gap-5 items-center'>
        <div className='flex flex-col text-white items-center text-xs gap-1'>
          <Image
            src='/icons/heart.svg'
            alt='icon'
            width={25}
            height={25}
          />
          <p>{likes}</p>
        </div>
        <div className='flex flex-col text-white items-center text-xs gap-1'>
          <Image
            src='/icons/message-circle.svg'
            alt='icon'
            width={25}
            height={25}
          />
          <p>{comments}</p>
        </div>

        <Image
          src='/icons/save.svg'
          alt='icon'
          width={25}
          height={25}
        />

        <Image
          src='/icons/more-horizontal.svg'
          alt='icon'
          width={16}
          height={16}
          className='my-3'
        />
        <Image
          src={otherPic}
          alt='icon'
          width={30}
          height={30}
          className='rounded-lg border-[3px] border-red-50'
        />
      </div>
    </div>
  )
}


const ReelsPage = () => {
  return (
    <section className='flex flex-col items-center gap-6 p-6 mb-20'>
      {reels.map((reel) => (
        <Card 
          key={reel.name}
          name={reel.name}
          profilePic={reel.profilePic}
          bigImage={reel.bigImage}
          likes={reel.likes}
          more={reel.more}
          comments={reel.comments}
          description={reel.description}
          otherPic={reel.otherPic}
        />
      ))}

      <SmallFooter />
    </section>
  )
}

export default ReelsPage
