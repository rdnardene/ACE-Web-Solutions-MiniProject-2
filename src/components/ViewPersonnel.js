import React from 'react'

const ViewPersonnel = (props) => {
  return (
    <div>
        {/* <table>
            <tr>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Address</th>
                <th>Date of Birth</th>
                <th>Contact Number</th>
                <th>Email</th>
            </tr>

            {props.arr.map((person) => (
                <tr>
                    <td>{person.fname}</td>
                    <td>{person.mname}</td>
                    <td>{person.lname}</td>
                    <td>{person.address}</td>
                    <td>{person.dob}</td>
                    <td>{person.contact}</td>
                    <td>{person.email}</td>
                </tr>
            ))
            }
        </table> */}
        {props.arr.map((person) => (
            <table className='table' key={person.id}>
                <tr>
                    <th>Name</th>
                    <td>{person.fname} {person.mname} {person.lname}</td>
                </tr>
                <tr>
                    <th>Date of Birth</th>
                    <td>{person.dob}</td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>{person.address}</td>
                </tr>
                <tr>
                    <th>Contact Number</th>
                    <td>{person.contact}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{person.email}</td>
                </tr>
            </table>
        ))
          }
        
    </div>
  )
}

export default ViewPersonnel