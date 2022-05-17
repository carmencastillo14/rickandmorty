import React from 'react';
import GlobalStyle from './globalStyle';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Personajes from './pages/Personajes';
import RickDetail from './pages/Personajes/name';
import Contacto from './pages/Contacto';



function App() {

  const theme = useTheme(); 

  return (
    <ThemeContext.Provider value={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Personajes" element={<Personajes />} />
          <Route path="/Personajes/:name" element={<RickDetail />} />
          <Route path="/contactos" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
