export async function getTareas(){
    try {
        const response = await fetch('/tareas');
        return await response.json();
    } 
    catch(error) {
        return {message: 'Error while fetching Tareas', error: error}
    }
}
export async function createTarea(tarea){
    try{
        const response = await fetch(`/tareas`,  {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(tarea)
        })
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while creating Tareas', error: error}
    }
}
export async function updateTarea(tarea){
    try{
        const response = await fetch(`/tareas`,  {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(tarea)
        })
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while updating Tareas', error: error}
    }
}