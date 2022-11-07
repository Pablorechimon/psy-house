import  { React, useState, useEffect, useCallback } from 'react';
import ConceptualizacionesList from '../Components/Conceptualizacion/ConceptualizacionesList';
import ConceptualizacionForm from '../Components/Conceptualizacion/ConceptualizacionForm';
import { getConceptualizaciones } from '../services/ConceptualizacionesService';

const ConceptualizacionesPage = () => {
    
    const pacienteid = window.location.href.split('/')[4]

    const [conceptualizaciones, setConceptualizaciones] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [newItem, setNewItem] = useState(false);

    const fetchConceptualizacionesHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getConceptualizaciones(pacienteid);
        setConceptualizaciones(response.data)
        setIsLoading(false)
    }, [])
    
    useEffect(() => {
        fetchConceptualizacionesHandler()
    }, [fetchConceptualizacionesHandler])

    useEffect(() => {
        if (newItem) {
            fetchConceptualizacionesHandler();
            setNewItem(false)
        } 
    }, [newItem])


    return (
        <div className='h-screen'>
            <div className="h-100 w-full flex items-center justify-center">
	            <div className=" rounded p-6 m-4 w-full lg:w-3/4 ">
                     <div className="mb-4">
                         <h1 className="text-center">Conceptualizaciones</h1>
                         {!isLoading && <ConceptualizacionForm setNewItem={setNewItem} pacienteid={pacienteid}/> }
                         <section>
                            {!isLoading && conceptualizaciones.length > 0 && <ConceptualizacionesList conceptualizaciones={conceptualizaciones} />}
                            {isLoading && <p>Loading ...</p>}
                        </section>    
                       
                     </div>
                </div>
            </div>

        </div>
    )
}

export default ConceptualizacionesPage