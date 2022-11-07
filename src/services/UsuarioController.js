const backend = 'http://localhost:3000'

export async function createUsuario(usuario){
    try{
        const response = await fetch(backend + `/usuario/register/`,  {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(usuario)
        })
        return await {data: await response.json(), status: response.status};
    }
    catch (error) {
        return {message: 'Error while creating User', error: error}
    }
}

export async function loginUsuario(usuario){
    try{
        const response = await fetch(backend + `/usuario/login/`,  {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(usuario)
        })
        console.log(usuario)
        return await {data: await response.json(), status: response.status}; 
    }
    catch (error) {
        return {message: 'Error while Login', error: error}
    }
}
