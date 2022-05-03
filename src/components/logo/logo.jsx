import React from 'react';
import { Link } from 'react-router-dom';

//Aqui importamos el logo de la carpeta de imagenes
import logo from '../../assets/images/logo.png';

//Esta es la importación de el logo del header
import LogoContainer from './logo-style';

const Logo = () => {
    return (
        <LogoContainer>
            <Link to="/">
                <img className="logo-image" src={logo} alt="Logotipo Rick And Morty" />
            </Link>
        </LogoContainer>
    );
};

export default Logo;