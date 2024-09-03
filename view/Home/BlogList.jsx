"use client"
import React from 'react'
import { motion } from 'framer-motion';

const BlogList = () => {
  return (
    <div className='shadow-md rounded-md bg-white'>
       <div className='overflow-hidden cursor-pointer'>
            <motion.img
                src="/assets/WhatsApp Image 2024-08-28 at 20.08.08 (1).jpeg"
                alt="bus"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
        </div>
        <div className='p-3 space-y-4'>
           
            
            <div className='text-[20px] font-bold'>
                <span>Versilcraft - Planet 110 | 22.6 Feet</span>
            </div>
            <div className='text-primary-blackGray'> 
                <span>Readmore</span>
            </div>
            {/* <div className='pb-6'>
                <Button 
                    title='Bus Details'
                />
            </div> */}
        </div>
    </div>
  )
}

export default BlogList