import './App.css';
import { useContext } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from './shared/NavBar';
import HomePage from './pages/HomePage';
import PacientesPage from './pages/PacientesPage';
import TareasPage from './pages/TareasPage';
import PagosPage from './pages/PagosPage';
import PacientePage from './pages/PacientePage';
import CompartidosPage from './pages/CompartidosPage';
import ConceptualizacionesPage from './pages/ConceptualizacionesPage';
import HistoriasPage from './pages/HistoriasPage';
import NotasPage from './pages/NotasPage';
import PacientePagosPage from './pages/PacientePagosPage';
import AltaPacienteFormPage from './pages/AltaPacienteFormPage';
import LoginPage from './pages/LoginPage';
import { UserContext } from './Components/Usuario/UserContext';

function App() {
  const { user, saveUser } = useContext(UserContext)
  
  return (
    <div className="font-nav bg-gradient-to-r from-my-green to-green-dark text-cream">
      <BrowserRouter className="App">
       { user ? 
                <>
                <NavBar/>
                  <Routes>
                    <Route exact strict path='' element={ <HomePage/> }/>
                    <Route exact strict path='/pacientes' element={ <PacientesPage/> }/>
                    <Route exact strict path='/alta' element={ <AltaPacienteFormPage/> }/>
                    <Route exact strict path='/pacientes/:id' element={ <PacientePage/> }/>
                    <Route exact strict path='/pacientes/:id/notas' element={ <NotasPage/> }/>
                    <Route exact strict path='/pacientes/:id/historias' element={ <HistoriasPage/> }/>
                    <Route exact strict path='/pacientes/:id/conceptualizaciones' element={ <ConceptualizacionesPage/> }/>
                    <Route exact strict path='/pacientes/:id/compartidos' element={ <CompartidosPage/> }/>
                    <Route exact strict path='/pacientes/:id/pagos' element={ <PacientePagosPage/> }/>
                    <Route exact strict path='/tareas' element={ <TareasPage/> }/>
                    <Route exact strict path='/pagos' element={ <PagosPage/> }/>
                  </Routes>
                </>
                : <LoginPage />
            }


      </BrowserRouter>
    </div>
  );
}

export default App;
