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
    <div className='container'>
        <div className='footer'>
            <div className='section1'>
                <img src={logo} alt="logo" />
                <p>Reskill in cyber security and launch your</p>
                <p>dream career</p>
                <img src={underline} alt="underline" />
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
                    <li><Link to='/Course'>The Course</Link></li>
                    <li><Link to='/Payment'>The Cost</Link></li>
                    <li><Link to='/Support'>Learner Support</Link></li>
                    <li><Link to='/Outcome'>Learner Outcomes</Link></li>
                    <li><Link to='/About'>About Us</Link></li>
                </ul>
            </div>
            <div className='section3'>
              <p>Useful Links</p>
                <ul>
                    <li><Link to='/Course'>FAQs Help Center</Link></li>
                    <li><Link to='/Payment'>The DUMSLOCK Blog</Link></li>
                    <li><Link to='/Support'>The DUMSLOCK Shop</Link></li>
                    <li><Link to='/Outcome'>Work With Us</Link></li>
                    <li><Link to='/About'>Contact Us</Link></li>
                </ul>
            </div>
            <div className='section4'>
                <ul>
                    <li><Link to='/Course'><img src={instagram} alt="instagram" /></Link></li>
                    <li><Link to='/Payment'><img src={twitter} alt="twitter" /></Link></li>
                    <li><Link to='/Support'><img src={linkedin} alt="linkedin" /></Link></li>
                    <li><Link to='/Outcome'><img src={youtube} alt="youtube" /></Link></li>
                </ul>
            </div>
        </div>
        <p>© 2022 DUMSLOCK All Rights Reserved</p>
    </div>
  )
}

export default Footer