"use client"
import Button from '@/components/Button'
import React from 'react'

import { useRouter } from 'next/navigation'

const MiniAboutSection = () => {

  const router = useRouter()

    const handleBrowseAllClick = () => {
        router.push('/about'); // Replace with the desired route
    };
  return (

    <>
      <div className='w-full lg:w-10/12 lg:mx-auto h-full relative z-10 p-4'>
          <div className='grid grid-cols-12 gap-3'>
            <div className='h-full col-span-12 lg:col-span-7 space-y-3'>
              <div className='font-cursive text-[20px] font-semibold text-black'>
                <span>Your Dream Buses</span>
              </div>
              <div>
                <span className='font-teko text-[40px] font-bold text-black capitalize'>
                  we provide best bus rental solutins
                </span>
              </div>
              <div className='text-black'>
                <span>The great thing about Bus.</span>
              </div>
              <div>
                <Button title='Discover More' />
              </div>
            </div>
            
          </div>
      </div>
    <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20 px-6 lg:px-0'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='relative'>
            <img src='/assets/WhatsApp Image 2024-08-28 at 20.08.04.jpeg' className='w-full h-[500px] object-cover'/>
            <div className="lg:absolute lg:top-0 lg:right-[-10%] lg:h-full lg:flex lg:items-center hidden">
              <img
                src="/assets/WhatsApp Image 2024-08-28 at 20.08.05.jpeg"
                className="h-[200px] object-cover border-4 border-white"
              />
            </div>
          </div>
        <div className='lg:ps-20  lg:block flex justify-center'>
         <div className='space-y-3 '>
          <div className='font-cursive text-[25px] lg:[19px] flex items-center justify-center lg:block'>
            <span>About Us</span>
          </div>
          <div className='text-3xl font-bold uppercase  flex items-center justify-center lg:block'>
            <span>Welcome to our website</span>
          </div>
          <div className='flex flex-col gap-3'>
            <span>Which is the same as saying through shrinking from toil and pain. These cases are straightforward and easy to distinguish. In a free hour, when our power of choice is untrammeled, when our power of choice is untrammeled.</span>
            <span>But those who do not know how to pursue pleasure rationally encounter extremely painful consequences.</span>
          </div>
          <div className='flex items-center justify-center lg:block'>
            <Button 
              title='About Us'
              onClick={handleBrowseAllClick}
            />
          </div>
         </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default MiniAboutSection