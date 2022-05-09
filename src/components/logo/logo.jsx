import React from 'react';

//Assets
import logo from '../../assets/images/logo.png';

//Styled-components
import LogoContainer from './Logo-style';

const Logo = () => {
    return (
        <LogoContainer>
            <img className="logo-image" src={logo} alt="Logotipo pokedex" />
        </LogoContainer>
    );
};

export default Logo;