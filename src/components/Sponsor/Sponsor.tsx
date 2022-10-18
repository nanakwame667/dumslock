import React from 'react'
import { Link } from 'react-router-dom'
import './Sponsor.css'
import google from '../../assets/images/google.svg';
import meta from '../../assets/images/meta.svg';
import aws from '../../assets/images/aws.svg';

const Sponsor = () => {
  return (
    <div className='container sponsor'>
        <h1> trusted & accredited </h1>
              <ul className='sponsors'>
                  <li><Link to='/'><img src={google} alt="google" /></Link></li>
                  <li><Link to='/'><img src={meta} alt="meta" /></Link></li>
                  <li><Link to='/'><img src={aws} alt="aws" /></Link></li>
              </ul>
    </div>
  )
}

export default Sponsor