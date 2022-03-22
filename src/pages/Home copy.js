import { Typography } from "@mui/material";
import React from "react";
import {makeStyles} from "@mui/styles";
import Slider from "../components/Slider";

const useStyles = makeStyles((theme) => (
    {
        container : {backgroundColor: 'rgb(26, 30, 36)'},
        section : {color: 'whitesmoke'}
    }
));

const Home = () => {
    const classes = useStyles();

    return (
        <div className = {classes.container}>
        {/* This is the Home page. */}
        
            <Slider />
            <Typography>
                <h2 className = {classes.section}>Our Services</h2>
                {/* <img style = {{width:'auto', height: 'auto'}} src="https://placeimg.com/300/300/tech" /> */}
            </Typography>
        </div>
        
   

    )
}

export default Home