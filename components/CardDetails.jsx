"use client"
import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion';


const CardDetails = () => {
  return (
    <div className='shadow-md rounded-md'>
       <div className='overflow-hidden cursor-pointer'>
            <motion.img
                src="/assets/WhatsApp Image 2024-08-28 at 20.08.08 (1).jpeg"
                alt="bus"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
            />
        </div>
        <div className='p-3 space-y-3'>
            <div className='flex items-center justify-between border-b border-primary-gray'>
                <div>
                    <span>Location</span>
                </div>
                <div>
                    <span>Price</span>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <span>pople</span>
                </div>
                <div>
                    <span>Area</span>
                </div>
                <div>
                    <span>class</span>
                </div>
            </div>
            <div className='text-[25px] font-bold'>
                <span>Versilcraft - Planet 110 | 22.6 Feet</span>
            </div>
            <div>
                <span>A wonderful serenity has taken possssion of my entire souing like these sweet mornng spring whch enjoy with my whole hea</span>
            </div>
            <div>
                <Button 
                    title='Bus Details'
                />
            </div>
        </div>
    </div>
  )
}

export default CardDetails