import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-hot-toast';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [data, setData] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setData({ ...data, [category]: value });
    console.log(data);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if( data.firstName && data.lastName && data.email && data.phone && data.message){
      setButtonText('Sending...');
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
    setButtonText('Send');
    if (response.status === 200) {
      setData(formInitialDetails);
      toast.success(`Hey ${data.firstName}, your message was sent successfully!`);
    } else {
      toast.error('Something went wrong, please try again.');
    }
    }
    else{
      toast.error('Please complete all the fields');
    }
  }

  return (
    <div className='bg-gray-100 dark:bg-light-blackcustom h-screen flex justify-center md:items-center items-start mt-6 md:mt-0'> 
      <div className='flex flex-col md:flex-row bg-white dark:bg-dark-200 p-8 rounded-lg shadow-md dark:shadow-dark-500 relative z-30'>
        <Image
          src="https://res.cloudinary.com/dqcn7idzj/image/upload/v1701575286/contact_us_tnesqq.svg"
          alt="logo-contact"
          width={420}
          height={420}
        />
        <div className='lg:ml-8'>
          <h1 className='text-3xl font-bold mb-4 dark:text-light-whitecustom'>Contacto</h1>
          <form className='space-y-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                type="text"
                placeholder="Nombre"
                className='p-2 border rounded'
                value={data.firstName}
                onChange={(e) => onFormUpdate('firstName', e.target.value)}
              />
              <input
                type="text"
                placeholder="Apellido"
                className='p-2 border rounded'
                value={data.lastName}
                onChange={(e) => onFormUpdate('lastName', e.target.value)}
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className='w-full p-2 border rounded'
              value={data.email}
              onChange={(e) => onFormUpdate('email', e.target.value)}
            />
            <input
              type="text"
              placeholder="Telefono"
              className='w-full p-2 border rounded'
              value={data.phone}
              onChange={(e) => onFormUpdate('phone', e.target.value)}
            />
            <textarea
              placeholder="Mensaje"
              className='w-full p-2 border rounded'
              value={data.message}
              onChange={(e) => onFormUpdate('message', e.target.value)}
            />
            <button
              type="submit"
              className='w-full md:w-auto bg-light-bluestrong dark:bg-dark-600 font-bold text-light-whitecustom dark:text-dark-500 dark:hover:text-light-whitecustom p-2 rounded hover:bg-light-blackcustom dark:hover:bg-dark-100'
              onClick={handleSubmit}
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
