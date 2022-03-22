import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobile = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };


    useEffect(() => {
        showButton();
    }, []);


    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeMobile}>
                <i className='fab fa-buysellads'></i><i className='fab fa-cuttlefish'></i><i className='fab fa-etsy'></i>
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobile}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Portfolio' className='nav-links' onClick={closeMobile}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/About' className='nav-links' onClick={closeMobile}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Contact' className='nav-links' onClick={closeMobile}>
                            Contact Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Signup' className='nav-links-mobile' onClick={closeMobile}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <div className="nav-button">
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar