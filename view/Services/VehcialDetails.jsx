import React from 'react'
import VehcialImages from './VehcialImages'
import VehcialDetailsTable from './VehcialDetailsTable';


const images = [
  'https://via.placeholder.com/500x300.png?text=Car+Image+1',
  'https://via.placeholder.com/500x300.png?text=Car+Image+2',
  'https://via.placeholder.com/500x300.png?text=Car+Image+3',
  'https://via.placeholder.com/500x300.png?text=Car+Image+4',
  'https://via.placeholder.com/500x300.png?text=Car+Image+5',
];

const VehcialDetails = (props) => {
    const {detailsData} = props
    // console.log(detailsData)
  return (
    <div className='w-full lg:w-6/12 lg:mx-auto h-full py-20 space-y-3 shadow-md my-2 px-10'>
        
        {/* VehcialDetails {detailsData.name}*/}
        <div>
            <VehcialImages 
                images = {images}
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
                    <span className='font-bold'>AED</span>
                    
                </div>
            </div>
            <div>
                <span>A wonderful serenity has taken possssion of my entire souing like these sweet mornng spring whch enjoy with my whole heart I am alone, and feel the charm of existenceths spot whch was create For the bliss of souls like mineing am so happy my dear frend so absori bed in the exquste sens of mere. A wonderful serenity has taken possssion of my entire souing like these sweet mornng spring whch enjoy with my whole heart I am alone, and feel the charm of existenceths spot whch was create For the bliss of souls like mineing am so happy my dear frend so absori bed in the exquste sens of mere.</span>
            </div>
        </div>

        <div>
            <VehcialDetailsTable 
                tableData = {detailsData.tableData}
                tableDesctription = {detailsData.tableDesctription}
                tableHeader = {detailsData.tableHeader}
            />
        </div>
        
    </div> 
  )
}

export default VehcialDetails