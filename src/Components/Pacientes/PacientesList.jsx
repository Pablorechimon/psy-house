import React, { useState } from 'react';
import Paciente from './Paciente';

const PacientesList = (props) => {
    
    return (
        <ul className='grid grid-cols-4 gap-4 gap-x-8 gap-y-8'>
            {props.pacientes.map((paciente) => (
                <Paciente
                    key={`paciente-card-${paciente._id}`}
                    paciente={paciente}
                />
            ))}
        </ul>
    )
};

export default PacientesList