import React from "react";

const Compartido = ({key, compartido}) => {

    console.log(compartido)
    return (
        <div>
             <p className="w-full text-grey-darkest">{compartido.recurso.nombre}</p>
             <p className="w-full text-grey-darkest">{compartido.recurso.formato}</p>
             <p className="w-full text-grey-darkest">{compartido.recurso.fecha}</p>
                <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
        </div>
    )
}

export default Compartido