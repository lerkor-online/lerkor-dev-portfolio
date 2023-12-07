"use client"
import './navbottom.css'

import React, { useEffect } from 'react'


const NavBottom = () => {

  const handleDarkMode = () => {
    const html = document.querySelector("html");
    html.classList.toggle("dark");
  }
  useEffect(() => {
    const listItems = document.querySelectorAll('.list');

    const activeLink = (event) => {
      listItems.forEach((item) => item.classList.remove('active'));
      event.currentTarget.classList.add('active');
    };

    listItems.forEach((item) => item.addEventListener('click', activeLink));

    return () => {
      // Limpiar los event listeners al desmontar el componente
      listItems.forEach((item) => item.removeEventListener('click', activeLink));
    };
  }, []);

  const navigateToSection = (sectionId) => {
    console.log("Navigating to section:", sectionId);
  
    if (sectionId === 'home') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  

  return (


    <div class="navigation  bg-gradient-to-b from-light-redlight dark:from-dark-100 via-light-redlight dark:via-dark-300 to-light-redblack dark:to-dark-500">
      <ul>
        <li class="list">
          <button onClick={() => navigateToSection('mibio')}>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
                <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492z" />
              </svg>
            </span>
            <span class="text">Profile</span>
            <span class="circle"></span>
          </button>
        </li>
        <li class="list">
          <button>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-code" viewBox="0 0 16 16">
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708m-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
              </svg>
            </span>
            <span class="text">Projects</span>
            <span class="circle"></span>
          </button>
        </li>
        <li class="list active">
          <button onClick={() => navigateToSection('home')}>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
              </svg>
            </span>
            <span class="text">Home</span>
            <span class="circle"></span>
          </button>
        </li>
        <li class="list">
          <button onClick={() => navigateToSection('certificates')}>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
              </svg>
            </span>
            <span class="text">Certificates</span>
            <span class="circle"></span>
          </button>
        </li>
        <li class="list">
          <button onClick={handleDarkMode}>
            <span class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278" />
              </svg>
            </span>
            <span class="text">Dark Mode</span>
            <span class="circle"></span>
          </button>
        </li>
        <div class="indicator  bg-gradient-to-b from-light-redlight dark:from-dark-100 via-light-redlight dark:via-dark-200 to-light-redblack dark:to-dark-500"></div>
      </ul>
    </div>

  )
}

export default NavBottom