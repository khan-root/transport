import React from 'react'
import TestimonialList from './TestimonialList'

const Testimonial = () => {
  return (
    <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20 space-y-3'>
        <div className='w-[700px] mx-auto'>
            <div className='flex flex-col items-center'>
                <span className='font-cursive text-[20px]'>Testimonials</span>
                <span className='text-[30px] font-bold capitalize'>SOME CLIENTS FEEDBACKS</span>
                <span className='text-center text-[16px]'>Then consider your profile and. Set an hourly rate that mirrors your and aptitude in the best light.GoFundMe are among the most popular.</span>
            </div>
        </div>
        <div className='grid grid-cols-3 gap-2'>
            <TestimonialList />
            <TestimonialList />
            <TestimonialList />
        </div>
    </div>
  )
}

export default Testimonial