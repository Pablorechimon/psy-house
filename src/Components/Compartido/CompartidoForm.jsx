import React, { useState } from "react";
import { createCompartido } from "../../services/CompartidosService";

const CompartidoForm = ({setNewItem, compartido, updateCompartido, setIsEditing, pacienteid}) => {

    const [formState, setFormState] = useState({recurso : compartido ? {nombre: compartido.nombre, formato: compartido.formato, fecha: compartido.fecha} : {nombre: null, formato: null, fecha: null}});

    const changeHandler = ({target}) => {
        formState.recurso.nombre = target.value
        setFormState(formState)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (updateCompartido) {
            updateCompartido({...formState, _id:compartido._id}, pacienteid)
        } else {
            createCompartido(formState, pacienteid)
        }
        if (setNewItem) {
            setNewItem(true)
        } 
        if (setIsEditing){
            setIsEditing(false)
            window.location.reload()
        }
    }

    return (
        <form className="flex mt-4" onSubmit={submitHandler}>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Agregar Compartido" name="descripcion" id="descripcion" defaultValue={formState.recurso.nombre} onChange={changeHandler}/>
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit">Add</button>
        </form>
    )
}

export default CompartidoForm

