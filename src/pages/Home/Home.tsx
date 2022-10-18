import React from 'react'
import Bootcamp from '../../components/Bootcamp/Bootcamp';
import Hero from '../../components/Hero/Hero';
import Sponsor from '../../components/Sponsor/Sponsor';
import Testimonial from '../../components/Testimonial/Testimonial';
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
        <Hero/>
        <Sponsor/>
        <Bootcamp/>
        <Testimonial/>
    </div>
  )
}

export default Home;