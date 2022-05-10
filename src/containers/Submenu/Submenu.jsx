import React,{ useContext} from 'react';

import HeroContainer from './Submenu-style';

const Nav = ({ children }) => {
    return (
        <HeroContainer>
            {children}
        </HeroContainer>
    );
};

export default Nav;