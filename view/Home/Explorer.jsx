"use client"
import Button from '@/components/Button'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import DynamicCardDetails from '@/components/DynamicCardDetails'
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
                    <span className='text-[30px] text-center font-bold'>Explore The Horizon</span>
                    <span className='text-center text-[16px]'>Then consider your profile and. Set an hourly rate that mirrors your and aptitude in the best light.GoFundMe are among the most popular.</span>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2 px-2'>

                {exploreData.map((ele)=>(
                    <DynamicCardDetails 
                        key={ele.id}
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