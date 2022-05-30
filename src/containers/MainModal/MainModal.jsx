import React from "react";

//Styled-components
import MainModalContainer from "./MainModal-style";

const MainModal = ({img, children, handleClick}) => {
    return (
        <MainModalContainer>
            <img src="{ img }" alt="" />
            <div className="modal-wrapper">
                <div className="tob-bar">
                    <p>Información</p>
                    <span onClick={() => handleClick()}>X</span>
                </div>
                <div className="informacion">
                    {children}
                </div>
            </div>
        </MainModalContainer>
    );
};

export default MainModal;