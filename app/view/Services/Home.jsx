import React from 'react'
import BusServices from './BusServices'
import CarServices from './CarServices'
import HiaceServices from './HiaceServices'






const Home = () => {
  return (
    <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20 space-y-3'>
        <div className='space-y-4'>
            <div className='space-y-3'>
              <span className='text-[25px] font-bold'>Buses Category</span>
              <BusServices />
            </div>
            <div className='space-y-3'>
              <span className='text-[25px] font-bold'>Cars Category</span>
              <CarServices />
            </div>
            <div className='space-y-3'>
              <span className='text-[25px] font-bold'>Hiace Category</span>
              <HiaceServices />
            </div>
        </div>
    </div>
  )
}

export default Home