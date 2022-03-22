import React, { useRef, useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/styles";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './signupForm.css'
// import ViewPersonnel from './ViewPersonnel';
// import ContactList from "../components/ContactList";

const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgb(147, 147, 147)" // grey
      },

      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgb(85, 218, 207)"  // aqua
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "rgb(0, 202, 185)"  // dark aqua
      },
      "& .MuiOutlinedInput-input": {
        color: "rgb(75,75,75)"   // dark grey
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "rgb(75,75,75)"  // dark grey
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "rgb(0,0,0)"  // black
      },
      "& .MuiInputLabel-outlined": {
        color: "(147, 147, 147)"  // grey
      },
      "&:hover .MuiInputLabel-outlined": {
        color: "rgb(85, 218, 207)" // aqua
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "rgb(0, 202, 185)"  //  dark aqua
      }
    }
});

const styles = {
    "&.MuiButton-root": {
        border: "1px rgb(75,75,75) solid",

      },
      "&.MuiButton-text": {
        color: "rgb(75,75,75)"
      },
      "&.MuiButton-contained": {
        color: "rgb(0, 202, 185)" //dark aqua
      },
      "&.MuiButton-outlined": {
        color: "rgb(26,23,23);"
      }
};


const localStore = (localStorage.getItem('Personnel')) ? JSON.parse(localStorage.getItem('Personnel')) : [];

const SignupForm = () => {
        const classes = useStyles();
     
        const fnameRef = useRef('');
        const mnameRef = useRef('');
        const lnameRef = useRef('');
        const jobtitleRef = useRef('');
        const bioRef = useRef('');
        const dobRef = useRef('');
        const contactRef = useRef('');
        const emailRef = useRef('');
        const portfoliolinkRef = useRef('');
        const githublinkRef = useRef('');
        const [id, setId] = useState(Date.now());
        const [personnelList, setPersonnelList] = useState(localStore);
        // const [storedData, setStoredData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const personnelObject = {
            id : id,
            fname : fnameRef.current.value,
            mname : mnameRef.current.value,
            lname : lnameRef.current.value,
            jobtitle : jobtitleRef.current.value,
            bio: bioRef.current.value,
            dob : dobRef.current.value,
            contact : contactRef.current.value,
            email : emailRef.current.value,
            portfoliolink : portfoliolinkRef.current.value,
            githublink : githublinkRef.current.value
        }

        setPersonnelList((prevState) => {
            return [...prevState, personnelObject]
        });

        fnameRef.current.value = '';
        mnameRef.current.value = '';
        lnameRef.current.value = '';
        jobtitleRef.current.value = '';
        bioRef.current.value = '';
        dobRef.current.value = '';
        contactRef.current.value = '';
        emailRef.current.value = '';
        portfoliolinkRef.current.value = '';
        githublinkRef.current.value = '';
        setId(Date.now());

        // alert('You have rigistered successfully');
        window.location.href = './Thankyou';
    }
    
    useEffect(() => {
        localStorage.setItem('Personnel', JSON.stringify(personnelList));
    
    //To cleanup
    },[personnelList] )
    
    return (
        <div className="signup-container">
            <h2>Join our community of top developers.</h2>
            <p>Please fill out the form below to create your profile.</p>
            <div className="form-wrapper">
                
                <form onSubmit={handleSubmit}>
                    <TextField fullWidth className={classes.root} inputRef={fnameRef} id="standard-basic" label="First Name" variant="outlined" required/><br/> <br/>
                    <TextField fullWidth className={classes.root} inputRef={mnameRef} id="standard-basic" label="Middle Name" variant="outlined" required/><br/> <br/>
                    <TextField fullWidth className={classes.root} inputRef={lnameRef} id="standard-basic" label="Last Name" variant="outlined" required/> <br/> <br/>
                    <TextField fullWidth className={classes.root} inputRef={jobtitleRef} id="standard-basic" label="Job Title" variant="outlined" required/> <br/> <br/>
                    <TextField fullWidth className={classes.root} inputRef={bioRef} id="standard-basic" multiline label="Write short bio." variant="outlined" rows={3} maxRows={8} required/><br/> <br/>

                    <TextField fullWidth className={classes.root} type="date" inputRef={dobRef} id="standard-basic" label="Date of Birth" variant="outlined" required/><br/> <br/>
                    <TextField fullWidth className={classes.root} type="Number" inputRef={contactRef} id="standard-basic" label="Contact Number" variant="outlined" min="0" required/><br/> <br/>
                    <TextField fullWidth className={classes.root} type="email" inputRef={emailRef} id="standard-basic" label="Email" variant="outlined" required/><br/> <br/>
                    <TextField fullWidth className={classes.root} type="url" inputRef={portfoliolinkRef} id="standard-basic" label="Portfolio url" variant="outlined" required/><br/> <br/>
                    <TextField fullWidth className={classes.root} type="url" inputRef={githublinkRef} id="standard-basic" label="Github link" variant="outlined" required/><br/> <br/>
            
                
        
                    {/* <input type="file" placeholder="Upload Photo"{...register("photo", { required: true })} /><br/><br/> */}
            
                        <Button sx={styles} type="submit" fullWidth variant="outlined">Submit</Button>
                        {/* <Button variant="outlined" onClick={handleView}>View Personnel</Button> */}
                    {/* <input type="reset" value="Reset"/> */}
                </form>
                

                {/* <ViewPersonnel arr={storedData}/> */}

            </div>
        </div>    
    )
}


export default SignupForm