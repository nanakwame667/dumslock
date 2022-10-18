import React from 'react'
import './Hero.css'
import underline from '../../assets/images/underline.svg';
import arrowright from '../../assets/images/arrowright.svg';
import AppButton from '../Button/Button';
import rocket from '../../assets/images/rocket.svg';


const Hero = () => {
  return (
    <div className='container Hero'>
        <div className='hero-section-1'>
                <h1 className='reskill'>
                    Reskill in cyber 
                    security and launch <br/>
                    your <span> </span><span className='dream'>dream career</span>
                </h1>

            <img className='underline-new' src={underline} alt="underline" />
            <p className='train'>
                Train <b>online</b> to become a cyber security
                professional and <b> don’t pay a penny until you get
                hired.</b>
            </p>
            <div className='btn-section'>
                <p className='go'>Let's go!</p>
                <img className='arrow' src={arrowright} alt="right" />
                <AppButton
                    border='none'
                    color='#FFB800'
                    height='65px'
                    onClick={()=>console.log('I am a button')}
                    radius="40px"
                    width='190px'
                    children ="Apply Now"
                    icon={rocket}
                    textColor='#fff'
                    cursor='pointer'
                />
            </div>
        </div>
        <div className='hero-section-2'>
                <div className='hero-circle-1'>
                </div>
                <div className='hero-circle-2'>
                </div>
                <div className='hero-circle-3'>
                </div>
        </div>
    </div>
  )
}

export default Hero