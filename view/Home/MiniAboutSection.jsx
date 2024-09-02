import Button from '@/components/Button'
import React from 'react'

const MiniAboutSection = () => {
  return (
    <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20'>
      <div className='flex items-center justify-between'>

        <div className='flex-1'>
          <div className='relative'>
            <img src='/assets/WhatsApp Image 2024-08-28 at 20.08.04.jpeg' className='w-full h-[500px] object-cover'/>
            <div className="absolute top-0 right-[-10%] h-full flex items-center">
              <img
                src="/assets/WhatsApp Image 2024-08-28 at 20.08.05.jpeg"
                className="h-[200px] object-cover border-4 border-white"
              />
            </div>
          </div>
        </div>
        <div className='flex-1 ps-20'>
         <div className='space-y-3'>
          <div className='font-cursive'>
            <span>About Us</span>
          </div>
          <div className='text-3xl font-bold uppercase'>
            <span>Welcome to our website</span>
          </div>
          <div className='flex flex-col gap-3'>
            <span>Which is the same as saying through shrinking from toil and pain. These cases are straightforward and easy to distinguish. In a free hour, when our power of choice is untrammeled, when our power of choice is untrammeled.</span>
            <span>But those who do not know how to pursue pleasure rationally encounter extremely painful consequences.</span>
          </div>
          <div>
            <Button 
              title='About Us'
            />
          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default MiniAboutSection