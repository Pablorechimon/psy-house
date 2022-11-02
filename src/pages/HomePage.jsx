import React, { useState } from 'react';
import Footer from '../shared/Footer';
import logo from '../img/Center-logo5.png'

const HomePage = () => {

    const DUMMY_USER = "Lic. Macarena Irigoyen"

    return (
        <div className=' text-center grid place-items-center h-screen mb-6'>
            <div>
                <img src={logo} alt="Logo" width="400" height="400"></img>
            </div>
            <div className='h-full font-cursive text-4xl text-white inline-block align-text-top'>
                <h1 >Bienvenidx {DUMMY_USER}</h1>
                <p>Espero que disfrute su jornada laboral</p>
            </div>
            <Footer/>
        </div>
                
    )
};

export default HomePage