import React from "react";

//components
// import SeeMore from "../../components/Text/SeeMore/SeeMore";

//styled-components
import CharacterItemContainer from "./CharacterItem-style";

const CharacterItem = ({ name, sheet, image, vertical, handleClick, children }) => {
    return(       
        <CharacterItemContainer>
            <div className="textBoxTitle">
                <strong>{ name }</strong>
                {/* {(name.length <= 20) ? <strong>{name}</strong> : <marquee behavior="alternate" scrollamount="1">{ name }</marquee>} */}
            </div>
            <div className="card">
                <div className="verticalText">
                    <p>{ vertical }</p>
                </div>
                <div className="imageBox">
                    <div className="image" >
                        <img src={ image } alt={ name } />
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