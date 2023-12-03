/* import React from 'react'
import Image from 'next/image'

const Mibio = () => {
  return (
    <div className='h-screen flex items-center justify-center flex-col'>
      <div className='m-10'>
      <Image
        src="https://res.cloudinary.com/dqcn7idzj/image/upload/v1701583372/Logos%20Portfolio/lerkor-dev-logo_yc8nec.png"
        alt="Lerkor-logo"
        width={420}
        height={420}
      />
      </div>
      <div className='flex gap-6'>
        <button>
          <a href="https://www.instagram.com/lerkor_online">
            
          </a>
        </button>
        <button>
        <a href="https://github.com/lerkor-dev">
            
          </a>
        </button>
        <button>
        <a href="https://www.linkedin.com/in/lerkor-dev/">
            
          </a>
        </button>

      </div>
      <h3 className='w-3/4 mt-6 text-light-redblack font-bold'>
        Soy un apasionado desarrollador front-end con un fuerte compromiso con la creación de experiencias web excepcionales y atractivas. Mi misión es convertir ideas creativas en soluciones digitales funcionales y hermosas que cautiven a los usuarios.
        <br />
        <br />
        Mi experiencia abarca una amplia gama de tecnologías y herramientas front-end, incluyendo HTML, CSS y JavaScript, así como marcos de trabajo populares como React y Next.js. He trabajado en proyectos que van desde sitios web corporativos y aplicaciones web interactivas hasta tiendas en línea.
      </h3>
      <a href="https://docs.google.com/document/d/1V2zQKtFpNgw4UdL83XJPnuVTGPG6_sp73DUneleGQ_E/edit?usp=sharing" download="mi-cv.pdf" className="mt-5 bg-light-blackcustom hover:bg-light-redlight hover:shadow-light-blackcustom hover:shadow-sm text-light-whitecustom font-bold py-2 px-4 rounded">
        Descargar CV
      </a>
    </div>
  )
}

export default Mibio */

import React from 'react';
import Image from 'next/image';

const Mibio = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-light-whitecustom text-light-blackcustom p-6'>
      <p className='w-full md:w-3/4 mt-6 text-light-redblack font-bold text-center'>
        Soy un apasionado desarrollador front-end con un fuerte compromiso con la creación de experiencias web excepcionales y atractivas. Mi misión es convertir ideas creativas en soluciones digitales funcionales y hermosas que cautiven a los usuarios.
        <br />
        <br />
        Mi experiencia abarca una amplia gama de tecnologías y herramientas front-end, incluyendo HTML, CSS y JavaScript, así como marcos de trabajo populares como React y Next.js. He trabajado en proyectos que van desde sitios web corporativos y aplicaciones web interactivas hasta tiendas en línea.
      </p>
      <a href="https://docs.google.com/document/d/1V2zQKtFpNgw4UdL83XJPnuVTGPG6_sp73DUneleGQ_E/edit?usp=sharing" download="mi-cv.pdf" className="mt-5 bg-light-blackcustom hover:bg-light-redlight hover:shadow-light-blackcustom hover:shadow-sm text-light-whitecustom font-bold py-2 px-4 rounded">
        Descargar CV
      </a>
    </div>
  );
};

export default Mibio;

