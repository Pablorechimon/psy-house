import React , {useState} from "react";
import Pago from "../Pagos/Pago";
import PacientePagoForm from "./PacientePagoForm";

const PacientePago = ({pago}) => {
    const time = pago.fecha.split('T')[1].split('.')[0]
    const month = pago.fecha.split('-')[1]
    const day = pago.fecha.split('-')[2].split('T')[0]
    const year = pago.fecha.split('-')[0]

    return (
        <div>
             <p className="w-full text-grey-darkest">Precio de Consulta: {pago.precio_consulta}</p>
             <p className="w-full text-grey-darkest">Monto Abonado: {pago.monto_abonado}</p>
             <p className="w-full text-grey-darkest">Deuda de la consulta: {pago.precio_consulta - pago.monto_abonado} </p>
             <p className="w-full text-grey-darkest">Fecha: {day}/{month}/{year} - {time}</p>
        </div>
    )
}

export default PacientePago