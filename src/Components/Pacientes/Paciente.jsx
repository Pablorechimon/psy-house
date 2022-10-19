import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const Paciente = ({key, paciente}) => {
    const navigate  = useNavigate();

    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const clickHandler = () => {
        navigate("/pacientes/" + paciente._id)
      }

    const edad = getAge(paciente.fecha_nacimiento)
    
    return (
        <div className='divide-y divide-gray-200' onClick={clickHandler}>
            <li className='py-4 flex justify-around flex items-stretch'>
                <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="shrink-0 h-4 w-4">
                        <img className="h-4 w-4" src="https://www.pngkit.com/png/detail/202-2022289_web-reconceptualization-and-redesign-of-carnet-jove-android.png" alt="logo paciente"/>
                    </div>
                <div>
                    <div className="text-xl font-medium text-black">{paciente.nombre} {paciente.apellido}</div>
                        <p className="text-slate-500">DNI: {paciente.DNI}</p>
                        <p className="text-slate-500">{paciente.telefono_personal}</p>                       
                        <p className="text-slate-500">Edad: {edad}</p>
                    </div>
                </div>
            </li>
        </div>
    )
};

export default Paciente