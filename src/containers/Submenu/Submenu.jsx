import React,{ useContext} from 'react';

import SubmenuContainer from './Submenu-style';

const Submenu = () => {

    return (
        <HeaderContainer>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contacto">Contacto</Link>
            </nav>
        </HeaderContainer>
    );
};

export default Submenu;