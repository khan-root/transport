import React from 'react'
import MiniAboutSection from './MiniAboutSection'
import Explorer from './Explorer'
import BookNow from './BookNow'
import Location from './Location'
import CountData from './CountData'
import FAQs from './FAQs'
import OurBlog from './OurBlog'

const Home = () => {
  return (
    <div>
      <div className='bg-primary-lightGray'>
        <MiniAboutSection />
      </div>
      <div>
        <Explorer />
      </div>
      <div className='bg-primary-lightGray'>
        <BookNow />
      </div>
      <div>
        <Location />  
      </div>
      <div>
        <CountData />
      </div>
      <div className='bg-primary-lightGray'>
        <FAQs />
      </div>
      <div className='bg-countDataBg bg-cover bg-center'>
        <div className='backdrop-blur-sm bg-primary-bluish/50'>
          <OurBlog />
        </div>
      </div>
    </div>
  )
}

export default Home