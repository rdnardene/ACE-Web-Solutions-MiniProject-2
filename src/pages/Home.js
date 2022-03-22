import React from 'react';
import '../App.js';
import HeroSection from '../components/HeroSection';
import Featured from '../components/Featured';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import ContactForm from '../components/ContactForm.js';

function Home () {
    return (
        <>
            <HeroSection/>
            <Featured/>
            <Testimonials/>
            <div style={{backgroundColor: 'whitesmoke', padding: '20px 0px'}}>
                <Team/>
            </div>
            <div style={{backgroundColor: 'white', padding: '20px 0px'}}>
                <ContactForm/>
            </div>
        </>
    )
}

export default Home;