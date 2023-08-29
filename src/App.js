import logo from './logo.svg';
import './App.css';

import Menu from './componentes/Menu';
import Inicio from './paginas/Inicio';
import PaginaPersonajesMH from './paginas/PaginaPersonajesMH';
import Contacto from './paginas/Contacto';
import PaginaPersonajesPK from './paginas/PaginaPersonajesPK';
import PaginaPersonajesSC from './paginas/PaginaPersonajesSC';


import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <div className="fondo">
      <Router>
        <Menu />
        
        <div className="container pt-5 my-5">
            <Routes>
              <Route path='/' element={<Inicio />} />
              <Route path='/personajesMH' element={<PaginaPersonajesMH />} />
              <Route path='/personajesPK' element={<PaginaPersonajesPK />} />
              <Route path='/personajesSC' element={<PaginaPersonajesSC />} />
              <Route path='/contacto' element={<Contacto />} />
            </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
