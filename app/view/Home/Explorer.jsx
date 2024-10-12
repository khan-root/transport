"use client"
import Button from '@/app/components/Button'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import DynamicCardDetails from '@/app/components/DynamicCardDetails'
import { categoryData } from '@/utils/dataUtils'




const Explorer = () => {
    
    const router = useRouter()



    const handleBrowseAllClick = () => {
        router.push('/services'); // Replace with the desired route
    };
  

    const data = [
        categoryData.cars[0],
        categoryData.buses[0],
        categoryData.hiace[0],
    ]


    const [exploreData, setExploreData] = useState([])


    useEffect(()=>{
        setExploreData(data)
    },[])



    return (
        <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20 space-y-3'>
            <div className='w-full px-4 lg:w-[700px] lg:mx-auto'>
                <div className='flex flex-col items-center'>
                    <span className='font-cursive text-[20px]'>Vehicle</span>
                    <span className='text-[30px] text-center font-bold'>Explore The Vehicle</span>
                    <span className='text-center text-[16px]'>Discover a diverse range of well-maintained vehicles, including buses, cars, Hiace vans, and more, tailored to meet your travel needs with comfort and reliability.</span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2 px-2'>

                {exploreData.map((ele, i)=>(
                    <DynamicCardDetails 
                        key={i}
                        data = {ele}
                        btnName = {ele.btnName}
                    />
                ))}
            </div>
            <div className='flex items-center justify-center py-3'>
                <Button 
                    title='Browse All'
                    onClick={handleBrowseAllClick}

                />
            </div>
        </div>
    )
}

export default Explorer