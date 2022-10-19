import  { React, useState, useEffect, useCallback } from 'react';
import { getHistorias } from '../services/HistoriasService';
import HistoriasList from '../Components/Historia/HistoriasList';

const HistoriasPage = () => {
    
    const pacienteid = window.location.href.split('/')[4]

    const [historias, setHistorias] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchHistoriasHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getHistorias(pacienteid);
        setHistorias(response.data)
        setIsLoading(false)
    }, [])
    
    useEffect(() => {
        fetchHistoriasHandler()
    }, [fetchHistoriasHandler])



    return (
        <div>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 ">
                     <div className="mb-4">
                         <h1 className="text-grey-darkest text-center">Historias</h1>
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