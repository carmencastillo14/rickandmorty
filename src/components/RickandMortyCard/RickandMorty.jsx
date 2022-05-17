import React from "react";
import RickandMortyCardContainer from "./RickandMorty-style";

const PokemonCard = ({name, handleClick}) => {
    return (
        <RickandMortyCardContainer>
            <h3>{name}</h3>
            <span onClick={() => handleClick()} >Ver habilidades</span>
        </RickandMortyCardContainer>
    );
};

export default PokemonCard;