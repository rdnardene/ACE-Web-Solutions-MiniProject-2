import React, { useState } from 'react';
import SignupForm from './SignupForm';
import ViewPersonnel from './ViewPersonnel';

const PersonnelTracker = () => {
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [dob, setDob] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');

    const [personnelList, setPersonnelList] = useState([]);

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const handleMiddleName = (e) => {
        setMiddleName(e.target.value)
    }

    const handleLastName = (e) => {
        setLastName(e.target.value)
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleDob = (e) => {
        setDob(e.target.value)
    }

    const handleContactNumber = (e) => {
        setContactNumber(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const personnel = {firstName, middleName, lastName, address, dob, contactNumber, email};
      
        setPersonnelList([...personnelList, personnel]);

        personnelList.push(personnel);

        console.table(personnelList);
        localStorage.setItem('personnelList', JSON.stringify(personnelList))
    }

    return (
        <div className="container">
            <h2 className="m-3">Personal Information</h2>
            <SignupForm firstName={firstName} 
                            middleName={middleName}
                            lastName={lastName} 
                            address={address}
                            dob={dob}
                            contactNumber={contactNumber}
                            email={email}
                            handleFirstName={handleFirstName} 
                            handleMiddleName={handleMiddleName}
                            handleLastName={handleLastName} 
                            handleAddress={handleAddress}
                            handleDob={handleDob}
                            handleContactNumber={handleContactNumber}
                            handleEmail={handleEmail}
                            handleSubmit={handleSubmit}
                            />

            <ViewPersonnel personnelList={personnelList}/>
            
        </div>
    )
}

export default PersonnelTracker

