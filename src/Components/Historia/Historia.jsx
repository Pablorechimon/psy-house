import React , {useState} from "react";
import HistoriaForm from "./HistoriaForm";
import { updateHistoria } from "../../services/HistoriasService";

const Historia = ({historia}) => {

    const [isEditing, setIsEditing] = useState(false);

    const clickHandler = () => {
        setIsEditing(!isEditing)
    }

    const getFecha = () => {
        if (historia.fecha){
          return historia.fecha.split('T')[0]
        }
        return '-'
      }

    return (
        <div className="block p-6 m-4 shadow rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
             {!isEditing ? 
             <>
             <div className="flex flex-nowrap">
             <p className="w-full text-grey-darkest flex-1 mr-4">{getFecha()}</p>
             <p className="w-full text-grey-darkest flex-auto text-left">{historia.historia}</p> 
             </div>
             </>
             : 
             <HistoriaForm historia={historia} updateHistoria={updateHistoria} setIsEditing={setIsEditing} isEditing={isEditing}/>}
             <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={clickHandler}>Editar</button>
        </div>
    )
}

export default Historia