import React from 'react';

//Assets
import logo from '../../assets/images/logo.png';

//Styled-components
import LogoContainer from './logo-style';

const Logo = () => {
    return (
        <LogoContainer>
            <img className="logo-image" src={logo} alt="Logotipo de Rick and Morty" />
        </LogoContainer>
    );
};

export default Logo;