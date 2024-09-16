"use client"
import { navabrData } from '@/utils/dataUtils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Button from './Button'


const Navbar = () => {
  const pathname = usePathname()
  const [top, setTop] = useState(true)
  // console.log(pathname)

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 110) {
        setTop(false)
      } else {
        setTop(true)
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);
  return (
    <div className={`px-2 py-5  ${top ? 'bg-primary-bluish' : 'bg-primary-bluish'}`}>
      <div className='w-full flex items-center justify-between lg:w-9/12 lg:mx-auto'>
        <div>
          <img src='/assets/logo.png' className='w-10 h-10' />
        </div>
        <div className='flex items-center gap-3'>
          <div className='hidden lg:block space-x-4'>
            {navabrData.map((ele)=> {
              const isActive = pathname === ele.url
              return(
                <Link href={ele.url} key={ele.id}
                  className={`text-[20px] text-white ${isActive ? 'border-b-2 border-white' : 'hover:border-b hover:border-b-white'}`}

                >
                  {ele.title}
                </Link>
            )})}
          </div>
          {/* <div className='hidden lg:block'>

            <Button 
              title='Book Now'
              />
          </div> */}
        </div>
        <div className='block lg:hidden'>
          <span className='flex items-center justify-center cursor-pointer border border-white w-9 h-9'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar