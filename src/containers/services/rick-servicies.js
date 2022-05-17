import { useState } from 'react'; 
import { getRickandMortyRequest } from '../../lib/rick-api/request/get-rickandmortyapi-request';
import { getRickRequest } from '../../lib/rick-api/request/get-rick-request';


export const usePokemons = () => {
    const [loading, setLoading] = useState(true);
    const [pokemonListError, setPokemonListError] =useState("");

    const getPokemons = async () => {
        try{
            const pokemonResponse = await getRickandMortyRequest(); 
            setLoading(false);
            return pokemonResponse; 
        }catch(error){
            setPokemonListError(error);
            setLoading(false);
      
        }
    };

    const getPokemon = async (url) => {
        try{
            const pokemonResponse = await getRickRequest(url); 
            setLoading(false);
            return pokemonResponse; 
        }catch(error){
            setPokemonListError(error);
            setLoading(false);
      
        }
    }

    return {
        getPokemons,
        getPokemon,
        loading,
        pokemonListError
    }
}