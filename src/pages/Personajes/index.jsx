import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';




//Components
import Header from '../../containers/Header/Header';
import Hero from '../../containers/Hero/Hero';
import HeadingH1 from '../../components/Text/Headings/HeadingH1/HeadingH1';
import Paragraph from '../../components/Text/Paragraph/Paragraph';
import Section from '../../containers/Section/Section';
import HeadingH2 from '../../components/Text/Headings/HeadingH2/HeadingH2';
import PokemonList from '../../containers/PokemonList/PokemonList';
import PokemonCard from '../../components/PokemonCard/PokemonCard';
import MainModal from '../../containers/MainModal/MainModal';


import { getPokemonsRequest } from '../../lib/rick-api/request/get-RickandMorty-request';



//Hooks
import { useModal } from '../../hooks/use-modal';


function Home() {

    const { handleModal, modalOpened } = useModal();
    const pokemonService = usePokemons();
  
    const [pokemonList, setPokemonList] = useState([]);
    const [searchedPokemon, setSearchedPokemon] = useState([]);
    
    const [selectedPokemon, setSelectedPokemon] = useState({});
  
    const searchBar = useRef(null);
  
    const themeValue = useContext(ThemeContext);
  
    useEffect(() => {
      const getPokemonList = async () => {
        const pokemons = await pokemonService.getPokemons();
        const { results } = await pokemons.data;
        setPokemonList(results);
        setSearchedPokemon(results);
      }
      getPokemonList();
    }, []);
  
    const handlePokemon = async (url) => {
      const pokemon = await pokemonService.getPokemon(url);
      const pokemonInfo = await pokemon.data;
      setSelectedPokemon(pokemonInfo);
      handleModal(true)
    }
  
    const handleSearch = () => {
      const searchedValue = searchBar.current.value.toLowerCase();
      const filteredPokemon = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchedValue));
      setSearchedPokemon(filteredPokemon);
    }
  
  
    
    return (
      <HomeContainer theme={themeValue.theme}>
        <Header 
          handleTheme={() => themeValue.handleTheme()}
        />
        <Hero>
          <HeadingH1 
            text="Mi primer pokedex"
            color="#ffffff"
            colorHover="#000000"
          />
          <Paragraph 
            text="Este es mi primer proyecto molon en React JS"
            color="#ffffff"
          />
        </Hero>
        <Section>
          <HeadingH2 text="Pokemons destacados" />
          {
            pokemonService.loading && <span>Estoy descargando la lista</span>
          }
          {
            pokemonService.pokemonListError !== "" && <span>{pokemonService.pokemonListError}</span>
          }
          <div className="buscador">
            <input 
              ref={searchBar} 
              type="text" 
              placeholder="Buscar pokemon"
              onChange={(e) => handleSearch(e)}
              />
          </div>
          <PokemonList>
            {
              searchedPokemon.map((pokemon, index) => {
                return (
                  <li key={index}>
                    <PokemonCard 
                      name={pokemon.name}
                      handleClick={() => handlePokemon(pokemon.url)}
                      />
                  </li>
                )
              })
            }
          </PokemonList>
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
  
