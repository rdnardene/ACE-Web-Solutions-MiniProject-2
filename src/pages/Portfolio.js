import React from 'react';
import ProfileCard from '../components/ProfileCard';
import '../components/profilecard.css';

const arrObject = JSON.parse(localStorage.getItem('Personnel'));

const Portfolio = () => {
    console.log(arrObject);

    return (
        <div className='portfolio-wrapper'>

            <ProfileCard/>
        </div>
    )
}

export default Portfolio