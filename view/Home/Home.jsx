import React from 'react'
import MiniAboutSection from './MiniAboutSection'
import Explorer from './Explorer'
import BookNow from './BookNow'
import Location from './Location'
import CountData from './CountData'
import FAQs from './FAQs'
import OurBlog from './OurBlog'
import Testimonial from './Testimonial'

const Home = () => {
  return (
    <div>
      <div className='bg-primary-lightGray'>
        <MiniAboutSection />
      </div>
      <Explorer />
      <div className='bg-primary-lightGray'>
        <BookNow />
      </div>
      {/* <Location />   */}
      <CountData />
      <div className='bg-white'>
        <FAQs />
      </div>
      {/* <div className='bg-countDataBg bg-cover bg-center'>
        <div className='backdrop-blur-sm bg-primary-bluish/50'>
          <OurBlog />
        </div>
      </div> */}
      <div className='bg-primary-lightGray'>
        <Testimonial />
      </div>
    </div>
  )
}

export default Home