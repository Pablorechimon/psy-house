export async function getPacientes(){

    try {
        const response = await fetch('/pacientes');
        return await response.json();
    } 
    catch(error) {
        return {message: 'Error while fetching Pacientes', error: error}
    }
}

export async function getPaciente(id_paciente){
    try {
        const response = await fetch(`pacientes/${id_paciente}`)
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while fetching Paciente', error: error}
    }
}

export async function createPaciente(paciente){
    try{
        const response = await fetch(`pacientes/`,  {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(paciente)
        })
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while creating Paciente', error: error}
    }
}

export async function updatePaciente(pacienteChanges){
    try{
        const response = await fetch(`pacientes/`,  {
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