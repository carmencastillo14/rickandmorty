import React, { useState, useEffect, useRef, useContext } from 'react';


import axios from 'axios';
//Styled-component
import HomeContainer from './home-style';

import { Link } from "react-router-dom";

//COMPONENTES Y CONTENEDORES
import Header from '../../containers/header/header';
import Hero from '../../containers/hero/hero';
import Submenu from '../../containers/Submenu/Submenu'
import HeadingH1 from '../../components/Headings/HeadingH1/HeadingH1';
import Section from '../../containers/Section/Section';
import HeadingH2 from '../../components/Headings/HeadingH2/HeadingH2/HeadingH2';
import RickandMortyList from '../../containers/RickandMortyList/RickandMortyList';
import RickandMorty from '../../components/RickandMortyCard/RickandMorty';
import MainModal from '../../containers/MainModal/MainModal';
import PageNavegation from "../../containers/PageNavegation/PageNavegation";


import { getRickandMortyRequest } from '../../lib/rick-api/request/get-rickandmorty-request';

import { useRick  } from '../../containers/services/rick-servicies';

//Hooks
import { useModal } from '../../hooks/use-modal';



const  Home = () => {

    const { handleModal, modalOpened } = useModal();
    const RickService = useRick();
  
    const [rickandMortyList, setRickandMortyList] = useState([]);
    //LA BARRA DE BUSQUEDA SE LLAMA AQUI
    const [searchedRick, setSearchedRick] = useState([]);


    const [info, setInfo] = useState({})
    const [selectedRick, setSelectedRick] = useState({});
  
    const searchBar = useRef(null);
  

  
    useEffect(() => {
      const getRickandMortyList = async () => {
        const Ricks = await RickService.getRick();
        const { results, info } = await Ricks.data;
        setRickandMortyList(results);
        setSearchedRick(results);
        setInfo(info)

      }
      getRickandMortyList();
    }, []);

  
    const handleCharacterPagination = async (url) =>{
      
      const character = await RickService.getRickandComponents(url);
      const { results, info } = await character.data;
        setRickandMortyList(results);
        setInfo(info)
    };


    const handleRick = async (url) => {
      const Rick = await RickService.getRickandComponents
      (url);
      const RickInfo = await Rick.data;
      setSelectedRick(RickInfo);
      handleModal(true)
      console.log(RickInfo);
    }
    
  // BARRA DE BUSQUEDA
    const handleSearch = () => {
      const searchedValue = searchBar.current.value.toLowerCase();
      const filteredRick = RickandMortyList.filter(Rick => Rick.name.toLowerCase().includes(searchedValue));
      setSearchedRick(filteredRick);
    }
  
    
    return (
      <HomeContainer >
        <Header 
            
        />
        <Submenu />
        
        <Hero>
          <HeadingH1 
            text="Personajes de Rick And Morty"
            />
          <HeadingH2 text="Encuentra a tus personajes favoritos de Rick And Morty en esta API." />
        </Hero>
        <Section>
          {
            RickService.loading && <span>Estoy descargando la lista</span>
          }
          {
            RickService.RickandMortyListError !== "" && <span>{RickService.RickandMortyListError}</span>
          }
          <div className="buscador">
            <input 
              ref={searchBar} 
              type="text" 
              placeholder="Busca a tu personaje favorito"
              onChange={(e) => handleSearch(e)}
              />
          </div>
          <RickandMortyList>
            {
              //AQUI DEBERIA DE LLAMAR A LA BARRA DE BUSQUEDA searchedRick
              // searchedRick.map((Rick, index) => { DE ESTA MANERA PERO, SI PONGO ESTE CODIGO,
              // rickandMortyList.length > 0  && rickandMortyList.map((Rick, index) => {
                rickandMortyList.length > 0  && rickandMortyList.map((Rick, index) =>  {
                return (  
                  <li key={index}>
                    <RickandMorty 
                      name={Rick.name}
                      image={Rick.image}
                      handleClick={() => handleRick(Rick.url)}
                      />
                  </li>
                )
              })
            }
          </RickandMortyList>


           {/* LOS BOTONES DE ANTERIOR Y SIGUIENTE  */}
          {
          info.count && <PageNavegation
              prevUrl={info.prev}
              nextUrl={info.next}
              onClick={(url)=>handleCharacterPagination(url)}
            />
          }
        </Section>
        {
          modalOpened && (
            <MainModal handleClick={() => handleModal(false)}>
              <div>
              <h1>{selectedRick.name}</h1>
              <img src={selectedRick.image} alt="" />
              <h3> Gender: {selectedRick.gender}</h3>
              <h3>Status: {selectedRick.status}</h3> 
              <h3>Status: {selectedRick.status}</h3> 
              <h3>Origin: {selectedRick.origin[`name`]}</h3> 
              <h3>Location: {selectedRick.location[`name`]}</h3> 
              </div>



            </MainModal> 
          )
        }

      </HomeContainer>
    );
  }
  
  export default Home;
  
