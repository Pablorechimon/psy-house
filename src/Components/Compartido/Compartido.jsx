import React, { useState }  from "react";
import CompartidoForm from "./CompartidoForm";
import { updateCompartido } from "../../services/CompartidosService";

const Compartido = ({key, compartido}) => {

    const [isEditing, setIsEditing] = useState(false);

    const clickHandler = () => {
        setIsEditing(!isEditing)
    }

    return (
        <div>
        {!isEditing ? <p className="w-full text-grey-darkest">{compartido.recurso.nombre}</p> : <CompartidoForm compartido={compartido} updateCompartido={updateCompartido} setIsEditing={setIsEditing}/>}
             <p className="w-full text-grey-darkest">{compartido.recurso.formato}</p>
             <p className="w-full text-grey-darkest">{compartido.recurso.fecha}</p>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={clickHandler}>Editar</button>
        </div>
    )
}

export default Compartido