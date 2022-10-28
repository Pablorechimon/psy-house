import  { React, useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { getPaciente } from '../services/PacientesService';
import PacienteX from '../Components/Paciente/PacienteX';

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

    const clickPacientePagosHandler = () => {
        navigate("/pacientes/" + paciente._id + "/pagos")
    }

    return (
        <div className='h-screen'>
            <section>
                {!isLoading && paciente && <PacienteX paciente={paciente} />}
                {isLoading && <p>Loading ...</p>}
            </section>    
            <div className='flex flex-nowrap justify-center'>
            <button onClick={clickCompartidosHandler} className='btn-button'> Ver Compartidos con Paciente </button>
            <button onClick={clickConceptualizacionesHandler} className='btn-button'> Ver Conceptualizaciones con Paciente </button>
            <button onClick={clickHistoriasHandler} className='btn-button'> Ver Historias con Paciente </button>
            <button onClick={clickNotasHandler} className='btn-button'> Ver Notas con Paciente </button>
            <button onClick={clickPacientePagosHandler} className='btn-button'> Agregar Pago de Paciente </button>
            </div>
        </div>
    )
};

export default PacientePage