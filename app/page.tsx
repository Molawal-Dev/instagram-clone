import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Authpage = () => {
  return (
      <section className='flex justify-center items-center w-full auth-bg h-screen p-10'>
        <div className='flex gap-10 justify-center items-center '>
          <div className='flex relative max-lg:hidden'>
            <Image 
              src='/images/authpics1.png'
              alt='insta on iphone'
              width={300}
              height={300}
            />
            <Image 
              src='/images/authpics2.png'
              alt='insta on iphone'
              width={300}
              height={300}
              className='absolute left-16 top-8'
            />
          </div>

          <div className='ml-10 flex flex-col rounded-xl lg:w-[385px] gap-[4px] max-lg:w-96'>
            <div className='bg-white px-10 pb-4 rounded-t-xl flex flex-col items-center w-full'>
              <Image
                src='/images/insta.png'
                alt='instagram-logo'
                width={200}
                height={200}
              />

              <form className='flex flex-col gap-5 w-full'>
                <input 
                  type="text"
                  placeholder='Phone number, username or email'
                  className=' outline-none border rounded-md bg-slate-50 px-2 py-2 text-dark-3 placeholder:text-dark-3 '
                />
                <input 
                  type="password"
                  placeholder='Password'
                  className=' outline-none border rounded-md bg-slate-50 px-2 py-2 text-dark-3 placeholder:text-dark-3 -mt-3'
                />

                <Link 
                  href='/root/home'
                  className=' bg-blue-500 w-full text-white font-bold py-2 text-center rounded-lg'
                >
                  Log in
                </Link>
              </form>

              <div className='flex mt-4'>
                <div className=''></div>
                <p className=' font-semibold'>OR</p>
                <div></div>
              </div>

              <div className='flex gap-2 w-full justify-center mt-8 items-center'>
                <Image
                  src='/icons/facebook.png'
                  alt='facebook logo'
                  height={20}
                  width={20}
                />
                <p className=' text-blue-800 font-semibold'>Log in with Facebook</p>
              </div>

              <p className='mt-4'>Forgot password?</p>
            </div>

            <div className=' bg-white flex justify-center p-5 font-semibold'>
              <p>Don't have an account? 
                <span className=' text-blue-600'> Sign up</span>
              </p>
            </div>

            <div className='bg-white flex justify-center flex-col items-center gap-3 pb-3 pt-1 rounded-b-xl'>
              <p className='font-semibold'>Get the app.</p>

              <div className='flex gap-3'>
                <div className='flex justify-center items-center px-2 py-1 bg-black gap-2 rounded-lg'>
                  <Image
                    src='/icons/playstore.png'
                    alt='playstore'
                    width={30}
                    height={30}
                  />

                  <div className='text-white'>
                    <p className=' text-[9px]'>GET IT ON</p>
                    <h2 className=' font-semibold -mt-1'>Google Play</h2>
                  </div>
                </div>

                <div className='flex justify-center items-center px-2 py-1 bg-black gap-2 '>
                  <Image
                    src='/icons/microsoft.png'
                    alt='playstore'
                    width={30}
                    height={30}
                  />

                  <div className='text-white'>
                    <p className=' text-[9px]'>GET IT ON</p>
                    <h2 className=' font-semibold -mt-1'>Microsoft</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Authpage
