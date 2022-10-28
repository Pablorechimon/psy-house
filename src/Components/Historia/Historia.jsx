import React , {useState} from "react";
import HistoriaForm from "./HistoriaForm";
import { updateHistoria } from "../../services/HistoriasService";

const Historia = ({historia}) => {

    const [isEditing, setIsEditing] = useState(false);

    const clickHandler = () => {
        setIsEditing(!isEditing)
    }

    return (
        <div>
             {!isEditing ? <p className="w-full text-grey-darkest">{historia.historia}</p> : <HistoriaForm historia={historia} updateHistoria={updateHistoria} setIsEditing={setIsEditing}/>}
             <p className="w-full text-grey-darkest">{historia.fecha}</p>
             <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={clickHandler}>Editar</button>
        </div>
    )
}

export default Historia