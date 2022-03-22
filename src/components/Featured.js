import React from 'react';
import './HeroSection.css';
// import Box from '@mui/material/Box';

const Featured = () => {
  return (
    <div className='wrapper'>
        <h1>Need something done?</h1>
        <div className='featured-container'>
            
            <div className='featured-section'>
                <div id='section-title'>
                    <div>
                        <i className='fab fa-sistrix'></i>
                    </div>
                    <div>
                        <h4> Browse Portfolios</h4>
                    </div>
                     
                </div>    
                <div className='setion-par'>    
                    <p>Find professionals you can trust by browsing their samples of previous work and reading their profile reviews.</p>
                </div>
            </div>

            <div className='featured-section'>
                <div id='section-title'>
                    <div><i className='far fa-address-card'></i></div>
                    <div><h4> Pick your top developers</h4> </div>
                     
                </div>    
                <div className='setion-par'>    
                    <p>We've got freelancers for jobs of any size or budget, across 1800+ skills. No job is too complex. We can get it done!</p>
                </div>
            </div>

            <div className='featured-section'>
                <div id='section-title'>
                    <div><i className='fas fa-chart-bar'></i></div>
                    <div><h4> Free Site Audit</h4> </div>
                     
                </div>    
                <div className='setion-par'>    
                    <p>Scan your website for technical and SEO mistakes.</p>
                </div>
            </div>
        </div>
    </div>  
  )
}

export default Featured