import React, { useState } from 'react';
import Paciente from './Paciente';

const PacientesList = (props) => {
    
    return (
        <ul className='flex flex-wrap justify-around items-stretch'>
            {props.pacientes.map((paciente) => (
                <Paciente
                    key={paciente.id}
                    paciente={paciente}
                />
            ))}
        </ul>
    )
};

export default PacientesList