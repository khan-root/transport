import Button from '@/components/Button'
import CustomInput from '@/components/CustomInput'
import CustomTextarea from '@/components/CustomTextarea'
import React from 'react'
import { BiCalendar, BiEnvelope, BiMessage, BiPhone, BiUser } from 'react-icons/bi'
import { FaPersonBooth } from 'react-icons/fa6'

const BookNow = () => {
  return (
    <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20 space-y-3'>
        <div className='grid grid-cols-1 lg:grid-cols-2 px-2 lg:px-0'>
            <div className='space-y-3 p-2'>
                <div className='flex flex-col gap-3'>
                    <span className='text-[20px] font-cursive'>Book Now</span>
                    <span className='text-[25px] font-bold'>BOOK LUXURY BUS</span>
                    <span className='text-primary-blackGray'>Begin your profile by picking work classes that are generally applicable to your range of abilities. Set an hourly rate that mirrors your abilities and experience level. Then consider your profile.</span>
                    <span className='text-primary-blackGray'>Then consider your profile and. Set an hourly rate that mirrors your and aptitude in the best light.GoFundMe are among the most popular.</span>
                </div>
                <div className=''>
                    <img src='/assets/WhatsApp Image 2024-08-28 at 20.08.08 (1).jpeg' alt='luxury' className='w-full' />
                </div>
            </div>
            <div className='p-4'>
                <div className='shadow-md bg-white round-lg py-10 px-5'>
                    <div className='space-y-8'>
                        <div className='text-[25px] font-bold'>
                            <span>Booking Request</span>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <CustomInput 
                                placeholder = 'Your Full Name'
                                icon={<BiUser />}
                            />
                            <CustomInput
                                placeholder = 'Number of Person'
                                icon={<FaPersonBooth />}
                            />
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <CustomInput 
                                placeholder = 'Date From'
                                icon={<BiCalendar />}
                            />
                            <CustomInput
                                placeholder = 'Date To'
                                icon={<BiCalendar />}
                            />
                        </div>
                        <div className=''>
                            <select className='outline-none w-full py-2 pl-2 pr-4 bg-primary-gray'>
                                <option>Select Category</option>
                            </select>
                        </div>
                        <div className='grid grid-cols-2 gap-3'>
                            <CustomInput 
                                placeholder = 'Email Address'
                                icon={<BiEnvelope />}
                            />
                            <CustomInput
                                placeholder = 'Phone Number'
                                icon={<BiPhone />}
                            />
                        </div>
                        <div>
                            <CustomTextarea 
                                placeholder = 'Write your message'
                                icon={<BiMessage />}
                            />
                        </div>
                        <div>
                            <Button 
                                title='Submit Request'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BookNow