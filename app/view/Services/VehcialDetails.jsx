"use client"
import React, { useEffect } from 'react'
import VehcialImages from './VehcialImages'
import VehcialDetailsTable from './VehcialDetailsTable';
import CustomBookNowButton from '@/app/components/CustomBookNowButton';
import { useRouter } from 'next/navigation';
import { GoDot, GoDotFill } from 'react-icons/go';


// const images = [
//   'https://via.placeholder.com/500x300.png?text=Car+Image+1',
//   'https://via.placeholder.com/500x300.png?text=Car+Image+2',
//   'https://via.placeholder.com/500x300.png?text=Car+Image+3',
//   'https://via.placeholder.com/500x300.png?text=Car+Image+4',
//   'https://via.placeholder.com/500x300.png?text=Car+Image+5',
// ];

const VehcialDetails = (props) => {
    const {detailsData} = props



    const router = useRouter()


    useEffect(() => {
        if (!detailsData || Object.keys(detailsData).length === 0) {
        // If detailsData is empty, redirect or handle the error
        router.push('/services'); // Redirect if no data found
        }
    }, [detailsData, router]);
    // console.log(detailsData)
  return (
    <div className='w-full lg:w-9/12 lg:mx-auto h-full py-20 space-y-3 shadow-md my-2 px-10'>
        
        {/* VehcialDetails {detailsData.name}*/}
        <div>
            <VehcialImages 
                images = {detailsData?.interialImages}
            />
        </div>
        <div className='space-y-3'>
            <div className='flex items-center justify-between border-b border-b-gray-500 py-2 text-[18px]'>
                <div>
                    <span>{detailsData.name}</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{detailsData.price}</span>
                    {detailsData.rangePrice && (
                            <>
                                <span>-</span>
                                
                                <span>{detailsData.rangePrice}</span>
                            </>
                        )
                    }
                    <span className='font-bold'>AED/$</span>
                    
                </div>
            </div>
            <div>
                <span>{detailsData.overviewDescription}</span>
            </div>
        </div>
        {detailsData?.keyFeaturesTitle && 
            <div className='space-y-2'>
                <span className='text-[20px] text-black'>{detailsData.keyFeaturesTitle}</span>
                <div className='space-y-2'>
                    {detailsData?.keyFeatures?.map((ele, index)=>(
                        <div className={`${ele.data ?  '' : 'flex flex-col lg:flex-row gap-3'}`} key={index}>
                            <div className='flex gap-2'>
                                <span><GoDotFill /></span>
                                <span className='text-[16px] text-nowrap'>{ele?.title} : </span>
                            </div>
                            <div className='flex'>
                            <span className='text-gray-500 ml-10 lg:ml-0 '>{ele?.description}</span>
                            <div className='flex flex-col'>
                                {ele.data && ele.data?.map((subMenu, i)=>(

                                    <div key={i} className='flex items-center gap-2  ml-10'>
                                        <div className='flex items-center gap-2'>
                                            <span><GoDot /></span>
                                            {subMenu?.title && 
                                                <span>{subMenu.title} :</span>
                                            }
                                        </div>
                                        <div className='text-gray-500'>
                                            <span>{subMenu.description}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        }
        {detailsData?.safetyFeaturesTitle && 
            <div className='space-y-2'>
                <span className='text-[20px] text-black'>{detailsData.safetyFeaturesTitle}</span>
                <div className='space-y-2'>
                    {detailsData?.safteyFeatures?.map((ele, index)=>(
                        <div className={`${ele.data ?  '' : 'flex flex-col lg:flex-row gap-3'}`} key={index}>
                            <div className='flex  gap-2'>
                                <span><GoDotFill /></span>
                                <span className='text-[16px] text-nowrap'>{ele?.title} : </span>
                            </div>
                            <div className='flex'>
                                <span className='text-gray-500 ml-10 lg:ml-0'>{ele?.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        }
        {detailsData.usageFeaturesTitle &&
            <div className='space-y-2'>
                <span className='text-[20px] text-black'>{detailsData.usageFeaturesTitle}</span>
                <div className='space-y-2'>
                    {detailsData?.usageFeatures?.map((ele, index)=>(
                        <div className={`${ele.data ?  '' : 'flex flex-col lg:flex-row gap-3'}`} key={index}>
                            <div className='flex gap-2'>
                                <span><GoDotFill /></span>
                                <span className='text-[16px] text-nowrap'>{ele?.title} : </span>
                            </div>
                            <div className='flex'>
                                <span className='text-gray-500 ml-10 lg:ml-0'>{ele?.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        }
        {detailsData.otherFeaturesTitle &&
            <div className='space-y-2'>
                <span className='text-[20px] text-black'>{detailsData.otherFeaturesTitle}</span>
                <div className='space-y-2'>
                    {detailsData?.otherFeatures?.map((ele, index)=>(
                        <>
                        <div className='flex gap-2' key={index}>
                            <div className='flex flex-col lg:flex-row gap-2'>
                                <span><GoDotFill /></span>
                                <span className='text-[16px] ml-10 lg:ml-0 text-nowrap'>{ele?.title} : </span>
                            </div>
                            <div className='flex'>
                                <span className='text-gray-500'>{ele?.description}</span>
                            </div>
                        </div>

                        {ele.data && 

                            ele.data?.map((subMenu, i)=>(

                                <div key={i} className='flex flex-col lg:flex-row items-center ml-10 gap-2'>
                                    <span><GoDot /></span>
                                    <span className='text-[16px] text-gray-500 ml-10 lg:ml-0'>{subMenu.description}</span>
                                </div>
                            ))
                        }

                        </>

                    ))}
                </div>
            </div>
        }

        <div>
            <VehcialDetailsTable 
                tableData = {detailsData.tableData}
                tableDesctription = {detailsData.tableDesctription}
                tableHeader = {detailsData.tableHeader}
            />
        </div>

        <div>
            <div className="flex items-center justify-center">
                    <CustomBookNowButton 
                        title='Book Now'
                    />
                </div>
        </div>
        
    </div> 
  )
}

export default VehcialDetails