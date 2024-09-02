import CardDetails from '@/components/CardDetails'
import React from 'react'

const Explorer = () => {
  return (
    <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20 space-y-3'>
        <div className='w-[700px] mx-auto'>
            <div className='flex flex-col items-center'>
                <span className='font-cursive text-[20px]'>Boats</span>
                <span className='text-[30px] font-bold'>Explore The Horizon</span>
                <span className='text-center text-[16px]'>Then consider your profile and. Set an hourly rate that mirrors your and aptitude in the best light.GoFundMe are among the most popular.</span>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-2'>
            <CardDetails />
            <CardDetails />
            <CardDetails />
        </div>
        <div>Bottom</div>
    </div>
  )
}

export default Explorer