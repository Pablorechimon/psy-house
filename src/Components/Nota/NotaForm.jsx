import React, { useState } from "react";
import { createNota } from "../../services/NotasService";

const NotaForm = ({setNewItem, nota, updateNota, setIsEditing, pacienteid}) => {

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
        <form className="flex mt-4" onSubmit={submitHandler}>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Agregar Nota" name="Nota" id="Nota" defaultValue={formState.nota} onChange={changeHandler}/>
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit">Add</button>
        </form>
    )
}

export default NotaForm

