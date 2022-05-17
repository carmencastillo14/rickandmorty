import React from "react";

//Styled-components
import RickListContainer from "./RickandMortyList-style";

const RickList = ({children}) => {
    return (
        <RickListContainer>
            {children}
        </RickListContainer>
    );
};

export default RickList;