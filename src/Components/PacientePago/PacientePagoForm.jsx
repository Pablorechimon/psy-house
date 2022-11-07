import  { React, useState, useEffect, useCallback } from 'react';
import { createPago } from "../../services/PagosService";
import { getPaciente } from "../../services/PacientesService";

const PacientePagoForm = ({setNewItem, pago, pacienteid}) => {

    const [formState, setFormState] = useState({monto_abonado : pago ? pago.monto_abonado : null, 'precio_consulta': null});
    const [isLoading, setIsLoading] = useState(false);
    const usuario = JSON.parse(window.localStorage.getItem("user"))

    const fetchPacienteHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getPaciente(pacienteid);
        let paciente = response.data
        formState.precio_consulta = paciente.valor_consulta
        setFormState(formState)
        setIsLoading(false)
    }, [])
    
    useEffect(() => {
        fetchPacienteHandler()
    }, [fetchPacienteHandler])

    const changeHandler = ({target}) => {
        formState.monto_abonado = target.value
        setFormState(formState)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        createPago({
            ...formState,
            'id_usuario': usuario,
        }, pacienteid)
        if (setNewItem) {
            setNewItem(true)
        } 
    }

    return (
        <form className="flex mt-4" onSubmit={submitHandler}>
            {!isLoading && 
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-green-dark" 
            placeholder="Agregar Pago"
            type="number" 
            name="PagoPaciente" 
            id="PagoPaciente" 
            defaultValue={formState.monto_abonado} 
            onChange={changeHandler}/>}
            <button className="flex-no-shrink p-2 border-2 rounded border-teal " type="submit">Add</button>
        </form>
    )
}

export default PacientePagoForm

