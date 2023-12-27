"use client"

import { useAppContext } from '@/context/context';
import React from "react";
import NavEffect from "../navEffect/navEffect";
import NavBottom from '../navbottom/navbottom';


const Nav = () => {
    const { isOpenSkills, handleOpenSkills } = useAppContext()

    const handleDarkMode = () => {
        const html = document.querySelector("html");
        html.classList.toggle("dark");
    }
    return (
        <main>
            <header
                id="landing-header"
                className="py-4  px-10 item-center fixed top-0 w-full justify-between bg-neutral-900 border-b-[3px] border-light-rebstrong dark:border-dark-100 z-40 lg:block hidden"
            >
                <nav className="flex flex-grow justify-center">
                    <ul className="flex text-sm [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:text-gray-50">
                        <li>
                            <a href="#mibio">Mi Bio</a>
                        </li>
                        <li /* onClick={handleOpenSkills} */>
                            <a href="#skills" className=" cursor-pointer" >Skills</a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCwDTMggF22osYfyiEikUCOQ">Proyectos</a>
                        </li>
                        <li>
                            <a href="#certificates">Certificados</a>
                        </li>
                        <li>
                            <a href="#contact">Contacto</a>
                        </li>
                        <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            </a>
                        </li>
                       {/*  <li>
                            <a href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                </svg>
                            </a>
                        </li> */}
                        <li>
                            <a onClick={handleDarkMode}>
Dark Mode
                            </a>
                        </li>
                    </ul>
                </nav>
                <nav>
                </nav>
                <NavEffect />
            </header>
            <nav className='fixed bottom-0 left-0 w-screen lg:hidden z-40'>
                <NavBottom handleDarkMode={handleDarkMode} />
            </nav>
        </main>
    )
}
    
    export default Nav
