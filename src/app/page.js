"use client"

import { useState } from 'react';

import Nav from '@/components/nav/nav';
import Skills from '@/components/skills/skills';
import Slider666 from '@/components/slider666/slider666';

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen)
  } 

  const handleClose = () => { 
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Nav handleOpen={handleOpen} />
      <div className='bg-black text-white flex items-center justify-center flex-col'>
        <div className='flex flex-col justify-center items-center gap-6 w-6/12'>
        <img 
        src="https://res.cloudinary.com/dqcn7idzj/image/upload/v1698509624/Logos%20Portfolio/rqbl5r2npjziz36cic4a.svg"
        className="w-3/4"
        />
          <h2>Front-End Developer</h2>
        </div>
        <div className="flex space-x-4 mt-7">
          <a
            href="mailto:lerkor.online@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            Gmail
          </a>
          <a
            href="https://github.com/lerkor-online"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lerkor-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg"
          >
            LinkedIn
          </a>
        </div>
        <h3 className='w-3/4 mt-6'>
          Soy un apasionado desarrollador front-end con un fuerte compromiso con la creación de experiencias web excepcionales y atractivas. Mi misión es convertir ideas creativas en soluciones digitales funcionales y hermosas que cautiven a los usuarios.
          <br />
          <br />
          Mi experiencia abarca una amplia gama de tecnologías y herramientas front-end, incluyendo HTML, CSS y JavaScript, así como marcos de trabajo populares como React y Next.js. He trabajado en proyectos que van desde sitios web corporativos y aplicaciones web interactivas hasta tiendas en línea.
        </h3>
        <div id="skills"></div>
        <a href="https://docs.google.com/document/d/1V2zQKtFpNgw4UdL83XJPnuVTGPG6_sp73DUneleGQ_E/edit?usp=sharing" download="mi-cv.pdf" className="mt-5 bg-violet-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Descargar CV
        </a>
      </div>
      {isOpen && <div className='gap-6 mt-5 p-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-20'>
        <Skills handleClose={handleClose}/>
      </div>}
      <div className='h-1/2'>
        <h1 className='flex pb-5 text-center text-4xl items-center justify-center bg-black text-white'>Certificados</h1>
        <Slider666 />
      </div>
      <div id="certificates"></div>
    </div>
  );
}
