import styled from "styled-components";

const RickandMortyCardContainer = styled.article`
    margin-left: 30px;
    width: 100%;
    max-width: 300px;
    padding: 15px;
    margin-bottom: 16px;
    border: solid 1px black;
    border-radius: 15px;
    h3{
        font-size: 24px;
        line-height: 48px;
    }
    span{
        background-color: red;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        color: white;
    }
    
`;

export default RickandMortyCardContainer;