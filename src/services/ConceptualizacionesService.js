const backend = 'http://localhost:3000'

export async function getConceptualizaciones(paciente){
    try {
        const response = await fetch(backend + '/pacientes/' + paciente + '/conceptualizaciones');
        return await response.json();
    } 
    catch(error) {
        return {message: 'Error while fetching Conceptualizaciones', error: error}
    }
}
export async function createConceptualizacion(recurso, paciente){
    try{
        const response = await fetch(backend + '/pacientes/' + paciente + `/conceptualizaciones`,  {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(recurso)
        })
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while creating Conceptualizacion', error: error}
    }
}
export async function updateConceptualizacion(recurso, paciente){
    try{
        const response = await fetch(backend + '/pacientes/' + paciente + `/conceptualizaciones`,  {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(recurso)
        })
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while updating Conceptualizacion', error: error}
    }
}