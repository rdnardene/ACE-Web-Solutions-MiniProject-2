import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
// import { Button } from './Button';
import './HeroSection.css';
import bgvideo from '../videos/video-2.mp4';
// import img1 from '../images/img-1.jpg';



function HeroSection() {
  return (
    <div className='hero-container'>
        <div className="video-wrapper">
          <video autoPlay loop muted>
          <source
            src={bgvideo}
            type="video/mp4"
          />
          </video>
          </div>  
        <div className='headline'>
          <h1>Hire the best developers for any job, online.</h1>
          <p>Our talented team of developers can help you find solution to your web projects</p>
          
          <div className="hero-buttons">
              <Link to="/Portfolio" >
                <button className="hero-btn1">
                  View Portfolios <i className='fab fa-leanpub'></i>
                </button>
              </Link>
              <Link to="/Signup" >
                <button className="hero-btn2">
                  Create your Profile
                </button>
              </Link>
          </div>
        </div>
    </div>
  )
}

export default HeroSection