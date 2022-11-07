import  { React, useState, useEffect, useCallback } from 'react';
import { getCompartidos } from '../services/CompartidosService';
import CompartidosList from '../Components/Compartido/CompartidosList';
import CompartidoForm from '../Components/Compartido/CompartidoForm';

const CompartidosPage = () => {
    
    const pacienteid = window.location.href.split('/')[4]

    const [compartidos, setCompartidos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [newItem, setNewItem] = useState(false);

    const fetchCompartidosHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getCompartidos(pacienteid);
        response.data.sort((a,b) => {return new Date(b.fecha) - new Date(a.fecha)})
        setCompartidos(response.data)
        setIsLoading(false)
    }, [])
    
    useEffect(() => {
        fetchCompartidosHandler()
    }, [fetchCompartidosHandler])

    useEffect(() => {
        if (newItem) {
            fetchCompartidosHandler();
            setNewItem(false)
        } 
    }, [newItem])


    return (
        <div className='h-screen'>
            <div className="h-100 w-full flex items-center justify-center bg-gradient-to-r from-my-green to-green-dark">
	            <div className=" rounded  p-6 m-4 w-full lg:w-3/4 ">
                     <div className="mb-4">
                         <h1 className="text-center">Compartidos</h1>
                         {!isLoading && <CompartidoForm setNewItem={setNewItem} pacienteid={pacienteid}/> }
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