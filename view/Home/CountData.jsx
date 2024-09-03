import React from 'react'

const CountData = () => {
  return (
    <div
        className='bg-countDataBg h-[400px] w-full bg-cover bg-no-repeat bg-center'
    >
        <div className='flex items-center h-full px-10 gap-4 text-white backdrop-blur-sm bg-white/10'>
            <div className='flex flex-col gap-0 items-center'>
                <span className='text-[35px] font-semibold'>255</span>
                <span className='text-[30px] font-semibold'>Number of Buses</span>
            </div>
            <div className='flex flex-col items-center text-[20px] font-semibold'>
                <span className='text-[35px] font-semibold'>4545</span>
                <span className='text-[30px] font-semibold'>Customers Satisfied</span>
            </div>
            <div className='flex flex-col items-center text-[20px] font-semibold'>
                <span className='text-[35px] font-semibold'>99</span>
                <span className='text-[30px] font-semibold'>Number of Staffs</span>
            </div>
        </div>
    </div>
  )
}

export default CountData