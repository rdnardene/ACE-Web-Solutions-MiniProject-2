import './Footer.css';
import {Link} from 'react-router-dom';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <>
    <footer class="footer-container">
        <div class="footer-top">
            <div class="footer-left">
                <Link className="footer-brand" to="/" >
                    <i className='fab fa-buysellads'></i><i className='fab fa-cuttlefish'></i><i className='fab fa-etsy'></i>
                </Link>
                <div className="left-item">
                    <div><i class="fa fa-map-marker"></i></div>
                    <Typography sx={{color: "whitesmoke"}} variant="subtitle2" >
                        Suite 123 ACE Complex, Taguig City
                    </Typography>
                </div>

                <div className="left-item">
                    <i class="fa fa-phone"></i>
                    <Typography sx={{color: "whitesmoke"}} variant="subtitle2" >
                         +639354597695
                    </Typography>
                </div>
                <div className="left-item">
                    <i class="fa fa-envelope"></i>
                    <Typography sx={{color: "whitesmoke"}} variant="subtitle2" >
                        <a href="mailto:support@eduonix.com">acewebsolutions@gmail.com</a>
                    </Typography>
                </div>
            </div>

            <div class="footer-center">
                <h5>Site Links</h5>
                <ul class="footer-links">
                    <li>
                        <Typography sx={{color: "whitesmoke"}} variant="subtitle1" >
                            <a href="#">Home </a>
                        </Typography>
                    </li>
                    <li>
                        <Typography sx={{color: "whitesmoke"}} variant="subtitle1" >
                            <a href="#">Portfolio</a>
                        </Typography>
                    </li>
                    <li>
                        <Typography sx={{color: "whitesmoke"}} variant="subtitle1" >
                            <a href="#">About us</a>
                        </Typography>
                    </li>
                    <li>
                        <Typography sx={{color: "whitesmoke"}} variant="subtitle1" >
                            <a href="#">Contact us</a>
                        </Typography>
                    </li>
                </ul>
            
            </div>

            <div class="footer-right">
                <div class="footer-company-about">
                    <h5>About the Company</h5>
                    <Typography sx={{color: "whitesmoke"}} variant="body1" >
                        The platform provides a wide range of categories, from web design and software development to customer service.
                    </Typography>
                </div>
                <div class="footer-icons">
                    <a href="#"><i class='fab fa-facebook'></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-google"></i></a>
                    <a href="#"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
        </div>

        <div className="copyright">
            <Typography sx={{color: "rgb(100,100,100)"}} variant="body2" >
                © Ace Web Solutions || All Rights Reserved 2022
            </Typography>
        </div>
    </footer>
    </>
  );
}

export default Footer;



// import React from 'react';
// import './Footer.css';
// import {Link} from 'react-router-dom';


// function FooterSection () {

//     return (

//         <div className='footer-container'>
            
//             <section className='footer-text'>
//                 <p>
//                     Follow us for more information
//                 </p>
//             </section>
//             <h2>Contents</h2>
//             <div class='footer-links'>
//                 <div className='footer-link-wrapper'>
                   
//                     <div class='footer-link-items'>
//                         <ul>
//                             <li><Link to='/'>Home</Link></li>
//                             <li><Link to='/Services'>Services</Link></li>
//                             <li><Link to='/About'>About Us</Link></li>
//                             <li><Link to='/Contact'>Contact Us</Link></li>
//                             <li><Link to='/Signup'>Sign Up</Link></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             <section class='social-media'>
//                 <div class='social-media-wrap'>
//                     <div class='footer-logo'>
//                         <Link to='/' className='social-logo'>
//                         <i className='fab fa-buysellads'></i><i className='fab fa-cuttlefish'></i><i className='fab fa-etsy'></i>
//                         </Link>
//                     </div>
//                     <small class='website-rights'>CopyRight ACE Web Solutions || All Rights Reserved 2022</small>

//                         <div class='social-icons'>
//                             <Link 
//                             class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
//                             <i className='fab fa-facebook'></i></Link>
//                             <Link 
//                             class='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
//                                 <i className='fab fa-instagram'></i></Link>
//                             <Link 
//                             class='social-icon-link google' to='/' target='_blank' aria-label='Google'>
//                                 <i className='fab fa-google'></i></Link>
//                             <Link 
//                             class='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
//                                 <i className='fab fa-twitter'></i></Link>
//                             <Link 
//                             class='social-icon-link youtube' to='/' target='_blank' aria-label='YouTube'>
//                                 <i className='fab fa-youtube'></i></Link>
//                         </div>

//                 </div>
//             </section>

//         </div>

//     ); 

// }

// export default FooterSection;