import React from 'react'
import { useState } from 'react'

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  return (
    <div className='bg-red-500 h-screen flex justify-center items-center'>
      <div className=''>
        <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>      
    </div>
  )
}

export default Contact