import React from "react";

//ESTILO


import CharacterItemContainer from "./CharacterItem-style";

const CharacterItem = ({ name, sheet, image, vertical, handleClick, children }) => {
    return(       
        <CharacterItemContainer>
            <div className="textBoxTitle">
                <strong>{ name }</strong>
            </div>
            <div className="card">
                <div className="verticalText">
                    <p>{ vertical }</p>
                </div>
                <div className="imageBox">
                    <div className="image" >
                        <img src={ image } alt="" />
                    </div>
                    <div className="falseButtons">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="wrapItemText">
                    
                    <div className="textBoxBody">
                        <p>{ sheet }</p>
                    </div>
                    {/* <SeeMore 
                        buttonText={buttonText}
                        onClick={() => handleClick()} 
                    />             */}
                    <div 
                    className="buttonSeeMore" 
                    onClick={() => handleClick()}
                    >
                        { children }
                    </div>
                </div>
            </div>            
        </CharacterItemContainer>        
    );
};

export default CharacterItem;