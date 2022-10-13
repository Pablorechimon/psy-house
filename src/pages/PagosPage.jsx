import  { React, useState, useEffect, useCallback } from 'react';
import { getPagos } from '../services/PagosService';
import PagosList from '../Components/Pagos/PagosList';

const PagosPage = () => {

    const [pagos, setPagos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);



    const fetchPagosHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getPagos();
        setPagos(response.data)
        setIsLoading(false)
    }, [])
    
    useEffect(() => {
        fetchPagosHandler()
    }, [fetchPagosHandler])


    return (
        <div>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 ">
                     <div className="mb-4">
                         <h1 className="text-grey-darkest text-center">Deudores</h1>
                         <section>
                            {!isLoading && pagos.length > 0 && <PagosList pagos={pagos} />}
                            {isLoading && <p>Loading ...</p>}
                        </section>    
                     </div>
                </div>
            </div>

        </div>
    )
};

export default PagosPage