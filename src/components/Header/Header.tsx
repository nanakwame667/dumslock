import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'
import logo from '../../assets/images/logo.svg';
import AppButton from '../Button/Button';
import rocket from '../../assets/images/rocket.svg';

const Header = () => {
  return (
    <div>
        <nav>
            <img src={logo} alt="logo" />
            <ul>
                <li><Link to='/Course'>The Course</Link></li>
                <li><Link to='/Payment'>The Cost</Link></li>
                <li><Link to='/Support'>Learner Support</Link></li>
                <li><Link to='/Outcome'>Learner Outcomes</Link></li>
                <li><Link to='/About'>About Us</Link></li>
                <AppButton
                    border='none'
                    color='#00AB97'
                    height='65px'
                    onClick={()=>console.log('I am a button')}
                    radius="40px"
                    width='190px'
                    children ="Apply Now"
                    icon={rocket}
                    textColor='#fff'
                />
            </ul>
        </nav>
    </div>
  )
}

export default Header;