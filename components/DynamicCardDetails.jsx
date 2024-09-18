"use client"
import React from 'react'
import Button from './Button'
import { motion } from 'framer-motion';
import { MdOutlineFlightClass, MdOutlineGroups } from 'react-icons/md'
import { IoStorefrontOutline } from 'react-icons/io5'
import { useRouter } from 'next/navigation';
import useZustandServices from '@/services/useZustandServices';


const DynamicCardDetails = (props) => {
    const {data}  = props

    const { settingDetailsData } = useZustandServices()

    const router = useRouter();

  const handleBusDetailsClick = () => {
    settingDetailsData(data)

    const busName = encodeURIComponent(data.name.replace(/\s+/g, '-').toLowerCase()); // Create a URL-friendly bus name
    router.push(`/services/details/${busName}`); 
  };

//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
  return (
    <div className='shadow-md rounded-md'>
       <div className='overflow-hidden cursor-pointer'>
            <motion.img
                src={data.image}
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
                    <div className='flex gap-2 items-center'>
                        <div>
                            <span>Price</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span>{data.price}</span>
                            {data.rangePrice && (
                                <>
                                    <span>-</span>
                                    
                                    <span>{data.rangePrice}</span>
                                </>
                            )
                            }
                        </div>
                        <div>

                            <span className=''>
                                AED
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-1 text-primary-blackGray'>
                    <span>
                        <MdOutlineGroups />
                    </span>
                    <span>{data.ideal_seats}</span>
                </div>
                {data.max_seat &&
                <div className='flex items-center gap-1 text-primary-blackGray'>
                    <span>
                        <IoStorefrontOutline />
                    </span>
                    <span>{data.max_seat}</span>
                </div>
                }
                <div className='flex items-center gap-1 text-primary-blackGray'>
                    <span><MdOutlineFlightClass /></span>
                    <span>{data.class}</span>
                </div>
            </div>
            <div className='text-[20px] font-bold'>
                <span>{data.name}</span>
            </div>
            <div className='text-primary-blackGray line-clamp-2'>
          <span>{data.main_description}</span>
        </div>
            <div className='pb-6'>
                <Button 
                    title='Bus Details'
                    onClick={handleBusDetailsClick}
                />
            </div>
        </div>
    </div>
  )
}

export default DynamicCardDetails