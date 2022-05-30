import React from 'react';
import GlobalStyle from './globalStyle';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Personajes from './pages/Personajes/index';
import RickDetail from './pages/Personajes/name';
import Contacto from './pages/Contacto/Contacto';



function App() {

  return (
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Personajes />} />
          <Route path="/Personajes" element={<Personajes />} />
          <Route path="/Personajes/:name" element={<RickDetail />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
