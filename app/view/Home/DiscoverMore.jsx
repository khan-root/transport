import Button from '@/app/components/Button'
import React from 'react'

const DiscoverMore = () => {
  return (
     <div className='w-full lg:w-10/12 lg:mx-auto z-10 p-4'>
        <div className='grid grid-cols-12 gap-3'>
          <div className='col-span-12 lg:col-span-7 space-y-3'>
            <div className='font-cursive text-[20px] font-semibold text-black'>
              <span>The great thing about Bus</span>
            </div>
            <div>
              <span className='font-teko text-[40px] font-bold text-black capitalize'>
                Zain Express Tour Buses and Luxury Car service Dubai
              </span>
            </div>
            <div className='text-black'>
              <span>Your Dream Buses</span>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default DiscoverMore