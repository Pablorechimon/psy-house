import  { React, useState, useEffect, useCallback } from 'react';
import PacientePagosList from '../Components/PacientePago/PacientePagoList';
import PacientePagoForm from '../Components/PacientePago/PacientePagoForm';
import { getPagosPaciente } from '../services/PagosService';

const PacientePagosPage = () => {
    
    const pacienteid = window.location.href.split('/')[4]

    const [pagos, setPagos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [newItem, setNewItem] = useState(false);

    const fetchPagosHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getPagosPaciente(pacienteid);
        setPagos(response.data)
        setIsLoading(false)
    }, [])
    
    useEffect(() => {
        fetchPagosHandler()
    }, [fetchPagosHandler])

    useEffect(() => {
        if (newItem) {
            fetchPagosHandler();
            setNewItem(false)
        } 
    }, [newItem])

    return (
        <div>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 ">
                     <div className="mb-4">
                         <h1 className="text-grey-darkest text-center">Pagos</h1>
                         <section>
                            {!isLoading && <PacientePagosList pagos={pagos} />}
                            {isLoading && <p>Loading ...</p>}
                        </section>    
                        {!isLoading && <PacientePagoForm setNewItem={setNewItem} pacienteid={pacienteid}/> }  
                     </div>
                </div>
            </div>

        </div>
    )
}

export default PacientePagosPage