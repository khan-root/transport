"use client";
import MiniHeroSection from '@/app/components/MiniHeroSection';
import VehcialDetails from '@/app/view/Services/VehcialDetails';
import useZustandServices from '@/services/useZustandServices';
import React from 'react';

const BusDetails = () => {

    const {detailsData} = useZustandServices()
  
    // console.log(detailsData)

  return (
    <div>
      <div className="bg-countDataBg bg-center bg-cover">
        <MiniHeroSection />
      </div>
        <VehcialDetails 
          detailsData  = {detailsData}

        />
    </div>
    
  );
};

export default BusDetails;
