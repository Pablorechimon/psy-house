import React, { useState } from 'react';
import Historia from './Historia';

const HistoriasList = (props) => {
    
    return (
        <ul className='text-center grid place-items-center '>
            <div>
            {props.historias.map((historia) => (
                <Historia
                    key={historia.id}
                    historia={historia}
                />
            ))}
            </div>
        </ul>
    )
};

export default HistoriasList