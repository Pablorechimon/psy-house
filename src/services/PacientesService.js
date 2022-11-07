const backend = 'http://localhost:3000'

export async function getPacientes(){

    try {
        const response = await fetch(backend+'/pacientes');
        return await response.json();
    } 
    catch(error) {
        return {message: 'Error while fetching Pacientes', error: error}
    }
}

export async function getPaciente(id_paciente){
    try {
        const response = await fetch(backend+`/pacientes/${id_paciente}`)
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while fetching Paciente', error: error}
    }
}

export async function createPaciente(paciente){
    try{
        const response = await fetch(backend + `/pacientes/`,  {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(paciente)
        })
        return await {data: response.json(), status:response.status};
    }
    catch (error) {
        return {message: 'Error while creating Paciente', error: error}
    }
}

export async function updatePaciente(pacienteChanges, paciente_id){
    try{
        const response = await fetch(backend+`/pacientes/${paciente_id}`,  {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pacienteChanges)            
        })
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while updating Paciente', error: error}
    }
}