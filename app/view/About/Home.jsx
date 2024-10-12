import React from 'react'
import AboutUs from './AboutUs'
import MissionCoreValue from './MissionCoreValue'
import RentalService from './RentalService'
import ChooseUs from './ChooseUs'

const Home = () => {
  return (
    <div>
      <div className='bg-primary-lightGray'>
        <AboutUs />
      </div>
      <div className='bg-primary-lightGray'>
        <MissionCoreValue />
      </div>
      <div className='bg-primary-lightGray'>
        <RentalService />
      </div>
      <div className='bg-primary-lightGray'>
        <ChooseUs />
      </div>
    </div>
  )
}

export default Home