import React, { useState } from "react";
import { createTarea } from "../../services/TareasService";

const TareaForm = ({setNewItem, tarea, updateTarea, setIsEditing}) => {

    const [formState, setFormState] = useState({descripcion: tarea ? tarea.descripcion : null});

    const changeHandler = ({target}) => {
        formState.descripcion = target.value
        setFormState(formState)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (updateTarea) {
            updateTarea({...formState, _id:tarea._id})
        } else {
            createTarea(formState)
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
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" name="descripcion" id="descripcion" defaultValue={formState.descripcion} onChange={changeHandler}/>
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit">Add</button>
        </form>
    )
}

export default TareaForm

