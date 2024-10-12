import CustomBookNowButton from "@/app/components/CustomBookNowButton"

const BookNow = () => {
  return (
    <div className='w-full lg:w-10/12 lg:mx-auto h-full py-20 space-y-3'>
        <div className=' w-full lg:w-[50%] lg:mx-auto '>
            <div className='space-y-3 p-2'>
                <div className='flex flex-col gap-3'>
                    <span className='text-[20px] font-cursive text-center'>Book Now</span>
                    <span className='text-[25px] font-bold text-center'>BOOK LUXURY BUS</span>
                    <span className='text-primary-blackGray text-center'>Experience the ultimate in comfort and style with our premium luxury buses. Perfect for corporate events, weddings, or long-distance travel, these buses offer unmatched amenities.</span>
                    <span className='text-primary-blackGray text-center'>Make your journey special by booking today and enjoy a first-class travel experience. Comfort awaits!</span>
                </div>
                <div className=''>
                    <img src='/assets/bus2.jpg' alt='luxury' className='w-full' />
                </div>
                <div className="flex items-center justify-center">
                    <CustomBookNowButton 
                        title='Book Now'
                    />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default BookNow