"use client"
import Button from '@/app/components/Button'
import React from 'react'

import { useRouter } from 'next/navigation'

const MiniAboutSection = () => {

  const router = useRouter()

    const handleBrowseAllClick = () => {
        router.push('/about'); // Replace with the desired route
    };
  return (
    <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20 px-6 lg:px-0'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div className='relative'>
            <img src='/assets/bus4.jpg' className='w-full h-[500px] object-cover'/>
            <div className="lg:absolute lg:top-0 lg:right-[-10%] lg:h-full lg:flex lg:items-center hidden">
              <img
                src="/assets/dala2.jpg"
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
            <span>At Zain Express, we provide reliable and affordable bus rental services for group trips, corporate events, and special occasions. Our modern, well-maintained fleet ensures comfort, while our professional drivers prioritize safety and punctuality.</span>
            <span>We focus on delivering hassle-free journeys, whether for short trips or long-distance travel. Our team is committed to offering personalized transportation solutions that suit your schedule and budget.</span>
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
  )
}

export default MiniAboutSection