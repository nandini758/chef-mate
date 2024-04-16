import React from 'react'
import Navbar from './Navbar'
import PopularSlider from './PopularSlider'
import TrendingSlider from './TrendingSlider'
import Footer from './Footer'
const Home = () => {
  return (
   <>
   <div className='main'>
    <div className="nav">
   <Navbar/>
   </div>
   <div className="donoSlider">
   <PopularSlider/>
   
   <TrendingSlider/>
   
   </div>
   </div>
   
   </>
  )
}

export default Home