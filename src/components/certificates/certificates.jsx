import React from 'react';
import Slider666 from '@/components/slider666/slider666';

const Certificates = () => {
  return (
    <div className='h-screen flex justify-center items-center bg-light-whitecustom dark:bg-light-blackcustom'>
      <div className='w-screen relative z-10'>
        <h1 className='pb-3 text-center text-4xl items-center justify-center text-light-blackcustom dark:text-light-whitecustom mb-6 section-title'>CERTIFICADOS</h1>
        <Slider666 />
      </div>
    </div>
  );
};

export default Certificates;
