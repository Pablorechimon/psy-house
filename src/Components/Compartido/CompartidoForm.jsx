import React, { useState } from "react";
import { createCompartido } from "../../services/CompartidosService";

const CompartidoForm = ({setNewItem, compartido, updateCompartido, setIsEditing, pacienteid}) => {

    const [formState, setFormState] = useState({recurso : compartido ? {nombre: compartido.nombre, formato: compartido.formato, fecha: compartido.fecha} : {nombre: null, formato: null, fecha: null}});

    const changeNombreHandler = ({target}) => {
        formState.recurso.nombre = target.value
        setFormState(formState)
    }

    const changeFormatoHandler = ({target}) => {
        formState.recurso.formato = target.value
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
        <div className="flex flex-col justify-center items-center">
            <form className="flex mt-4 " onSubmit={submitHandler}>
                <input className="shadow appearance-none border rounded w-96 py-2 px-3 mr-4 text-green-dark" placeholder="Nuevo Recurso Compartido" name="descripcion" id="descripcion" defaultValue={formState.recurso.nombre} onChange={changeNombreHandler}/>
                <input className="shadow appearance-none border rounded w-64 py-2 px-3 mr-4 text-green-dark" placeholder="Formato" name="descripcion" id="descripcion" defaultValue={formState.recurso.formato} onChange={changeFormatoHandler}/>
                <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit">Add</button>
            </form>
        </div>

    )
}

export default CompartidoForm

