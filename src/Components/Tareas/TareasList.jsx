import React, { useState } from 'react';
import Tarea from './Tarea';


const TareasList = (props) => {
    
    return (
        <div>
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
        </div>
    )
};

export default TareasList