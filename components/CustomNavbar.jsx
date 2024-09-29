"use client"
import { navabrData } from '@/utils/dataUtils'
import { Collapse, Navbar } from '@material-tailwind/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CustomNavbar = () => {
  const pathname = usePathname()
  const [top, setTop] = useState(true)
  const [openNav, setOpenNav] = useState(false); // state to manage mobile nav

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 110) {
        setTop(false)
      } else {
        setTop(true)
      }
    };
    window.addEventListener('scroll', changeColor);

    // Close the mobile menu when the screen is resized to large
    const handleResize = () => window.innerWidth >= 1024 && setOpenNav(false);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", changeColor);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setOpenNav(!openNav); // Toggle mobile menu
  };

  return (
    <Navbar className={`px-2 py-5 ${top ? 'bg-primary-bluish' : 'bg-primary-bluish'} relative border-o rounded-none max-w-full`}>
      <div className='w-full flex items-center justify-between lg:w-9/12 lg:mx-auto'>
        <div className='flex items-center'>
          <img src='/assets/logo.png' className='w-16 h-16 object-cover' />
        </div>

        {/* Desktop Navigation */}
        <div className='hidden lg:flex items-center gap-3'>
          {navabrData.map((ele) => {
            const isActive = pathname === ele.url
            return (
              <Link href={ele.url} key={ele.id}
                className={`text-[20px] text-white ${isActive ? 'border-b-2 border-white' : 'hover:border-b hover:border-b-white'}`}
              >
                {ele.title}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Icon */}
        <div className='block lg:hidden'>
          <span
            onClick={handleMobileMenuToggle}
            className='flex items-center justify-center cursor-pointer w-9 h-9'>
            {openNav ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </span>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {/* {openNav && ( */}
      
        <Collapse open={openNav}>
          <ul className='flex flex-col items-center space-y-4'>
            {navabrData.map((ele) => {
              const isActive = pathname === ele.url
              return (
                <li key={ele.id}>
                  <Link href={ele.url}
                    onClick={() => setOpenNav(false)} // Close mobile menu on click
                    className={`text-[20px] text-white ${isActive ? 'border-b-2 border-white' : 'hover:border-b hover:border-b-white'}`}
                  >
                    {ele.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Collapse>
      {/* )} */}
    </Navbar>
  )
}

export default CustomNavbar;
