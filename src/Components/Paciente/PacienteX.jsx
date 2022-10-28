import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const PacienteX = ({key, paciente}) => {
    const navigate  = useNavigate();

    function getAge(dateString) {
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    const edad = getAge(paciente.fecha_nacimiento)
    
    return (
        <div className='mb-12'>
            <h1 className='text-center text-4xl p-4 m-4'> Información de {paciente.nombre} {paciente.apellido}</h1>
            <li className='py-4 grid grid-cols-6 gap-16'>
                        <p className="text-slate-500 ">Nombre Completo: {paciente.nombre} {paciente.apellido}</p>
                        <p className="text-slate-500">DNI: {paciente.DNI}</p>
                        <p className="text-slate-500">Telefono: {paciente.telefono_personal}</p>                       
                        <p className="text-slate-500">Edad: {edad}</p>
                        <p className="text-slate-500">Fecha de Nacimiento: {paciente.fecha_nacimiento}</p>
                        <p className="text-slate-500">EMAIL: {paciente.email}</p>
                        <p className="text-slate-500">Telefono Tercero: {paciente.telefono_tercero}</p>
                        <p className="text-slate-500">Localidad: {paciente.localidad}</p>
                        <p className="text-slate-500">Personas Convivientes: {paciente.personas_convivientes}</p>
                        <p className="text-slate-500">Situacion Laboral: {paciente.situacion_laboral}</p>
                        <p className="text-slate-500">Derivante: {paciente.derivante}</p>
                        <p className="text-slate-500">Motivo de Consulta: {paciente.motivo_de_consulta}</p>
                        <p className="text-slate-500">Valor de Consulta: {paciente.valor_consulta}</p>
                        <p className="text-slate-500">Antecedentes Psiquiatricos Personales: {paciente.antecedentes_psiquiatricos_personales}</p>
                        <p className="text-slate-500">Antecedentes Psiquiatricos Familiares: {paciente.antecedentes_psiquiatricos_familiares}</p>
                        <p className="text-slate-500">Tratamiento en Curso: {paciente.tratamiento_en_curso}</p>
                        <p className="text-slate-500">Medicacion Actual: {paciente.medicacion_actual}</p>
                        <p className="text-slate-500">Riesgo Suicida: {paciente.riesgo_suicida ? 'Si' : 'No'}</p>
                        <p className="text-slate-500">Tratamiento Previo: {paciente.tratamiento_previo}</p>
                        <p className="text-slate-500">Consumo de Sustancias: {paciente.consumo_sustancias}</p>
                        <p className="text-slate-500">Finalizo el Tratamiento: {paciente.tratamiento_finalizado ? 'Si' : 'No'}</p>
                        <p className="text-slate-500">Fecha de Inicio del Paciente: {paciente.fecha_inicio_tramite}</p>
            </li>
        </div>
    )
};

export default PacienteX