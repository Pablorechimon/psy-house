import React, { useState } from 'react';
import Tarea from './Tarea';

const TareasList = (props) => {
    
    return (
        <ul className='text-center grid place-items-center '>
            <div>
            {props.tareas.map((tarea) => (
                <Tarea
                    key={tarea.id}
                    tarea={tarea}
                />
            ))}
            </div>
        </ul>
    )
};

export default TareasList