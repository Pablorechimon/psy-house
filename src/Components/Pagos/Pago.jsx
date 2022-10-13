import {React, useState, useEffect, useCallback} from "react";
import { getDeudor } from "../../services/PagosService";

const Pago = ({key, pago}) => {
    
    const [nombre, setNombre] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const deudor = pago._id.id_paciente


    const fetchNombreHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getDeudor(deudor);
        setNombre(response)
        setIsLoading(false)
    }, [])
    
    useEffect(() => {
        fetchNombreHandler()
    }, [fetchNombreHandler])


    return (
        <div>
            <section>
                {!isLoading && nombre.length > 0 && <><h1>{nombre}</h1><h1>{pago.deuda}</h1></>}
                {isLoading && <p>Loading ...</p>}
            </section>    

        </div>
    )
}

export default Pago