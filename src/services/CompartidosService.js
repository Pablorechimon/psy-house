const backend = 'http://localhost:3000'

export async function getCompartidos(paciente){
    try {
        const response = await fetch(backend + '/pacientes/' + paciente + '/compartidos');
        console.log(response)
        return await response.json();
    } 
    catch(error) {
        return {message: 'Error while fetching Compartidos', error: error}
    }
}
export async function createCompartido(recurso, paciente){
    try{
        const response = await fetch(backend + '/pacientes/' + paciente + `/compartidos`,  {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(recurso)
        })
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while creating Compartido', error: error}
    }
}
export async function updateCompartido(recurso, paciente){
    try{
        const response = await fetch(backend + '/pacientes/' + paciente + `/compartidos`,  {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(recurso)
        })
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while updating Compartido', error: error}
    }
}