import React from "react";
import PageButton from "../../components/Buttons/PageButton/PageButton";
import PageNavegationContainer from "./PageNavegation-style";

const PageNavegation = ({ prevUrl, nextUrl, onClick } ) =>{
    return(
        <PageNavegationContainer>
            {
                prevUrl !== null && <PageButton onClick={()=>onClick(prevUrl)}>Prev</PageButton>
                
            }
            {
                nextUrl !== null && <PageButton onClick={()=>onClick(nextUrl)}>Next</PageButton>
            } 
        </PageNavegationContainer>
    );
};

export default PageNavegation;
