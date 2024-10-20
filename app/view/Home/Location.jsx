import Button from '@/app/components/Button'
import CardDetails from '@/app/components/CardDetails'
import React from 'react'
import LocationList from './LocationList'

const Location = () => {
  return (
    <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20 space-y-3'>
        <div className='w-full px-4 lg:w-[700px] lg:mx-auto'>
            <div className='flex flex-col items-center'>
                <span className='font-cursive text-[20px]'>Location</span>
                <span className='text-[30px] text-center font-bold capitalize'>We Are Here</span>
                <span className='text-center text-[16px]'>Then consider your profile and. Set an hourly rate that mirrors your and aptitude in the best light.GoFundMe are among the most popular.</span>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2'>
            <LocationList />
            <LocationList />
            <LocationList />
            <LocationList />
            <LocationList />
            <LocationList />
        </div>
    </div>
  )
}

export default Location