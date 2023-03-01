import React, { useState } from "react";
import { createTarea } from "../../services/TareasService";

const TareaForm = ({setNewItem, tarea, updateTarea, setIsEditing}) => {

    const [formState, setFormState] = useState({descripcion: tarea ? tarea.descripcion : null});
    const usuario = JSON.parse(window.localStorage.getItem("user"))

    const changeHandler = ({target}) => {
        formState.descripcion = target.value
        setFormState(formState)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (updateTarea) {
            updateTarea({...formState, _id:tarea._id})
        } else {
            createTarea({
                ...formState,
                'id_usuario': usuario    
            })
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
        <form className="flex mt-4 pb-4 mb-4" onSubmit={submitHandler}>
            <input className="text-green-dark shadow appearance-none border rounded w-full py-2 px-3 mr-4" placeholder="Agregar Tarea" name="nombre" id="nombre" defaultValue={formState.descripcion} onChange={changeHandler}/>
            <button className="flex-no-shrink p-2 border-2 rounded border-teal hover:bg-teal" type="submit">Agregar</button>
        </form>
    )
}

export default TareaForm

