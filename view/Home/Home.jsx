import React from 'react'
import MiniAboutSection from './MiniAboutSection'
import Explorer from './Explorer'
import BookNow from './BookNow'
import Location from './Location'

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
    </div>
  )
}

export default Home