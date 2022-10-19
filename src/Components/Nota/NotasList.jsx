import React, { useState } from 'react';
import Nota from './Nota';

const NotasList = (props) => {
    
    return (
        <ul className='text-center grid place-items-center '>
            <div>
            {props.notas.map((nota) => (
                <Nota
                    key={nota.id}
                    nota={nota}
                />
            ))}
            </div>
        </ul>
    )
};

export default NotasList