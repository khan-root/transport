import Button from '@/components/Button'
import React from 'react'

const AboutUs = () => {
  return (
    <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20 px-6 lg:px-0'>
      <div className='grid grid-cols-1 gap-3 lg:grid-cols-2'>
        
        <div className='lg:ps-20  lg:block flex justify-center'>
         <div className='space-y-3 '>
          <div className='font-cursive text-[25px] lg:[19px] flex items-center justify-center lg:block'>
            <span>Who We Are ?</span>
          </div>
          <div className='text-3xl font-bold uppercase  flex items-center justify-center lg:block'>
            <span>One of the Largest and Leading Bus Rental Companies in Dubai </span>
          </div>
          <div className='flex flex-col gap-3 pb-5 lg:pb-0'>
            <span>A leading bus rental in Dubai, with the diverse range of new fleets providing top-notch services to clients throughout the city and surrounding areas.</span>
            <span>At 𝐙𝐚𝐢𝐧 𝐄𝐱𝐩𝐫𝐞𝐬𝐬 𝐓𝐨𝐮𝐫 𝐁𝐮𝐬𝐞𝐬𝐬 𝐚𝐧𝐝 𝐋𝐮𝐱𝐫𝐲 𝐂𝐚𝐫 𝐬𝐞𝐫𝐯𝐢𝐜𝐞𝐬 𝐃𝐮𝐛𝐚𝐢, we believe in providing 
                high-standard bus rental services to UAE locals, tourists from all over the world who rent a 
                vehicle for a party, airport transfer, city tour or any other event in Dubai, corporates transfers, 
                wedding event, in Dubai, Abu Dhabi and other emirates state of UAE. We guarantee and 
                prioritize allowing our guests to maximize their enjoyment with 𝐙𝐚𝐢𝐧 𝐄𝐱𝐩𝐫𝐞𝐬𝐬 in city tours and 
                transfers in Dubai and Abu Dhabi. We value our guests and carefully listen to their queries 
                regarding their booking with 24/7 customer support.
            </span>
          </div>
          
         </div>
        </div>

        <div className='relative'>
            <img src='/assets/WhatsApp Image 2024-08-28 at 20.08.04.jpeg' className='w-full h-[500px] object-cover'/>
            <div className="lg:absolute lg:top-0 lg:right-[-10%] lg:h-full lg:flex lg:items-center hidden">
                <img
                src="/assets/WhatsApp Image 2024-08-28 at 20.08.05.jpeg"
                className="h-[200px] object-cover border-4 border-white"
                />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs