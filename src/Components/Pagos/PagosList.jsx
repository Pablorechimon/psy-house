import {React, useState} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Pago from "./Pago";

ChartJS.register(ArcElement, Tooltip, Legend);



const PagosList = (props) => {
    const [isDataChart, setIsDataChart] = useState(false)
    const [chartData, setCharData] = useState({
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(230, 159, 24, 0.2)',
          'rgba(170, 149, 64, 0.2)',
          'rgba(29, 240, 184, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(230, 159, 24, 0.2)',
          'rgba(170, 149, 64, 0.2)',
          'rgba(29, 240, 184, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
    });
    
    return (
      <div className="flex flex-wrap justify-evenly items-center">
      {!isDataChart ? 
        <div>Loading Chart...</div> 
        : 
        <div className="flex w-1/3 bg-cream border border-green-dark ">
            <Pie className="py-3 px-5" data={chartData} />
        </div>}
        <ul className="shadow m-4 p-4">
            <h1 className="text-xl pb-4">Lista de Deudores: </h1>
            <div className="flex-none">
                {props.pagos.map((pago, indiceActual) => (
                    <Pago
                        key={pago._id.id_paciente}
                        pago={pago}
                        setCharData={setCharData}
                        chartData={chartData}
                        setIsDataChart={setIsDataChart}
                        indice={props.pagos.length}
                        indiceActual={indiceActual}
                    />
                ))}
               
            </div>
        </ul>
        </div>
    )
}

export default PagosList