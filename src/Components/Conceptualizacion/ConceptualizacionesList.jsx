import React, { useState } from 'react';
import Conceptualizacion from './Conceptualizacion';


const ConceptualizacionesList = (props) => {
    
    return (
        <ul className='text-center grid place-items-center '>
            <div>
            {props.conceptualizaciones.map((conceptualizacion) => (
                <Conceptualizacion
                    key={conceptualizacion.id}
                    conceptualizacion={conceptualizacion}
                />
            ))}
            </div>
        </ul>
    )
};

export default ConceptualizacionesList