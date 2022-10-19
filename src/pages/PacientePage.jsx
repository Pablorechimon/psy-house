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

    const clickCompartidosHandler = () => {
        navigate("/pacientes/" + paciente._id + "/compartidos")
    }

    const clickConceptualizacionesHandler = () => {
        navigate("/pacientes/" + paciente._id + "/conceptualizaciones")
    }

    const clickHistoriasHandler = () => {
        navigate("/pacientes/" + paciente._id + "/historias")
    }

    const clickNotasHandler = () => {
        navigate("/pacientes/" + paciente._id + "/notas")
    }

    return (
        <div>
            <section>
                {!isLoading && paciente && <PacienteX paciente={paciente} />}
                {isLoading && <p>Loading ...</p>}
            </section>    
            <button onClick={clickCompartidosHandler}> Ver Compartidos con Paciente </button>
            <button onClick={clickConceptualizacionesHandler}> Ver Conceptualizaciones con Paciente </button>
            <button onClick={clickHistoriasHandler}> Ver Historias con Paciente </button>
            <button onClick={clickNotasHandler}> Ver Notas con Paciente </button>
        </div>
    )
};

export default PacientePage