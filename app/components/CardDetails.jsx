"use client"
import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion';
import { MdOutlineFlightClass, MdOutlineGroups } from 'react-icons/md'
import { IoStorefrontOutline } from 'react-icons/io5'
import { BiDollar } from 'react-icons/bi'
import { FaLocationDot } from 'react-icons/fa6'


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
                className='w-full'
            />
        </div>
        <div className='p-3 space-y-4'>
            <div className='flex items-center justify-between border-b border-primary-gray pb-2'>
                <div className='flex items-center gap-1'>
                    <span className='text-primary-bluish'>
                        <FaLocationDot />
                    </span>
                    <span>Location</span>
                </div>
                <div className='flex items-center gap-1'>
                    <span>Price</span>
                    <span className=''>
                        <BiDollar />
                    </span>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1 text-primary-blackGray'>
                    <span>
                        <MdOutlineGroups />
                    </span>
                    <span>27</span>
                </div>
                <div className='flex items-center gap-1 text-primary-blackGray'>
                    <span>
                        <IoStorefrontOutline />
                    </span>
                    <span>30</span>
                </div>
                <div className='flex items-center gap-1 text-primary-blackGray'>
                    <span><MdOutlineFlightClass /></span>
                    <span>First Class</span>
                </div>
            </div>
            <div className='text-[20px] font-bold'>
                <span>Versilcraft - Planet 110 | 22.6 Feet</span>
            </div>
            <div className='text-primary-blackGray'> 
                <span>A wonderful serenity has taken possssion of my entire souing like these sweet mornng spring whch enjoy with my whole hea</span>
            </div>
            <div className='pb-6'>
                <Button 
                    title='Bus Details'
                />
            </div>
        </div>
    </div>
  )
}

export default CardDetails