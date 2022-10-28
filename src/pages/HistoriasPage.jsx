import  { React, useState, useEffect, useCallback } from 'react';
import { getHistorias } from '../services/HistoriasService';
import HistoriasList from '../Components/Historia/HistoriasList';
import HistoriaForm from '../Components/Historia/HistoriaForm';

const HistoriasPage = () => {
    
    const pacienteid = window.location.href.split('/')[4]

    const [historias, setHistorias] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [newItem, setNewItem] = useState(false);

    const fetchHistoriasHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getHistorias(pacienteid);
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
            <div className="h-100 w-full flex items-center justify-center">
	            <div className=" rounded p-6 m-4 w-full lg:w-3/4 ">
                     <div className="mb-4">
                         <h1 className="text-center">Historias</h1>
                         <section>
                            {!isLoading && historias.length > 0 && <HistoriasList historias={historias} />}
                            {isLoading && <p>Loading ...</p>}
                        </section>  
                        {!isLoading && <HistoriaForm setNewItem={setNewItem} pacienteid={pacienteid}/> }  
                     </div>
                </div>
            </div>

        </div>
    )
}

export default HistoriasPage