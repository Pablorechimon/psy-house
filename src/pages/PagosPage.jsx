import  { React, useState, useEffect, useCallback } from 'react';
import { getPagos } from '../services/PagosService';
import PagosList from '../Components/Pagos/PagosList';

const PagosPage = () => {

    const [pagos, setPagos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const usuario = JSON.parse(window.localStorage.getItem("user"))
    let id_usuario = usuario._id



    const fetchPagosHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getPagos(id_usuario);
        setPagos(response.data)
        setIsLoading(false)
    }, [])
    
    useEffect(() => {
        fetchPagosHandler()
    }, [fetchPagosHandler])


    return (
        <div>
        <h1 className="text-grey-darkest text-center text-4xl pt-4 mt-4">Deudores</h1>
        <div className='h-screen  flex items-center justify-center bg-teal-lightest'>
            <div className="w-full ">
	            <div className=" ">
                     <div className="mb-4">
                         <section>
                            {!isLoading && pagos.length > 0 && <PagosList pagos={pagos} />}
                            {isLoading && <p>Loading ...</p>}
                        </section>    
                     </div>
                </div>
            </div>
        </div>
        </div>
    )
};

export default PagosPage