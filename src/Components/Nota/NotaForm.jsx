import React, { useState } from "react";
import { createNota } from "../../services/NotasService";

const NotaForm = ({setNewItem, nota, updateNota, IsEditing, setIsEditing, pacienteid}) => {

    const [formState, setFormState] = useState({nota : nota ? nota.nota : null});

    const changeHandler = ({target}) => {
        formState.nota = target.value
        setFormState(formState)
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if (updateNota) {
            updateNota({...formState, _id:nota._id}, pacienteid)
        } else {
            createNota(formState, pacienteid)
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
        <form className="flex mt-4 pb-8" onSubmit={submitHandler}>
            <textarea 
            rows="4" 
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Redacte sus notas aquí..." 
            name="Nota" 
            id="Nota" 
            defaultValue={formState.nota} 
            onChange={changeHandler}/>
            { IsEditing ? <div></div> : 
                <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit">Agregar</button>
            }
        </form>
    )
}

export default NotaForm

