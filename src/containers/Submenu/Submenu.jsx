import React,{ useContext} from 'react';

import Submenu from './Submenu-style';

const Submenu = () => {
    const themeValue = useContext(ThemeContext);
    return (
        <HeaderContainer theme={themeValue.theme}>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
        </HeaderContainer>
    );
};

export default Submenu;