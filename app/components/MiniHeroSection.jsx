
import React from 'react'
import CustomBreadcrumbs from './Breadcrumbs'


const MiniHeroSection = () => {
    return (
        <div className='backdrop-blur-sm bg-gray-500/50  h-[300px] relative px-2'>
            <div className='w-full lg:w-10/12 lg:mx-auto text-black h-full relative z-10 px-4'>
                <div className='absolute top-[40%] w-full left-0 right-0'>
                    <div>
                        <CustomBreadcrumbs />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MiniHeroSection