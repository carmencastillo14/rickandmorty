import React from "react";
import PageButton from "../../components/Button/PageButton/PageButton";
import PageNavegationContainer from "./PageNavegation-style";

const PageNavegation = ({ prevUrl, nextUrl, onClick } ) =>{
    return(
        <PageNavegationContainer>
            {
                prevUrl !== null && <PageButton ><span onClick={()=>onClick(prevUrl)}>Anterior</span></PageButton>
                
            }
            {
                nextUrl !== null && <PageButton><span  onClick={()=>onClick(nextUrl)}>Siguiente</span></PageButton>
            } 
        </PageNavegationContainer>
    );
};

export default PageNavegation;
