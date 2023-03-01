import React , {useState} from "react";
import ConceptualizacionForm from "./ConceptualizacionForm";
import { updateConceptualizacion } from "../../services/ConceptualizacionesService";

const Conceptualizacion = ({conceptualizacion}) => {

    const [isEditing, setIsEditing] = useState(false);

    const clickHandler = () => {
        setIsEditing(!isEditing)
    }
    const getFecha = () => {
        if (conceptualizacion.fecha){
          return conceptualizacion.fecha.split('T')[0]
        }
        return '-'
      }

    return (
        <div className="block p-6 m-4 shadow rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {!isEditing ? 
            <>
            <div className="flex flex-nowrap">
            <p className="w-full text-grey-darkest flex-1 mr-4 pr-4">{getFecha()}</p>
            <p className="w-full text-grey-darkest flex-auto text-left">{conceptualizacion.conceptualizacion}</p> 
            </div>
            </>
            : 
            <ConceptualizacionForm conceptualizacion={conceptualizacion} updateConceptualizacion={updateConceptualizacion} setIsEditing={setIsEditing} isEditing={isEditing}/>}
             <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={clickHandler}>Editar</button>

        </div>
    )
}

export default Conceptualizacion