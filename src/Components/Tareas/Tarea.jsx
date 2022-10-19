import React, { useState } from "react";
import TareaForm from "./TareaForm";
import { updateTarea } from "../../services/TareasService";

const Tarea = ({key, tarea}) => {

    const [isEditing, setIsEditing] = useState(false);

    const clickHandler = () => {
        setIsEditing(!isEditing)
    }

    return (
        <div>
                {!isEditing ? <p className="w-full text-grey-darkest">{tarea.descripcion}</p> : <TareaForm tarea={tarea} updateTarea={updateTarea} setIsEditing={setIsEditing}/>}
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={clickHandler}>Editar</button>
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