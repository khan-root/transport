"use client"
import Button from '@/components/Button'
import React from 'react'
import { useRouter } from 'next/navigation'
import DynamicCardDetails from '@/components/DynamicCardDetails'


const CardDetailsData = [
    {id:1, price:1000, rangePrice: 1500, name:'51-Seater Charter Coach', 
        ideal_seats:51, max_seat:'', class:'First Class',
        main_description:'Ideal for large group transportation, this coach offers comfortable seating for up to 51 passengers with daily, hourly, and monthly rental options.',
        tableData :[
            {price:'18000 to 24000', title:'Monthly', time:'30 Days'},	
            {price:'1000 to 1500', title:'Per Day', time:'10 Hrs'},	
            {price:'200', title:'Per Hour', time:'1Hr'},	

        ],
        tableHeader:['Bus Type', 'Time', 'Price'],
        tableDesctription:'The rental cost of a 51-Seater Charter Coach in Dubai is as follows',
        image:'/assets/bus1.jpg',
        btnName:'Bus'
    },
    {id:2, price:750, rangePrice: '', name:'Hiace Mid-Move', 
        ideal_seats:8, max_seat:12, class:'First Class',
        main_description:'A compact van with ample luggage space, perfect for small groups or airport transfers.',
        image:'/assets/hiace1.jpg',
        btnName:'Hiace'
    },
    {id:3, price:650, rangePrice: '', name:'Small Car', 
        ideal_seats:4, max_seat:7, class:'First Class',
        main_description:'deal for small groups exploring the city with a driver and fuel included.',
        image:'/assets/car1.jpg',
        btnName:'Car'
    },
]

const Explorer = () => {
    
  const router = useRouter()

    const handleBrowseAllClick = () => {
        router.push('/services'); // Replace with the desired route
    };
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

            {CardDetailsData.map((ele)=>(
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