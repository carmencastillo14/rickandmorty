import React from 'react';

//Assets
import logo from './logo.svg';

//Components
import Header from './containers/Header/Header';
import Hero from './containers/Hero/Hero';
import HeadingH1 from './components/Headings/HeadingH1/HeadingH1';

function App() {
  return (
    <>
      <Header />
      <Hero>
        <HeadingH1 
          text="Personajes de Rick And Morty"
        />
      </Hero>
    </>
  );
}

export default App;
