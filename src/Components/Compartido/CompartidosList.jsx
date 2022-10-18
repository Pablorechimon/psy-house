import React, { useState } from 'react';
import Compartido from './Compartido';

const CompartidosList = (props) => {
    
    return (
        <ul className='text-center grid place-items-center '>
            <div>
            {props.compartidos.map((compartido) => (
                <Compartido
                    key={compartido.id}
                    compartido={compartido}
                />
            ))}
            </div>
        </ul>
    )
};

export default CompartidosList