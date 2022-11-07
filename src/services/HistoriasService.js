const backend = 'http://localhost:3000'

export async function getHistorias(paciente){
    try {
        const response = await fetch(backend + '/pacientes/' + paciente + '/historias');
        return await response.json();
    } 
    catch(error) {
        return {message: 'Error while fetching Historias', error: error}
    }
}
export async function createHistoria(recurso, paciente){
    try{
        const response = await fetch(backend + '/pacientes/' + paciente + `/historias`,  {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(recurso)
        })
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while creating Historia', error: error}
    }
}
export async function updateHistoria(recurso, paciente){
    try{
        const response = await fetch(backend + '/pacientes/' + paciente + `/historias`,  {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(recurso)
        })
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while updating Historia', error: error}
    }
}