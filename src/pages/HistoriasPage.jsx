import  { React, useState, useEffect, useCallback } from 'react';
import { getHistorias } from '../services/HistoriasService';
import HistoriasList from '../Components/Historia/HistoriasList';
import HistoriaForm from '../Components/Historia/HistoriaForm';
import { getPaciente } from '../services/PacientesService';

const HistoriasPage = () => {
    
    const pacienteid = window.location.href.split('/')[4]

    const [historias, setHistorias] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [newItem, setNewItem] = useState(false);
    const [paciente, setPaciente] = useState({});

    const fetchHistoriasHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getHistorias(pacienteid);
        const pacienteResponse = await getPaciente(pacienteid);
        console.log(pacienteResponse.data)
        setHistorias(response.data)
        setIsLoading(false)
    }, [])
    
    useEffect(() => {
        fetchHistoriasHandler()
    }, [fetchHistoriasHandler])

    useEffect(() => {
        if (newItem) {
            fetchHistoriasHandler();
            setNewItem(false)
        } 
    }, [newItem])


    return (
        <div className='h-screen'>
            <div className="">
	            <div className=" rounded p-6 m-4 w-full  ">
                     <div className="mb-4">
                         <h1 className="text-center p-4 m-4">Historia</h1>
                         {!isLoading && <HistoriaForm setNewItem={setNewItem} pacienteid={pacienteid}/> }  
                         <section>
                            {!isLoading && historias.length > 0 && <HistoriasList historias={historias} />}
                            {isLoading && <p>Loading ...</p>}
                        </section>  
                     </div>
                </div>
            </div>

        </div>
    )
}

export default HistoriasPage