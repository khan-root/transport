// components/Hero.tsx
import React from 'react';
import Button from './Button';
import Input from './Input';
import AutoCarousel from './AutoCarousel'; // Import the carousel

const Hero = () => {
  return (
    <div className='w-full h-screen relative px-4'>
      {/* Background Carousel */}
      <AutoCarousel />

      {/* Overlay Content */}
      <div className='w-full lg:w-9/12 lg:mx-auto h-full relative z-10 px-4'>
        <div className='absolute top-[20%] w-full left-0 right-0'>
          <div className='grid grid-cols-12 gap-3'>
            <div className='h-full col-span-12 lg:col-span-8 space-y-4'>
              <div className='font-cursive text-[20px] font-semibold text-white'>
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
                <Button title='Discover More' />
              </div>
            </div>
            <div className='col-span-12 lg:col-span-4 p-4 bg-white shadow-md'>
              <div className='bg-white space-y-3'>
                <div className='flex flex-col gap-2'>
                  <span className='text-[20px] font-semibold'>Find Your Ride</span>
                  <span>Search by boat name or location around you.</span>
                </div>
                <div className='bg-primary-gray flex items-center'>
                  <Input placeholder='Search Boats' />
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-primary-bluish">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
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
                  <Button title='Search' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for Darkening Background */}
      <div className='absolute inset-0 bg-black opacity-50'></div>
    </div>
  );
};

export default Hero;
