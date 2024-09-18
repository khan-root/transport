"use client";
import MiniHeroSection from '@/components/MiniHeroSection';
import useZustandServices from '@/services/useZustandServices';
import VehcialDetails from '@/view/Services/VehcialDetails';
import React from 'react';

const BusDetails = () => {

    const {detailsData} = useZustandServices()
  
    console.log(detailsData)

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
