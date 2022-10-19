import React, { useState } from "react";
import { createConceptualizacion } from "../../services/ConceptualizacionesService";

const ConceptualizacionForm = ({setNewItem, conceptualizacion, updateConceptualizacion, setIsEditing, pacienteid}) => {

    const [formState, setFormState] = useState({recurso : conceptualizacion ? conceptualizacion.conceptualizacion : null});

    const changeHandler = ({target}) => {
        formState.conceptualizacion = target.value
        setFormState(formState)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (updateConceptualizacion) {
            updateConceptualizacion({...formState, _id:conceptualizacion._id}, pacienteid)
        } else {
            createConceptualizacion(formState, pacienteid)
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
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Agregar Conceptualizacion" name="descripcion" id="descripcion" defaultValue={formState.conceptualizacion} onChange={changeHandler}/>
            <button className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal" type="submit">Add</button>
        </form>
    )
}

export default ConceptualizacionForm

