import React,{ useContext} from 'react';

import Submenu from './Submenu-style';

const Submenu = ({ handleTheme }) => {
    const themeValue = useContext(ThemeContext);
    return (
        <HeaderContainer theme={themeValue.theme}>
            <Logo />
            <nav>
                <span onClick={() => handleTheme()}>Pasar a modo obscuro</span>
                <Link to="/">Home</Link>
                <Link to="/pokemons">Pokemons</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
        </HeaderContainer>
    );
};

export default Submenu;