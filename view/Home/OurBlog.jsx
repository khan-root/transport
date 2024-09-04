import React from 'react'
import BlogList from './BlogList'

const OurBlog = () => {
  return (
    <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20 px-6 space-y-3'>
        <div className='w-full px-4 lg:w-[700px] lg:mx-auto'>
            <div className='flex flex-col items-center text-white'>
                <span className='font-cursive text-[20px]'>Our Blogs</span>
                <span className='text-[30px] text-center font-bold capitalize'>OUR LATEST NEWS and ARTICLES</span>
                <span className='text-center text-[16px]'>Then consider your profile and. Set an hourly rate that mirrors your and aptitude in the best light.GoFundMe are among the most popular.</span>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
           <BlogList />
           <BlogList />
           <BlogList />
        </div>
    </div>
  )
}

export default OurBlog