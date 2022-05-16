import React from 'react';

import HeroContainer from './hero-style';

const Hero = ({ children }) => {
    return (
        <HeroContainer>
            {children}
        </HeroContainer>
    );
};

export default Hero;