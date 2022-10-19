import React, { useState } from "react";
import { createHistoria } from "../../services/HistoriasService";

const HistoriaForm = ({setNewItem, historia, updateHistoria, setIsEditing, pacienteid}) => {

    const [formState, setFormState] = useState({recurso : historia ? historia.historia : null});

    const changeHandler = ({target}) => {
        formState.historia = target.value
        setFormState(formState)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (updateHistoria) {
            updateHistoria({...formState, _id:historia._id}, pacienteid)
        } else {
            createHistoria(formState, pacienteid)
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
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Agregar Historia" name="historia" id="historia" defaultValue={formState.historia} onChange={changeHandler}/>
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit">Add</button>
        </form>
    )
}

export default HistoriaForm

