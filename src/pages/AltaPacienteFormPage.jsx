import React, { useState } from "react";
import { useNavigate } from "react-router";
import { createPaciente } from "../services/PacientesService";

const AltaPacienteFormPage = () => {
    const navigate = useNavigate();

    const [enteredNombre, setEnteredNombre] = useState('')
    const [enteredApellido, setEnteredApellido] = useState('')
    const [enteredFechaDeNacimiento, setEnteredFechaDeNacimiento] = useState('')
    const [enteredDNI, setEnteredDNI] = useState('')
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredTelefonoPersonal, setEnteredTelefonoPersonal] = useState('')
    const [enteredTelefonoTercero, setEnteredTelefonoTercero] = useState('')
    const [enteredLocalidad, setEnteredLocalidad] = useState('')
    const [enteredPersonasConvivientes, setEnteredPersonasConvivientes] = useState('')
    const [enteredSituacionLaboral, setEnteredSituacionLaboral] = useState('')
    const [enteredDerivante, setEnteredDerivante] = useState('')
    const [enteredMotivoConsulta, setEnteredMotivoConsulta] = useState('')
    const [enteredValorConsulta, setEnteredValorConsulta] = useState('')
    const [enteredAntecedentesPsiquiatricosPersonales, setEnteredAntecedentesPsiquiatricosPersonales] = useState('')
    const [enteredAntecedentesPsiquiatricosFamiliares, setEnteredAntecedentesPsiquiatricosFamiliares] = useState('')
    const [enteredTratamientoEnCurso, setEnteredTratamientoEnCurso] = useState('')
    const [enteredMedicacionActual, setEnteredMedicacionActual] = useState('')
    const [enteredRiesgoSuicida, setEnteredRiesgoSuicida] = useState(false)
    const [enteredTratamientoPrevio, setEnteredTratamientoPrevio] = useState('')
    const [enteredConsumoSustancias, setEnteredConsumoSustancias] = useState('')
    const [enteredTratamientoFinalizado, setEnteredTratamientoFinalizado] = useState(false)

    const nombreChangeHandler = (event) => {
        setEnteredNombre(event.target.value);

    }

    const apellidoChangeHandler = (event) => {
        setEnteredApellido(event.target.value);
    }

    const nacimientoChangeHandler = (event) => {
        setEnteredFechaDeNacimiento(event.target.value);
    }

    const DNIChangeHandler = (event) => {
        setEnteredDNI(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    }

    const telefonoPersonalChangeHandler = (event) => {
        setEnteredTelefonoPersonal(event.target.value);
    }

    const telefonoTerceroChangeHandler = (event) => {
        setEnteredTelefonoTercero(event.target.value);
    }

    const localidadChangeHandler = (event) => {
        setEnteredLocalidad(event.target.value);
    }

    const personasConvivientesChangeHandler = (event) => {
        setEnteredPersonasConvivientes(event.target.value);
    }

    const situacionLaboralChangeHandler = (event) => {
        setEnteredSituacionLaboral(event.target.value);
    }

    const derivanteChangeHandler = (event) => {
        setEnteredDerivante(event.target.value);
    }

    const motivoConsultaChangeHandler = (event) => {
        setEnteredMotivoConsulta(event.target.value);
    }

    const valorConsultaChangeHandler = (event) => {
        setEnteredValorConsulta(event.target.value);
    }

    const antecedentesPsiPersonalesChangeHandler = (event) => {
        setEnteredAntecedentesPsiquiatricosPersonales(event.target.value);
    }

    const antecedentesPsiFamiliaresChangeHandler = (event) => {
        setEnteredAntecedentesPsiquiatricosFamiliares(event.target.value);
    }

    const tratamientoEnCursoChangeHandler = (event) => {
        setEnteredTratamientoEnCurso(event.target.value);
    }

    const medicacionActualChangeHandler = (event) => {
        setEnteredMedicacionActual(event.target.value);
    }

    const riesgoSuicidaChangeHandler = (event) => {
        setEnteredRiesgoSuicida(event.target.value);
    }

    const tratamientoPrevioChangeHandler = (event) => {
        setEnteredTratamientoPrevio(event.target.value);
    }

    const consumoSustanciashangeHandler = (event) => {
        setEnteredConsumoSustancias(event.target.value);
    }

    const clickCancelButtonHandler = () => {
        navigate("/pacientes")
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const pacienteData = {
            'nombre': enteredNombre,
            'apellido': enteredApellido,
            'fecha_nacimiento': new Date(enteredFechaDeNacimiento),
            'DNI': enteredDNI,
            'email': enteredEmail,
            'telefono_personal': enteredTelefonoPersonal,
            'telefono_tercero': enteredTelefonoTercero,
            'localidad': enteredLocalidad,
            'personas_convivientes': enteredPersonasConvivientes,
            'situacion_laboral': enteredSituacionLaboral,
            'derivante': enteredDerivante,
            'motivo_de_consulta': enteredMotivoConsulta,
            'valor_consulta': enteredValorConsulta,
            'antecedentes_psiquiatricos_personales': enteredAntecedentesPsiquiatricosPersonales,
            'antecedentes_psiquiatricos_familiares':enteredAntecedentesPsiquiatricosFamiliares,
            'tratamiento_en_curso': enteredTratamientoEnCurso,
            'medicacion_actual': enteredMedicacionActual,
            'riesgo_suicida': enteredRiesgoSuicida,
            'tratamiento_previo': enteredTratamientoPrevio,
            'consumo_sustancias': enteredConsumoSustancias,
            'tratamiento_finalizado': enteredTratamientoFinalizado
        }

        if (pacienteData.nombre.length > 2 && pacienteData.apellido.length > 2){
            createPaciente(pacienteData)
            navigate("/pacientes")
        } else {
            console.log('Agrega Nombre y Apellido')
        }
            
        
    }

    return(
        <div className="h-screen text-green-dark">
            <form onSubmit={submitHandler}>
                <div className="p-4 m-4">
                        <div className="grid md:grid-cols-2 md:gap-4">
                            <div className="p-4 m-4 relative z-0 mb-6 w-full group">  
                                <input
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    name="floating_first_name" 
                                    id="floating_first_name"
                                    type='text'
                                    value={enteredNombre}
                                    onChange={nombreChangeHandler}
                                    required
                                    placeholder=" "
                                />
                                <label className="peer-focus: absolute text-green-dark dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-125 peer-focus:-translate-y-6"
                                    for="floating_first_name"
                                    >Nombre: 
                                </label>
                            </div>
                            <div class="p-4 m-4 relative z-0 mb-6 w-full group">    
                                <input
                                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                    type='text'
                                    value={enteredApellido}
                                    onChange={apellidoChangeHandler}
                                    name="floating_last_name" 
                                    id="floating_last_name"
                                    required
                                    placeholder=" "
                                />
                                <label className="peer-focus: absolute text-green-dark dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-125 peer-focus:-translate-y-6"
                                    for="floating_last_name"
                                    >Apellido: 
                                </label>
                            </div>
                        </div>
                        <label className="text-cream ml-4">DNI: </label>
                        <input
                            className="input-box"
                            type='number'
                            value={enteredDNI}
                            onChange={DNIChangeHandler}
                        />

                        <label className="text-cream ml-4">Fecha de Nacimiento: </label>
                        <input
                            className="input-box"
                            type='date'
                            min='1900-01-01'
                            max='2099-12-31'
                            value={enteredFechaDeNacimiento}
                            onChange={nacimientoChangeHandler}
                        />
                    
                    <div className="p-4 m-4">
                        <label className="text-cream">Email: </label>
                        <input
                            className="input-box"
                            type='text'
                            value={enteredEmail}
                            onChange={emailChangeHandler}
                        />
                        <label className="text-cream ml-4">Telefono Personal: </label>
                        <input
                            className="input-box"
                            type='text'
                            value={enteredTelefonoPersonal}
                            onChange={telefonoPersonalChangeHandler}
                        />
                        <label className="text-cream ml-4">Telefono Tercero: </label>
                        <input
                            className="input-box"
                            type='text'
                            value={enteredTelefonoTercero}
                            onChange={telefonoTerceroChangeHandler}
                        />
                        <label className="text-cream ml-4">Localidad: </label>
                        <input
                            className="input-box"
                            type='text'
                            value={enteredLocalidad}
                            onChange={localidadChangeHandler}
                        />
                    </div>
                    <div className="p-4 m-4">
                        <label className="text-cream ">Personas Convivientes: </label>
                        <input
                            className="input-box"
                            type='text'
                            value={enteredPersonasConvivientes}
                            onChange={personasConvivientesChangeHandler}
                        />
                        <label className="text-cream ml-4">Situacion Laboral: </label>
                        <input
                            className="input-box"
                            type='text'
                            value={enteredSituacionLaboral}
                            onChange={situacionLaboralChangeHandler}
                        />
                        <label className="text-cream ml-4">Derivante: </label>
                        <input
                            className="input-box"
                            type='text'
                            value={enteredDerivante}
                            onChange={derivanteChangeHandler}
                        />
                        <label className="text-cream ml-4">Tratamiento Previo: </label>
                        <input
                            className="input-box"
                            type='text'
                            value={enteredTratamientoPrevio}
                            onChange={tratamientoPrevioChangeHandler}
                        />
                    </div>
                    <div className="p-4 m-4">
                        <label className="text-cream ">Motivo de Consulta: </label>
                        <input
                            className="input-box"
                            type='text'
                            value={enteredMotivoConsulta}
                            onChange={motivoConsultaChangeHandler}
                        />
                        <label className="text-cream ml-4">Valor de Consulta: </label>
                        <input
                            className="input-box"
                            type='number'
                            min='0.01'
                            step='0.01'
                            value={enteredValorConsulta}
                            onChange={valorConsultaChangeHandler}
                        />
                    </div>
                    <div className="p-4 m-4">
                        <label className="text-cream">Antecedentes Psiquiatricos Personales: </label>
                        <input
                            className="input-box"
                            type='text'
                            value={enteredAntecedentesPsiquiatricosPersonales}
                            onChange={antecedentesPsiPersonalesChangeHandler}
                        />
                        <label className="text-cream ml-4">Antecedentes Psiquiatricos Familiares: </label>
                        <input
                            className="input-box"
                            type='text'
                            value={enteredAntecedentesPsiquiatricosFamiliares}
                            onChange={antecedentesPsiFamiliaresChangeHandler}
                        />
                    </div>
                    <div className="p-4 m-4">
                        <label className="text-cream">Otro tratamiento en Curso: </label>
                        <input
                            className="input-box"
                            type='text'
                            value={enteredTratamientoEnCurso}
                            onChange={tratamientoEnCursoChangeHandler}
                        />
                        <label className="text-cream ml-4">Medicacion Actual: </label>
                        <input
                            className="input-box"
                            type='text'
                            value={enteredMedicacionActual}
                            onChange={medicacionActualChangeHandler}
                        />
                        <label className="text-cream ml-4">Consumo de Sustancias: </label>
                        <input
                            className="input-box"
                            type='text'
                            value={enteredConsumoSustancias}
                            onChange={consumoSustanciashangeHandler}
                        />
                        <label className="text-cream ml-4">Riesgo Suicida: </label>
                        <input
                            className="input-box"
                            type='checkbox'
                            value={enteredRiesgoSuicida}
                            onChange={riesgoSuicidaChangeHandler}
                        />
                    </div>
                    <div>

                    </div>
                </div>
                <button className='btn-done ' type='submit'> Agregar Paciente</button>
            </form>
            <div>
                <button className="btn-button" type="button" onClick={clickCancelButtonHandler}> Cancelar </button>
            </div>
                
        </div>
    )
}

export default AltaPacienteFormPage