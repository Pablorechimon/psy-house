import  { React, useState, useEffect, useCallback } from 'react';
import { createPago } from "../../services/PagosService";
import { getPaciente } from "../../services/PacientesService";

const PacientePagoForm = ({setNewItem, pago, pacienteid}) => {

    const [formState, setFormState] = useState({monto_abonado : pago ? pago.monto_abonado : null});
    const [paciente, setPaciente] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchPacienteHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getPaciente(pacienteid);
        setPaciente(response.data)
        console.log(paciente)
        formState.precio_consulta = paciente.valor_consulta
        setFormState(formState)
        console.log(formState)
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
        createPago(formState, pacienteid)
        if (setNewItem) {
            setNewItem(true)
        } 
    }

    return (
        <form className="flex mt-4" onSubmit={submitHandler}>
            {!isLoading && <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Agregar Pago" name="PagoPaciente" id="PagoPaciente" defaultValue={formState.monto_abonado} onChange={changeHandler}/>}
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit">Add</button>
        </form>
    )
}

export default PacientePagoForm

