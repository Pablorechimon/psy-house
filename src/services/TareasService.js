const backend = 'http://localhost:3000'

export async function getTareas(id_usuario){
    try {
        const response = await fetch(backend+'/tareas/usuario/'+ id_usuario);
        return await response.json();
    } 
    catch(error) {
        return {message: 'Error while fetching Tareas', error: error}
    }
}
export async function createTarea(tarea){
    try{
        const response = await fetch(backend+`/tareas`,  {
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
        const response = await fetch(backend+`/tareas`,  {
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

export async function completeTarea(tarea){
    const tareaFinalizada = {...tarea, 'finalizado':true}
    updateTarea(tareaFinalizada)
}