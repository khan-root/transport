"use client"
import { rentalServicesData } from '@/services/__accrodianService';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import React from 'react';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const RentalService = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='w-full lg:w-10/12 lg:mx-auto h-full pt-20 pb-10 space-y-3'>
      <div className='grid grid-cols-1 lg:grid-cols-2 h-full items-center'>
        <div className='p-4 h-full'>
            <div className='h-full'>
                <img src='/assets/carRentalService.jpg' alt='faq' className='h-5/6 w-full object-cover' />
            </div>
        </div>
        <div className='space-y-3 p-2 h-full self-center'>
          <div className='flex flex-col gap-3 items-center lg:items-start'>
            <span className='text-[20px] font-cursive'>Our Key Rental Services </span>
            <span className='text-primary-blackGray text-center lg:text-start'>
                <b>Zain Express&apos;s</b> Bus Rental Dubai caters to a wide range of transportation needs and provides the following services: 
            </span>
          </div>

          <div className='h-full space-y-4'>
            {rentalServicesData.map((ele) => (
              <Accordion key={ele.id} open={open === ele.id} icon={<Icon id={ele.id} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(ele.id)}
                        className={`${ele.id === open ? 'bg-[#e7f1ff]' : 'bg-gray-200'} p-0 pr-2`}
                    >
                    <div className='flex items-center gap-4'>
                        <span className='h-full w-20 p-4 flex items-center justify-center  bg-primary-bluish text-white'>  
                            #{ele.id}
                        </span>
                        <span className='py-2'>
                            {ele.title}
                        </span>
                    </div>
                </AccordionHeader>
                <AccordionBody className='bg-white rounded-lg px-2 text-[17px]'>
                  {ele.body}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default RentalService;