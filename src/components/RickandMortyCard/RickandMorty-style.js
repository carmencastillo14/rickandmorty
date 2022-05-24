import styled from "styled-components";

const RickandMortyCardContainer = styled.article`
    display: flex;
    align-item: center;
    text-align: center;
    flex-direction: column;
    margin-top: 20px;
    justify-content: center;
    min-heigth: fit-content;
    min-width: 250px;
    padding: 15px;
    border: solid 2px  #419E99;
    border-radius: 15px;
    h3{
        font-size: 20px;
        line-height: 48px;
    }
    img{
        max-width: 300px;
    }
    span{
        background-color: #419E99;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        color: white;
    }
    
`;

export default RickandMortyCardContainer;