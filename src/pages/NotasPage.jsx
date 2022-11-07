import  { React, useState, useEffect, useCallback } from 'react';
import { getNotas } from '../services/NotasService';
import NotasList from '../Components/Nota/NotasList';
import NotaForm from '../Components/Nota/NotaForm';

const NotasPage = () => {
    
    const pacienteid = window.location.href.split('/')[4]

    const [notas, setNotas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [newItem, setNewItem] = useState(false);

    const fetchNotasHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getNotas(pacienteid);
        response.data.sort((a,b) => {return new Date(b.fecha) - new Date(a.fecha)})
        setNotas(response.data)
        setIsLoading(false)
    }, [])
    
    useEffect(() => {
        fetchNotasHandler()
    }, [fetchNotasHandler])

    useEffect(() => {
        if (newItem) {
            fetchNotasHandler();
            setNewItem(false)
        } 
    }, [newItem])

    return (
        <div className='h-screen'>
            <div className="h-100 w-full flex items-center justify-center bg-gradient-to-r from-my-green to-green-dark">
	            <div className="rounded p-6 m-4 w-full lg:w-3/4 ">
                     <div className="mb-4">
                         <h1 className="text-center">Notas</h1>
                         {!isLoading && <NotaForm setNewItem={setNewItem} pacienteid={pacienteid}/> }  
                         <section>
                            {!isLoading && notas.length > 0 && <NotasList notas={notas} />}
                            {isLoading && <p>Loading ...</p>}
                        </section>    
                     </div>
                </div>
            </div>

        </div>
    )
}

export default NotasPage