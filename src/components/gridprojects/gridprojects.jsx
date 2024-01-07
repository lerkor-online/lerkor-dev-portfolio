"use client"

import React, { useEffect } from 'react';
import './gridprojects.css';

const GridProjects = () => {
  useEffect(() => {
    console.clear();

    const cardsContainer = document.querySelector('.cards');
    const cards = Array.from(document.querySelectorAll('.card'));
    const overlay = document.querySelector('.overlay');

    const applyOverlayMask = (e) => {
      const overlayEl = e.currentTarget;
      const x = e.pageX - cardsContainer.offsetLeft;
      const y = e.pageY - cardsContainer.offsetTop;

      overlayEl.style = `--opacity: 1; --x: ${x}px; --y:${y}px;`;
    };

    const observerMap = new Map();

    const initOverlayCard = (cardEl) => {
      const overlayCard = document.createElement('div');
      overlayCard.classList.add('card');
      overlayCard.setAttribute('data-card-id', cardEl.dataset.cardId);
      overlay.append(overlayCard);

      const observer = new ResizeObserver((entries) => {
        const isVisible = cardEl.offsetParent !== null;
        if (isVisible) {
          entries.forEach((entry) => {
            const width = entry.borderBoxSize[0].inlineSize;
            const height = entry.borderBoxSize[0].blockSize;
            overlayCard.style.width = `${width}px`;
            overlayCard.style.height = `${height}px`;
          });
        } else {
          // Si la tarjeta ya no es visible, desconectamos el observador
          observer.disconnect();
          observerMap.delete(cardEl);
          overlayCard.remove(); // Eliminamos el overlay correspondiente
        }
      });

      observer.observe(cardEl);
      observerMap.set(cardEl, observer);
    };

    cards.forEach(initOverlayCard);
    document.body.addEventListener('pointermove', applyOverlayMask);

    return () => {
      document.body.removeEventListener('pointermove', applyOverlayMask);
      observerMap.forEach((observer) => {
        observer.disconnect();
      });
      overlay.innerHTML = ''; // Limpiamos el contenido del overlay al desmontar el componente
    };
  }, []);

  return (
    <section className='bg-light-blackcustom'>
      <main className="main flow">
        <h1 className="main__heading">Projects</h1>
        <div className="main__cards cards">
          <div className="cards__inner">
            <div className="cards__card card" data-card-id="1">
            </div>

            <div className="cards__card card" data-card-id="2">
             <img
             className="absolute z-10 md:top-5 bottom-0"
             src="https://res.cloudinary.com/dqcn7idzj/image/upload/v1704467060/Projects/Elixir%20Cars/elixir_cars_yurjbe.png" alt="cars_img" />
            </div>
            <div className="cards__card card" data-card-id="3">
              <img
               className="absolute top-3 md:h-36 h-32  z-10 flex justify-center items-center invert"
               src="https://res.cloudinary.com/dqcn7idzj/image/upload/v1704327229/Projects/Countries%20App/countries_bmitnw.png" alt="countries_img" />
            </div>
            <div className="cards__card card" data-card-id="4">
            </div>

            <div className="cards__card card" data-card-id="5">
            </div>

            <div className="cards__card card" data-card-id="6">
              <img 
              className="absolute z-10 w-56 bottom-0 left-0"
              src="https://res.cloudinary.com/dqcn7idzj/image/upload/v1704342377/Projects/KDA%20Parallax%20Effect/kda_fog_oju36x.png" alt="" />
              <img
              className="absolute z-10 md:w-40 w-20 md:bottom-0 bottom-[4px] md:left-0 left-[-20px]"
              src="https://res.cloudinary.com/dqcn7idzj/image/upload/v1704341548/Projects/KDA%20Parallax%20Effect/kaisa_kda_rd02hy.png" alt="" />
            </div>
            <div className="cards__card card relative" data-card-id="7" style={{ perspective: '500px' }}>
  <img
    className="absolute md:top-[40px] top-[0px] md:left-[82px] left-[6px] rounded-full md:w-16 w-12  shadow-gray-800 shadow-md z-10"
    style={{ transform: 'translate(-50%, -50%) rotateX(20deg) rotateY(30deg)' }}
    src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    alt="rick_avatar"
  />
  <img
    className="absolute md:top-[42px] top-[6px] md:right-[-10px] right-[-50px] rounded-full md:w-16 w-12 shadow-gray-800 shadow-md"
    style={{ transform: 'translate(-50%, -50%) rotateX(20deg) rotateY(-40deg)' }}
    src="https://rickandmortyapi.com/api/character/avatar/118.jpeg"
    alt="evil_morty_avatar"
  />
  <img
    className="absolute md:bottom-[-30px] bottom-[-40px] md:left-[-15px] left-[0px] rounded-full md:w-16 w-12 shadow-gray-800 shadow-md"
    style={{ transform: 'translate(-50%, -50%) rotateX(0deg) rotateY(60deg)' }}
    src="https://rickandmortyapi.com/api/character/avatar/242.jpeg"
    alt="mr_Meeseeks_avatar"
  />
  <img
    className="absolute bottom-[-42px] right-[-40px] rounded-full md:w-16 w-12 shadow-gray-800 shadow-md z-50"
    style={{ transform: 'translate(-50%, -50%) rotateX(-22deg) rotateY(-62deg)' }}
    src="https://rickandmortyapi.com/api/character/avatar/265.jpeg"
    alt="picke_rick_avatar"
  />
</div>





          </div>

          <div className="overlay cards__inner"></div>
        </div>
      </main>
    </section>
  );
};

export default GridProjects;
