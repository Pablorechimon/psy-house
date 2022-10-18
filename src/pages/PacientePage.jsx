import  { React, useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { getPaciente } from '../services/PacientesService';
import PacienteX from '../Components/Paciente/PacienteX';
import CompartidosPage from './CompartidosPage';

const PacientePage = () => {
    const navigate  = useNavigate();

    const [paciente, setPaciente] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const pacienteid = window.location.href.split('/')[4]

    const fetchPacienteHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getPaciente(pacienteid);
        setPaciente(response.data)
        setIsLoading(false)
    }, [])
    
    useEffect(() => {
        fetchPacienteHandler()
    }, [fetchPacienteHandler])

    const clickHandler = () => {
        navigate("/pacientes/" + paciente._id + "/compartidos")
    }

    return (
        <div>
            <section>
                {!isLoading && paciente && <PacienteX paciente={paciente} />}
                {isLoading && <p>Loading ...</p>}
            </section>    
            <button onClick={clickHandler}> Ver Compartidos con Paciente </button>
        </div>
    )
};

export default PacientePage