import React, { useState } from 'react';
// import Box from '@mui/material/Box';
import Team from '../components/Team';
const arrObject = JSON.parse(localStorage.getItem('Personnel'));

const Services = () => {
    // const [arr, setArr] = useState([]);

    // setArr([...arr, arrObject]);
    console.log(arrObject);

    return (
        <div style={{margin:'100px'}}>
            {arrObject.map((person) => {
                
                return <li>{person.fname} {person.lname}</li>
            })

            }

            <Team/>
        </div>

        // <Box style={{margin: '100px'}}>
        //   alert({arrObject})
        //   {arrObject.map((person) => (
        //       <ul>
        //       <li>{person.fname}</li>
        //       <li>{person.mname}</li>
        //       <li>{person.lname}</li>
        //       <li>{person.address}</li>
        //       <li>{person.dob}</li>
        //       </ul>
        //   ))
        //   }

        // Services Page
        // {/* <ViewPersonnel/> */}
        // </Box>
    )
}

export default Services