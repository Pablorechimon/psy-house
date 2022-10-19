import React , {useState} from "react";
import ConceptualizacionForm from "./ConceptualizacionForm";
import { updateConceptualizacion } from "../../services/ConceptualizacionesService";

const Conceptualizacion = ({key, conceptualizacion}) => {

    const [isEditing, setIsEditing] = useState(false);

    const clickHandler = () => {
        setIsEditing(!isEditing)
    }

    return (
        <div>
            {!isEditing ? <p className="w-full text-grey-darkest">{conceptualizacion.conceptualizacion}</p> : <ConceptualizacionForm conceptualizacion={conceptualizacion} updateConceptualizacion={updateConceptualizacion} setIsEditing={setIsEditing}/>}
             <p className="w-full text-grey-darkest">{conceptualizacion.fecha}</p>
             <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={clickHandler}>Editar</button>

        </div>
    )
}

export default Conceptualizacion