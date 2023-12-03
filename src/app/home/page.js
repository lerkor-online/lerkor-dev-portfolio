"use client";

import React from 'react'
import { useAppContext } from '@/context/context';

import Skills from '@/components/skills/skills';
import Mibio from '@/components/mibio/mibio';
import Certificates from '@/components/certificates/certificates';
import Contact from '@/components/contact/contact';

const Home = () => {
    const { isOpenSkills } = useAppContext();
    console.log(isOpenSkills)
    return (
        <div className='h-screen'>
            <section id="mibio">
                <Mibio />
            </section>
            {isOpenSkills && <div className='gap-6 mt-5 p-10 fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center z-20'>
                <Skills />
            </div>}
            <section id="certificates">
                <Certificates />
            </section>
            <section id="contact">
                <Contact/>
            </section>
        </div>
    )
}

export default Home