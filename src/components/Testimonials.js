import React from 'react'
import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './HeroSection.css'

const testimonial = [
    {
        photo: "https://placeimg.com/640/480/people",
        text: "Web development services was worth a fortune to my company.",
        client: "Adam E. Armstrong",
        position: "Manager",
        company: "Kling and Sons"
    },
    {
        photo: "https://placeimg.com/640/480/people",
        text: "You guys are the best! Thank you so much for a job well done. Keep up the great work!",
        client: "Joseph R. Chang",
        position: "Tech Lead",
        company: "Schowalter, Walter and Kuhn"
    },
    {
        photo: "https://placeimg.com/640/480/people",
        text: " I just wanted to let you know that it's been great working with you. You've been so helpful. ",
        client: "Karla E. Campbell",
        position: "CEO",
        company: "Koch PLC"
    }
]

const Testimonials = () => {
  return (
    <div className='wrapper2'>
        <h1>What Our Clients are Saying?</h1>
        <div className="card-container">
            
            {testimonial.map((testi) => (
                
                <Card sx={{ maxWidth: 750 }} className="testimonial-card" >
                    {/* <CardMedia
                            className="testimonial-media"
                            component="img"
                            height="140"
                            image= {testi.photo}
                            alt="photo"
                            style={{
                                width: 100,
                                height: 100,
                                borderRadius: 100/2,
                            }}
                    /> */}
                    <div className="testimonial-media">
                        <img src={testi.photo} alt="photo" />
                    </div>
                    
                    <div>
                        <Typography gutterBottom variant="h5" component="div">
                        
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <p>{testi.text}</p>
                        <p style={{color: "rgb(0, 202, 185)"}}>{testi.client}</p>
                        <Box sx={{ fontStyle: 'italic', m: 1 }}>{testi.position}</Box>
                        {testi.company}
                        </Typography>
                    </div>
    
                </Card>
            ))}
      </div>
    </div>
  ) 
}

export default Testimonials