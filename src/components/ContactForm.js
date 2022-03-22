import React, { useEffect } from 'react';
import { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// import { withStyles } from '@material-ui/core/styles';
import './contactForm.css';
import { makeStyles } from "@material-ui/styles";


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
        border: "1px rgb(75,75,75) solid"
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


let chk = (localStorage.getItem("Contacts")) ? JSON.parse(localStorage.getItem("Contacts")) : [];

const ContactForm = () => {
    const classes = useStyles();

    const [id, SetID] = useState(Date.now);
    const fullNameRef = useRef(null);
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const [contactList, setContactList] = useState(chk);

    const handleSubmit = (e) => {
        e.preventDefault();
        const objectContacts = {
            id: id,
            fullName: fullNameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        setContactList((prevState) => {
            return [...prevState, objectContacts]
        });
        
        fullNameRef.current.value = null;
        emailRef.current.value = null;
        messageRef.current.value = null
        SetID(Date.now());
    }

    useEffect(() => {
        localStorage.setItem('Contacts', JSON.stringify(contactList))
    }, [contactList])
    

  return (
    <div className="contact-container">
        <div className="section-title">
            <h3>Get in Touch!</h3>
            <p>We're here to help and answer any question you might have. We look forward to hearing from you. 
            </p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              
            </p>
        </div>
        <div className="form-wrapper">
            <form action="" onSubmit={handleSubmit}>
                <div className="inputs">
                    <TextField fullWidth className={classes.root} inputRef={fullNameRef} id="standard-basic" label="Full Name"  variant="outlined" required/>
                </div>
                <div className="inputs">
                    <TextField fullwidth className={classes.root} type="email" inputRef={emailRef} id="standard-basic" label="Email"  variant="outlined" required/>
                </div>
                <div className="inputs">
                    <TextField fullWidth className={classes.root} inputRef={messageRef} id="standard-basic" multiline label="Write your message." variant="outlined" rows={3} maxRows={8} required/>
                </div>
                <div>
           
                        <Button sx={styles} fullWidth color="primary" className="btnSend" type="submit" variant="outlined" endIcon={<SendIcon />}>Send Message</Button>
   
                </div>
                
            </form>
        </div>
    </div>
  )
}

export default ContactForm