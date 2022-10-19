import React from "react";

const Conceptualizacion = ({key, conceptualizacion}) => {

    return (
        <div>
             <p className="w-full text-grey-darkest">{conceptualizacion.conceptualizacion}</p>
             <p className="w-full text-grey-darkest">{conceptualizacion.fecha}</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
        </div>
    )
}

export default Conceptualizacion