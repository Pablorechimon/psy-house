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
        <div className='h-screen  flex items-center justify-center bg-teal-lightest'>
            <div className="w-full ">
	            <div className=" ">
                     <div className="mb-4">
                         <h1 className="text-grey-darkest text-center text-4xl">Deudores</h1>
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