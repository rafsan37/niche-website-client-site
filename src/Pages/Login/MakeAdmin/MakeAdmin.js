import React, { useState } from 'react';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://dry-basin-21190.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                   setEmail('')
                   alert("Make Admin successfully");
                }
            })

        e.preventDefault()
    }
    return (
       <div className=" text-center my-5  py-5 ">
           <form onSubmit={handleAdminSubmit}>
            <input placeholder="Email" className="fs-4  mt-1 px-2 rounded" type="email" name="email" label="Email"
                    onBlur={handleOnBlur} />  <br />
         <button type="submit" className='btn btn-info  rounded  mt-2 px-5' >Make Admin</button>
       </form>
       </div>
    );
};

export default MakeAdmin;