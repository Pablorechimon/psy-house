import React , {useState} from "react";
import NotaForm from "./NotaForm";
import { updateNota } from "../../services/NotasService";

const Nota = ({nota}) => {

    const [isEditing, setIsEditing] = useState(false);

    const clickHandler = () => {
        setIsEditing(!isEditing)
    }

    return (
        <div>
            {!isEditing ? <p className="w-full text-grey-darkest">{nota.nota}</p> : <NotaForm nota={nota} updateNota={updateNota} setIsEditing={setIsEditing}/>}
             <p className="w-full text-grey-darkest">{nota.fecha}</p>
             <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red" onClick={clickHandler}>Editar</button>
        </div>
    )
}

export default Nota