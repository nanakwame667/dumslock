import React from 'react'
import {Link} from 'react-router-dom';
import './Footer.css';
import logo from '../../assets/images/logo.svg';
import AppButton from '../Button/Button';
import underline from '../../assets/images/underline.svg';
import rocket from '../../assets/images/rocket.svg';
import instagram from '../../assets/images/instagram.svg';
import twitter from '../../assets/images/twitter.svg';
import linkedin from '../../assets/images/linkedin1.svg';
import youtube from '../../assets/images/youtube.svg';

const Footer = () => {
  return (
    <div className='container Footer'>
        <div className='footer'>
            <div className='section1'>
                <img className='logo1' src={logo} alt="logo" />
                <p className='first'>Reskill in cyber security and launch your</p>
                <p className='second'>dream career</p>
                <img className='underline' src={underline} alt="underline" />
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
            <div className='section2'>
                <p>DUMSLOCK Info</p>
                <ul>
                    <li><Link to='/Course' className='link1'>The Course</Link></li>
                    <li><Link to='/Payment'className='link1'>The Cost</Link></li>
                    <li><Link to='/Support'className='link1'>Learner Support</Link></li>
                    <li><Link to='/Outcome'className='link1'>Learner Outcomes</Link></li>
                    <li><Link to='/About'className='link1'>About Us</Link></li>
                </ul>
            </div>
            <div className='section3'>
              <p>Useful Links</p>
                <ul>
                    <li><Link to='/Course'className='link1'>FAQs Help Center</Link></li>
                    <li><Link to='/Payment'className='link1'>The DUMSLOCK Blog</Link></li>
                    <li><Link to='/Support'className='link1'>The DUMSLOCK Shop</Link></li>
                    <li><Link to='/Outcome'className='link1'>Work With Us</Link></li>
                    <li><Link to='/About'className='link1'>Contact Us</Link></li>
                </ul>
            </div>
            <div className='section4'>
                <ul>
                    <li><Link to='/Course' className='icon'><img src={instagram} alt="instagram" /></Link></li>
                    <li><Link to='/Payment'className='icon'><img src={twitter} alt="twitter" /></Link></li>
                    <li><Link to='/Support'className='icon'><img src={linkedin} alt="linkedin" /></Link></li>
                    <li><Link to='/Outcome'className='icon'><img src={youtube} alt="youtube" /></Link></li>
                </ul>
            </div>
        </div>
        <p className='footer-note'>© 2022 DUMSLOCK All Rights Reserved</p>
    </div>
  )
}

export default Footer