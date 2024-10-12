import React from 'react'
import TestimonialList from './TestimonialList'

const TestimonialData = [
  {id: 1, name: 'Abullah Khan', description : 'Exceptional service! The bus was clean, comfortable, and arrived right on time. Our entire group had a great experience. Highly recommend!'},
  {id:2, name:'Ali Mehboob', description:'We rented a luxury bus for a corporate event, and it was perfect. The driver was professional, and the trip was smooth from start to finish.'},
  {id:3, name:'Khasmala Khan', description:'Great experience from booking to the actual trip! The vehicle was in top condition, and the customer service was fantastic.'}
]

const Testimonial = () => {
  return (
    <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20 space-y-3'>
        <div className='w-full px-4 lg:w-[700px] lg:mx-auto'>
            <div className='flex flex-col items-center'>
                <span className='font-cursive text-[20px]'>Testimonials</span>
                <span className='text-[30px] text-center font-bold capitalize'>SOME CLIENTS FEEDBACKS</span>
                <span className='text-center text-[16px]'>Then consider your profile and. Set an hourly rate that mirrors your and aptitude in the best light.GoFundMe are among the most popular.</span>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2'>
            {TestimonialData.map((ele)=>(
              <TestimonialList 
                key={ele.id}
                data = {ele}
              />
            ))}
        </div>
    </div>
  )
}

export default Testimonial