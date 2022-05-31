import React from "react";

//Styled-components
import MainModalContainer from "./MainModal-style";

const MainModal = ({img, children, handleClick}) => {
    return (
        <MainModalContainer>
            <div className="modal-wrapper">
                <div className="tob-bar">
                    <span onClick={() => handleClick()}>X</span>
                </div>
                <div className="informacion">
                    <img src={img} alt="" />
                    {children}
                </div>
            </div>
        </MainModalContainer>
    );
};

export default MainModal;