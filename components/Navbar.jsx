"use client"
import { navabrData } from '@/utils/dataUtils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const Navbar = () => {
  const pathname = usePathname()
  // console.log(pathname)
  return (
    <div className='bg-primary-bluish py-5'>
      <div className='w-full lg:w-[1200px] lg:mx-auto flex items-center justify-between'>

        <div>
          <span>Logo</span>
        </div>
        <div className='space-x-4'>
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
      </div>
    </div>
  )
}

export default Navbar