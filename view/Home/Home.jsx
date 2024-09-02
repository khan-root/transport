import React from 'react'
import MiniAboutSection from './MiniAboutSection'
import Explorer from './Explorer'

const Home = () => {
  return (
    <div>
      <div className='bg-primary-lightGray'>
        <MiniAboutSection />
      </div>
      <div>
        <Explorer />
      </div>
    </div>
  )
}

export default Home