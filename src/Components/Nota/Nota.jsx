import React , {useState} from "react";
import NotaForm from "./NotaForm";
import { updateNota } from "../../services/NotasService";

const Nota = ({nota}) => {

    const [isEditing, setIsEditing] = useState(false);

    const clickHandler = () => {
        setIsEditing(!isEditing)
    }

    const getFecha = () => {
        if (nota.fecha){
          return nota.fecha.split('T')[0]
        }
        return '-'
      }

    return (
        <div className="block p-6 m-4 shadow rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            {!isEditing ? 
            <>
            <div className="flex flex-nowrap">
                <p className="text-grey-darkest flex-1">{getFecha()}</p>    
                <p className="w-full text-grey-darkest flex-auto">{nota.nota}</p>
            </div>
            </>: 
            <NotaForm nota={nota} updateNota={updateNota} setIsEditing={setIsEditing} IsEditing={isEditing}/>}
             <button className="flex-no-shrink p-2 mt-6 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={clickHandler}>Editar</button>
        </div>
    )
}

export default Nota