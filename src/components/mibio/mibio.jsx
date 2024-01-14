import React from 'react';
import Image from 'next/image';
import Avatar from '../../../public/Lerkor-dev-profile.png'
import './mibio.css';

const Mibio = () => {
  return (
<div className='lg:h-screen flex justify-center lg:m-32 m-2 items-center dark:bg-light-blackcustom'>
      <section className='relative z-30'>
      <Image 
        src={Avatar} 
        className='lg:rounded-full lerkor-dev mr-6'
        alt="Lerkor-dev-profile" 
        height={364}
        width={364} 
        />
      <p className='text-bio text-light-blackcustom dark:text-light-whitecustom'>
      Hola, gracias por pasar por mi portfolio. Quiero contarte que soy <strong className='text-[#b74bff]'>Full Stack </strong>developer, apasionado por el <strong className='text-[#b74bff]'>Frontend</strong>. He fijado mi misión en la creación de soluciones funcionales con interfaces creativas e innovadoras. Cuento con una amplia gama de <strong className='text-[#b74bff]'>Skills</strong> que podras ver en esa sección
      </p>
      {/* <p className='text-bio text-light-blackcustom dark:text-light-whitecustom'>
        Soy un apasionado desarrollador front-end con un fuerte compromiso con la creación de experiencias web excepcionales y atractivas. Mi misión es convertir ideas creativas en soluciones digitales funcionales y hermosas que cautiven a los usuarios.
        <br />
        <br />
        Mi experiencia abarca una amplia gama de tecnologías y herramientas front-end, incluyendo HTML, CSS y JavaScript, así como marcos de trabajo populares como React y Next.js. He trabajado en proyectos que van desde sitios web corporativos y aplicaciones web interactivas hasta tiendas en línea.
      </p> */}
      <div className='flex flex-col justify-center items-center'>
      <a href="https://docs.google.com/document/d/1V2zQKtFpNgw4UdL83XJPnuVTGPG6_sp73DUneleGQ_E/edit?usp=sharing" download="mi-cv.pdf" className="m-6 bg-light-blackcustom dark:bg-dark-100 hover:bg-light-redlight hover:shadow-light-blackcustom hover:shadow-sm text-light-whitecustom font-bold py-2 px-4 rounded dark:hover:bg-dark-200">
        Descargar CV
      </a>      
      </div>
      </section>
    </div>    
  );
};

export default Mibio;

