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

    const submitHandler = async (event) => {
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
        }
        console.log(pacienteData)

            const response = await createPaciente(pacienteData)
            if (response.status == 201) {
                alert("Paciente creado correctamente")
                navigate("/pacientes")
            } else if (response.status == 501) {
                alert("Ya existe un paciente con el mismo DNI")
            }   else {
                alert("Error en el servidor")
            }
            
            
        
    }

    return(
        <div className="h-screen text-green-dark">
            <form onSubmit={submitHandler}>
                <div className="p-2 m-2">
                        <div className="grid md:grid-cols-3 md:gap-4">
                            <div className="div-form-paciente-simple group">  
                                <input
                                    className="input-double peer"
                                    name="floating_first_name" 
                                    id="floating_first_name"
                                    type='text'
                                    value={enteredNombre}
                                    onChange={nombreChangeHandler}
                                    required
                                    placeholder=" "
                                />
                                <label className="peer-focus: label-double"
                                    htmlFor="floating_first_name"
                                    >* Nombre: 
                                </label>
                            </div>
                            <div className="div-form-paciente-simple group">    
                                <input
                                    className="input-double peer"
                                    type='text'
                                    value={enteredApellido}
                                    onChange={apellidoChangeHandler}
                                    name="floating_last_name" 
                                    id="floating_last_name"
                                    required
                                    placeholder=" "
                                />
                                <label className="peer-focus: label-double"
                                    htmlFor="floating_last_name"
                                    >* Apellido: 
                                </label>
                            </div>
                            <div className="div-form-paciente-simple group">
                                <input
                                    className="input-double peer"
                                    type="email" 
                                    name="floating_email" 
                                    id="floating_email"
                                    value={enteredEmail}
                                    onChange={emailChangeHandler}
                                    required
                                />
                                <label 
                                    className="peer-focus: label-double"
                                    htmlFor="floating_email"
                                    >* Email: 
                                </label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 md:gap-4">


                            <div className="div-form-paciente-simple group">
                                <input
                                    className="input-double peer"
                                    type='number'
                                    name="floating_dni" 
                                    id="floating_dni"
                                    value={enteredDNI}
                                    onChange={DNIChangeHandler}
                                    required
                                />
                                <label 
                                    className="peer-focus: label-double"
                                    htmlFor="floating_dni"
                                    >* DNI: 
                                </label>
                            </div>


                            <div className="div-form-paciente-simple group">
                                <input
                                    className="input-double peer"
                                    type='date'
                                    name="floating_nacimiento" 
                                    id="floating_nacimiento"
                                    min='1900-01-01'
                                    max='2099-12-31'
                                    value={enteredFechaDeNacimiento}
                                    onChange={nacimientoChangeHandler}
                                    required
                                />
                                <label 
                                    className="peer-focus: label-double"
                                    htmlFor="floating_nacimiento"
                                    >* Fecha de Nacimiento: 
                                </label>
                            </div>

                            <div className="div-form-paciente-simple group">
                                <input
                                    className="input-double peer"
                                    type='text'
                                    name="floating_localidad" 
                                    id="floating_localidad"
                                    value={enteredLocalidad}
                                    onChange={localidadChangeHandler}
                                    require
                                />
                                <label 
                                    className="peer-focus: label-double"
                                    htmlFor="floating_localidad"
                                    >* Localidad:
                                </label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-4">
                            <div className="div-form-paciente-simple group">
                                <input
                                    className="input-double peer placeholder:text-sm"
                                    type="tel"
                                    placeholder="Ej: 11-4567-8901"
                                    pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
                                    required
                                    name="floating_tel_personal" 
                                    onInvalid={e => e.target.setCustomValidity("El formato debe ser Ej: 11-4567-8901")}
                                    onInput={F => F.target.setCustomValidity('')} 
                                    id="floating_tel_personal"
                                    value={enteredTelefonoPersonal}
                                    onChange={telefonoPersonalChangeHandler}
                                />
                                <label 
                                    className="peer-focus: label-double"
                                    htmlFor="floating_tel_personal"
                                    >* Telefono Personal:
                                </label>
                            </div>

                            <div className="div-form-paciente-simple group">
                                    <input
                                        className="input-double peer placeholder:text-sm"
                                        type='text'
                                        pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}"
                                        placeholder="Ej: 11-4567-8901"
                                        onInvalid={e => e.target.setCustomValidity("El formato debe ser Ej: 11-4567-8901")}
                                        onInput={F => F.target.setCustomValidity('')} 
                                        name="floating_tel_tercero" 
                                        id="floating_tel_tercero"
                                        value={enteredTelefonoTercero}
                                        onChange={telefonoTerceroChangeHandler}
                                        required
                                    />
                                    <label 
                                        className="peer-focus: label-double"
                                        htmlFor="floating_tel_tercero"
                                        >* Telefono Tercero:
                                    </label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-4">
                            <div className="div-form-paciente-simple group">
                                    <input
                                        className="input-double peer"
                                        type='text'
                                        name="floating_motivoconsulta" 
                                        id="floating_motivoconsulta"
                                        value={enteredMotivoConsulta}
                                        onChange={motivoConsultaChangeHandler}
                                        required
                                    />
                                    <label 
                                        className="peer-focus: label-double"
                                        htmlFor="floating_motivoconsulta"
                                        >* Motivo de Consulta:
                                    </label>
                            </div>
                            <div className="div-form-paciente-simple group">
                                <input
                                    className="input-double peer"
                                    type='text'
                                    name="floating_derivante" 
                                    id="floating_derivante"
                                    value={enteredDerivante}
                                    onChange={derivanteChangeHandler}
                                />
                                <label 
                                    className="peer-focus: label-double"
                                    htmlFor="floating_derivante"
                                    >Derivante:
                                </label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-4">
                            <div className="div-form-paciente-simple group">
                                    <input
                                        className="input-double peer"
                                        type='text'
                                        name="floating_tratamientoprevio" 
                                        id="floating_tratamientoprevio"
                                        value={enteredTratamientoPrevio}
                                        onChange={tratamientoPrevioChangeHandler}
                                    />
                                    <label 
                                        className="peer-focus: label-double"
                                        htmlFor="floating_tratamientoprevio"
                                        >Tratamiento Previo:
                                    </label>
                            </div>
                            <div className="div-form-paciente-simple group">
                                <input
                                    className="input-double peer"
                                    type='text'
                                    name="floating_otrotratamiento" 
                                    id="floating_otrotratamiento"
                                    value={enteredTratamientoEnCurso}
                                    onChange={tratamientoEnCursoChangeHandler}
                                />
                                <label 
                                    className="peer-focus: label-double"
                                    htmlFor="floating_otrotratamiento"
                                    >Otro tratamiento en Curso:
                                </label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-4">
                            <div className="div-form-paciente-simple group">
                                    <input
                                        className="input-double peer"
                                        type='text'
                                        name="floating_consumosustancias" 
                                        id="floating_consumosustancias"
                                        value={enteredConsumoSustancias}
                                        onChange={consumoSustanciashangeHandler}
                                    />
                                    <label 
                                        className="peer-focus: label-double"
                                        htmlFor="floating_consumosustancias"
                                        >Consumo de Sustancias:
                                    </label>
                            </div>
                            <div className="div-form-paciente-simple group">
                                <input
                                    className="input-double peer"
                                    type='text'
                                    name="floating_medicacion" 
                                    id="floating_medicacion"
                                    value={enteredMedicacionActual}
                                    onChange={medicacionActualChangeHandler}
                                />
                                <label 
                                    className="peer-focus: label-double"
                                    htmlFor="floating_medicacion"
                                    >Medicacion Actual:
                                </label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-4">
                            <div className="div-form-paciente-simple group">
                                    <input
                                        className="input-double peer"
                                        type='text'
                                        name="floating_app" 
                                        id="floating_app"
                                        value={enteredAntecedentesPsiquiatricosPersonales}
                                        onChange={antecedentesPsiPersonalesChangeHandler}
                                    />
                                    <label 
                                        className="peer-focus: label-double"
                                        htmlFor="floating_app"
                                        >Antecedentes Psiquiatricos Personales: 
                                    </label>
                            </div>

                            <div className="div-form-paciente-simple group">
                                    <input
                                        className="input-double peer"
                                        type='text'
                                        name="floating_apf" 
                                        id="floating_apf"
                                        value={enteredAntecedentesPsiquiatricosFamiliares}
                                        onChange={antecedentesPsiFamiliaresChangeHandler}
                                    />
                                    <label 
                                        className="peer-focus: label-double"
                                        htmlFor="floating_apf"
                                        >Antecedentes Psiquiatricos Familiares:
                                    </label>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 md:gap-2">
                            <div className="div-form-paciente-simple group">
                                    <input
                                        className="input-double peer"
                                        type='text'
                                        name="floating_convivientes" 
                                        id="floating_convivientes"
                                        value={enteredPersonasConvivientes}
                                        onChange={personasConvivientesChangeHandler}
                                        required
                                    />
                                    <label 
                                        className="peer-focus: label-double"
                                        htmlFor="floating_convivientes"
                                        >* Personas Convivientes:
                                    </label>
                            </div>

                            <div className="div-form-paciente-simple group">
                                    <input
                                        className="input-double peer"
                                        type='text'
                                        name="floating_situacionlaboral" 
                                        id="floating_situacionlaboral"
                                        value={enteredSituacionLaboral}
                                        onChange={situacionLaboralChangeHandler}
                                        required
                                    />
                                    <label 
                                        className="peer-focus: label-double"
                                        htmlFor="floating_situacionlaboral"
                                        >* Situacion Laboral:
                                    </label>
                            </div>
                            <div className="div-form-paciente-simple group">
                                <label className="text-cream">Riesgo Suicida: </label>
                                <input
                                    className="input-box"
                                    type='checkbox'
                                    value={enteredRiesgoSuicida}
                                    onChange={riesgoSuicidaChangeHandler}
                                />
                            </div>
                        </div>

                        <div className="div-form-paciente-simple group">
                                <input
                                    className="input-double peer"
                                    type='number'
                                    min='1000'
                                    step='10'
                                    name="floating_valor" 
                                    id="floating_valor"
                                    value={enteredValorConsulta}
                                    onChange={valorConsultaChangeHandler}
                                    required
                                />
                                <label 
                                    className="peer-focus: label-double"
                                    htmlFor="floating_valor"
                                    >* Valor de Consulta:
                                </label>
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