import React, { useState } from "react";
import { useNavigate } from "react-router";

const PacienteXEditForm = ({paciente, updatePaciente, setIsEditing}) => {
    
    const navigate = useNavigate();
    const [formState, setFormState] = useState({});

    const changeHandler = ({target}) => {
        const { name, value } = target
        formState[name] = value
        setFormState({...formState, [name]: formState[name]})
        console.log(formState)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        updatePaciente({...formState}, paciente._id)
        if (setIsEditing){
            setIsEditing(false)
            window.location.reload()
        }
    }

    const clickCancelButtonHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className="h-screen text-green-dark">
        <form onSubmit={submitHandler}>
            <div className="p-2 m-2">
                    <div className="grid md:grid-cols-3 md:gap-4">
                        <div className="div-form-paciente-simple group">  
                            <input
                                className="input-double peer"
                                name="nombre" 
                                id="nombre"
                                type='text'
                               
                                onChange={changeHandler}
                                
                                placeholder=" "
                            />
                            <label className="peer-focus: label-double"
                                htmlFor="nombre"
                                >Nombre: 
                            </label>
                        </div>
                        <div className="div-form-paciente-simple group">    
                            <input
                                className="input-double peer"
                                type='text'
                               
                                onChange={changeHandler}
                                name="apellido" 
                                id="apellido"
                                
                                placeholder=" "
                            />
                            <label className="peer-focus: label-double"
                                htmlFor="apellido"
                                >Apellido: 
                            </label>
                        </div>
                        <div className="div-form-paciente-simple group">
                            <input
                                className="input-double peer"
                                type="email" 
                                name="email" 
                                id="email"
                               
                                onChange={changeHandler}
                                
                            />
                            <label 
                                className="peer-focus: label-double"
                                htmlFor="email"
                                >Email: 
                            </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 md:gap-4">


                        <div className="div-form-paciente-simple group">
                            <input
                                className="input-double peer"
                                type='number'
                                name="DNI" 
                                id="DNI"
                               
                                onChange={changeHandler}
                                
                            />
                            <label 
                                className="peer-focus: label-double"
                                htmlFor="DNI"
                                >DNI: 
                            </label>
                        </div>


                        <div className="div-form-paciente-simple group">
                            <input
                                className="input-double peer"
                                type='date'
                                name="fecha_nacimiento" 
                                id="fecha_nacimiento"
                                min='1900-01-01'
                                max='2099-12-31'
                               
                                onChange={changeHandler}
                                
                            />
                            <label 
                                className="peer-focus: label-double"
                                htmlFor="fecha_nacimiento"
                                >Fecha de Nacimiento: 
                            </label>
                        </div>

                        <div className="div-form-paciente-simple group">
                            <input
                                className="input-double peer"
                                type='text'
                                name="localidad" 
                                id="localidad"
                                onChange={changeHandler}
                            />
                            <label 
                                className="peer-focus: label-double"
                                htmlFor="localidad"
                                >Localidad:
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
                                
                                name="telefono_personal" 
                                onInvalid={e => e.target.setCustomValidity("El formato debe ser Ej: 11-4567-8901")}
                                onInput={F => F.target.setCustomValidity('')} 
                                id="telefono_personal"
                               
                                onChange={changeHandler}
                            />
                            <label 
                                className="peer-focus: label-double"
                                htmlFor="telefono_personal"
                                >Telefono Personal:
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
                                    name="telefono_tercero" 
                                    id="telefono_tercero"
                                   
                                    onChange={changeHandler}
                                    
                                />
                                <label 
                                    className="peer-focus: label-double"
                                    htmlFor="telefono_tercero"
                                    >Telefono Tercero:
                                </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-1 md:gap-4">
                        <div className="div-form-paciente-simple group">
                            <input
                                className="input-double peer"
                                type='text'
                                name="tratamiento_en_curso" 
                                id="tratamiento_en_curso"
                               
                                onChange={changeHandler}
                            />
                            <label 
                                className="peer-focus: label-double"
                                htmlFor="tratamiento_en_curso"
                                >Otro tratamiento en Curso:
                            </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-4">
                        <div className="div-form-paciente-simple group">
                                <input
                                    className="input-double peer"
                                    type='text'
                                    name="consumo_sustancias" 
                                    id="consumo_sustancias"
                                   
                                    onChange={changeHandler}
                                />
                                <label 
                                    className="peer-focus: label-double"
                                    htmlFor="consumo_sustancias"
                                    >Consumo de Sustancias:
                                </label>
                        </div>
                        <div className="div-form-paciente-simple group">
                            <input
                                className="input-double peer"
                                type='text'
                                name="medicacion_actual" 
                                id="medicacion_actual"
                               
                                onChange={changeHandler}
                            />
                            <label 
                                className="peer-focus: label-double"
                                htmlFor="medicacion_actual"
                                >Medicacion Actual:
                            </label>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-2">
                        <div className="div-form-paciente-simple group">
                                <input
                                    className="input-double peer"
                                    type='text'
                                    name="personas_convivientes" 
                                    id="personas_convivientes"
                                   
                                    onChange={changeHandler}
                                    
                                />
                                <label 
                                    className="peer-focus: label-double"
                                    htmlFor="personas_convivientes"
                                    >Personas Convivientes:
                                </label>
                        </div>

                        <div className="div-form-paciente-simple group">
                                <input
                                    className="input-double peer"
                                    type='text'
                                    name="situacion_laboral" 
                                    id="situacion_laboral"
                                   
                                    onChange={changeHandler}
                                    
                                />
                                <label 
                                    className="peer-focus: label-double"
                                    htmlFor="situacion_laboral"
                                    >Situacion Laboral:
                                </label>
                        </div>
                        <div className="div-form-paciente-simple group">
                            <label className="text-cream">Riesgo Suicida: </label>
                            <input
                                className="input-box"
                                type='checkbox'
                                name="riesgo_suicida" 
                                id="riesgo_suicida"
                               
                                onChange={changeHandler}
                            />
                        </div>
                    </div>

                    <div className="div-form-paciente-simple group">
                            <input
                                className="input-double peer"
                                type='number'
                                min='1000'
                                step='10'
                                name="valor_consulta" 
                                id="valor_consulta"
                               
                                onChange={changeHandler}
                                
                            />
                            <label 
                                className="peer-focus: label-double"
                                htmlFor="valor_consulta"
                                >Valor de Consulta:
                            </label>
                    </div>
                    <div className="div-form-paciente-simple group">
                            <label className="text-cream">Tratamiento Finalizado: </label>
                            <input
                                className="input-box"
                                type='checkbox'
                                name="tratamiento_finalizado" 
                                id="tratamiento_finalizado"
                               
                                onChange={changeHandler}
                            />
                        </div>
            </div>
            <button className='btn-done ' type='submit'> Editar Paciente</button>
        </form>
        <div>
                <button className="btn-button" type="button" onClick={clickCancelButtonHandler}> Cancelar </button>
        </div>
        </div>
    )
}

export default PacienteXEditForm

