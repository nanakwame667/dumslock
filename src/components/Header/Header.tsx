import React from 'react'
import {Link} from 'react-router-dom';
import './Header.css'
import logo from '../../assets/images/logo.svg';
import AppButton from '../Button/Button';
import rocket from '../../assets/images/rocket.svg';

const Header = () => {
  return (
    <div className='container head'>
        <nav className='container Header'>
            <img className='logo' src={logo} alt="logo" />
            <ul className='nav'>
                <li><Link to='/Course' className='link'>The Course</Link></li>
                <li><Link to='/Payment'className='link'>The Cost</Link></li>
                <li><Link to='/Support'className='link'>Learner Support</Link></li>
                <li><Link to='/Outcome'className='link'>Learner Outcomes</Link></li>
                <li><Link to='/About'className='link'>About Us</Link></li>
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
                    cursor='pointer'
                />
            </ul>
        </nav>
    </div>
  )
}

export default Header;