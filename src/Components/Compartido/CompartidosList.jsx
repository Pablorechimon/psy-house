import React, { useState } from 'react';
import Compartido from './Compartido';

const CompartidosList = (props) => {
    
    return (
        <ul className='text-center grid place-items-center p-4 m-4 '>
            <div className='p-4 m-4 flex justify-start shadow text-left w-auto w-full'>
            <p className="w-full mx-6 ">Recurso: </p>
            <p className="w-full mx-6">Formato: </p>
            <p className="w-full mx-4">Fecha: </p>
            </div>
            <div>
            {props.compartidos.map((compartido) => (
                <Compartido
                    key={compartido._id}
                    compartido={compartido}
                />
            ))}
            </div>
        </ul>
    )
};

export default CompartidosList