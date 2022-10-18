import  { React, useState, useEffect, useCallback } from 'react';
import { getCompartidos } from '../services/CompartidosService';
import CompartidosList from '../Components/Compartido/CompartidosList';

const CompartidosPage = () => {
    
    const pacienteid = window.location.href.split('/')[4]

    const [compartidos, setCompartidos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchCompartidosHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getCompartidos(pacienteid);
        setCompartidos(response.data)
        console.log(response)
        setIsLoading(false)
    }, [])
    
    useEffect(() => {
        fetchCompartidosHandler()
    }, [fetchCompartidosHandler])



    return (
        <div>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	            <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 ">
                     <div className="mb-4">
                         <h1 className="text-grey-darkest text-center">Compartidos</h1>
                         <section>
                            {!isLoading && compartidos.length > 0 && <CompartidosList compartidos={compartidos} />}
                            {isLoading && <p>Loading ...</p>}
                        </section>    
                     </div>
                </div>
            </div>

        </div>
    )
}

export default CompartidosPage