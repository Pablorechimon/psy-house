import React, { useState, useContext } from 'react';
import { loginUsuario, createUsuario } from '../services/UsuarioController';
import { UserContext } from '../Components/Usuario/UserContext';
import logo from '../img/Center-logo5.png'

const LoginPage = () => {
    
    const [formState, setFormState] = useState({nick : null, password: null});
    const { saveUser } = useContext(UserContext)

    const changeHandler = ({target}) => {
        const { name, value } = target
        formState[name] = value
        setFormState({...formState, [name]: formState[name]})
    }

    const submitLoginHandler = async (event) => {
        event.preventDefault()
        if (formState.nick && formState.password) {
            const response = await loginUsuario(formState)
            if (response.status == 200) {
                saveUser(response.data.data, response.data.token)
            } else if (response.status == 401) {
                alert("Password Incorrecta");
            } else if (response.status == 500) {
                alert("Usuario no encontrado")
            }
        } else {
            alert("Rellenar Campos")
        }
    }

    const submitRegisterHandler = async (event) => {
        event.preventDefault()
        if (!formState.nick || !formState.nombre || !formState.apellido || !formState.password) {
            alert("Completar los 4 campos")
        } else if (formState.password.length < 4 ){
            alert("La contraseña debe tener más de 4 digitos")
        } else {
            const response = await createUsuario(formState)
            if (response.status == 201) {
                alert("Usuario Creado correctamente")
            } else if (response.status = 500) {
                alert("El nickname ya se encuentra elejido, escoja otro")
            } else {
                alert("Error en el Servidor")
            }
        }
    }

    return (
        <div >

            <section className="flex wrap justify-evenly">
                <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Iniciar Sesion
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={submitLoginHandler}>
                                <div>
                                    <label htmlFor="nick" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Usuario</label>
                                    <input onChange={changeHandler} type="text" name="nick" id="nick" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Usuario" required=""/>
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input onChange={changeHandler} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <button type="submit" className="w-full btn-button">Iniciar sesión</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className=''>
                     <img src={logo} alt="Logo" width="400" height="400"></img>
                </div>
                <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Registrar Usuario
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={submitRegisterHandler}>
                                <div>
                                    <label htmlFor="nickregister" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nickname</label>
                                    <input onChange={changeHandler} type="text" name="nick" id="nickregister" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Usuario" required=""/>
                                </div>
                                <div>
                                    <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                    <input onChange={changeHandler} type="text" name="nombre" id="nombre" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Usuario" required=""/>
                                </div>
                                <div>
                                    <label htmlFor="apellido" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellido</label>
                                    <input onChange={changeHandler} type="text" name="apellido" id="apellido" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Usuario" required=""/>
                                </div>
                                <div>
                                    <label htmlFor="passwordregister" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input onChange={changeHandler} type="password" name="password" id="passwordregister" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                                </div>
                                <button type="submit" className="w-full btn-button">Registrar Usuario</button>
                            </form>
                        </div>
                    </div>
                </div>
                </section>
        </div>
                
    )
};

export default LoginPage