import React from 'react';
import Logo from '../../components/Logo/Logo';
import HeaderContainer from './Header-style';

const Header = () => {
    return (
        <HeaderContainer>
            <Logo className = "logorickandmorty"/>
        </HeaderContainer>
    );
};

export default Header;