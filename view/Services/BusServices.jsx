"use client"
import DynamicCardDetails from '@/components/DynamicCardDetails'
import { categoryData } from '@/utils/dataUtils'
import React, { useEffect, useState } from 'react'

const BusServices = () => {


    const [busData, setBusData] = useState([])

    useEffect(()=>{
        setBusData(categoryData.buses)
    },[])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-2 px-2 py-4'>

        {busData?.map((ele)=>(
                <DynamicCardDetails 
                    key={ele.id}
                    data = {ele}
                    btnName='Bus'
                />
            ))}
    </div>
  )
}

export default BusServices