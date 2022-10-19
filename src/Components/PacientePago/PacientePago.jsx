import React , {useState} from "react";
import Pago from "../Pagos/Pago";
import PacientePagoForm from "./PacientePagoForm";

const PacientePago = ({key, pago}) => {

    return (
        <div>
             <p className="w-full text-grey-darkest">Precio de Consulta: {pago.precio_consulta}</p>
             <p className="w-full text-grey-darkest">Monto Abonado: {pago.monto_abonado}</p>
             <p className="w-full text-grey-darkest">Fecha: {pago.fecha}</p>
        </div>
    )
}

export default PacientePago