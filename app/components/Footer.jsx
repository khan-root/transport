"use client"
import { footerCompany, footerContactUs, footerOtherData, footerSocialMedia } from '@/utils/dataUtils'
import React from 'react'
import { motion } from 'framer-motion'

import { useRouter } from 'next/navigation'

const Footer = () => {


  const router = useRouter()

  const handleNavigation=(url)=>{
    router.push(url)
  }



  const openLink = (url) => {
    window.open(url, '_blank');
  };
  return (
    <footer className='bg-countDataBg bg-cover bg-center'>
      <div className='backdrop-blur-sm bg-primary-bluish/50'>
        <div className='w-full lg:w-11/12 lg:mx-auto h-full py-10 px-4 space-y-3'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' >
            <div className='space-y-3'>
              <div className='flex items-center'>
                <img src='/assets/logo.png' className='w-16 h-16 object-cover' />
              </div>
              <div className='pt-3'>
                <span className='text-white'>A leading bus rental in Dubai, with the diverse range of new fleets providing top-notch services to clients throughout the city and surrounding areas.</span>
              </div>
              <div className='flex items-center gap-3'>
                {footerSocialMedia.map((ele)=>(
                  <span key={ele.id} className='size-12 flex items-center justify-center rounded-full bg-primary-bluish text-white cursor-pointer hover:text-primary-blackGray'
                    onClick={()=>openLink(ele.link)}
                  >{ele.icon}</span>
                ))}
              </div>
            </div>
            {/* <div className='space-y-3'>
              <div className='text-[25px] font-bold text-white'>
                <span>Company</span>
              </div>
              <div className='flex flex-col gap-3'>
                {footerCompany.map((ele)=>(
                  <motion.span key={ele.id}
                    className='text-white hover:text-primary-bluish cursor-pointer'
                    whileHover={{translateX: 10}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    {ele.title}
                  </motion.span>
                ))}
              </div>
            </div> */}
            <div className='space-y-3'>
              <div className='text-[25px] font-bold text-white'>
                <span>About</span>
              </div>
              <div className='flex flex-col gap-3'>
                {footerOtherData.map((ele)=>(
                  <motion.span key={ele.id}
                    className='text-white hover:text-primary-bluish cursor-pointer'
                    whileHover={{translateX: 10}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onClick={()=>handleNavigation(ele.url)}
                  >
                    {ele.title}
                  </motion.span>
                ))}
              </div>
            </div>
            <div className='space-y-3'>
              <div className='text-[25px] font-bold text-white'>
                <span>Contact</span>
              </div>
              <div className='flex flex-col gap-3'>
                {footerContactUs.map((ele)=>(
                  <div key={ele.id} className='flex items-center gap-2 text-white'
                  >
                    <span>{ele.icon}</span>
                    <span>{ele.description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    
  )
}

export default Footer