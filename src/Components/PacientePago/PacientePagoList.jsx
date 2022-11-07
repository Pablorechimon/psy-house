import React, { useState } from 'react';
import PacientePago from './PacientePago';

const PacientePagoList = (props) => {
    
    return (
        <ul className='text-center grid place-items-center '>
            <div>
            {props.pagos.map((pago) => (
                <PacientePago
                    key={pago._id}
                    pago={pago}
                />
            ))}
            </div>
        </ul>
    )
};

export default PacientePagoList