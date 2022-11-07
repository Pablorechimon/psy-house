import React , {useState} from "react";
import HistoriaForm from "./HistoriaForm";
import { updateHistoria } from "../../services/HistoriasService";

const Historia = ({historia}) => {

    const [isEditing, setIsEditing] = useState(false);

    const clickHandler = () => {
        setIsEditing(!isEditing)
    }

    return (
        <div className="block p-6 m-4 shadow rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
             {!isEditing ? 
             <>
             <div className="flex flex-nowrap">
             <p className="w-full text-grey-darkest flex-1">{historia.fecha}</p>
             <p className="w-full text-grey-darkest flex-auto">{historia.historia}</p> 
             </div>
             </>
             : 
             <HistoriaForm historia={historia} updateHistoria={updateHistoria} setIsEditing={setIsEditing} isEditing={isEditing}/>}
             <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={clickHandler}>Editar</button>
        </div>
    )
}

export default Historia