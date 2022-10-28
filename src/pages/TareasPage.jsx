import  { React, useState, useEffect, useCallback } from 'react';
import { getTareas } from '../services/TareasService';
import TareasList from '../Components/Tareas/TareasList';
import TareaForm from '../Components/Tareas/TareaForm';

const TareasPage = () => {

    const [tareas, setTareas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [newItem, setNewItem] = useState(false);



    const fetchTareasHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getTareas();
        setTareas(response.data)
        setIsLoading(false)
    }, [])
    
    useEffect(() => {
        fetchTareasHandler()
    }, [fetchTareasHandler])

    useEffect(() => {
        if (newItem) {
            fetchTareasHandler();
            setNewItem(false)
        } 
    }, [newItem])



    return (
        <div className='h-screen'>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest">
	            <div className="rounded p-6 m-4 w-full lg:w-3/4 ">
                     <div className="mb-4">
                         <h1 className="text-grey-darkest text-center p-4 m-4 text-4xl">Todo List</h1>
                         <section>
                            {!isLoading && tareas.length > 0 && <TareasList tareas={tareas} /> }
                            {isLoading && <p>Loading ...</p>}
                        </section>   
                        {!isLoading && <TareaForm setNewItem={setNewItem}/> }
                        
                     </div>
                </div>
            </div>

        </div>
    )
};

export default TareasPage