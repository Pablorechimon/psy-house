import  { React, useState, useEffect, useCallback } from 'react';
import { getPacientes } from '../services/PacientesService';
import PacientesList from '../Components/Paciente/PacientesList';
import PacientesFilter from '../Components/Paciente/PacientesFilter';

const PacientesPage = () => {

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

    return (
        <div>
             <PacientesFilter 
            onClickFilter={filterButtonHandler}
            />
            <section>
                {!isLoading && pacientes.length > 0 && <PacientesList pacientes={filteredPaciente} />}
                {isLoading && <p>Loading ...</p>}
            </section>    
        </div>
    )
};

export default PacientesPage