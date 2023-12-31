import React from 'react';
import Slider666 from '@/components/slider666/slider666';
import CirclesEffect from '../circlesEffect/circlesEffect';

const Certificates = () => {
  return (
    <div className='h-screen relative flex justify-center items-center bg-light-whitecustom dark:bg-light-blackcustom'>
      <CirclesEffect/>
      <div className='w-screen'>
        <h1 className='pb-3 text-center text-4xl items-center justify-center text-light-blackcustom dark:text-light-whitecustom mb-6'>Certificados</h1>
        <Slider666 />
      </div>
    </div>
  );
};

export default Certificates;
