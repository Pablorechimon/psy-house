import React, { useState }  from "react";
import CompartidoForm from "./CompartidoForm";
import { updateCompartido } from "../../services/CompartidosService";

const Compartido = ({compartido}) => {

    const [isEditing, setIsEditing] = useState(false);

    const clickHandler = () => {
        setIsEditing(!isEditing)
    }

    return (
        <div className="p-4 m-4 flex justify-start shadow text-left w-full">
            {!isEditing ? 
            <>
            <p className="w-full mx-6 ">{compartido.recurso.nombre}</p>
            <p className="w-full mx-6">{compartido.recurso.formato}</p>
            <p className="w-full mx-4">{compartido.fecha}</p>
            <button className="btn-button" onClick={clickHandler}>Editar</button>
            </> : 
            <CompartidoForm compartido={compartido} updateCompartido={updateCompartido} setIsEditing={setIsEditing}/>} 
            
        </div>
    )
}

export default Compartido