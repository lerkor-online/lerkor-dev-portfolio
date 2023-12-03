import React from 'react'

const Mibio = () => {
  return (
    <div className='bg-black text-white flex items-center justify-center flex-col'>
        <div className='flex flex-col justify-center items-center gap-6 w-6/12'>
        <img 
        src="https://res.cloudinary.com/dqcn7idzj/image/upload/v1698509624/Logos%20Portfolio/rqbl5r2npjziz36cic4a.svg"
        className="w-3/4"
        />
        </div>
        {/* <div className="flex space-x-4 mt-7">
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
        </div> */}
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
  )
}

export default Mibio