"use client"
import { navabrData } from '@/utils/dataUtils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const pathname = usePathname()
  const [top, setTop] = useState(true)
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      setTop(window.scrollY < 110);
    };

    window.addEventListener('scroll', changeColor);

    return () => {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  const handleMobileMenuToggle = () => {
    setOpenNav(!openNav);
  };

  return (
    <div className={`px-2 py-5 ${top ? 'bg-primary-bluish' : 'bg-primary-bluish'} relative`}>
      <div className='w-full flex items-center justify-between lg:w-9/12 lg:mx-auto'>
        <div className='flex items-center'>
          <img src='/assets/logo.png' className='w-16 h-16 object-cover' />
        </div>
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
        <div className='block lg:hidden'>
          <span onClick={handleMobileMenuToggle} className='flex items-center justify-center cursor-pointer border border-white w-9 h-9'>
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

      {/* Mobile Navigation Menu with Framer Motion */}
      <AnimatePresence>
        {openNav && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className='lg:hidden mt-4'
          >
            <ul className='flex flex-col items-center space-y-4 bg-primary-bluish p-4 rounded-lg'>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Navbar;
