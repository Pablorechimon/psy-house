import React, { useState } from 'react';
import Conceptualizacion from './Conceptualizacion';


const ConceptualizacionesList = (props) => {
    
    return (
        <ul className='text-center '>
            <div>
            {props.conceptualizaciones.map((conceptualizacion) => (
                <Conceptualizacion
                    key={conceptualizacion._id}
                    conceptualizacion={conceptualizacion}
                />
            ))}
            </div>
        </ul>
    )
};

export default ConceptualizacionesList