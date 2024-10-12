"use client"
import { faqsAccordianData } from '@/services/__accrodianService';
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

const FAQs = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className='w-full lg:w-10/12 lg:mx-auto h-full pt-20 pb-10 space-y-3'>
      <div className='grid grid-cols-1 lg:grid-cols-2 h-full items-center'>
        <div className='space-y-3 p-2 h-full self-center'>
          <div className='flex flex-col gap-3 items-center lg:items-start'>
            <span className='text-[20px] font-cursive'>FAQ</span>
            <span className='text-[25px] text-center font-bold font-teko'>Frequently Asked Questions</span>
            <span className='text-primary-blackGray text-center lg:text-start'>
              Got questions? We've got answers! Explore our Frequently Asked Questions to find quick and clear information about our rental services, booking process, and vehicle options.
            </span>
          </div>

          <div className='h-full space-y-4'>
            {faqsAccordianData.map((faq) => (
              <Accordion key={faq.id} open={open === faq.id} icon={<Icon id={faq.id} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(faq.id)}
                        className={`${faq.id === open ? 'bg-[#e7f1ff]' : 'bg-gray-200'} p-0 pr-2`}
                    >
                    <div className='flex items-center gap-4'>
                        <span className='h-full w-20 p-4 flex items-center justify-center  bg-primary-bluish text-white'>  
                            #{faq.id}
                        </span>
                        <span className='py-2'>
                            {faq.title}
                        </span>
                    </div>
                </AccordionHeader>
                <AccordionBody className='bg-white rounded-lg px-2 text-[17px]'>
                  {faq.body}
                </AccordionBody>
              </Accordion>
            ))}
          </div>
        </div>
        <div className='p-4 h-full'>
            <div className='h-full'>
                <img src='/assets/bus3.jpg' alt='faq' className='h-5/6 w-full object-cover' />
            </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;
