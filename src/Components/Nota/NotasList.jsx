import React, { useState } from 'react';
import Nota from './Nota';

const NotasList = (props) => {
    
    return (
        <ul className='text-center place-items-center '>
            <div>
            {props.notas.map((nota) => (
                <Nota
                    key={nota._id}
                    nota={nota}
                />
            ))}
            </div>
        </ul>
    )
};

export default NotasList