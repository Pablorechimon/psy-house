import React from "react";
import Pago from "./Pago";

const PagosList = (props) => {

    return (
        <ul>
            <div>
                {props.pagos.map((pago) => (
                    <Pago
                        key={pago.id}
                        pago={pago}
                    />
                ))}
            </div>
        </ul>
    )
}

export default PagosList