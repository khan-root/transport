"use client"
import DynamicCardDetails from '@/app/components/DynamicCardDetails'
import { categoryData } from '@/utils/dataUtils'
import React, { useEffect, useState } from 'react'

const HiaceServices = () => {


    const [hiacesData, setHiacesData] = useState([])

    useEffect(()=>{
        setHiacesData(categoryData.hiace)
    },[])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2 px-2 py-4'>

        {hiacesData?.map((ele)=>(
                <DynamicCardDetails 
                    key={ele.id}
                    data = {ele}
                    btnName= 'Hiace'
                />
            ))}
    </div>
  )
}

export default HiaceServices