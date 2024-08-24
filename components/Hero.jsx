// import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Input from './Input'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-gray-600'>
        <div className='w-full lg:w-9/12 lg:mx-auto h-full relative'>
            <div className='border border-red-600 absolute top-[20%] w-full left-0 right-0'>
                <div className='flex'>
                <div className='border border-green-600 h-full  flex-1 space-y-4'>
                    <div>
                        <span>Your Dream Boats.</span>
                    </div>
                    <div>
                        <span className='text-[60px] font-semibold text-white'>
                            Venture To The Deep Blue Water
                        </span>
                    </div>
                    <div className='text-white'>
                        <span>The great thing about boats is that, unlike homes, it is a lot easier to try out the type of boat you want before committing to buying one.</span>
                    </div>
                    <div>
                        <Button 
                            title='Discover More'
                        />
                    </div>
                </div>
                <div className='flex-[.5] p-2'>
                    <div className='bg-white shadow-md  pl-2 py-2 pr-6 space-y-3'>
                        <div className='flex flex-col gap-2'>
                            <span className='text-[20px] font-semibold'>Find Your Ride</span>
                            <span>Search by boat name or location around you.</span>
                        </div>
                        <div className='bg-primary-gray flex items-center'>
                            <Input 
                                placeholder='Search Boats'

                                
                            />
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-primary-bluish">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>

                            </span>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Category</label>
                            <select className='outline-none w-full py-2 pl-2 pr-4 bg-primary-gray'>
                                
                                <option>Select Category</option>
                            </select>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label>Location</label>
                            <select className='outline-none w-full py-2 pl-2 pr-4 bg-primary-gray'> 
                                <option>Select Location</option>
                            </select>
                        </div>
                        <div className='flex justify-end'>
                            <Button title='Serach' />
                        </div>
                    </div>
                </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero