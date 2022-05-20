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
import Paragraph from '../../components/Paragraph/Paragraph';
import Section from '../../containers/Section/Section';
import HeadingH2 from '../../components/Headings/HeadingH2/HeadingH2/HeadingH2';
import RickandMortyList from '../../containers/RickandMortyList/RickandMortyList';
import RickandMorty from '../../components/RickandMortyCard/RickandMorty';
import MainModal from '../../containers/MainModal/MainModal-style';
import PageNavegation from "../../containers/PageNavegation/PageNavegation";


import { getRickandMortyRequest } from '../../lib/rick-api/request/get-rickandmorty-request';

import { useRick  } from '../../containers/services/rick-servicies';

//Hooks
import { useModal } from '../../hooks/use-modal';
import SubmenuContainer from '../../containers/Submenu/Submenu';


const  Home = () => {

    const { handleModal, modalOpened } = useModal();
    const RickService = useRick();
  
    const [rickandMortyList, setRickandMortyList] = useState([]);
    const [searchedRick, setSearchedRick] = useState([]);
    
    const [selectedRick, setSelectedRick] = useState({});
  
    const searchBar = useRef(null);
  

  
    useEffect(() => {
      const getRickandMortyList = async () => {
        const Ricks = await RickService.getRick();
        const { results } = await Ricks.data;
        console.log(results)
        setRickandMortyList(results);
        setSearchedRick(results);
      }
      getRickandMortyList();
    }, []);

  
    const handleCharacterPagination = async (url) =>{
      const character = await RickService.getCharacter(url);
      const result = await character.data;
      setCharacterList(result);
    };


    const handleRick = async (url) => {
      const Rick = await RickService.getRick(url);
      const RickInfo = await Rick.data;
      setSelectedRick(RickInfo);
      handleModal(true)
    }
  
    const handleSearch = () => {
      const searchedValue = searchBar.current.value.toLowerCase();
      const filteredRick = RickandMortyList.filter(Rick => Rick.name.toLowerCase().includes(searchedValue));
      setSearchedRick(filteredRick);
    }
  
  
    
    return (
      <HomeContainer >
        <Header 
            
        />
        <Submenu
        
        />
        <SubmenuContainer />
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
              placeholder="Busca ya a tu personaje favorito"
              onChange={(e) => handleSearch(e)}
              />
          </div>
          <RickandMortyList>
            {
              rickandMortyList.length > 0  && rickandMortyList.map((Rick, index) => {
                return (
                  <li key={index}>
                    <RickandMorty 
                      name={Rick.name}
                      handleClick={() => handleRick(Rick.url)}
                      />
                  </li>
                )
              })
            }
          </RickandMortyList>
          // LOS BOTONES DE PREV Y NEXT 
          {
            RickandMortyList.info && <PageNavegation
              prevUrl={RickandMortyList.info.prev}
              nextUrl={RickandMortyList.info.next}
              onClick={(url)=>handleCharacterPagination(url)}
            />
          }
        </Section>
        {
          modalOpened && (
            <MainModal handleClick={() => handleModal(false)}></MainModal> 
          )
        }
        
      </HomeContainer>
    );
  }
  
  export default Home;
  
