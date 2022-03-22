import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import { Link } from "react-router-dom";
import { makeStyles, } from "@material-ui/styles";
// import portfolio from './images/portfolio.jpg'
// import portfolio2 from './images/portfolio2.jpg'
import { useTheme, useMediaQuery} from "@mui/material";

const team = [
    {
        name : "EDWARD MAMANGON",
        title : "Front-End Developer / Graphic Designer",
        bio: "I'm a FrontEnd Web Developer / Graphic Designer. I'm passionate in creating designs and solutions to your web projects.",
        image: require("../images/portfolio.jpg"),
        portfolio: "https://edward-mamangon.github.io/e-portfolio.github.io/",
        email: "mailto:no-reply@example.com",
        github: "https://github.com/Edward-Mamangon"
    },
    {
        name : "CHRISTER MIROY",
        title : "Front-End Developer",
        bio: "I'm a FrontEnd Web Developer. I'm passionate in creating designs and solutions to your web projects.",
        image: require("../images/christer-portfolio.jpg"),
        portfolio: "https://christer-miroy.github.io/eportfolio.github.io/index.html",
        email: "mailto:no-reply@example.com",
        github: "https://github.com/christer-miroy"
    },
    {
        name : "ARDENE PALIMA",
        title : "Fullstack Web Developer",
        bio: "I'm a FrontEnd Web Developer. I'm passionate in creating designs and solutions to your web projects.",
        image: require("../images/rdn-portfolio.jpg"),
        portfolio: "https://rdnardene.github.io/E-Portfolio/",
        email: "mailto:no-reply@example.com",
        github: "https://github.com/rdnardene"
    }
];

const PortfolioStyles = makeStyles((theme) => (
    {
        teamWrapper : {margin : '40px'},
        cardContainer : {margin: '20px', boxShadow: '0px 0px 10px rgba(0,0,0, 0.35)'},
        subtitle : {color: 'rgb(0, 202, 185)'},
        btn : {fontSize: '1.2rem', color: 'rgb(200,200,200)', textDecoration: 'none', padding: '5px', borderRadius: '0',
        '&:hover': {color: 'rgb(0, 202, 185)', transition: '0.5s'}
        }
    }
))

const Team = () => {
    const classStyle = PortfolioStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
        <div className={classStyle.teamWrapper}>
            <h1>Meet the team.</h1>
        </div>
        <div className={classStyle.teamWrapper}>
            <p>
                We work together to design, create, and produce work that we are proud of. 
                We are available for hire in a wide range of creative projects.

            </p>
        </div>
    
    
        <div style= { (isMobile) ? {display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }
                    : {display:'flex', justifyContent: 'center', margin: '40px 20px' }
        }>

        {  team.map((member) => (
            <Card sx={{ maxWidth: 345 }} className={classStyle.cardContainer}>
                <CardMedia
                    component="img"
                    alt="My Portfolio"
                    height="200"
                    image={member.image}
                    //   image='./.../portfolio.jpg'
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {member.name}
                </Typography>
                <Typography gutterBottom variant="subtitle2" component="div" className={classStyle.subtitle}>
                    {member.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {member.bio}
                </Typography>
                </CardContent>
                <CardActions>
                    
                    <a className={classStyle.btn} href = {member.portfolio} target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-laptop"></i>
                    </a>     
                    <a className={classStyle.btn} href = {member.email} target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-location-arrow"></i>
                    </a>
                    <a className={classStyle.btn} href = {member.github} target="_blank" rel="noopener noreferrer">
                        <i class="fab fa-github"></i>
                    </a>
                 
                </CardActions>
            </Card> )
        )}
        </div>
    </div>
    )
}

export default Team



// import React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import './HeroSection.css';


// const teamMembers = [
//     {
//         photo: "https://placeimg.com/640/480/nature",
//         name: "Ardene Palima",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         eportfolio: "https://kodego.ph/",
//         colorStyle: "#455A64"
//     },
//     {
//         photo: "https://placeimg.com/640/480/arch",
//         name: "Christer Zandrei Miroy",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         eportfolio: "https://kodego.ph/",
//         colorStyle: "#455A64"
//     },
//     {
//         photo: "https://placeimg.com/640/480/tech",
//         name: "Edward Manuel",
//         description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//         eportfolio: "https://kodego.ph/",
//         colorStyle: "#455A64"
//     }
// ]
// const Team = () => {
//   return (
//     <div className='wrapper'>
//         <div className="container-fluid d-flex justify-content-center">
//             {teamMembers.map((tm) => (
                
//                 <Card sx={{ maxWidth: 500 }} className="d-flex flex-rows m-4">
//                     <CardMedia
//                             component="img"
//                             height="140"
//                             image= {tm.photo}
//                             alt="photo"
//                             style={{
//                                 width: 100,
//                                 height: 100,
//                                 borderRadius: 100/2
//                             }}
//                     />
                    
//                     <CardContent>
//                         <Typography gutterBottom variant="h5" component="div">
//                         {tm.name}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                         {tm.description}<br/><br/>
//                         <a href={tm.eportfolio}>See E-Portfolio</a>
//                         </Typography>
//                     </CardContent>

//                 </Card>
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Team