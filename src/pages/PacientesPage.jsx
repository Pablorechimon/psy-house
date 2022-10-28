import  { React, useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { getPacientes } from '../services/PacientesService';
import PacientesList from '../Components/Pacientes/PacientesList';
import PacientesFilter from '../Components/Pacientes/PacientesFilter';

const PacientesPage = () => {
    const navigate  = useNavigate();

    const [pacientes, setPacientes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [filteredPaciente, setFilteredPaciente] = useState([])



    const fetchPacientesHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getPacientes();
        setPacientes(response.data)
        setFilteredPaciente(response.data)
        setIsLoading(false)
    }, [])
    
    useEffect(() => {
        fetchPacientesHandler()
    }, [fetchPacientesHandler])

    const filterButtonHandler = (selectedPaciente) => {
        const filtered = pacientes.filter((obj) => 
            obj.nombre.startsWith(selectedPaciente)
        )
        setFilteredPaciente(filtered);
    }

    const clickPacienteHandler = () => {
        navigate("/alta")
    }

    return (
        <div className='h-screen'>
             <PacientesFilter 
            onClickFilter={filterButtonHandler}
            />
            <div className='p-4 m-4 flex justify-end'>
            <button onClick={clickPacienteHandler} className='btn-button'> Agregar Paciente </button>
            </div>
            <section>
                {!isLoading && pacientes.length > 0 && <PacientesList pacientes={filteredPaciente} key={pacientes.id}/>}
                {isLoading && <p>Loading ...</p>}
            </section>    
        </div>
    )
};

export default PacientesPage