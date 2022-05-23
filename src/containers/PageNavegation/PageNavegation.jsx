import React from "react";
import PageButton from "../../components/Button/PageButton/PageButton";
import PageNavegationContainer from "./PageNavegation-style";

const PageNavegation = ({ prevUrl, nextUrl, onClick } ) =>{
    return(
        <PageNavegationContainer>
            {
                prevUrl !== null && <PageButton onClick={()=>onClick(prevUrl)}>Siguiente</PageButton>
                
            }
            {
                nextUrl !== null && <PageButton onClick={()=>onClick(nextUrl)}>Anterior</PageButton>
            } 
        </PageNavegationContainer>
    );
};

export default PageNavegation;
