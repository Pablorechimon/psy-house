import {React, useState, useEffect, useCallback} from "react";
import { getDeudor } from "../../services/PagosService";

const Pago = ({pago, indice, indiceActual, chartData, setCharData, setIsDataChart}) => {
    
    const [nombre, setNombre] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const deudor = pago._id.id_paciente


    const fetchNombreHandler = useCallback(async () => {
        setIsLoading(true)
        
        const response = await getDeudor(deudor);
        setNombre(response)
        if (!response.error){ 
            if (pago.deuda > 0){
                chartData.labels.push(response)
                chartData.datasets[0].data.push(pago.deuda)
            }
            
        }
        setCharData(chartData)
        setIsLoading(false)
        if (indiceActual === indice -1){
            setIsDataChart(true)
        }
    }, [pago, indice, indiceActual, chartData, setCharData, setIsDataChart,deudor])
    
    useEffect(() => {
        fetchNombreHandler()
    }, [fetchNombreHandler])

    return (
        <div className="flex flex-col justify-center">
            <section>
                {!isLoading && nombre.length > 0 && pago.deuda > 0 ?
                <>
                <h1 className="">{nombre}</h1>
                <h1 className="pb-4">Monto Adeudado: {pago.deuda}</h1>
                </>
                :
                <p></p>
                }
                {isLoading && <p>Loading ...</p>}
            </section>    

        </div>
    )
}

export default Pago