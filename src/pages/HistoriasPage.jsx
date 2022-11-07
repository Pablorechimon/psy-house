import  { React, useState, useEffect, useCallback } from 'react';
import { getHistorias } from '../services/HistoriasService';
import HistoriasList from '../Components/Historia/HistoriasList';
import HistoriaForm from '../Components/Historia/HistoriaForm';
import HistoriaPDF from '../Components/Historia/HistoriaPDF';
import { getPaciente } from '../services/PacientesService';
import ReactDOM from 'react-dom';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';

const HistoriasPage = () => {
    
    const pacienteid = window.location.href.split('/')[4]

    const [historias, setHistorias] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [newItem, setNewItem] = useState(false);
    const [paciente, setPaciente] = useState({});
    const [isLoadingPaciente, setIsLoadingPaciente] = useState(false);

    const fetchHistoriasHandler = useCallback(async () => {
        setIsLoading(true) 
        const response = await getHistorias(pacienteid);
        setHistorias(response.data)
        setIsLoading(false)
    }, [])

    const fetchPacienteHandler = useCallback(async () => {
        setIsLoadingPaciente(true)
        const pacienteResponse = await getPaciente(pacienteid);
        setPaciente(pacienteResponse.data)
        setIsLoadingPaciente(false)
    }, [])
    
    useEffect(() => {
        fetchHistoriasHandler()
    }, [fetchHistoriasHandler])

    useEffect(() => {
        fetchPacienteHandler()
    }, [fetchPacienteHandler])

    useEffect(() => {
        if (newItem) {
            fetchHistoriasHandler();
            setNewItem(false)
        } 
    }, [newItem])


    return (
        <div className='h-screen'>
            <div className="bg-gradient-to-r from-my-green to-green-dark">
	            <div className=" rounded p-6 m-4 w-full  ">
                     <div className="mb-4">
                         <h1 className="text-center p-4 m-4">Historia</h1>
                         {!isLoadingPaciente ? 
                         <PDFDownloadLink 
                            document={<HistoriaPDF paciente={paciente} historias={historias}/>}
                            fileName={"HistoriaClinica-"+ paciente.nombre + paciente.apellido}   
                         >
                            <button className='btn-pdf'>Descargar PDF</button>
                         </PDFDownloadLink>
                         :
                            <p>Loading ...</p>
                         }
                         {!isLoading && <HistoriaForm setNewItem={setNewItem} pacienteid={pacienteid}/> }  
                         <section>
                            {!isLoading && historias.length > 0 && 
                            <HistoriasList historias={historias} />}
                            {isLoading && <p>Loading ...</p>}
                        </section>  
                     </div>
                </div>
            </div>

        </div>
    )
}

export default HistoriasPage