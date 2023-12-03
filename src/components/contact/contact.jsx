import React from 'react';
import { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  return (
    <div className='bg-gray-100 min-h-screen flex justify-center items-center'>
      <div className='flex bg-white p-8 rounded-lg shadow-md'>
        <Image
          src="https://res.cloudinary.com/dqcn7idzj/image/upload/v1701575286/contact_us_tnesqq.svg"
          alt="logo-contact"
          width={420}
          height={420}
        />
        <div className='ml-8'>
          <h1 className='text-3xl font-bold mb-4'>Contacto</h1>
          <form className='space-y-4'>
            <div className='grid grid-cols-2 gap-4'>
              <input
                type="text"
                placeholder="Nombre"
                className='p-2 border rounded'
              />
              <input
                type="text"
                placeholder="Apellido"
                className='p-2 border rounded'
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className='w-full p-2 border rounded'
            />
            <input
              type="text"
              placeholder="Telefono"
              className='w-full p-2 border rounded'
            />
            <textarea
              placeholder="Mensaje"
              className='w-full p-2 border rounded'
            />
            <button
              type="submit"
              className='bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
