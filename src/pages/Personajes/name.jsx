import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import HeadingH1 from '../../components/Text/Headings/HeadingH1/HeadingH1';
import { usePokemons } from "../../services/pokemon/pokemon-services";

const PokemonDetail = () => {
    const params = useParams();
    const pokemonsService = usePokemons();
    const [selectRick, setselectRick] = useState({});
    const [error, setError] = useState("");

    const getPokemonInfo = async (url) => {
        try{
            const getRickRequest = await pokemonsService.getPokemon(url);
            const Rick = await getRickRequest.data;
            setselectRick(Rick);
        }catch(error){
            setError("Ooops, no es posible áun cargar esta página")
        }
        
    }

    useEffect(() => {
        getPokemonInfo(`https://rickandmortyapi.com/api/character/${params.name}`);
    }, []);

    if(!selectRick.hasOwnProperty('abilities')){
        return <h1>Cargando</h1>
    }

    return (
        <div>
            <h2>Habilidades</h2>
            <h3></h3>
            <HeadingH1 text={`${selectRick.name}${selectRick.order}`}/>
            {
                selectRick.abilities.map((item, index) => (
                    <p>{item.ability.name}</p>
                ))
            }
        </div>
    )
}

export default PokemonDetail;