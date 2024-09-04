import Button from '@/components/Button'
import CardDetails from '@/components/CardDetails'
import React from 'react'

const Explorer = () => {
  return (
    <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20 space-y-3'>
        <div className='w-full px-4 lg:w-[700px] lg:mx-auto'>
            <div className='flex flex-col items-center'>
                <span className='font-cursive text-[20px]'>Boats</span>
                <span className='text-[30px] text-center font-bold'>Explore The Horizon</span>
                <span className='text-center text-[16px]'>Then consider your profile and. Set an hourly rate that mirrors your and aptitude in the best light.GoFundMe are among the most popular.</span>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2 px-2'>
            <CardDetails />
            <CardDetails />
            <CardDetails />
        </div>
        <div className='flex items-center justify-center py-3'>
            <Button 
                title='Browse All'
            />
        </div>
    </div>
  )
}

export default Explorer