import  { React, useState, useEffect, useCallback } from 'react';
import { getTareas } from '../services/TareasService';
import TareasList from '../Components/Tareas/TareasList';
import TareaForm from '../Components/Tareas/TareaForm';

const TareasPage = () => {

    const [tareas, setTareas] = useState([]);
    const [tareasCompletadas, setTareasCompletadas] = useState([]);
    const [tareasNoCompletadas, setTareasNoCompletadas] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [newItem, setNewItem] = useState(false);
    const [verCompletadas, setVerCompletadas] = useState(false)
    const usuario = JSON.parse(window.localStorage.getItem("user"))
    let id_usuario = usuario._id


    const fetchTareasHandler = useCallback(async () => {
        setIsLoading(true)  
        let tareasCompletadas = []
        let tareasNoCompletadas = []
        const response = await getTareas(id_usuario);
        response.data.forEach(tarea => {
            if (tarea.finalizado){
                
                tareasCompletadas.push(tarea)
            } else {
                tareasNoCompletadas.push(tarea)
            }
        });
        setTareas(tareasNoCompletadas)
        setTareasCompletadas(tareasCompletadas)
        setTareasNoCompletadas(tareasNoCompletadas)
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

    useEffect(() => {
        if (verCompletadas){
            console.log(tareasCompletadas)
            setTareas(tareasCompletadas)
        } else {
            console.log(tareasNoCompletadas)
            setTareas(tareasNoCompletadas)
        }
    }, [verCompletadas])

    const verCompletadasHandler = () => {
        setVerCompletadas(!verCompletadas)
        
    }


    return (
        <div className='h-screen'>
            <div className="h-100 w-full flex items-center justify-center bg-teal-lightest bg-gradient-to-r from-my-green to-green-dark">
	            <div className="rounded p-6 m-4 w-full lg:w-3/4 ">
                     <div className="mb-4">
                         <h1 className="text-grey-darkest text-center p-4 m-4 text-4xl">Todo List</h1>
                         <button className='btn-pdf' onClick={verCompletadasHandler}>{!verCompletadas ? 'Ver Completadas' : 'Quitar Completadas'}</button>
                         {!isLoading && <TareaForm setNewItem={setNewItem}/> }
                         <section>
                            {!isLoading && tareas.length > 0 &&  <TareasList tareas={tareas}/> }
                            {isLoading && <p>Loading ...</p>}
                        </section>   
                     </div>
                </div>
            </div>

        </div>
    )
};

export default TareasPage