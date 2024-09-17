"use client";
import useZustandServices from '@/services/useZustandServices';
import React from 'react';

const BusDetails = () => {

    const {detailsData} = useZustandServices()
  
    console.log(detailsData)
//   const price = searchParams.get('price');
//   const name = searchParams.get('name');
//   const idealSeats = searchParams.get('ideal_seats');
//   const maxSeat = searchParams.get('max_seat');
//   const busClass = searchParams.get('class');

  return (
    <div>
        Hello {detailsData.name}
    </div>
    // <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20 space-y-3'>
    //   <h1 className='text-[30px] font-bold'>{name}</h1>
    //   <div className='flex items-center gap-2'>
    //     <span className='text-[20px]'>Price: {price} AED</span>
    //   </div>
    //   <div className='flex items-center gap-2'>
    //     <span className='text-[20px]'>Ideal Seats: {idealSeats}</span>
    //   </div>
    //   {maxSeat && (
    //     <div className='flex items-center gap-2'>
    //       <span className='text-[20px]'>Max Seat: {maxSeat}</span>
    //     </div>
    //   )}
    //   <div className='flex items-center gap-2'>
    //     <span className='text-[20px]'>Class: {busClass}</span>
    //   </div>
    // </div>
  );
};

export default BusDetails;
