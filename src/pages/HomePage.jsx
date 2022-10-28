import React, { useState } from 'react';
import Footer from '../shared/Footer';

const HomePage = () => {

    const DUMMY_USER = "Lic. Macarena Irigoyen"

    return (
        <div className=' text-center grid place-items-center h-screen mb-6'>
            <div>
                <h2 className="h-full text-2xl font-bold">LOGO</h2>
            </div>
            <div className='h-full font-cursive text-6xl text-white inline-block align-text-top'>
                <h1 >Bienvenidx {DUMMY_USER}</h1>
                <p>Espero que disfrute su jornada laboral</p>
            </div>
            <Footer/>
        </div>
                
    )
};

export default HomePage