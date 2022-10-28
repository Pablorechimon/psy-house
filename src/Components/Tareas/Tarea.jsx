import React, { useState } from "react";
import TareaForm from "./TareaForm";
import { updateTarea, completeTarea } from "../../services/TareasService";

const Tarea = ({ tarea}) => {

    const [isEditing, setIsEditing] = useState(false);

    const clickEditHandler = () => {
        setIsEditing(!isEditing)
    }

    const clickCompleteHandler = () => {
        completeTarea({...tarea, _id:tarea._id})
    }

    return (
        <div className="flex ">
                {!isEditing ? <p className="w-full p-4">{tarea.descripcion}</p> : <TareaForm tarea={tarea} updateTarea={updateTarea} setIsEditing={setIsEditing}/>}
                <button className="btn-done" onClick={clickCompleteHandler}>Completada</button>
                <button className="btn-button" onClick={clickEditHandler}>Editar</button>
        </div>
    )
}

export default Tarea

/*
<div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
	<div class="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
        <div class="mb-4">
            <h1 class="text-grey-darkest">Todo List</h1>
        </div>
    </div>
</div>
*/