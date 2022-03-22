import React from 'react'

const GetContact = (props) => {
  return (
    <div className='container'>
        <table className='table table-bordered table-striped'>
            <tr>
                <th>Full Name</th>
                <th>Email</th>
                <th>Message</th>
            </tr>
            {props.arr.map((items) => {
                return(
                    <tr key={items.id}>
                        <td>{items.fullName}</td>
                        <td>{items.email}</td>
                        <td>{items.message}</td>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}

export default GetContact