import React from 'react';
import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import profile from '../images/img-2.jpg';
import './profilecard.css';

const arrObject = JSON.parse(localStorage.getItem('Personnel'));

const ProfileCard = () => {
  return (
    <div className='profile-wrapper' style={{padding:'100px'}}>

    {arrObject.map((person) => {
        return (
        <div  className="profile-card" >
        
            <div className="profile-media">
                <i class="fas fa-user-circle"></i>
            </div>
            
            <div>
                <Typography gutterBottom variant="h4" component="div">
                    {person.fname} {person.lname}
                </Typography>
                <Typography className="jobtitle" variant="h6" color="text.secondary">
                    {person.jobtitle}
                </Typography>
                <Typography className="bio" variant="body1">
                    <p>{person.bio}</p>
                </Typography>
                <div className="buttons">
                    {/* <a href="mailto:+{person.email}+">Message</a> */}
                    <div className="btn-link1">
                        <a href={'mailto:' + person.email}>Message</a>
                    </div>
                    <div className="btn-link2">
                        <a href={person.portfoliolink} target="_blank" rel="noreferrer">View Portfolio</a>
                    </div>
                </div>
            </div>
            <div className="github-section">
                <a href={person.githublink} target="_blank" rel="noreferrer" > 
                    <i class="fab fa-github"></i>
                </a>
            </div>

        </div> )
    })
    }

</div>
  )
}

export default ProfileCard