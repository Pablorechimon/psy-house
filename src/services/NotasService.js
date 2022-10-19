const backend = 'http://localhost:3000'

export async function getNotas(paciente){
    try {
        const response = await fetch(backend + '/pacientes/' + paciente + '/notas');
        return await response.json();
    } 
    catch(error) {
        return {message: 'Error while fetching Notas', error: error}
    }
}
export async function createNota(recurso, paciente){
    try{
        const response = await fetch(backend + '/pacientes/' + paciente + `/notas`,  {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(recurso)
        })
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while creating Nota', error: error}
    }
}
export async function updateNota(recurso, paciente){
    try{
        const response = await fetch(backend + '/pacientes/' + paciente + `/notas`,  {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(recurso)
        })
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while updating Nota', error: error}
    }
}