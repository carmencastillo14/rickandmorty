import React from "react";
import RickandMortyCardContainer from "./RickandMorty-style";

const RickCard = ({name, handleClick, image}) => {
    return (
        <RickandMortyCardContainer>
            <h3>{name}</h3>
            <img src={ image } alt="" />
            <span onClick={() => handleClick()} >Ver habilidades</span>
        </RickandMortyCardContainer>
    );
};

export default RickCard;