import React from 'react';


//Aqui importamos el logo de la carpeta de imagenes
import logo from '../../assets/images/logo.png';

//importacion del style components
import LogoRickandMorty from './logo-style';

const Logo = () => {
    return (
        <LogoRickandMorty>
            <img className="logo-image" src={logo} alt="Logotipo Rick And Morty" />
        </LogoRickandMorty>
    );
};



export default Logo;