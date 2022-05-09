import React from "react";


//IMPORTACION DEL LOGO
import logo from './logo.svg';

//EXPORTACIÓN DE LOS COMPONENTES
import header from './containers/header/header';
import hero from './containers/hero/hero';
import headings from './components/headings/headingsH1/headingH1';


function App() {
    return (
      <>
        <header />
        <hero>
          <headingH1 
            text="Esto es una prueba"
          />
        </hero>
      </>
    );
  }
  
  export default App;

