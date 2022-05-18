import React from 'react';
import Logo from '../../components/logo/logo';
import HeaderContainer from './header-style';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo className = "logorickandmorty"/>
        </HeaderContainer>
    );
};

export default Header;