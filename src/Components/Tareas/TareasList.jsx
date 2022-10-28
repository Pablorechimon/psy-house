import React, { useState, useEffect } from 'react';
import Tarea from './Tarea';


const TareasList = (props) => {

    const notcomplete = props.tareas.filter((tarea) => {
        return tarea.finalizado == false
    })
    
    return (
        <div>
            <ul className='text-center grid place-items-center '>
                <div>
                {notcomplete.map((tarea) => (
                    <Tarea
                        key={tarea._id}
                        tarea={tarea}
                    />
                ))}
                </div>
            </ul>
        </div>
    )
};

export default TareasList