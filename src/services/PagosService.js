import { getPaciente } from "./PacientesService";

const backend = 'http://localhost:3000'

export async function getPagos(){
    try {
        const response = await fetch(backend+'/pagos');
        return await response.json();
    } 
    catch(error) {
        return {message: 'Error while fetching Pagos', error: error}
    }
}

export async function getPagosPaciente(paciente){
    try {
        const response = await fetch(backend + '/pacientes/' + paciente +'/pagos');
        return await response.json();
    } 
    catch(error) {
        return {message: 'Error while fetching Pagos', error: error}
    }
}

export async function createPago(pago, paciente){
    try{
        const response = await fetch(backend + '/pacientes/' + paciente +`/pagos`,  {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pago)
        })
        return await response.json();
    }
    catch (error) {
        return {message: 'Error while creating Pagos', error: error}
    }
}

export async function getDeudor(id_paciente){
    try {
        const response = await getPaciente(id_paciente)
        const data = response.data
        return `${data.nombre} ${data.apellido}`
    }
    catch (error ){
        return {message: 'Error while fetching Paciente Name', error: error}
    }
}